import React from 'react';

import { useContext } from './Core';

export const setElementStyle = (coord = {}, height = 0, isDragging = false, isResizing = false) => ({
	top: '0px',
	left: '0px',
	height: `${+height * 12.5}px`,
	width: 'calc((100% - 4px) * 1)',
	zIndex: isDragging ? '100' : '0',
	cursor: isResizing ? 'row-resize' : 'move', // Adjust cursor for resizing
	transform: `translate(calc((100% - 0px) * 0 + 0px), ${+coord.y * 12.5}px)`,
});

const Element = ({
	id = null, 
	lockX = false,
	lockY = false,
	children = null, 
	x = 0,  y = 0, h = 0, 
}) => {
	const [ height, setHeight ] = React.useState(0);
	const positionRef = React.useRef({ x: 0, y: 0 }); // Use a ref to store the position
	const [ isResizing, setIsResizing ] = React.useState(false);
	const [ isDragging, setIsDragging ] = React.useState(false);
	const [ position, setPosition ] = React.useState({ x: 0, y: 0 });
	const [ prevPosition, setPrevPosition ] = React.useState({ x: 0, y: 0 });

	const { data: { parentOffsetTop, parentScrollTop, parentBoundingClientRect }, updateData } = useContext();

	const headerOffset = parseInt(parentOffsetTop);
	const amountScrolled = parseInt(parentScrollTop);

	// Initialize.
	React.useEffect(() => {
		setHeight(h);
		setPosition({ x, y });
		setPrevPosition({ x, y });
		positionRef.current = { x, y };
	}, [ h, x, y ]);

	const updatePosition = ({ x, y }) => {
		setPosition({ x, y });
		positionRef.current = { x, y };
	}

	const handleMouseUp = (e) => {
		e.preventDefault();
		setIsDragging(false);
	}

	const handleMouseDown = (e) => {
		e.preventDefault();

		setIsDragging(true);

		const boxHeight = height * 12.5;
		const startTop = position.y * 12.5;
		const [ tempX, tempY ] = [ e.pageX, e.pageY ];
		const startCursorY = e.pageY - parseInt(parentOffsetTop);

		const headerOffset = +parentBoundingClientRect.top.toFixed(2);

		let [ sX, sY ] = [ 0, 0 ];

		/** DRAG NORTH SOUTH */
		const _handleMouseMove = (e) => {
			if (isResizing) {
				const box = e.target.parentElement;
				const boxTop = box.offsetTop;

				// TODO
				const newHeight = Math.round((
					e.pageY + 
					amountScrolled - 
					boxTop - 
					headerOffset
				) / 12.5) * 12.5;

				if (newHeight <= 12.5) {
					console.log('Situation A');
					return;
				} else if (newHeight + boxTop > 1188) {
					console.log('Situation B');
					return;
				} else {
					// console.log('Situation C');
					setHeight(newHeight);
				}

				// const deltaY = e.clientY - startY;

				// // setPosition((prevPosition) => ({
				// // 	x: prevPosition.x,
				// // 	y: lockY ? prevPosition.y : prevPosition.y + deltaY,
				// // }));

				// if (handleResize) {
				// 	console.log('Resize.....', id, deltaY)
				// 	handleResize(id, deltaY);
				// }
			} else {
				sX = Math.abs(e.clientX - tempX);
				sY = Math.abs(e.clientY - tempY);

				const currentCursorY = e.pageY - headerOffset;
				const newOffsetY = currentCursorY - startCursorY;

				let newTop = Math.round((newOffsetY + startTop) / 12.5);

				// if (newTop < 0 || currentCursorY < 0) {
				// 	newTop = 0;
				// 	return;
				// } else if (newTop + boxHeight > 1188) {
				// 	return;
				// }

				updatePosition({
					x: lockX ? position.x : position.x + deltaX,
					y: newTop,
				});
			}
		};

		const _handleMouseUp = () => {
			console.log('Handle resize mouse up....');

			setIsResizing(false);
			setIsDragging(false);

			// Save the previous position.
			setPrevPosition(positionRef.current);

			document.removeEventListener('mousemove', _handleMouseMove);
			document.removeEventListener('mouseup', _handleMouseUp);
		};

		document.addEventListener('mousemove', _handleMouseMove);
		document.addEventListener('mouseup', _handleMouseUp);
	};

	const handleResizeMouseDown = (e) => {
		e.stopPropagation();
		console.log('Handle resize mouse down....');
		setIsResizing(true);
	};

	// Clone element.
	const cloneElement = React.cloneElement(children, {
		className: [
			children.props.className, 'dv-box',
			isDragging ? 'dv-box-dragging' : null,
			isResizing ? 'dv-box-resizing' : null,
			'dv-temporary-box'
		].join(' ').trim(),
		style: {
			...children.props.style,
			...setElementStyle(prevPosition, height, isDragging, isResizing),
		},
		children: [
			children.props.children,
		],
	});

	// Set main element.
	const mainElement = React.cloneElement(children, {
		onMouseUp: handleMouseUp,
		onMouseDown: handleMouseDown,
		className: [
			children.props.className, 'dv-box',
			isDragging ? 'dv-box-dragging' : null,
			isResizing ? 'dv-box-resizing' : null,
		].join(' ').trim(),
		style: {
			...children.props.style, 
			...setElementStyle(position, height, isDragging, isResizing),
		},
		children: [
			children.props.children,
			<div 
				key="resize" 
				className="dv-box-resize-s" 
				onMouseDown={handleResizeMouseDown}
			/>
		]
	});

	return (
		<>
			{(isDragging || isResizing) ? (
				cloneElement
			) : null}
			{mainElement}
			{isDragging ? (
				<aside 
					className="resize-overlay hide-resize-overlay" 
					style={{ backgroundColor: 'transparent' }} 
				/>
			) : null}
		</>
	);
};

export default Element;


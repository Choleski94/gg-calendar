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
	// handleDrag = () => null,
	// handleResize = () => null,
	...rest
}) => {
	const [ height, setHeight ] = React.useState(0);
	const [ isResizing, setIsResizing ] = React.useState(false);
	const [ isDragging, setIsDragging ] = React.useState(false);
	const [ position, setPosition ] = React.useState({ x: 0, y: 0 });

	const { data: { parentOffsetTop, parentScrollTop, parentBoundingClientRect }, updateData } = useContext();

	React.useEffect(() => {
		setHeight(h);
		setPosition({ x, y });
		console.log('Height:::', h, height, x, y);
	}, [ h, x, y ]);

	const headerOffset = parseInt(parentOffsetTop);
	const amountScrolled = parseInt(parentScrollTop);

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
		const handleMouseMove = (e) => {
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

			setPosition({
				x: lockX ? position.x : position.x + deltaX,
				y: newTop,
			});

			// TODO: Refactor
			// const hasSibling = false;
			// const box = e.target.parentElement;

			// const boxTop = box.offsetTop;
			// const col = box.parentElement;

			// console.log('Mouse move....', isResizing);

			// if (isResizing) {
			// 	// // Clone box
			// 	// const clone = box.cloneNode(true);
			// 	// // clone.classList.add(`${identifiers.boxClasses[view].temporary}`);
			// 	// clone.classList.add('temporary-box');

			// 	// if (hasSibling) {
			// 	// 	col.insertBefore(clone, box.nextElementSibling);
			// 	// } else {
			// 	// 	col.appendChild(clone);
			// 	// }

			// 	// TODO
			// 	const newHeight = Math.round((
			// 		e.pageY + 
			// 		amountScrolled - 
			// 		boxTop - 
			// 		headerOffset
			// 	) / 12.5) * 12.5;

			// 	if (newHeight <= 12.5) {
			// 		console.log('Situation A');
			// 		return;
			// 	} else if (newHeight + boxTop > 1188) {
			// 		console.log('Situation B');
			// 		return;
			// 	} else {
			// 		// console.log('Situation C');
			// 		setHeight(newHeight);
			// 	}

			// 	// const deltaY = e.clientY - startY;

			// 	// // setPosition((prevPosition) => ({
			// 	// // 	x: prevPosition.x,
			// 	// // 	y: lockY ? prevPosition.y : prevPosition.y + deltaY,
			// 	// // }));

			// 	// if (handleResize) {
			// 	// 	console.log('Resize.....', id, deltaY)
			// 	// 	handleResize(id, deltaY);
			// 	// }
			// } else {
			// 	const [ deltaX, deltaY ] = [
			// 		e.clientX - startX, 
			// 		e.clientY - startY
			// 	];

			// 	setPosition({
			// 		x: lockX ? position.x : position.x + deltaX,
			// 		y: lockY ? position.y : position.y + deltaY,
			// 	});

			// 	// if (handleDrag) {
			// 	// 	handleDrag(id, position.x + deltaX, position.y + deltaY);
			// 	// }
			// }
		};

		const handleMouseUp = () => {
			console.log('Handle resize mouse up....');
			setIsResizing(false);
			setIsDragging(false);

			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};

	const handleResizeMouseDown = (e) => {
		// e.stopPropagation();
		console.log('Handle resize mouse down....');
		setIsResizing(true);
	};

	const elementStyle = React.useMemo(() => (
		setElementStyle(position, height, isDragging, isResizing)
	), [ position, isDragging, isResizing ]);

	return React.cloneElement(children, {
		onMouseUp: handleMouseUp,
		onMouseDown: handleMouseDown,
		className: [
			children.props.className,
			isDragging ? 'dv-box-dragging' : null,
		].join(' '),
		style: {
			...children.props.style, 
			...elementStyle
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
};

export default Element;


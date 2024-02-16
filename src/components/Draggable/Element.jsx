import React from 'react';

export const setElementStyle = (position = {}, isMouseDown = false) => ({
	cursor: 'move',
	zIndex: (isMouseDown ? '100' : '0'),
	transform: `translate(${position.x}px, ${position.y}px)`,
});

const Element = ({
	id = null, 
	x = 0, y = 0, 
	lockX = false,
	lockY = false,
	children = null, 
	handleDrag = () => null,
	...rest
}) => {
	const [ position, setPosition ] = React.useState({ x, y });
	const [ isMouseDown, setIsMouseDown ] = React.useState(false);

	const handleMouseUp = (e) => {
		e.preventDefault();
		setIsMouseDown(false);
	}

	const handleMouseDown = (e) => {
		e.preventDefault();

		setIsMouseDown(true);

		const [ startX, startY ] = [ e.clientX, e.clientY ];

		const handleMouseMove = (e) => {
			const [ deltaX, deltaY ] = [
				e.clientX - startX, 
				e.clientY - startY
			];

			setPosition({
				x: lockX ? position?.x : position?.x + deltaX,
				y: lockY ? position?.y : position?.y + deltaY,
			});

			if (handleDrag) {
				handleDrag(id, position.x + deltaX, position.y + deltaY);
			}
		};

		const handleMouseUp = () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		};

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	};

	const elementStyle = React.useMemo(() => (
		setElementStyle(position, isMouseDown)
	), [ position, isMouseDown ]);

	return React.cloneElement(children, {
		onMouseUp: handleMouseUp,
		onMouseDown: handleMouseDown,
		style: { ...children.props.style, ...elementStyle },
	});
};

export default Element;


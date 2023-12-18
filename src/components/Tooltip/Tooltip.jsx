import React from 'react';

const getTooltipClassName = (position) => {
	switch (position) {
		case 'top':
			return 'tooltip tooltip-top';
		case 'bottom':
			return 'tooltip tooltip-bottom';
		case 'left':
			return 'tooltip tooltip-left';
		case 'right':
		default:
			return 'tooltip tooltip-right';
	}
};

const Tooltip = ({ position = 'right', text, children }) => {
	const [ showTooltip, setShowTooltip ] = React.useState(false);

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	return (
		<div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{children} <span className="tooltip-icon bi bi-question-circle" aria-hidden="true" />
			{showTooltip && (
				<div className={getTooltipClassName(position)}>
					<span className="tooltip-text">
						{text}
					</span>
				</div>
			)}
		</div>
	);
};

export default Tooltip;


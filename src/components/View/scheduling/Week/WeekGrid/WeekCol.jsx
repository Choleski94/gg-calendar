import React from 'react';

const WeekGrid = ({ index = 0, children }) => {
	return (
		<div
			className="week--col"
			data-wv-top="false"
			data-column-index={index}
		>
			{children}
		</div>
	);
}

export default WeekGrid;

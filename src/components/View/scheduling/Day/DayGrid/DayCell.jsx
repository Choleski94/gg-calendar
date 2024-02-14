import React from 'react';

import { calcTime } from '@utils/time';

const createBoxStyle = (coord) => ({
	top: `${+coord.y * 12.5}px`,
	height: `${+coord.h * 12.5}px`,
	width: 'calc((100% - 4px) * 1)',
	left: 'calc((100% - 0px) * 0 + 0px)',
});

const DayCell = ({ id, category, title, coordinates }) => {
	return (
		<div
			className="dv-box"
			data-dv-box-id={id}
			data-dv-box-index={1}
			data-dv-box-category={category}
			data-dv-end-time={coordinates.e}
			data-dv-start-time={coordinates.y}
			data-dv-time-intervals={coordinates.h}
			style={{
				...createBoxStyle(coordinates),
				backgroundColor: "rgb(44, 82, 186)",
			}}
		>
			<div className="dv-box__header">
				<div className="dv-box-title">
					{title}
				</div>
			</div>
			<div className="dv-box__content">
				<span className="dv-box-time">
					{calcTime(coordinates.y, +coordinates.h)}
				</span>
			</div>
			<div className="dv-box-resize-s" />
		</div>
	);
}

export default DayCell;

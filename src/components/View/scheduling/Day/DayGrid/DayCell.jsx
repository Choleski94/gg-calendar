import React from 'react';

import { calcTime } from '@utils/time';

import { setDayCellStyle } from './DayCell.controller';

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
			style={setDayCellStyle(coordinates, "rgb(44, 82, 186)")}
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

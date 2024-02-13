import React from 'react';

import { WEEK_START, WEEK_END } from '@constants/calendar';

import WeekCol from './WeekCol';

const WeekGrid = () => {

	const renderDataForGrid = () => {

	};
	// weekEntries = React.useMemo(() => {
	// 	const activeEntries = this.getActiveEntries();
	// 	const [ start, end ] = [ week[WEEK_START], week[WEEK_END] ];

	// 	const boxes = {
	// 		allDay: [], 	// entries that start on one day and end on another
	// 		day: [], 	// entries that start and end on same day
	// 	};

	// 	if (activeEntries.length === 0) return boxes;

	// 	const entries = activeEntries.filter((entry) => {
	// 		const entryDate = new Date(entry.start);
	// 		return entryDate >= start && entryDate <= end;
	// 	});

	// 	entries.forEach((entry) => {
	// 		entry.coordinates = this.generateCoordinates(
	// 			new Date(entry.start),
	// 			new Date(entry.end)
	// 		);

	// 		if (entry.coordinates.allDay) {
	// 			boxes.allDay.push(entry);
	// 		} else {
	// 			boxes.day.push(entry);
	// 		}
	// 	});

	// 	return boxes;
	// }, [ week ]);

	return (
		<div className="weekview--calendar">
			{new Array(5).fill(null).map((_, colIdx) => (
				<WeekCol 
					index={colIdx}
					key={`week-col-${colIdx}`}
				/>
			))}
		</div>
	);
}

export default WeekGrid;

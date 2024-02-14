import React from 'react';

import { TOTAL_DAY_WEEK } from '@constants/calendar';

import WeekCol from './WeekCol';
import useWeekGrid from './useWeekGrid';
import { Week } from './WeekGrid.controller'; 

const WeekGrid = ({ weekArray = [] }) => {
	const { getWeekEntries } = useWeekGrid();

	const entries = React.useMemo(() => (
		getWeekEntries(weekArray)
	), [ weekArray ]);

	const [ topBoxes, allBoxes ] = React.useMemo(() => {
		const boxes = new Week(entries.day, entries.allDay);
		return [ boxes.getBoxesTopLengths(), boxes.getBoxes() ];
	}, [ entries ]);

	return (
		<div className="weekview--calendar">
			{new Array(TOTAL_DAY_WEEK).fill(null).map((_, colIdx) => (
				<WeekCol key={`week--col-${colIdx}`} index={colIdx}>
					Testing
				</WeekCol>
			))}
		</div>
	);
}

export default WeekGrid;

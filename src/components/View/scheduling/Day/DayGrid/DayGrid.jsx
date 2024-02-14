import React from 'react';
import { useSelector } from 'react-redux';

import { selectDate } from '@store/selectors/app';

import DayCell from './DayCell';
import useDayGrid from './useDayGrid';
import { Day } from './DayGrid.controller';

const DayGrid = () => {
	const { getDayEntries } = useDayGrid();

	const {
		day: selectedDay,
		month: selectedMonth,
		year: selectedYear,
	} = useSelector(selectDate);

	const entries = React.useMemo(() => getDayEntries(
		new Date(
			selectedYear, selectedMonth, selectedDay
		)
	), [ selectedYear, selectedMonth, selectedDay ]);

	const [ topBoxes, allBoxes ] = React.useMemo(() => {
		const boxes = new Day(entries.day, entries.allDay);
		return [ boxes.getBoxesTop(), boxes.getBoxes() ];
	}, [ entries ]);

	return (
		<div className="dayview--main-grid" data-dv-top="false">
			{allBoxes.map(({ id, ...rest}) => (
				<DayCell 
					id={id} 
					key={id} 
					{...rest}
				/>
			))}
		</div>
	);
}

export default DayGrid;

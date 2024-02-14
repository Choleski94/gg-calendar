import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { isToday } from '@utils/dates';
import { selectDate } from '@store/selectors/app';
import { CALENDAR_LABELS, WEEK_START } from '@constants/calendar';

import {
	setDayTitleStyle, 
	setDayTitleClassName,
} from './DayHeader.controller';

const DayHeader = ({}) => {
	const {
		day: selectedDay, 
		month: selectedMonth, 
		year: selectedYear,
	} = useSelector(selectDate);

	// Evaluate gmt offset.
	const gmtOffset = React.useMemo(() => {
		let gmtDelta = new Date().getTimezoneOffset() / 60;
		if (gmtDelta < 0) {
			gmtDelta = `+${Math.abs(gmtDelta)}`;
		}
		return gmtDelta;
	}, []);

	// Evaluate if present date is today.
	const hasToday = React.useMemo(() => isToday(
		new Date(selectedYear, selectedMonth, selectedDay)
	), [ selectedYear, selectedMonth, selectedDay ]);

	// Get week day.
	const weekDay = React.useMemo(() => (
		(new Date(selectedYear, selectedMonth, selectedDay)).getDay() - WEEK_START
	), [ selectedYear, selectedMonth, selectedDay ]);

	return (
		<>
			<div className="dayview--header">
				<div className="dayview--header-day">
					<div className="dayview--header-day__title" style={setDayTitleStyle(hasToday)}>
						{CALENDAR_LABELS.WEEK.SHORT[weekDay]}
					</div>
					<div className={setDayTitleClassName(hasToday)}>
						{selectedDay}
					</div>
				</div>
				<div className="dv-info-day-wrapper">
					<div className="dayview--header-day__info" />
				</div>
			</div>
			<div className="dv-ontop-row2">
				<div className="dv-gmt">
					UTC {gmtOffset}
				</div>
				<div className="dayview--ontop-container" data-dv-top="true" />
			</div>
		</>
	);
}

export default DayHeader;

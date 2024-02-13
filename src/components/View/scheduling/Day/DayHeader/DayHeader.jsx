import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectDate } from '@store/selectors/app';
import { CALENDAR_LABELS } from '@constants/calendar';

const DayHeader = ({}) => {
	const { day: selectedDay, month: selectedMonth, year: selectedYear } = useSelector(selectDate);

	return (
		<div className="dayview--header">
			<div className="dayview--header-day">
				<div className="dayview--header-day__title">
					SUN
					{CALENDAR_LABELS.WEEK.SHORT[0]}
				</div>
				<div className="dayview--header-day__number">
					{selectedDay}
				</div>
			</div>
			<div className="dv-info-day-wrapper">
				<div className="dayview--header-day__info" />
			</div>
		</div>
	);
}

export default DayHeader;

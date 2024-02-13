import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectDate } from '@store/selectors/app';
import { CALENDAR_LABELS } from '@constants/calendar';

const DayHeader = ({}) => {
	const {
		day: selectedDay, 
		month: selectedMonth, 
		year: selectedYear
	} = useSelector(selectDate);

	// Evaluate gmt offset.
	const gmtOffset = React.useMemo(() => {
		let gmtDelta = new Date().getTimezoneOffset() / 60;
		if (gmtDelta < 0) {
			gmtDelta = `+${Math.abs(gmtDelta)}`;
		}
		return gmtDelta;
	}, []);

	return (
		<>
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

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setDate } from '@store/actions/app';
import { selectDate, selectView } from '@store/selectors/app';
import { CALENDAR_LABELS, BASE_CALENDAR_VIEWS } from '@constants/calendar';

import DayHeader from './DayHeader';
import DaySidebar from './DaySidebar';

const DayScheduling = ({
	prevFnRef = null,
	nextFnRef = null,
	setHeaderTitle = () => null,
}) => {
	const dispatch = useDispatch();

	const calendarView = useSelector(selectView);
	const { day, month, year } = useSelector(selectDate);

	const setPrevDay = (day, month, year) => {
		const prevDay = new Date(
			year, month, day - 1
		);

		dispatch(setDate(
			prevDay.getFullYear(), 
			prevDay.getMonth(), 
			prevDay.getDate(),
		));
	};

	const setNextDay = (day, month, year) => {
		const nextDay = new Date(
			year, month, day + 1
		);

		dispatch(setDate(
			nextDay.getFullYear(), 
			nextDay.getMonth(), 
			nextDay.getDate(),
		));
	};

	React.useEffect(() => {
		prevFnRef.current = { setPrevDay };
	}, [ prevFnRef ]);

	React.useEffect(() => {
		nextFnRef.current = { setNextDay };
	}, [ nextFnRef ]);

	// Set header view title.
	React.useEffect(() => {
		if (calendarView !== BASE_CALENDAR_VIEWS.DAY) return null;

		setHeaderTitle(
			`${CALENDAR_LABELS.MONTH.LONG[month]} ${day}, ${year}`
		);
	}, [ day, month, year ]);

	return (
		<div className="dayview">
			<div className="calendar__dayview">
				<DayHeader />
				{/* row 3 */}
				<div className="dayview__grid">
					<div className="dayview__grid--wrapper">
						<DaySidebar />
						<div className="dayview--main-grid" data-dv-top="false" />
					</div>
					<div className="dayview--footer" />
				</div>
			</div>
		</div>
	);
}

export default DayScheduling;

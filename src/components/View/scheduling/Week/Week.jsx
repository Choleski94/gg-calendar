import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectDate } from '@store/selectors/app';
import { CALENDAR_LABELS, WEEK_START, WEEK_END, } from '@constants/calendar';

import WeekGrid from './WeekGrid';
import WeekHeader from './WeekHeader';
import WeekSidebar from './WeekSidebar';

const WeekScheduling = ({
	setHeaderTitle = () => null,
}) => {
	const { day, month, year } = useSelector(selectDate);

	// Set week array.
	const weekArray = React.useMemo(() => {
		const week = new Date(year, month, day);

		week.setDate(week.getDate() - week.getDay());

		let weekArray = [];

		for (let i = WEEK_START; i < WEEK_END; i++) {
                        if (i < 6) {
                                weekArray.push(new Date(week.getFullYear(), week.getMonth(), week.getDate() + i));
                        } else {
                                weekArray.push(new Date(week.getFullYear(), week.getMonth(), week.getDate() + i, 23, 59, 59, 999));
                        }
                }

		return weekArray;
	}, [ day, month, year ]);

	// Set header view title.
	React.useEffect(() => {
		const [ [ m1, m2 ], [ d1, d2 ] ] = [
			[ weekArray[0].getMonth(), weekArray[6].getMonth() ],
			[ weekArray[0].getDate(), weekArray[6].getDate() ]
		];

		let res = null;

		if (m1 === m2) {
			res = `${CALENDAR_LABELS.MONTH.SHORT[m1]} ${d1} – ${d2}, ${weekArray[0].getFullYear()}`;
		} else {
			res = `${CALENDAR_LABELS.MONTH.SHORT[m1]} ${d1} – ${d2} ${CALENDAR_LABELS.MONTH.SHORT[m2]}, ${weekArray[1].getFullYear()}`;
		}

		setHeaderTitle(res);
	}, [ weekArray ]);

	return (
		<div className="weekview">
			<WeekHeader 
				weekArray={weekArray}
			/>
			<div className="weekview__grid">
				<WeekSidebar />
				<WeekGrid />
				<div />
				<div className="weekview--footer" />
			</div>
		</div>
	);
}

export default WeekScheduling;

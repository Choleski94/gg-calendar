import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectDate } from '@store/selectors/app';
import { CALENDAR_LABELS } from '@constants/calendar';

import WeekSidebar from './WeekSidebar';
import WeekCalendar from './WeekCalendar';

// export const [ WEEK_START, WEEK_END ] = [ 0, 7 ];
export const [ WEEK_START, WEEK_END ] = [ 1, 8 ];

const WeekTop = ({
	setHeaderTitle = () => null,
}) => {
	const { day, month, year } = useSelector(selectDate); 

	const weekArray = React.useMemo(() => {
		// Get week
		const week = new Date(year, month, day);

		week.setDate(week.getDate() - week.getDay());

		// Set week array.
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

	// console.log('Week array:::', weekArray)
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

		console.log('Set title to:::', res);
		setHeaderTitle(res);
	}, [ weekArray ]);


	return (
		<div className="weekview__top">
			<div />
			<div className="weekview--header">
				<div className="weekview--header-day">
					<span className="weekview--header-day__title">MON</span>{" "}
					<button
						className="weekview--header-day__number wvh--selected wvh--today"
						data-weekview-date="2024-1-12"
					>
						12
					</button>
				</div>
				<div className="weekview--header-day">
					<span className="weekview--header-day__title">TUE</span>{" "}
					<button
						className="weekview--header-day__number"
						data-weekview-date="2024-1-13"
					>
						13
					</button>
				</div>
				<div className="weekview--header-day">
					<span className="weekview--header-day__title">WED</span>{" "}
					<button
						className="weekview--header-day__number"
						data-weekview-date="2024-1-14"
					>
						14
					</button>
				</div>
				<div className="weekview--header-day">
					<span className="weekview--header-day__title">THU</span>{" "}
					<button
						className="weekview--header-day__number"
						data-weekview-date="2024-1-15"
					>
						15
					</button>
				</div>
				<div className="weekview--header-day">
					<span className="weekview--header-day__title">FRI</span>{" "}
					<button
						className="weekview--header-day__number"
						data-weekview-date="2024-1-16"
					>
						16
					</button>
				</div>
				<div className="weekview--header-day">
					<span className="weekview--header-day__title">SAT</span>{" "}
					<button
						className="weekview--header-day__number"
						data-weekview-date="2024-1-17"
					>
						17
					</button>
				</div>
				<div className="weekview--header-day">
					<span className="weekview--header-day__title">SUN</span>{" "}
					<button
						className="weekview--header-day__number"
						data-weekview-date="2024-1-18"
					>
						17
					</button>
				</div>
			</div>
			<div className="wv-gmt">UTC 5</div>
			<div className="weekview--allday-module">
				<div
					className="allday--col"
					data-allday-column={0}
					data-wv-top="true"
					data-wvtop-day={12}
				/>
				<div
					className="allday--col"
					data-allday-column={1}
					data-wv-top="true"
					data-wvtop-day={13}
				/>
				<div
					className="allday--col"
					data-allday-column={2}
					data-wv-top="true"
					data-wvtop-day={14}
				/>
				<div
					className="allday--col"
					data-allday-column={3}
					data-wv-top="true"
					data-wvtop-day={15}
				/>
				<div
					className="allday--col"
					data-allday-column={4}
					data-wv-top="true"
					data-wvtop-day={16}
				/>
				<div
					className="allday--col"
					data-allday-column={5}
					data-wv-top="true"
					data-wvtop-day={17}
				/>
				<div
					className="allday--col"
					data-allday-column={6}
					data-wv-top="true"
					data-wvtop-day={18}
				/>
			</div>
		</div>
	);
}

export default WeekTop;

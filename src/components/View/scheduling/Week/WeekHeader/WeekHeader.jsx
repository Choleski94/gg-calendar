import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectDate } from '@store/selectors/app';
import { CALENDAR_LABELS, WEEK_START, WEEK_END, } from '@constants/calendar';

const WeekHeader = ({
	weekArray = [],
}) => {
	const { day: selectedDay, month: selectedMonth, year: selectedYear } = useSelector(selectDate); 

	const daysOfWeek = React.useMemo(() => {
		// document.querySelector(".wv-gmt").textContent = `UTC ${context.getGmt()}`;

		let [ dayNumbers, ymd, hasToday, hasSelected ] = [ [], [] ];

		// const today = context.getToday();
		const today = new Date();

		const [ ty, tm, td ] = [ today.getFullYear(), today.getMonth(), today.getDate() ];

		weekArray.forEach((day, idx) => {
			const [ y, m, d ] = [ day.getFullYear(), day.getMonth(), day.getDate() ];

			dayNumbers.push(d);
			ymd.push(`${y}-${m}-${d}`);

			// if (d === context.getDateSelected() && m === selectedMonth) {
			if (d === selectedDay && m === selectedMonth) {
				hasSelected = d;
			}

			if (d === td && m === tm && y === ty) {
				hasToday = d;
			}
		});

		return ymd.map((dateString, dayIdx) => ({
			date: dateString,
			day: dayNumbers[dayIdx],
		}));

		// dayNumbers.forEach((num, idx) => {
		// 	if (num === hasSelected) {
		// 		weekviewHeaderDayNumber[idx].classList.add("wvh--selected");
		// 	} else {
		// 		weekviewHeaderDayNumber[idx].classList.remove("wvh--selected");
		// 	}

		// 	if (num === hasToday) {
		// 		weekviewHeaderDayNumber[idx].classList.add("wvh--today");
		// 	} else {
		// 		weekviewHeaderDayNumber[idx].classList.remove("wvh--today");
		// 	}

		// 	weekviewHeaderDayNumber[idx].textContent = num;
		// 	weekviewHeaderDayNumber[idx].setAttribute("data-weekview-date", ymd[idx]);
		// 	topCols[idx].setAttribute("data-wvtop-day", num);
		// });
	}, [ weekArray ]);

	console.log('DOW:::', daysOfWeek);

	return (
		<div className="weekview__top">
			<div />
			<div className="weekview--header">
				{daysOfWeek.map(({ date, day }, dayIdx) => (
					<div className="weekview--header-day">
						<span className="weekview--header-day__title">
							{CALENDAR_LABELS.WEEK.SHORT[dayIdx]}
						</span>
						{' '}
						<button
							// className="weekview--header-day__number wvh--selected wvh--today"
							className="weekview--header-day__number"
							data-weekview-date={date}
						>
							{day}
						</button>
					</div>
				))}
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

export default WeekHeader;

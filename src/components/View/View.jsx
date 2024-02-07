import React from 'react';
import { useSelector } from 'react-redux';

import { selectView } from '@store/selectors/app';
import { CALENDAR_VIEWS } from '@constants/calendar';

const View = () => {
	const calendarView = useSelector(selectView);

	return (
		<div className="container__calendars cc-tran">
			{/* yearview */}
			{calendarView === CALENDAR_VIEWS.YEAR && (
				<div className="yearview">
					<div className="calendar__yearview" />
				</div>
			)}
			{/* monthview */}
			{calendarView === CALENDAR_VIEWS.MONTH && (
				<div className="monthview">
					<div className="monthview__top">
						<div className="monthview__top-weekname">SUN</div>
						<div className="monthview__top-weekname">MON</div>
						<div className="monthview__top-weekname">TUE</div>
						<div className="monthview__top-weekname">WED</div>
						<div className="monthview__top-weekname">THU</div>
						<div className="monthview__top-weekname">FRI</div>
						<div className="monthview__top-weekname">SAT</div>
					</div>
					<div className="monthview--calendar" />
				</div>
			)}
			{/* weekview */}
			{calendarView === CALENDAR_VIEWS.WEEK && (
				<div className="weekview">
					<div className="weekview__top">
						<div />
						<div className="weekview--header">
							<div className="weekview--header-day">
								<span className="weekview--header-day__title">SUN</span>
								<button className="weekview--header-day__number">1</button>
							</div>
							<div className="weekview--header-day">
								<span className="weekview--header-day__title">MON</span>
								<button className="weekview--header-day__number">2</button>
							</div>
							<div className="weekview--header-day">
								<span className="weekview--header-day__title">TUE</span>
								<button className="weekview--header-day__number">3</button>
							</div>
							<div className="weekview--header-day">
								<span className="weekview--header-day__title">WED</span>
								<button className="weekview--header-day__number">4</button>
							</div>
							<div className="weekview--header-day">
								<span className="weekview--header-day__title">THU</span>
								<button className="weekview--header-day__number">5</button>
							</div>
							<div className="weekview--header-day">
								<span className="weekview--header-day__title">FRI</span>
								<button className="weekview--header-day__number">6</button>
							</div>
							<div className="weekview--header-day">
								<span className="weekview--header-day__title">SAT</span>
								<button className="weekview--header-day__number">7</button>
							</div>
						</div>
						<div className="wv-gmt" />
						<div className="weekview--allday-module">
							<div
								className="allday--col"
								data-allday-column={0}
								data-wv-top="true"
							/>
							<div
								className="allday--col"
								data-allday-column={1}
								data-wv-top="true"
							/>
							<div
								className="allday--col"
								data-allday-column={2}
								data-wv-top="true"
							/>
							<div
								className="allday--col"
								data-allday-column={3}
								data-wv-top="true"
							/>
							<div
								className="allday--col"
								data-allday-column={4}
								data-wv-top="true"
							/>
							<div
								className="allday--col"
								data-allday-column={5}
								data-wv-top="true"
							/>
							<div
								className="allday--col"
								data-allday-column={6}
								data-wv-top="true"
							/>
						</div>
					</div>
					<div className="weekview__grid">
						<div className="weekview--sidebar" />
						<div className="weekview--calendar">
							<div
								className="week--col"
								data-column-index={0}
								data-wv-top="false"
							/>
							<div
								className="week--col"
								data-column-index={1}
								data-wv-top="false"
							/>
							<div
								className="week--col"
								data-column-index={2}
								data-wv-top="false"
							/>
							<div
								className="week--col"
								data-column-index={3}
								data-wv-top="false"
							/>
							<div
								className="week--col"
								data-column-index={4}
								data-wv-top="false"
							/>
							<div
								className="week--col"
								data-column-index={5}
								data-wv-top="false"
							/>
							<div
								className="week--col"
								data-column-index={6}
								data-wv-top="false"
							/>
						</div>
						<div />
						<div className="weekview--footer" />
					</div>
				</div>
			)}
			{/* dayview */}
			{calendarView === CALENDAR_VIEWS.DAY && (
				<div className="dayview">
					<div className="calendar__dayview">
						{/* row 1 */}
						<div className="dayview--header">
							<div className="dayview--header-day">
								<div className="dayview--header-day__title">SUN</div>
								<div className="dayview--header-day__number">1</div>
							</div>
							<div className="dv-info-day-wrapper">
								<div className="dayview--header-day__info" />
							</div>
						</div>
						{/* row 2 */}
						<div className="dv-ontop-row2">
							<div className="dv-gmt">gmt-one</div>
							<div className="dayview--ontop-container" data-dv-top="true" />
						</div>
						{/* row 3 */}
						<div className="dayview__grid">
							<div className="dayview__grid--wrapper">
								<div className="dayview--side-grid__wrapper">
									<div className="dayview--side-grid" />
								</div>
								<div className="dayview--main-grid" data-dv-top="false" />
							</div>
							<div className="dayview--footer" />
						</div>
					</div>
				</div>
			)}
			{/* listview */}
			{calendarView === CALENDAR_VIEWS.LIST && (
				<div className="listview">
					<div className="listview__body"></div>
				</div>
			)}
			{/* stats view */}
		</div>
	);
}

export default View;

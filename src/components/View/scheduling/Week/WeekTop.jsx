import React from 'react';

import WeekSidebar from './WeekSidebar';
import WeekCalendar from './WeekCalendar';

const WeekTop = () => {
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

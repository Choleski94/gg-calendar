import React from 'react';

const WeekScheduling = () => {
	return (
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
	);
}

export default WeekScheduling;

import React from 'react';

const DayScheduling = () => {
	return (
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
	);
}

export default DayScheduling;

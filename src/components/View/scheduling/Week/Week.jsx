import React from 'react';

import WeekTop from './WeekTop';
import WeekSidebar from './WeekSidebar';
import WeekCalendar from './WeekCalendar';

const WeekScheduling = () => {
	return (
		<div className="weekview">
			<WeekTop />
			<div className="weekview__grid">
				<WeekSidebar />
				<WeekCalendar />
				<div />
				<div className="weekview--footer" />
			</div>
		</div>
	);
}

export default WeekScheduling;

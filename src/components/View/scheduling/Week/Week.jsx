import React from 'react';

import WeekTop from './WeekTop';
import WeekSidebar from './WeekSidebar';
import WeekCalendar from './WeekCalendar';

const WeekScheduling = ({
	setHeaderTitle = () => null,
}) => {
	return (
		<div className="weekview">
			<WeekTop 
				setHeaderTitle={setHeaderTitle} 
			/>
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

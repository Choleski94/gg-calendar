import React from 'react';

const WeekCalendar = () => {
	return (
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
	);
}

export default WeekCalendar;

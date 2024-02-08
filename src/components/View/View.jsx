import React from 'react';
import { useSelector } from 'react-redux';

import { CALENDAR_VIEWS } from '@constants/calendar';
import { selectView, selectCollapsed } from '@store/selectors/app';

import { setViewClassName } from './View.controller';
import { Day, Week, Year, List, Month } from './scheduling';

const View = () => {
	const calendarView = useSelector(selectView);
	const { sidebar: isSidebarCollapsed } = useSelector(selectCollapsed);

	return (
		<div className={setViewClassName(isSidebarCollapsed)}>
			{/* yearview */}
			{calendarView === CALENDAR_VIEWS.YEAR && (
				<Year />
			)}
			{/* monthview */}
			{calendarView === CALENDAR_VIEWS.MONTH && (
				<Month />
			)}
			{/* weekview */}
			{calendarView === CALENDAR_VIEWS.WEEK && (
				<Week />
			)}
			{/* dayview */}
			{calendarView === CALENDAR_VIEWS.DAY && (
				<Day />
			)}
			{/* listview */}
			{calendarView === CALENDAR_VIEWS.LIST && (
				<List />
			)}
			{/* stats view */}
		</div>
	);
}

export default View;

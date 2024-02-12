import React from 'react';
import { useSelector } from 'react-redux';

import { CALENDAR_VIEWS } from '@constants/calendar';
import { selectView, selectCollapsed } from '@store/selectors/app';

import { setViewClassName } from './View.controller';
import { Day, Week, Year, List, Month } from './scheduling';

const View = ({
	prevFnRef = null,
	nextFnRef = null,
	setHeaderTitle = () => null,
}) => {
	const calendarView = useSelector(selectView);
	const { sidebar: isSidebarCollapsed } = useSelector(selectCollapsed);

	const handleCallback = () => {
		console.log('Callback triggered.... PHASE I);
		// Your logic or function call in ChildComponent2
	};

	React.useEffect(() => {
		prevFnRef.current = { handleCallback };
	}, [ prevFnRef ]);

	React.useEffect(() => {
		nextFnRef.current = { handleCallback };
	}, [ nextFnRef ]);

	return (
		<div className={setViewClassName(isSidebarCollapsed)}>
			{/* yearview */}
			{calendarView === CALENDAR_VIEWS.YEAR && (
				<Year 
					setHeaderTitle={setHeaderTitle}
				/>
			)}
			{/* monthview */}
			{calendarView === CALENDAR_VIEWS.MONTH && (
				<Month 
					setHeaderTitle={setHeaderTitle}
				/>
			)}
			{/* weekview */}
			{calendarView === CALENDAR_VIEWS.WEEK && (
				<Week 
					setHeaderTitle={setHeaderTitle}
				/>
			)}
			{/* dayview */}
			{calendarView === CALENDAR_VIEWS.DAY && (
				<Day 
					setHeaderTitle={setHeaderTitle}
				/>
			)}
			{/* listview */}
			{calendarView === CALENDAR_VIEWS.LIST && (
				<List 
					setHeaderTitle={setHeaderTitle}
				/>
			)}
			{/* stats view */}
		</div>
	);
}

export default View;

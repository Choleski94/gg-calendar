import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectView } from '@store/selectors/app';
import { CALENDAR_VIEWS, CALENDAR_VIEW_OPTIONS } from '@constants/calendar';

import { setClassName } from './SelectView.controller';

const SelectView = () => {
	const [ showDropdown, setShowDropdown ] = React.useState(false);
	const [ activeView, setActiveView ] = React.useState(CALENDAR_VIEWS.WEEK);

	const calendarView = useSelector(selectView);

	React.useEffect(() => {
		setActiveView(calendarView);
	}, [ calendarView ]);

	const viewText = React.useMemo(() => {
		const [ currentViewObj ] = CALENDAR_VIEW_OPTIONS.filter(({ slug }) => (
			slug === activeView
		));

		return currentViewObj?.text || '';
	}, [ activeView ]);

	const onViewOptionClick = (e, viewSlug) => {
		if (activeView !== viewSlug) {
			setActiveView(viewSlug);
			// setActiveView(viewSlug);
			useDispatch(toggleCollapsed(viewSlug));
			setShowDropdown(false); 	// Close after selection
		}
	}

	const onViewBtnClick = (e) => {
		setShowDropdown(!showDropdown);
	}

	return (
		<>
			<div className="select-wrapper">
				<button
					className="select__modal"
					onClick={onViewBtnClick}
					name="select__modal"
					aria-label="button"
					role="button"
					id="s-modals"
				>
					{viewText}
				</button>
			</div>

			{showDropdown ? (
				<aside className="change-view--wrapper toggle-animate">
					<div className="change-view--options">
						<div className="change-view--option">
							{CALENDAR_VIEW_OPTIONS.map(({ id, slug, text }) => (
								<div 
									className={setClassName(slug === activeView)} 
									onClick={(e) => onViewOptionClick(e, slug)}
									data-view-option={slug} 
									data-view-key={id}
									key={id}
								>
									{text}
								</div>
							))}
						</div>
					</div>
				</aside>
			) : null}
		</>
	);
}

export default SelectView;

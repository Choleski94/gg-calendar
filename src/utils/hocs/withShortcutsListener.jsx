import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleView } from '@store/actions/app';
import { CALENDAR_VIEWS, CALENDAR_SHORTCUTS } from '@constants/calendar';

const withShortcutsListener = (Component) => {
	const WithShortcutsListener = ({ ...rest }) => {
		const dispatch = useDispatch();

		const handleKeyPress = (event) => {
			const actionKey = (event.key || '').toUpperCase();

			switch (actionKey) {
				case CALENDAR_SHORTCUTS.D:
					dispatch(toggleView(CALENDAR_VIEWS.DAY));
					break;
				case CALENDAR_SHORTCUTS.W:
					dispatch(toggleView(CALENDAR_VIEWS.WEEK));
					break;
				case CALENDAR_SHORTCUTS.M:
					dispatch(toggleView(CALENDAR_VIEWS.MONTH));
					break;
				case CALENDAR_SHORTCUTS.Y:
					dispatch(toggleView(CALENDAR_VIEWS.YEAR));
					break;
				case CALENDAR_SHORTCUTS.L:
					dispatch(toggleView(CALENDAR_VIEWS.LIST));
					break;
				case CALENDAR_SHORTCUTS.ESCAPE:
					console.log('Press escape');
					break;
			}
		};

		React.useEffect(() => {
			document.addEventListener('keydown', handleKeyPress);

			return () => {
				document.removeEventListener('keydown', handleKeyPress);
			};
		}, []);

		return (
			<Component {...rest} />
		);
	};

	WithShortcutsListener.defaultName = 'WithShortcutsListener';

	return WithShortcutsListener;
};

export default withShortcutsListener;

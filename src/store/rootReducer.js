import { combineReducers } from 'redux';

import appReducer, { appState } from './reducers/app';
import userReducer, { userState } from './reducers/user';
import settingsReducer, { settingsState } from './reducers/settings';
import organizationReducer, { organizationState } from './reducers/organization';

// Combine all states.
export const preloadedState = {
	app: appState,
	user: userState,
	settings: settingsState,
	organization: organizationState,
};

// Combine all reducers.
const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	settings: settingsReducer,
	organization: organizationReducer,
});

export default rootReducer;

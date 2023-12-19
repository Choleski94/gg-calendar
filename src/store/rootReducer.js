import { combineReducers } from 'redux';

import userReducer, { userState } from './reducers/user';
import settingsReducer, { settingsState } from './reducers/settings';
import organizationReducer, { organizationState } from './reducers/organization';

export const preloadedState = {
	// app: {},
	user: userState,
	settings: settingsState,
	organization: organizationState,
};

// Combine all reducers.
const rootReducer = combineReducers({
	user: userReducer,
	settings: settingsReducer,
	organization: organizationReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import appReducer, { appState } from './reducers/app';
import userReducer, { userState } from './reducers/user';
import settingsReducer, { settingsState } from './reducers/settings';
import workforceReducer, { workforceState } from './reducers/workforce';

// Combine all states.
export const preloadedState = {
	app: appState,
	user: userState,
	settings: settingsState,
	workforce: workforceState,
};

// Combine all reducers.
const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	settings: settingsReducer,
	workforce: workforceReducer,
});

export default rootReducer;

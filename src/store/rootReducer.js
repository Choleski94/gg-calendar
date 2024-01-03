import { combineReducers } from 'redux';

import appReducer, { appState } from './reducers/app';
import userReducer, { userState } from './reducers/user';
import settingsReducer, { settingsState } from './reducers/settings';
import workspaceReducer, { workspaceState } from './reducers/workspace';

// Combine all states.
export const preloadedState = {
	app: appState,
	user: userState,
	settings: settingsState,
	workspace: workspaceState,
};

// Combine all reducers.
const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	settings: settingsReducer,
	workspace: workspaceReducer,
});

export default rootReducer;

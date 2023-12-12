import { combineReducers } from 'redux';

import { reducer as userReducer } from './user';
import { reducer as settingsReducer } from './settings';

// Combine all reducers.
const rootReducer = combineReducers({
	user: userReducer,
	settings: settingsReducer,
});

export default rootReducer;

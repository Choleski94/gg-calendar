import { combineReducers } from 'redux';

import userReducer from './reducers/user';
import settingsReducer from './reducers/settings';

// Combine all reducers.
const rootReducer = combineReducers({
	user: userReducer,
	settings: settingsReducer,
});

export default rootReducer;

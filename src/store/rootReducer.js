import { combineReducers } from 'redux';

import userReducer from './reducers/user';
import settingsReducer from './reducers/settings';
import organizationReducer from './reducers/organization';

// Combine all reducers.
const rootReducer = combineReducers({
	user: userReducer,
	settings: settingsReducer,
	organization: organizationReducer,
});

export default rootReducer;

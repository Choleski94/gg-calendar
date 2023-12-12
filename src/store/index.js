import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import storePersist, { localStorageHealthCheck } from './storePersist';

localStorageHealthCheck();

const LANG_INITIAL_STATE = {
	// result: lang,
	langCode: 'en_us',
	isLoading: false,
	isSuccess: false,
};

const lang_state = storePersist.get('translate')
	? storePersist.get('translate')
	: LANG_INITIAL_STATE;

const AUTH_INITIAL_STATE = {
	current: {},
	isLoggedIn: false,
	isLoading: false,
	isSuccess: false,
};

const user_state = storePersist.get('user') ? storePersist.get('user') : AUTH_INITIAL_STATE;

const initialState = { translate: lang_state, user: user_state };

const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialState,
	devTools: import.meta.env.PROD === false, // Enable Redux DevTools in development mode
});

export default store;

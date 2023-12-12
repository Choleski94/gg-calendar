import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import storePersist, { localStorageHealthCheck } from './storePersist';

localStorageHealthCheck();

const AUTH_INITIAL_STATE = {
	current: {},
	isLoggedIn: false,
	isLoading: false,
	isSuccess: false,
};

const user_state = storePersist.get('user') ? storePersist.get('user') : AUTH_INITIAL_STATE;

const initialState = { user: user_state };

const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialState,
	devTools: import.meta.env.PROD === false, // Enable Redux DevTools in development mode
});

export default store;

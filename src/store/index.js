import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import storePersist, { localStorageHealthCheck } from './storePersist';

localStorageHealthCheck();

const USER_INITIAL_STATE = {
	isLoggedIn: false,
	isLoading: false,
	isSuccess: false,
};

const user_state = storePersist.get('user') ? storePersist.get('user') : USER_INITIAL_STATE;

const initialState = { user: user_state };

const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialState,
	devTools: import.meta.env.PROD === false, // Enable Redux DevTools in development mode
});

export default store;

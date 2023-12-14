import api from '@api';
import setAuthorizationHeader from '@utils/setAuthorizationHeader';

import * as actionTypes from '../types';

export const userLoggedIn = user => ({
	type: actionTypes.USER_LOGGED_IN,
	user
});

export const userLoggedOut = user => ({
	type: actionTypes.USER_LOGGED_OUT,
	user
});

export const login = (credentials) => (dispatch) => (
	api.auth.login(credentials).then((user) => {
		const authToken = user.token;

		if (typeof window !== 'undefined') {
			window.localStorage.setItem('tigadoJWT', authToken);
		}

		setAuthorizationHeader(authToken);
		dispatch(userLoggedIn(user));
	})
);

export const logout = () => (dispatch) => (
	api.auth.logout().then(() => {
		if (typeof window !== 'undefined') {
			window.localStorage.removeItem('tigadoJWT');
		}

		dispatch(userLoggedOut());
	})
);

// TODO:
export const register = (credentials) => async (dispatch) => {
	dispatch({
		type: actionTypes.LOADING_REQUEST,
		payload: { loading: true },
	});

	const data = await api.auth.register(credentials);

	if (data.success === true) {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem('user', JSON.stringify(data.result));
		}

		dispatch({
			type: actionTypes.REGISTER_SUCCESS,
			payload: data.result,
		});

		return true;
	} else {
		dispatch({
			type: actionTypes.FAILED_REQUEST,
			payload: data,
		});

		return false;
	}
};

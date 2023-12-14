import api from '@api';

import * as actionTypes from '../types';

export const login = (loginData) => async (dispatch) => {
	dispatch({
		type: actionTypes.LOADING_REQUEST,
		payload: { loading: true },
	});

	const data = await api.user.login(loginData);

	if (data.success === true) {
		if (typeof window !== 'undefined') {
			// window.localStorage.setItem('user', JSON.stringify(data.result));
			window.localStorage.setItem('tigadoJWT', data.result.token);
		}

		dispatch({
			type: actionTypes.LOGIN_SUCCESS,
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

export const register = (registerData) => async (dispatch) => {
	dispatch({
		type: actionTypes.LOADING_REQUEST,
		payload: { loading: true },
	});

	const data = await api.user.register(registerData);

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

export const logout = () => async (dispatch) => {
	api.user.logout();

	dispatch({
		type: actionTypes.LOGOUT_SUCCESS,
	});

	return true;
};

// import history from '@utils/history';
import * as authService from '@api/auth';

import * as actionTypes from './types';

export const login = ({ loginData }) => async (dispatch) => {
	dispatch({
		type: actionTypes.LOADING_REQUEST,
		payload: { loading: true },
	});

	const data = await authService.login({ loginData });

	if (data.success === true) {
		if (typeof window !== 'undefined') {
			window.localStorage.setItem('isLoggedIn', true);
			window.localStorage.setItem('user', JSON.stringify(data.result));
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

export const logout = () => async (dispatch) => {
	authService.logout();

	dispatch({
		type: actionTypes.LOGOUT_SUCCESS,
	});

	return true;
};

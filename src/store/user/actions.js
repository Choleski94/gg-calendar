import * as actionTypes from './types';
import * as userService from '@/user';
import { request } from '@/request';

export const login =
	({ loginData }) =>
	async (dispatch) => {
		dispatch({
			type: actionTypes.REQUEST_LOADING,
		});
		const data = await userService.login({ loginData });

		if (data.success === true) {
			const user_state = {
				current: data.result,
				isLoggedIn: true,
				isLoading: false,
				isSuccess: true,
			};
			window.localStorage.setItem('user', JSON.stringify(user_state));
			window.localStorage.removeItem('isLogout');
			dispatch({
				type: actionTypes.REQUEST_SUCCESS,
				payload: data.result,
			});
		} else {
			dispatch({
				type: actionTypes.REQUEST_FAILED,
			});
		}
	};

export const register =
	({ registerData }) =>
	async (dispatch) => {
		dispatch({
			type: actionTypes.REQUEST_LOADING,
		});
		const data = await userService.register({ registerData });

		if (data.success === true) {
			dispatch({
				type: actionTypes.REGISTER_SUCCESS,
			});
		} else {
			dispatch({
				type: actionTypes.REQUEST_FAILED,
			});
		}
	};

export const verify =
	({ userId, emailToken }) =>
	async (dispatch) => {
		dispatch({
			type: actionTypes.REQUEST_LOADING,
		});
		const data = await userService.verify({ userId, emailToken });

		if (data.success === true) {
			const user_state = {
				current: data.result,
				isLoggedIn: true,
				isLoading: false,
				isSuccess: true,
			};
			window.localStorage.setItem('user', JSON.stringify(user_state));
			window.localStorage.removeItem('isLogout');
			dispatch({
				type: actionTypes.REQUEST_SUCCESS,
				payload: data.result,
			});
		} else {
			dispatch({
				type: actionTypes.REQUEST_FAILED,
			});
		}
	};

export const resetPassword =
	({ resetPasswordData }) =>
	async (dispatch) => {
		dispatch({
			type: actionTypes.REQUEST_LOADING,
		});
		const data = await userService.resetPassword({ resetPasswordData });

		if (data.success === true) {
			const user_state = {
				current: data.result,
				isLoggedIn: true,
				isLoading: false,
				isSuccess: true,
			};
			window.localStorage.setItem('user', JSON.stringify(user_state));
			window.localStorage.removeItem('isLogout');
			dispatch({
				type: actionTypes.REQUEST_SUCCESS,
				payload: data.result,
			});
		} else {
			dispatch({
				type: actionTypes.REQUEST_FAILED,
			});
		}
	};

export const logout = () => async (dispatch) => {
	dispatch({
		type: actionTypes.LOGOUT_SUCCESS,
	});
	const result = window.localStorage.getItem('user');
	const tmpAuth = JSON.parse(result);
	const settings = window.localStorage.getItem('settings');
	const tmpSettings = JSON.parse(settings);
	window.localStorage.removeItem('user');
	window.localStorage.removeItem('settings');
	window.localStorage.setItem('isLogout', JSON.stringify({ isLogout: true }));
	const data = await userService.logout();
	if (data.success === false) {
		const user_state = {
			current: tmpAuth,
			isLoggedIn: true,
			isLoading: false,
			isSuccess: true,
		};
		window.localStorage.setItem('user', JSON.stringify(user_state));
		window.localStorage.setItem('settings', JSON.stringify(tmpSettings));
		window.localStorage.removeItem('isLogout');
		dispatch({
			type: actionTypes.LOGOUT_FAILED,
			payload: data.result,
		});
	} else {
		// on lgout success
	}
};

export const updateProfile =
	({ entity, jsonData }) =>
	async (dispatch) => {
		let data = await request.updateAndUpload({ entity, id: '', jsonData });

		if (data.success === true) {
			dispatch({
				type: actionTypes.REQUEST_SUCCESS,
				payload: data.result,
			});
			const user_state = {
				current: data.result,
				isLoggedIn: true,
				isLoading: false,
				isSuccess: true,
			};
			window.localStorage.setItem('user', JSON.stringify(user_state));
		}
	};

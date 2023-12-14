import * as actionTypes from '../types';

const INITIAL_STATE = {
	id: null,
	email: null,
	phone: null,
	lastName: null,
	firstName: null,
	loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGGED_IN:
			return action.user;
		case actionTypes.USER_LOGGED_OUT:
			return {};
		case actionTypes.LOADING_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FAILED_REQUEST:
			return INITIAL_STATE;
		default:
			return state;
	}
};

export default authReducer;

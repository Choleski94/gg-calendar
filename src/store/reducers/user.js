import * as actionTypes from '../types';

const INITIAL_STATE = {
	id: null,
	email: null,
	phone: null,
	token: null,
	lastName: null,
	firstName: null,
	loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.USER_LOGGED_IN:
			return { ...state, ...action.user, loaded: true };
		case actionTypes.USER_LOGGED_OUT:
			return { ...INITIAL_STATE };
		case actionTypes.USER_FETCHED:
			return { ...state, ...action.user, loaded: true };
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

export default userReducer;

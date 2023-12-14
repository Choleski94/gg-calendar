import * as actionTypes from '../types';

export const INITIAL_STATE = {
	theme: 'light',
	currency: 'CAD',
	timezone: 'America/Toronto',
	locale: {
		lang: 'en',
		country: 'US',
	},
};

const settingsReducer = (state = INITIAL_STATE, action) => {
	const { payload = null } = action;

	switch (action.type) {
		case actionTypes.RESET_STATE:
			return INITIAL_STATE;
		case actionTypes.REQUEST_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case actionTypes.REQUEST_FAILED:
			return {
				...state,
				isLoading: false,
				isSuccess: false,
			};

		case actionTypes.REQUEST_SUCCESS:
			return {
				result: payload,
				isLoading: false,
				isSuccess: true,
			};
		default:
			return state;
	}
};

export default settingsReducer;

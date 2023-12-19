import * as actionTypes from '../types';

export const settingsState = {
	theme: 'light',
	currency: 'CAD',
	timezone: 'America/Toronto',
	locale: {
		lang: 'en',
		country: 'US',
	},
};

const settingsReducer = (state = settingsState, action) => {
	const { payload = null } = action;

	switch (action.type) {
		case actionTypes.LOCALE_SET:
			return {
				...state,
				locale: {
					lang: action.lang,
					country: action.country,
				}
			};
		default:
			return state;
	}
};

export default settingsReducer;

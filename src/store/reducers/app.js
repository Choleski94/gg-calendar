import * as actionTypes from '../types';

export const appState = {
	loading: false,
};

const appReducer = (state = appState, action) => {
	switch (action.type) {
		case actionTypes.APP_LOADING:
			return { ...state, ...action.app };
		default:
			return state;
	}
};

export default appReducer;

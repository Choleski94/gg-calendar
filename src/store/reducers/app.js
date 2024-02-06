import * as actionTypes from '../types';

export const appState = {
	view: 'WEEK',
	loading: false,
};

const appReducer = (state = appState, action) => {
	switch (action.type) {
		case actionTypes.APP_LOADING:
			return { ...state, ...action.app };
		case actionTypes.APP_VIEW_TOGGLED:
			return { ...state, view: action.view };
		default:
			return state;
	}
};

export default appReducer;

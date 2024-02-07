import * as actionTypes from '../types';

export const appState = {
	view: 'WEEK',
	loading: false,
	collapsed: false,
};

const appReducer = (state = appState, action) => {
	switch (action.type) {
		case actionTypes.APP_LOADING:
			return { ...state, ...action.app };
		case actionTypes.APP_VIEW_TOGGLED:
			if (state.view === action.view) return;
			return { ...state, view: action.view };
		case actionTypes.APP_COLLAPSED_TOGGLED:
			return { ...state, collapsed: !state.collapsed };
		default:
			return state;
	}
};

export default appReducer;

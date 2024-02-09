import * as actionTypes from '../types';

export const appState = {
	view: 'WEEK',
	theme: 'LIGHT',
	loading: false,
	shortcut: true,
	modal: 'CLOSED',
	animation: true,
	collapsed: {
		header: false,
		sidebar: false,
	},
};

const appReducer = (state = appState, action) => {
	switch (action.type) {
		case actionTypes.APP_LOADING:
			return { ...state, ...action.app };
		case actionTypes.APP_THEME_UPDATED:
			if (state.theme === action.theme) return;
			return { ...state, theme: action.theme };
		case actionTypes.APP_VIEW_UPDATED:
			if (state.view === action.view) return;
			return { ...state, view: action.view };
		case actionTypes.APP_MODAL_UPDATED:
			return { ...state, modal: action.modal };
		case actionTypes.APP_SHORTCUT_TOGGLED:
			return { ...state, shortcut: !state.shortcut };
		case actionTypes.APP_ANIMATION_TOGGLED:
			return { ...state, animation: action.animation };
		case actionTypes.APP_COLLAPSED_HEADER_TOGGLED:
			return {
				...state, 
				collapsed: {
					...state.collapsed, 
					header: !state.collapsed.header,
				}
			};
		case actionTypes.APP_COLLAPSED_SIDEBAR_TOGGLED:
			return {
				...state, 
				collapsed: {
					...state.collapsed, 
					sidebar: !state.collapsed.sidebar,
				}
			};
		default:
			return state;
	}
};

export default appReducer;

import * as actionTypes from '../types';

import { toggleStringArray } from '@utils';
import { THEME_KEYS } from '@constants/themes';
import { MODAL_SECTIONS } from '@constants/modals';
import { BASE_CALENDAR_KEYS } from '@constants/calendar';

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
			if (state.modal !== MODAL_SECTIONS.CLOSED) return state;

			if (state.theme === action.theme) return state;

			return { ...state, theme: action.theme };
		case actionTypes.APP_THEME_TOGGLED:
			if (state.modal !== MODAL_SECTIONS.CLOSED) return state
			return {
				...state, 
				theme: toggleStringArray(state.theme, THEME_KEYS)
			};
		case actionTypes.APP_VIEW_UPDATED:
			if (state.modal !== MODAL_SECTIONS.CLOSED) return state;
			
			if (state.view === action.view) return state;

			return { ...state, view: action.view };
		case actionTypes.APP_VIEW_TOGGLED:
			if (state.modal !== MODAL_SECTIONS.CLOSED) return state;

			return {
				...state, 
				view: toggleStringArray(state.view, BASE_CALENDAR_KEYS)
			};
		case actionTypes.APP_MODAL_UPDATED:
			return {
				...state, 
				modal: (
					state.modal === action.modal ? 
					MODAL_SECTIONS.CLOSED : 
					action.modal
				)
			};
		case actionTypes.APP_SHORTCUT_TOGGLED:
			return { ...state, shortcut: !state.shortcut };
		case actionTypes.APP_ANIMATION_TOGGLED:
			return { ...state, animation: !state.animation };
		case actionTypes.APP_COLLAPSED_HEADER_TOGGLED:
			if (state.modal !== MODAL_SECTIONS.CLOSED) return state;

			return {
				...state, 
				collapsed: {
					...state.collapsed, 
					header: !state.collapsed.header,
				}
			};
		case actionTypes.APP_COLLAPSED_SIDEBAR_TOGGLED:
			if (state.modal !== MODAL_SECTIONS.CLOSED) return state

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

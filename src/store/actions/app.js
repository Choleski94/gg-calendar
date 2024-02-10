import api from '@api';
import setAuthorizationHeader from '@utils/setAuthorizationHeader';

import * as actionTypes from '../types';

export const appLoading = app => ({
	type: actionTypes.APP_LOADING,
	app
});

export const setView = (view) => ({
	type: actionTypes.APP_VIEW_UPDATED,
	view
});

export const toggleView = () => ({
	type: actionTypes.APP_VIEW_TOGGLED,
});

export const setTheme = (theme) => ({
	type: actionTypes.APP_THEME_UPDATED,
	theme
});

export const toggleTheme = () => ({
	type: actionTypes.APP_THEME_TOGGLED,
});

export const toggleShortcut = (shortcut) => ({
	type: actionTypes.APP_SHORTCUT_TOGGLED,
	shortcut
});

export const toggleAnimation = (animation) => ({
	type: actionTypes.APP_ANIMATION_TOGGLED,
	animation
});

export const setModal = (modal) => ({
	type: actionTypes.APP_MODAL_UPDATED,
	modal
});

export const toggleCollapsed = {
	header: () => ({
		type: actionTypes.APP_COLLAPSED_HEADER_TOGGLED,
	}),
	sidebar: () => ({
		type: actionTypes.APP_COLLAPSED_SIDEBAR_TOGGLED,
	}),
}

export const loadingApp = (loading = false) => (dispatch) => (
	dispatch(appLoading({ loading }))
);

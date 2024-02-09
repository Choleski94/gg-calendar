import api from '@api';
import setAuthorizationHeader from '@utils/setAuthorizationHeader';

import * as actionTypes from '../types';

export const appLoading = app => ({
	type: actionTypes.APP_LOADING,
	app
});

export const toggleView = (view) => ({
	type: actionTypes.APP_VIEW_UPDATED,
	view
});

export const toggleTheme = (theme) => ({
	type: actionTypes.APP_THEME_UPDATED,
	theme
});

export const toggleShortcut = (shortcut) => ({
	type: actionTypes.APP_SHORTCUT_TOGGLED,
	shortcut
});

export const toggleAnimation = (animation) => ({
	type: actionTypes.APP_ANIMATION_TOGGLED,
	animation
});

export const toggleModal = (modal) => ({
	type: actionTypes.APP_MODAL_UPDATED,
	modal
});

export const toggleCollapsed = {
	header: (header) => ({
		type: actionTypes.APP_COLLAPSED_HEADER_TOGGLED,
		header
	}),
	sidebar: (sidebar) => ({
		type: actionTypes.APP_COLLAPSED_SIDEBAR_TOGGLED,
		sidebar
	}),
}

export const loadingApp = (loading = false) => (dispatch) => (
	dispatch(appLoading({ loading }))
);

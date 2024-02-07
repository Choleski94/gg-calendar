import api from '@api';
import setAuthorizationHeader from '@utils/setAuthorizationHeader';

import * as actionTypes from '../types';

export const appLoading = app => ({
	type: actionTypes.APP_LOADING,
	app
});

export const toggleView = (view) => ({
	type: actionTypes.APP_VIEW_TOGGLED,
	view
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

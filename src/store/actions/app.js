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

export const toggleCollapsed = (collapsed) => ({
	type: actionTypes.APP_COLLAPSED_TOGGLED,
	collapsed
});

export const loadingApp = (loading = false) => (dispatch) => (
	dispatch(appLoading({ loading }))
);

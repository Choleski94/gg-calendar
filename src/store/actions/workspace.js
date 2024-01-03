import api from '@api';

import * as actionTypes from '../types';

export const workspaceFetched = workspace => ({
	type: actionTypes.WORKSPACE_FETCHED,
	workspace
});

export const fetchWorkspace = (workspaceId) => (dispatch) => (
	api.workspace.fetchWorkspace(workspaceId).then((workspace) => {
		dispatch(workspaceFetched(workspace));
	})
);

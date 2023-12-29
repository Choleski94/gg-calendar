import api from '@api';

import * as actionTypes from '../types';

export const workforceFetched = workforce => ({
	type: actionTypes.WORKFORCE_FETCHED,
	workforce
});

export const fetchWorkforce = (workforceId) => (dispatch) => (
	api.workforce.fetchWorkforce(workforceId).then((workforce) => {
		dispatch(workforceFetched(workforce));
	})
);

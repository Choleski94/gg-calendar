import api from '@api';

import * as actionTypes from '../types';

export const organizationFetched = organization => ({
	type: actionTypes.ORGANIZATION_FETCHED,
	organization
});

export const fetchOrganization = (organizationId) => (dispatch) => (
	api.organization.fetchOrganization(organizationId).then((organization) => {
		dispatch(organizationFetched(organization));
	})
);

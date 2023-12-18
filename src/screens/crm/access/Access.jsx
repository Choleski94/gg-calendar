import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import AccessInfo from './AccessInfo';
import AccessControl from './AccessControl';

const AccessesScreen = () => {
	const navigate = useNavigate();

	const { id: accessId = '' } = useParams();

	const setAccessId = (id = '') => navigate(`/crm/access/${id}`);

	return (
		accessId && accessId.length ? (
			<AccessInfo 
				accessId={accessId} 
				setAccessId={setAccessId}
			/>
		) : (
			<AccessControl
				accessId={accessId} 
				setAccessId={setAccessId}
			/>
		)
	);
};

export default AccessesScreen;

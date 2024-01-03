import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';

import AccessEdit from './edit';
import AccessControl from './control';

const AccessScreen = ({ setAccessId }) => {
	const navigate = useNavigate();

	const { id = '' } = useParams();

	const setRoleId = (id = '') => (
		navigate(`/system/access/${id}`)
	);

	const roleId = React.useMemo(() => (
		(id || '').toLowerCase()
	), [ id ]);

	return (
		roleId && roleId.length ? (
			<AccessEdit 
				id={roleId} 
			/>
		) : (
			<AccessControl
				setRoleId={setRoleId}
			/>
		)
	);
};

export default withPrivateRouter(AccessScreen);

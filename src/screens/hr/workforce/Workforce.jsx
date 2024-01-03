import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';

// import WorkforceEdit from './edit';
import WorkforceControl from './control';

const WorkforceScreen = () => {
	const navigate = useNavigate();

	const { id = '' } = useParams();

	const setWorkforceId = (id = '') => (
		navigate(`/workforce/${id}`)
	);

	const roleId = React.useMemo(() => (
		(id || '').toLowerCase()
	), [ id ]);

	return (
		// roleId && roleId.length ? (
		// 	<WorkforceEdit 
		// 		id={roleId} 
		// 	/>
		// ) : (
			<WorkforceControl
				setWorkforceId={setWorkforceId}
			/>
		// )
	);
};

export default withPrivateRouter(WorkforceScreen);

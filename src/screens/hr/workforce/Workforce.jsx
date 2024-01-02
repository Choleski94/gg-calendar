import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';

// import EmployeeEdit from './edit';
import EmployeeControl from './control';

const EmployeeScreen = ({ setEmployeeId }) => {
	const navigate = useNavigate();

	const { id = '' } = useParams();

	const setEmplyeesId = (id = '') => (
		navigate(`/system/access/${id}`)
	);

	const roleId = React.useMemo(() => (
		(id || '').toLowerCase()
	), [ id ]);

	return (
		// roleId && roleId.length ? (
		// 	<EmployeeEdit 
		// 		id={roleId} 
		// 	/>
		// ) : (
			<EmployeeControl
				setEmplyeesId={setEmplyeesId}
			/>
		// )
	);
};

export default withPrivateRouter(EmployeeScreen);

import React from 'react';

import api from '@api';
// import { request } from '@utils/request';
import formatMessage from '@utils/formatMessage';
import { Card, Forms, Input, Modal } from '@components';

// const userId = '123';

const OrganizationSettings = () => {
	const [ errors, setErrors ] = React.useState({});
	const [ payload, setPayload ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
	};

	const onChange = (e) => setPayload({
		...payload,
		[e.target.name]: e.target.value,
	});

	const handleSubmit = (payload) => {
		const entity = 'user/update/' + userId;

		// request.patch({ entity, jsonData: payload }).then((response) => {
		// 	setLoading(false);
		// 	// if (response.success === true) {
		// 	// 	console.log('Done....');
		// 	// }
		// }).catch(() => {
		// 	setLoading(false);
		// });
	}

	return (
		<>
			<Forms.Organization
				withPhoto
				data={payload}
				handleSubmit={handleSubmit}
			/>
		</>
	);
}

export default OrganizationSettings;

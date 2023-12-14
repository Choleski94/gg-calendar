
import React from 'react';

import formatMessage from '@utils/formatMessage';
// import mockWorkforceEmployee from '@mocks/workforce/employees';

import BaseCompanyContacts from './CompanyContacts';

const CompanyContacts = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);

	const fetchCompanyContacts = () => {
		setLoading(true);
		// setOptions(mockWorkforceEmployee.list);
		setLoading(false);
	}

	React.useEffect(() => {
		fetchCompanyContacts();
	}, []);

	return (
		<CompanyContacts 
			loading={loading}
			options={options}
		/>
	);
};

export default CompanyContacts;

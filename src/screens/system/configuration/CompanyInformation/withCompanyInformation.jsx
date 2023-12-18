import React from 'react';

const orgId = '8fa9a6e2-d4f3-49e3-9d1c-42b227f64fd2';

const withCompanyInformation = (Component) => {

	const WithCompanyInformation = ({ ...rest }) => {
		const [ loading, setLoading ] = React.useState(false);
		const [ typeOptions, setTypeOptions ] = React.useState([]);
		const [ sectorOptions, setSectorOptions ] = React.useState([]);
		const [ payload, setPayload ] = React.useState({ org_types: [], org_sectors: [] });

		const fetchCompanyInfos = async () => {
			try {
				const response = {}
				return response.data;
			} catch (error) {
				console.error('Error fetching company info:', error);
				throw error;
			}
		};

		React.useEffect(() => {
			setLoading(true);

			fetchCompanyInfos().then(({ organizations = [{}], org_types = [], org_sectors = [], opening_hours = [] }) => {
				const [ organization ] = organizations;

				setLoading(false);
				setPayload(organization);
				setTypeOptions(org_types);
				setSectorOptions(org_sectors);
			}).catch((error) => {
				setLoading(false);
				console.error('Error fetching states:', error);
			});
		}, []);

		return (
			<Component 
				payload={payload}
				setPayload={setPayload}
				loading={loading}
				setLoading={setLoading}
				typeOptions={typeOptions}
				setTypeOptions={setTypeOptions}
				sectorOptions={sectorOptions}
				setSectorOptions={setSectorOptions}
				{...rest}
			/>
		);
	}

	WithCompanyInformation.defaultName = 'WithCompanyInformation';

	return WithCompanyInformation;
}

export default withCompanyInformation;

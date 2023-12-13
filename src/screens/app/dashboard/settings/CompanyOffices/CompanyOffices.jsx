import React from 'react';

import { Card, Counter } from '@components';
import formatMessage from '@utils/formatMessage';

import BaseCompanyOffices from './BaseCompanyOffices';

const orgId = '8fa9a6e2-d4f3-49e3-9d1c-42b227f64fd2';

const CompanyOffices = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ activeSection, setActiveSection ] = React.useState('');

	const fetchOrganizationOfficeLocations = async () => {
		try {
			const response = {};
			return response.data;
		} catch (error) {
			console.error('Error fetching company office locations:', error);
			throw error;
		}
	};

	React.useEffect(() => {
		setLoading(true);

		fetchOrganizationOfficeLocations().then(({ locations: officeLocations = [] }) => {
			setOptions(officeLocations.map((payload) => ({
				...payload
				// , status: payload?.status[0] || {},
			})));
		}).catch((error) => {
			setLoading(false);
			console.error('Error fetching states:', error);
		});
	}, []);

	return (
		<>
			<div className="row">
				<div className="col-sm-6 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total locations
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={24} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 5.0%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-6 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active locations
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={12} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 1.2%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-6 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								New/returning
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={56} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-danger text-danger p-1">
										<i className="bi-graph-down" /> 2.8%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-6 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active locations
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={28} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-secondary text-secondary p-1">
										0.0%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
			<BaseCompanyOffices 
				loading={loading}
				options={options}
			/>
		</>
	);
};

export default CompanyOffices;

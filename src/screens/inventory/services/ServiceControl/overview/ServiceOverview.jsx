import React from 'react';

import api from '@api';
import { Card, Counter } from '@components';
import mockInventory from '@mocks/inventory';
import formatMessage from '@utils/formatMessage';

import ServiceCreate from './ServiceCreate';
import BaseServiceOverview from './BaseServiceOverview';

const ServiceOverview = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);

	const fetchServices = () => {
		setOptions([]);
		setLoading(true);
		setOptions(mockInventory.services.list);
		setLoading(false);
	}

	React.useEffect(() => fetchServices(), []);

	return (
		<>
			<div className="row">
				<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total services
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={124} />
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
				<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active services
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={122} />
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
				<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Inactive services
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={2} />
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
			</div>

			<BaseServiceOverview options={options} />
		</>
	);
};

export default ServiceOverview;

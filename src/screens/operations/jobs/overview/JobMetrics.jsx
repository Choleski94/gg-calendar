import React from 'react';

import { Card, Counter } from '@components';
import formatMessage from '@utils/formatMessage';
				
const JobMetrics = ({ options = [] }) => {

	return (
		<div className="row">
			<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
				<Card>
					<Card.Body>
						<Card.Subtitle>
							Total jobs
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
			<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
				<Card>
					<Card.Body>
						<Card.Subtitle>
							Active jobs
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
			<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
				<Card>
					<Card.Body>
						<Card.Subtitle>
							Total jobs completed
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
			<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
				<Card>
					<Card.Body>
						<Card.Subtitle>
							Total jobs canceled
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
	);
};

export default JobMetrics;

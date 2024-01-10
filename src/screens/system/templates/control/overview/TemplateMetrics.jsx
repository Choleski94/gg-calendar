import React from 'react';

import { Card, Counter } from '@components';
import formatMessage from '@utils/formatMessage';

const TemplatesMetrics = ({ options = [] }) => {

	const [ total, paid, unpaid, draft ] = React.useMemo(() => {

		let [ totalAmount, paidAmount, unpaidAmount, draftAmount ] = [ 0, 0, 0, 0 ];

		options.forEach(({ status, paymentStatus }) => {
			// Update total amount of templates.
			totalAmount += 1;

			if (status === 'draft') {
				draftAmount += 1;
			}

			if (paymentStatus === 'paid') {
				paidAmount += 1;
			}

			if (paymentStatus === 'unpaid') {
				unpaidAmount += 1;
			}
		});

		return [ totalAmount, paidAmount, unpaidAmount, draftAmount ];
	}, [ options ]);

	return (
		<div className="row">
			<div className="col-sm-6 col-lg-3">
				<Card>
					<Card.Body>
						<Card.Subtitle>
							Total templates
						</Card.Subtitle>
						<div className="row align-items-center gx-2">
							<div className="col">
								<span className="display-4 text-dark">
									<Counter number={total} />
								</span>
							</div>
							{/*
							<div className="col-auto">
								<span className="badge bg-soft-success text-success p-1">
									<i className="bi-graph-up" /> 5.0%
								</span>
							</div>
							*/}
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="col-sm-6 col-lg-3">
				<Card>
					<Card.Body>
						<Card.Subtitle>
							Email templates
						</Card.Subtitle>
						<div className="row align-items-center gx-2">
							<div className="col">
								<span className="display-4 text-dark">
									<Counter number={paid} />
								</span>
							</div>
							{/*
							<div className="col-auto">
								<span className="badge bg-soft-success text-success p-1">
									<i className="bi-graph-up" /> 1.2%
								</span>
							</div>
							*/}
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="col-sm-6 col-lg-3">
				<Card>
					<Card.Body>
						<Card.Subtitle>
							SMS templates
						</Card.Subtitle>
						<div className="row align-items-center gx-2">
							<div className="col">
								<span className="display-4 text-dark">
									<Counter number={unpaid} />
								</span>
							</div>
							{/*
							<div className="col-auto">
								<span className="badge bg-soft-secondary text-secondary p-1">
									0.0%
								</span>
							</div>
							*/}
						</div>
					</Card.Body>
				</Card>
			</div>
			<div className="col-sm-6 col-lg-3">
				<Card>
					<Card.Body>
						<Card.Subtitle>
							Draft templates
						</Card.Subtitle>
						<div className="row align-items-center gx-2">
							<div className="col">
								<span className="display-4 text-dark">
									<Counter number={draft} />
								</span>
							</div>
							{/*
							<div className="col-auto">
								<span className="badge bg-soft-danger text-danger p-1">
									<i className="bi-graph-down" /> 2.8%
								</span>
							</div>
							*/}
						</div>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};

export default TemplatesMetrics;

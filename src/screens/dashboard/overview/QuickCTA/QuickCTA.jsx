import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@components';
import formatMessage from '@utils/formatMessage';

const QuickCTA = () => (
	<div className="d-grid gap-2 gap-lg-4">
		<Link className="card card-hover-shadow" to="/accounting/invoices/create">
			<Card.Body>
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<img
							alt="Image Description"
							style={{ minHeight: "5rem" }}
							data-hs-theme-appearance="default"
							className="avatar avatar-lg avatar-4x3"
							src="/assets/svg/illustrations/oc-megaphone.svg"
						/>
					</div>
					<div className="flex-grow-1 ms-4">
						<h3 className="text-inherit mb-1">
							Invoice
						</h3>
						<span className="text-body">
							Create a new invoice
						</span>
					</div>
					<div className="ms-2 text-end">
						<i className="bi-chevron-right text-body text-inherit" />
					</div>
				</div>
			</Card.Body>
		</Link>
		<Link className="card card-hover-shadow" to="/quote">
			<Card.Body>
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<img
							alt="Image Description"
							style={{ minHeight: "5rem" }}
							data-hs-theme-appearance="default"
							className="avatar avatar-lg avatar-4x3"
							src="/assets/svg/illustrations/oc-collection.svg"
						/>
					</div>
					<div className="flex-grow-1 ms-4">
						<h3 className="text-inherit mb-1">
							Estimate
						</h3>
						<span className="text-body">
							Create a new estimation
						</span>
					</div>
					<div className="ms-2 text-end">
						<i className="bi-chevron-right text-body text-inherit" />
					</div>
				</div>
			</Card.Body>
		</Link>
		<Link className="card card-hover-shadow" to="/operations/jobs/create">
			<Card.Body>
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<img
							alt="Image Description"
							style={{ minHeight: "5rem" }}
							data-hs-theme-appearance="default"
							className="avatar avatar-lg avatar-4x3"
							src="/assets/svg/illustrations/oc-address.svg"
						/>
					</div>
					<div className="flex-grow-1 ms-4">
						<h3 className="text-inherit mb-1">
							Job
						</h3>
						<span className="text-body">
							Create a new job
						</span>
					</div>
					<div className="ms-2 text-end">
						<i className="bi-chevron-right text-body text-inherit" />
					</div>
				</div>
			</Card.Body>
		</Link>
	</div>
);

export default QuickCTA;


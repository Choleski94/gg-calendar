import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@components';
import formatMessage from '@utils/formatMessage';

const Tags = ({ id: customerId = '' }) => (
	<Card>
		<Card.Header>
			<h4 className="card-header-title">
				Tags
			</h4>
			<Link className="btn btn-sm btn-outline-primary" to="/crm/customers/456">
				<i className="bi-plus me-1" />
				&nbsp;
				Add tag
			</Link>
		</Card.Header>
		<Card.Body>
			<ul className="list-inline mb-0">
				<li className="list-inline-item">
					<a className="badge bg-soft-secondary text-secondary p-2" href="#">
						Bosch
					</a>
				</li>
				<li className="list-inline-item">
					<a className="badge bg-soft-secondary text-secondary p-2" href="#">
						Pump
					</a>
				</li>
				<li className="list-inline-item">
					<h4 className="badge bg-soft-secondary text-secondary p-2" href="#">
						Motor
					</h4>
				</li>
				<li className="list-inline-item">
					<a className="badge bg-soft-secondary text-secondary p-2" href="#">
						Washing
					</a>
				</li>
			</ul>
			{/*
			<hr className="my-4" />
			<label
				className="row form-check form-switch"
				htmlFor="availabilitySwitch1"
			>
				<span className="col-8 col-sm-9 ms-0">
					<span className="text-dark">
						Availability
						<i
							className="bi-question-circle text-body ms-1"
							data-bs-toggle="tooltip"
							data-bs-placement="top"
							aria-label="Product availability switch toggler."
							data-bs-original-title="Product availability switch toggler."
						/>
					</span>
				</span>
				<span className="col-4 col-sm-3 text-end">
					<input
						type="checkbox"
						className="form-check-input"
						id="availabilitySwitch1"
						defaultChecked
					/>
				</span>
			</label>
			*/}
		</Card.Body>
	</Card>
);

export default Tags;

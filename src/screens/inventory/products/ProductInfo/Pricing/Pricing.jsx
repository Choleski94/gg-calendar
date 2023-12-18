import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@components';
import formatMessage from '@utils/formatMessage';

const Pricing = ({ id: customerId = '' }) => (
	<Card>
		<Card.Header>
			<h4 className="card-header-title">
				Pricing
			</h4>
			{/*
			<Link className="btn btn-sm btn-outline-primary" to="/crm/customers/456">
				<i className="bi-pencil-fill me-1" />
				&nbsp;
				Edit
			</Link>
			*/}
		</Card.Header>
		<Card.Body>
			<div className="mb-4">
				<label htmlFor="vendorLabel" className="form-label">
					Unit price
				</label>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						name="priceName"
						id="priceNameLabel"
						placeholder={0.0}
						aria-label={0.0}
						defaultValue={45.0}
					/>
					<div className="input-group-append">
						<div className="tom-select-custom tom-select-custom-end">
							<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
								<div className="ts-control">
									<div data-value="USD" className="item" data-ts-item>
										CAD
									</div>
								</div>
								<div className="tom-select-custom" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-4">
				<label className="form-label">
					Member Price
				</label>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						name="priceName"
						id="priceNameLabel"
						placeholder={0.0}
						aria-label={0.0}
						defaultValue={150}
					/>
					<div className="input-group-append">
						<div className="tom-select-custom tom-select-custom-end">
							<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
								<div className="ts-control">
									<div data-value="USD" className="item" data-ts-item>
										CAD
									</div>
								</div>
								<div className="tom-select-custom" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-4">
				<label className="form-label">
					Average Unit Cost
				</label>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						name="priceName"
						id="priceNameLabel"
						placeholder={0.0}
						aria-label={0.0}
						defaultValue={150}
					/>
					<div className="input-group-append">
						<div className="tom-select-custom tom-select-custom-end">
							<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
								<div className="ts-control">
									<div data-value="USD" className="item" data-ts-item>
										CAD
									</div>
								</div>
								<div className="tom-select-custom" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Card.Body>
	</Card>
);

export default Pricing;

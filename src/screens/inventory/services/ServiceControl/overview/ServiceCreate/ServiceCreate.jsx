import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const ServiceCreate = ({ readOnly }) => (
	<>
		<div className="row">
			<div className="col-lg-12">
				<div className="row">
					<div className="col-lg-10">
						<div className="mb-4">
							<label className="form-label">
								Name
							</label>
							<input type="text" className="form-control mb-3" placeholder="Service name" aria-label="Service name" disabled={readOnly} />
						</div>
					</div>
					<div className="col-lg-2">
						<div className="mb-4">
							<label className="form-label">
								Availability
							</label>
							<div className="form-check form-switch">
								<input className="form-check-input" type="checkbox" defaultChecked />
								<label className="form-check-label" htmlFor="stocksCheckbox1" />
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="mb-4">
							<label className="form-label">
								Category
							</label>
							<div className="tom-select-custom">
								<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
									<div className="ts-control">
										<div className="item">
											Maintenance
										</div>
									</div>
									<div className="tom-select-custom" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="mb-4">
							<label className="form-label">
								Code
							</label>
							&nbsp;
							<span className="form-label-secondary">
								(Optional)
							</span>
							<input type="text" className="form-control mb-3" placeholder="SRV-A30W" aria-label="SRV-A30W" disabled={readOnly} />
						</div>
					</div>

					<div className="col-lg-12">
						<div className="mb-4">
							<label className="form-label">
								Task time
							</label>
							&nbsp;
							<span className="form-label-secondary">
								(Optional)
							</span>
							<div className="input-group">
								<input
									type="text"
									aria-label={1}
									placeholder={1}
									defaultValue="1"
									name="weightName"
									className="form-control"
								/>
								<div className="input-group-append">
									<div className="tom-select-custom tom-select-custom-end">
										<select tabIndex={-1} className="js-select form-select tomselected ts-hidden-accessible">
											<option value="usd">Min</option>
											<option value="cad" selected>
												Hour
											</option>
										</select>
										<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
											<div className="ts-control">
												<div data-value="cad" className="item" data-ts-item>
													Hour
												</div>
											</div>
											<div className="tom-select-custom" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="mb-4">
							<label htmlFor="weightLabel" className="form-label">
								Price
							</label>
							<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
								<div className="input-group-prepend input-group-text">
									$
								</div>
								<input
									type="text"
									name="weightName"
									aria-label={125.00}
									placeholder={125.00}
									defaultValue="125.00"
									className="form-control"
								/>
								<div className="input-group-append">
									<div className="tom-select-custom tom-select-custom-end">
										<select tabIndex={-1} className="js-select form-select tomselected ts-hidden-accessible">
											<option value="usd">USD</option>
											<option value="cad" selected>
												CAD
											</option>
										</select>
										<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
											<div className="ts-control">
												<div data-value="cad" className="item" data-ts-item>
													CAD
												</div>
											</div>
											<div className="tom-select-custom" />
										</div>
									</div>
								</div>
							</div>
							<small className="form-text">
								Used to calculate shipping rates at checkout and label prices during
								fulfillment.
							</small>
						</div>
					</div>

					{/*
					<div className="col-lg-12">
						<div className="mb-4">
							<label htmlFor="weightLabel" className="form-label">
								Cost
							</label>
							&nbsp;
							<span className="form-label-secondary">
								(Optional)
							</span>
							<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
								<div className="input-group-prepend input-group-text">
									$
								</div>
								<input
									type="text"
									name="weightName"
									aria-label={125.00}
									placeholder={125.00}
									defaultValue="125.00"
									className="form-control"
								/>
								<div className="input-group-append">
									<div className="tom-select-custom tom-select-custom-end">
										<select tabIndex={-1} className="js-select form-select tomselected ts-hidden-accessible">
											<option value="usd">USD</option>
											<option value="cad" selected>
												CAD
											</option>
										</select>
										<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
											<div className="ts-control">
												<div data-value="cad" className="item" data-ts-item>
													CAD
												</div>
											</div>
											<div className="tom-select-custom" />
										</div>
									</div>
								</div>
							</div>
							<small className="form-text">
								Used to calculate internal operational costs.
							</small>
						</div>
					</div>
					*/}

					<div className="col-lg-12">
						<div className="mb-4">
							<label className="form-label">
								Description
							</label>
							<textarea 
								className="form-control mb-3"
								placeholder="Description"
								aria-label="Description"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);

export default ServiceCreate;

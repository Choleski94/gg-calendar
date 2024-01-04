import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const LocationSection = () => (
	<div className="d-grid gap-3 gap-lg-5">
		<div className="row">
			<div className="col-lg-12">
				<div className="card mb-3 mb-lg-5">
					<div className="card-header">
						<h4 className="card-header-title">
							Location information
						</h4>
					</div>
					<div className="card-body">
						<div className="row mb-4">
							<label
								htmlFor="locationLabel-ts-control"
								className="col-sm-3 col-form-label form-label"
								id="locationLabel-ts-label"
							>
								Location
							</label>
							<div className="col-sm-9">
								<div className="tom-select-custom mb-4">
									<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position plugin-dropdown_input full has-items">
										<div
											className="ts-control"
											role="combobox"
											aria-haspopup="listbox"
											aria-expanded="false"
											aria-controls="locationLabel-ts-dropdown"
											id="locationLabel-ts-control"
											aria-labelledby="locationLabel-ts-label"
											tabIndex={0}
										>
											<span
												className="d-flex align-items-center item"
												data-value="GB"
												data-ts-item
											>
												<img
													className="avatar avatar-xss avatar-circle me-2"
													src="/assets/vendor/flag-icon-css/flags/1x1/ca.svg"
													alt="United Kingdom Flag"
												/>
												<span className="text-truncate">Canada</span>
											</span>
											<input
												className="items-placeholder"
												tabIndex={-1}
												placeholder
											/>
										</div>
										<div className="tom-select-custom" />
									</div>
								</div>
								{/* End Select */}
								<div className="mb-4">
									<input
										type="text"
										className="form-control"
										name="city"
										id="cityLabel"
										placeholder="City"
										aria-label="City"
									/>
								</div>
								<input
									type="text"
									className="form-control"
									name="state"
									id="stateLabel"
									placeholder="Province"
									aria-label="Province"
								/>
							</div>
						</div>
						{/* End Form */}
						{/* Form */}
						<div className="row mb-4">
							<label
								htmlFor="addressLine1Label"
								className="col-sm-3 col-form-label form-label"
							>
								Address line 1{" "}
								<span className="form-label-secondary">(Optional)</span>
							</label>
							<div className="col-sm-9">
								<input
									type="text"
									className="form-control"
									name="addressLine1"
									id="addressLine1Label"
									placeholder="Your address"
									aria-label="Your address"
								/>
							</div>
						</div>
						{/* End Form */}
						{/* Form */}
						<div className="js-add-field row mb-4">
							<label
								htmlFor="addressLine2Label"
								className="col-sm-3 col-form-label form-label"
							>
								Address line 2{" "}
								<span className="form-label-secondary">(Optional)</span>
							</label>
							<div className="col-sm-9">
								<input
									type="text"
									className="form-control"
									name="addressLine2"
									id="addressLine2Label"
									placeholder="Your address"
									aria-label="Your address"
								/>
							</div>
						</div>
						{/* End Form */}
						{/* Form */}
						<div className="row">
							<label
								htmlFor="zipCodeLabel"
								className="col-sm-3 col-form-label form-label"
							>
								Zip code{" "}
								<i
									className="bi-question-circle text-body ms-1"
									data-bs-toggle="tooltip"
									data-bs-placement="top"
									aria-label="You can find your code in a postal address."
									data-bs-original-title="You can find your code in a postal address."
								/>
							</label>
							<div className="col-sm-9">
								<input
									type="text"
									className="js-input-mask form-control"
									name="zipCode"
									id="zipCodeLabel"
									placeholder="Your zip code"
									aria-label="Your zip code"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default LocationSection;

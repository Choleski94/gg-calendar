import React from 'react';

import api from '@api';
import { Card } from '@components';
import formatMessage from '@utils/formatMessage';

const parseTech = (payload = {}) => {
	let res = 'N/A';

	if (payload?.jobs && payload?.jobs.length) {
		const allTechs = payload.jobs[0].techs;
		if (allTechs && allTechs.length) {
			const techNames = allTechs.map(({ firstName, lastName }) => `${firstName} ${lastName}`)
			res = techNames.slice(0, 3).join(', ');
		}
	}

	return res;
}

const CustomerSection = () => (
	<div className="d-grid gap-3 gap-lg-5">
		<div className="row">
			<div className="col-lg-12">
				<Card>
					<Card.Header>
						<Card.Title>
							Project information
						</Card.Title>
					</Card.Header>
					<Card.Body>
						<div className="row">
							<div className="col-sm-6">
								<div className="mb-4">
									<label htmlFor="weightLabel" className="form-label">
										Type
									</label>
									<div className="tom-select-custom">
										<select
											autoComplete="off"
											className="js-select form-select"
										>
											<option value>Select type...</option>
											<option value={4}>Fridge</option>
											<option value={1}>Front load dryer</option>
											<option value={3}>Top load dryer</option>
										</select>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="mb-4">
									<label htmlFor="SKULabel" className="form-label">
										Brand
									</label>
									<input
										type="text"
										className="form-control"
										name="productName"
										id="productNameLabel"
										placeholder="Samsung, LG, etc."
										defaultValue="Samsung"
									/>
								</div>
							</div>
						</div>
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
					</Card.Body>
				</Card>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-12">
				<Card>
					<Card.Header>
						<Card.Title>
							Customer information
						</Card.Title>
					</Card.Header>
					<Card.Body>
						<div className="js-add-field row mb-4">
							<label
								htmlFor="phoneLabel"
								className="col-sm-3 col-form-label form-label"
							>
								Phone
							</label>
							<div className="col-sm-9">
								<div className="input-group input-group-sm-vertical">
									<input
										type="text"
										className="js-input-mask form-control"
										name="phone"
										id="phoneLabel"
										placeholder="+x(xxx)xxx-xx-xx"
										aria-label="+x(xxx)xxx-xx-xx"
									/>
									{/* Select */}
									<div className="tom-select-custom tom-select-custom-end">
										<select
											className="js-select form-select tomselected ts-hidden-accessible"
											autoComplete="off"
											id="tomselect-1"
											tabIndex={-1}
										>
											<option value="Home">Home</option>
											<option value="Work">Work</option>
											<option value="Fax">Fax</option>
											<option value="Direct">Direct</option>
											<option value="Mobile" selected>
												Mobile
											</option>
										</select>
										<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
											<div className="ts-control">
												<div data-value="Mobile" className="item" data-ts-item>
													Mobile
												</div>
											</div>
											<div className="tom-select-custom" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End Form */}
						{/* End Add Phone Input Field */}
						<div className="row mb-4">
							<label
								htmlFor="firstNameLabel"
								className="col-sm-3 col-form-label form-label"
							>
								Full name
							</label>
							<div className="col-sm-9">
								<div className="input-group input-group-sm-vertical">
									<input
										type="text"
										className="form-control"
										name="firstName"
										id="firstNameLabel"
										placeholder="Clarice"
										aria-label="Clarice"
									/>
									<input
										type="text"
										className="form-control"
										name="lastName"
										id="lastNameLabel"
										placeholder="Boone"
										aria-label="Boone"
									/>
								</div>
							</div>
						</div>
						{/* End Form */}
						{/* Form */}
						<div className="row mb-4">
							<label
								htmlFor="emailLabel"
								className="col-sm-3 col-form-label form-label"
							>
								Email
							</label>
							<div className="col-sm-9">
								<input
									type="email"
									className="form-control"
									name="email"
									id="emailLabel"
									placeholder="clarice@site.com"
									aria-label="clarice@site.com"
								/>
							</div>
						</div>
						{/* End Form */}
						{/* Add Phone Input Field */}
						<div id="addAddressFieldTemplate" style={{ display: "none" }}>
							<div className="input-group-add-field">
								<input
									type="text"
									className="form-control"
									data-name="addressLine"
									placeholder="Your address"
									aria-label="Your address"
								/>
								<a
									className="js-delete-field input-group-add-field-delete"
								>
									<i className="bi-x-lg" />
								</a>
							</div>
						</div>
						{/* End Add Phone Input Field */}
					</Card.Body>
				</Card>
			</div>
		</div>
	</div>
);

export default CustomerSection;

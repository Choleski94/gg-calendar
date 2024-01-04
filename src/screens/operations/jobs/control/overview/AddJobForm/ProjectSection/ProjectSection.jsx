import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const ProjectSection = () => (
	<div className="d-grid gap-3 gap-lg-5">
		<div className="row">
			<div className="col-lg-12">
				<div className="card mb-3 mb-lg-5">
					<div className="card-header">
						<h4 className="card-header-title">
							Project information
						</h4>
					</div>
					<div className="card-body">
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
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ProjectSection;

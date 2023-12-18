import React from 'react';

const Payroll = () => {
	return (
		<div className="card">
			<div className="card-header">
				<h2 className="card-title h4">
					Payroll information
				</h2>
			</div>
			<div className="card-body">
				<form>
					<div className="row mb-4">
						<label
							id="locationLabel-ts-label"
							htmlFor="locationLabel-ts-control"
							className="col-sm-3 col-form-label form-label"
						>
							Regular Rate
						</label>
						<div className="col-sm-9">
							<div className="input-group mb-3">
								<span className="input-group-text">
									$
								</span>
								<input
									type="text"
									className="form-control"
									aria-label="Amount (to the nearest dollar)"
								/>
								<span className="input-group-text">
									per hour
								</span>
							</div>
						</div>
					</div>
					<div className="row mb-4">
						<label
							id="locationLabel-ts-label"
							htmlFor="locationLabel-ts-control"
							className="col-sm-3 col-form-label form-label"
						>
							Overtime 1 Rate
						</label>
						<div className="col-sm-9">
							<div className="input-group mb-3">
								<span className="input-group-text">
									$
								</span>
								<input
									type="text"
									className="form-control"
									aria-label="Amount (to the nearest dollar)"
								/>
								<span className="input-group-text">
									per hour
								</span>
							</div>
						</div>
					</div>
					<div className="row mb-4">
						<label
							id="locationLabel-ts-label"
							htmlFor="locationLabel-ts-control"
							className="col-sm-3 col-form-label form-label"
						>
							Employee Type
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
											<span className="text-truncate">
												Contractor
											</span>
										</span>
										<input
											className="items-placeholder"
											tabIndex={-1}
											placeholder
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row mb-4">
						<label htmlFor="jobTitle" className="col-sm-3 col-form-label form-label">
							Job Title
						</label>
						<div className="col-sm-9">
							<input
								type="text"
								id="jobTitle"
								name="jobTitle"
								aria-label="Job Title"
								placeholder="Job Title"
								className="form-control"
								defaultValue="Software Engineer"
							/>
						</div>
					</div>
					<div className="row mb-4">
						<label htmlFor="jobTitle" className="col-sm-3 col-form-label form-label">
							Department
						</label>
						<div className="col-sm-9">
							<input
								type="text"
								id="jobDepartement"
								name="jobDepartement"
								className="form-control"
								aria-label="Job Departement"
								placeholder="Job Departement"
								defaultValue="Engineering"
							/>
						</div>
					</div>
					<div className="row mb-4">
						<label htmlFor="jobTitle" className="col-sm-3 col-form-label form-label">
							Enrollment date
						</label>
						<div className="col-sm-9">
							<input
								type="date"
								value="05-06-2023"
								id="jobEnrollmentDate"
								name="jobEnrollmentDate"
								className="form-control"
								aria-label="Job enrollment date"
								placeholder="Job enrollment date"
								defaultValue="05-06-2023"
							/>
						</div>
					</div>
					<div className="d-flex justify-content-end">
						<button type="submit" className="btn btn-primary">
							Save changes
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Payroll;
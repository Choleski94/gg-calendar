import React from 'react';

import formatMessage from '@utils/formatMessage';

const ServiceInfo = ({ jobId = '' }) => {
	return (
		<div className="js-add-field card mb-3 mb-lg-5">
			<div className="card-header card-header-content-sm-between">
				<h4 className="card-header-title mb-2 mb-sm-0">
					Variants
				</h4>
				<div className="d-sm-flex align-items-center gap-2">
					<a
						className="js-create-field btn btn-ghost-secondary btn-sm"
					>
						<i className="bi-plus" /> Add variant
					</a>
				</div>
			</div>
			<div className="table-responsive datatable-custom">
				<div className="dataTables_wrapper no-footer">
					<div className="dataTables_length" id="datatable_length" />
					<div id="datatable_filter" className="dataTables_filter">
						<label>
							Search:
							<input
								type="search"
								className
								placeholder
								aria-controls="datatable"
							/>
						</label>
					</div>
					<table
						role="grid"
						id="datatable"
						aria-describedby="datatable_info"
						className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer"
					>
						<thead className="thead-light">
							<tr role="row">
								<th
									className="sorting"
									tabIndex={0}
									aria-controls="datatable"
									rowSpan={1}
									colSpan={1}
									aria-label="Code: activate to sort column ascending"
								>
									Code
								</th>
								<th
									className="table-column-ps-0 sorting"
									tabIndex={0}
									aria-controls="datatable"
									rowSpan={1}
									colSpan={1}
									aria-label="Price: activate to sort column ascending"
								>
									Price
								</th>
								<th
									className="table-column-ps-0 sorting"
									tabIndex={0}
									aria-controls="datatable"
									rowSpan={1}
									colSpan={1}
									aria-label="Availability: activate to sort column ascending"
								>
									Availability
								</th>
								<th />
							</tr>
						</thead>
						<tbody>
							<tr role="row" className="odd">
								<th>
									<input
										type="text"
										className="form-control"
										defaultValue="SRV-A30W-01"
										style={{ minWidth: "6rem" }}
									/>
								</th>
								<th className="table-column-ps-0">
									<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
										<div className="input-group-prepend input-group-text">$</div>
										<input
											type="text"
											name="weightName"
											aria-label={125}
											placeholder={125}
											className="form-control"
											defaultValue={125.0}
										/>
										<div className="input-group-append">
											<div className="tom-select-custom tom-select-custom-end">
												<select
													tabIndex={-1}
													className="js-select form-select tomselected ts-hidden-accessible"
												>
													<option value="usd">USD</option>
													<option value="cad">CAD</option>
												</select>
												<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
													<div className="ts-control">
														<div data-value="cad" className="item" data-ts-item="true">
															CAD
														</div>
													</div>
													<div className="tom-select-custom" />
												</div>
											</div>
										</div>
									</div>
								</th>
								<th className="table-column-ps-0">
									<div className="form-check form-switch">
										<input className="form-check-input" type="checkbox" defaultChecked />
										<label className="form-check-label" htmlFor="stocksCheckbox1" />
									</div>
								</th>
								<th className="table-column-ps-0">
									<div
										className="btn-group float-end"
										role="group"
										aria-label="Edit group"
									>
										<a className="btn btn-white" href="#">
											<i className="bi-trash" /> Delete
										</a>
									</div>
								</th>
							</tr>
							<tr role="row" className="even">
								<th>
									<input
										type="text"
										className="form-control"
										defaultValue="SRV-A30W-02"
										style={{ minWidth: "3rem" }}
									/>
								</th>
								<th className="table-column-ps-0">
									<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
										<div className="input-group-prepend input-group-text">$</div>
										<input
											type="text"
											name="weightName"
											aria-label={125}
											placeholder={125}
											className="form-control"
											defaultValue={125.0}
										/>
										<div className="input-group-append">
											<div className="tom-select-custom tom-select-custom-end">
												<select
													tabIndex={-1}
													className="js-select form-select tomselected ts-hidden-accessible"
												>
													<option value="usd">USD</option>
													<option value="cad">CAD</option>
												</select>
												<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
													<div className="ts-control">
														<div data-value="cad" className="item" data-ts-item="true">
															CAD
														</div>
													</div>
													<div className="tom-select-custom" />
												</div>
											</div>
										</div>
									</div>
								</th>
								<th className="table-column-ps-0">
									<div className="form-check form-switch">
										<input className="form-check-input" type="checkbox" defaultChecked />
										<label className="form-check-label" htmlFor="stocksCheckbox1" />
									</div>
								</th>
								<th className="table-column-ps-0">
									<div
										className="btn-group float-end"
										role="group"
										aria-label="Edit group"
									>
										<a className="btn btn-white" href="#">
											<i className="bi-trash" /> Delete
										</a>
									</div>
								</th>
							</tr>
							<tr role="row" className="odd">
								<th>
									<input
										type="text"
										className="form-control"
										defaultValue="SRV-A30W-03"
										style={{ minWidth: "6rem" }}
									/>
								</th>
								<th className="table-column-ps-0">
									<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
										<div className="input-group-prepend input-group-text">$</div>
										<input
											type="text"
											name="weightName"
											aria-label={125}
											placeholder={125}
											className="form-control"
											defaultValue={125.0}
										/>
										<div className="input-group-append">
											<div className="tom-select-custom tom-select-custom-end">
												<select
													tabIndex={-1}
													className="js-select form-select tomselected ts-hidden-accessible"
												>
													<option value="usd">USD</option>
													<option value="cad">CAD</option>
												</select>
												<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
													<div className="ts-control">
														<div data-value="cad" className="item" data-ts-item="true">
															CAD
														</div>
													</div>
													<div className="tom-select-custom" />
												</div>
											</div>
										</div>
									</div>
								</th>
								<th className="table-column-ps-0">
									<div className="form-check form-switch">
										<input className="form-check-input" type="checkbox" defaultChecked />
										<label className="form-check-label" htmlFor="stocksCheckbox1" />
									</div>
								</th>
								<th className="table-column-ps-0">
									<div
										className="btn-group float-end"
										role="group"
										aria-label="Edit group"
									>
										<a className="btn btn-white" href="#">
											<i className="bi-trash" /> Delete
										</a>
									</div>
								</th>
							</tr>
							<tr role="row" className="even">
								<th>
									<input
										type="text"
										className="form-control"
										defaultValue="SRV-A30W-04"
										style={{ minWidth: "6rem" }}
									/>
								</th>
								<th className="table-column-ps-0">
									<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
										<div className="input-group-prepend input-group-text">$</div>
										<input
											type="text"
											name="weightName"
											aria-label={125}
											placeholder={125}
											className="form-control"
											defaultValue={125.0}
										/>
										<div className="input-group-append">
											<div className="tom-select-custom tom-select-custom-end">
												<select
													tabIndex={-1}
													className="js-select form-select tomselected ts-hidden-accessible"
												>
													<option value="usd">USD</option>
													<option value="cad">CAD</option>
												</select>
												<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
													<div className="ts-control">
														<div data-value="cad" className="item" data-ts-item="true">
															CAD
														</div>
													</div>
													<div className="tom-select-custom" />
												</div>
											</div>
										</div>
									</div>
								</th>
								<th className="table-column-ps-0">
									<div className="form-check form-switch">
										<input className="form-check-input" type="checkbox" defaultChecked />
										<label className="form-check-label" htmlFor="stocksCheckbox1" />
									</div>
								</th>
								<th className="table-column-ps-0">
									<div
										className="btn-group float-end"
										role="group"
										aria-label="Edit group"
									>
										<a className="btn btn-white" href="#">
											<i className="bi-trash" /> Delete
										</a>
									</div>
								</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default ServiceInfo;

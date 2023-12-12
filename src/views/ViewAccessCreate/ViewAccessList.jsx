import React from 'react';

import {
	hasPrimary,
	SUPPORTED_PHONE_TYPES,
} from './ViewAccessList.controller';

import {
	SUPPORTED_JOB_SECTIONS,
	SUPPORTED_JOB_STATUSES,
	SUPPORTED_JOB_PRIORITIES,
} from '../../constants/jobs';

import formatMessage from '../../../utils/formatMessage';

const ViewAccessList = ({ onClick = () => null, options = [] }) => (
	<div className="card mb-5">
		<div className="card-header card-header-content-between">
			<h4 className="card-header-title">Permissions</h4>
		</div>
		<div className="table-responsive datatable-custom position-relative">
			<div id="datatable_wrapper" className="dataTables_wrapper no-footer">
				<div className="table-responsive datatable-custom position-relative">
					<div id="datatable_wrapper" className="dataTables_wrapper no-footer">
						<div className="dt-buttons">
							<button
								className="dt-button buttons-copy buttons-html5 d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>Copy</span>
							</button>
							<button
								className="dt-button buttons-excel buttons-html5 d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>Excel</span>
							</button>{" "}
							<button
								className="dt-button buttons-csv buttons-html5 d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>CSV</span>
							</button>{" "}
							<button
								className="dt-button buttons-pdf buttons-html5 d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>PDF</span>
							</button>{" "}
							<button
								className="dt-button buttons-print d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>Print</span>
							</button>{" "}
						</div>
						<div id="datatable_filter" className="dataTables_filter">
							<label>
								Search:
								<input type="search" aria-controls="datatable" />
							</label>
						</div>
						<table
							role="grid"
							id="datatable"
							aria-describedby="datatable_info"
							className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer"
						>
							<thead className="thead-light">
								<tr role="row">
									<th rowSpan={1} colSpan={1} style={{ width: "45px" }} />
									<th rowSpan={1} colSpan={1} style={{ width: "175.938px" }}>
										Section
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "279.656px" }}>
										Description
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										View
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Create
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Edit
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Delete
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">My Office &gt; Dashboard</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">My Office &gt; Data Import</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Text Messages
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Company Information
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Company Preferences
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Payment Gateway Settings
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Estimate &amp; Job Statuses
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Service Contract Terms
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Communication Templates
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Outbound Email Settings
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Electronic Fax Settings
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Online &amp; App Booking Settings
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Referral Sources
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Workforce Management
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Service Agreement Management
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">My Office &gt; Integrations</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Crew Management
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Fleet Management
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Vendor Management
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Inventory Management
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Product Catalog
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Purchase Orders Management
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Service Catalog
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Taxes, Fees &amp; Discounts
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Settings &gt; Job Categories
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Company Memos
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Custom Documents
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										My Office &gt; Notification Templates
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Customers</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Projects</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Dispatch &gt; Grid</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										Dispatch &gt; Dispatch Zones
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Fleet Tracking</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Calendar</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Accounting &gt; Invoices</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										Accounting &gt; Invoice Payments
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Reports &gt; Sales Revenue</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">
										Reports &gt; Sales Commission
									</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Reports &gt; Payroll</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Reports &gt; Customers</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Jobs</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
								<tr>
									<td className="table-column-pe-0" />
									<td className="table-column-pe-0">Estimates</td>
									<td>N/A</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
									<td>
										<div className="form-check form-switch">
											{" "}
											<input
												className="form-check-input"
												type="checkbox"
												id="stocksCheckbox1"
												defaultChecked
											/>{" "}
											<label
												className="form-check-label"
												htmlFor="stocksCheckbox1"
											/>{" "}
										</div>
									</td>
								</tr>
							</tbody>
						</table>
						<div
							role="status"
							aria-live="polite"
							id="datatable_info"
							className="dataTables_info"
						>
							Showing 1 to 15 of 24 entries
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ViewAccessList;

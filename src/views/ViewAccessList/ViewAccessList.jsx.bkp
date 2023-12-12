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
	<>
		<div className="card card-centered mb-3 mb-lg-5">
			<div className="card-header card-header-content-md-between">
				<div className="mb-2 mb-md-0">
					<form>
						<div className="input-group input-group-merge input-group-flush">
							<div className="input-group-prepend input-group-text">
								<i className="bi-search" />
							</div>
							<input
								id="datatableSearch"
								type="search"
								className="form-control"
								placeholder="Search roles"
								aria-label="Search roles"
							/>
						</div>
					</form>
				</div>
				<div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
					<div id="datatableCounterInfo" style={{ display: "none" }}>
						<div className="d-flex align-items-center">
							<span className="fs-5 me-3">
								<span id="datatableCounter">0</span>Selected
							</span>
							<a className="btn btn-outline-danger btn-sm">
								<i className="bi-trash" /> Delete
							</a>
						</div>
					</div>
					<div className="dropdown">
						<button
							type="button"
							className="btn btn-white btn-sm w-100"
							id="jobsFilterDropdown"
							aria-expanded="false"
						>
							<i className="bi-filter me-1" /> Filter{" "}
							<span className="badge bg-soft-dark text-dark rounded-circle ms-1">
								2
							</span>
						</button>
						<div
							className="dropdown-menu dropdown-menu-sm-end dropdown-card card-dropdown-filter-centered"
							aria-labelledby="jobsFilterDropdown"
							style={{ minWidth: "22rem" }}
						>
							<div className="card">
								<div className="card-header card-header-content-between">
									<h5 className="card-header-title">Filter jobs</h5>
									<button
										type="button"
										className="btn btn-ghost-secondary btn-icon btn-sm ms-2"
									>
										<i className="bi-x-lg" />
									</button>
								</div>
								<div className="card-body">
									<form>
										<div className="mb-4">
											<small className="text-cap text-body">Role</small>
											<div className="row">
												<div className="col">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															id="jobsFilterCheckAll"
															defaultValue="true"
															defaultChecked
														/>
														<label
															className="form-check-label"
															htmlFor="jobsFilterCheckAll"
														>
															All
														</label>
													</div>
												</div>
												<div className="col">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															id="jobsFilterCheckEmployee"
															defaultValue="true"
														/>
														<label
															className="form-check-label"
															htmlFor="jobsFilterCheckEmployee"
														>
															Employee
														</label>
													</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm mb-4">
												<small className="text-cap text-body">Position</small>
												<div className="tom-select-custom">
													<select
														className="js-select js-datatable-filter form-select form-select-sm tomselected ts-hidden-accessible"
														id="tomselect-1"
													>
														<option value="true">Any</option>
														<option value="Accountant">Accountant</option>
														<option value="Co-founder">Co-founder</option>
														<option value="Designer">Designer</option>
														<option value="Developer">Developer</option>
														<option value="Director">Director</option>
													</select>
													<div className="ts-wrapper js-select js-datatable-filter form-select form-select-sm single plugin-change_listener plugin-hs_smart_position">
														<div className="ts-control">
															<div className="ts-custom-placeholder">Any</div>
														</div>
														<div className="tom-select-custom">
															<div
																className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
																style={{ display: "none" }}
															>
																<div
																	role="listbox"
																	tabIndex={-1}
																	className="ts-dropdown-content"
																	id="tomselect-1-ts-dropdown"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-sm mb-4">
												<small className="text-cap text-body">Status</small>
												<div className="tom-select-custom">
													<select
														className="js-select js-datatable-filter form-select form-select-sm tomselected ts-hidden-accessible"
														id="tomselect-2"
														tabIndex={-1}
													>
														<option value="true">Any status</option>
														<option value="Completed">Completed</option>
														<option value="In progress">In progress</option>
														<option value="To do">To do</option>
													</select>
													<div className="ts-wrapper js-select js-datatable-filter form-select form-select-sm single plugin-change_listener plugin-hs_smart_position">
														<div className="ts-control">
															<div className="ts-custom-placeholder">
																Any status
															</div>
														</div>
														<div className="tom-select-custom">
															<div
																className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
																style={{ display: "none" }}
															>
																<div
																	role="listbox"
																	tabIndex={-1}
																	className="ts-dropdown-content"
																	id="tomselect-2-ts-dropdown"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 mb-4">
												<span className="text-cap text-body">Location</span>
												<div className="tom-select-custom">
													<select
														className="js-select form-select tomselected ts-hidden-accessible"
														id="tomselect-3"
														tabIndex={-1}
													>
														<option
															value="AF"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/af.svg" alt="Afghanistan Flag" /><span class="text-truncate">Afghanistan</span></span>'
														>
															Afghanistan
														</option>
														<option
															value="AX"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/ax.svg" alt="Aland Islands Flag" /><span class="text-truncate">Aland Islands</span></span>'
														>
															Aland Islands
														</option>
														<option
															value="AL"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/al.svg" alt="Albania Flag" /><span class="text-truncate">Albania</span></span>'
														>
															Albania
														</option>
														<option
															value="DZ"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/dz.svg" alt="Algeria Flag" /><span class="text-truncate">Algeria</span></span>'
														>
															Algeria
														</option>
														<option
															value="AS"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/as.svg" alt="American Samoa Flag" /><span class="text-truncate">American Samoa</span></span>'
														>
															American Samoa
														</option>
														<option
															value="AD"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/ad.svg" alt="Andorra Flag" /><span class="text-truncate">Andorra</span></span>'
														>
															Andorra
														</option>
														<option
															value="AO"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/ao.svg" alt="Angola Flag" /><span class="text-truncate">Angola</span></span>'
														>
															Angola
														</option>
														<option
															value="AI"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/ai.svg" alt="Anguilla Flag" /><span class="text-truncate">Anguilla</span></span>'
														>
															Anguilla
														</option>
														<option
															value="AG"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/ag.svg" alt="Antigua and Barbuda Flag" /><span class="text-truncate">Antigua and Barbuda</span></span>'
														>
															Antigua and Barbuda
														</option>
														<option
															value="AR"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/ar.svg" alt="Argentina Flag" /><span class="text-truncate">Argentina</span></span>'
														>
															Argentina
														</option>
														<option
															value="AM"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/am.svg" alt="Armenia Flag" /><span class="text-truncate">Armenia</span></span>'
														>
															Armenia
														</option>
														<option
															value="AW"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/aw.svg" alt="Aruba Flag" /><span class="text-truncate">Aruba</span></span>'
														>
															Aruba
														</option>
														<option
															value="AU"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/au.svg" alt="Australia Flag" /><span class="text-truncate">Australia</span></span>'
														>
															Australia
														</option>
														<option
															value="AT"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/at.svg" alt="Austria Flag" /><span class="text-truncate">Austria</span></span>'
														>
															Austria
														</option>
														<option
															value="AZ"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/az.svg" alt="Azerbaijan Flag" /><span class="text-truncate">Azerbaijan</span></span>'
														>
															Azerbaijan
														</option>
														<option
															value="BS"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bs.svg" alt="Bahamas Flag" /><span class="text-truncate">Bahamas</span></span>'
														>
															Bahamas
														</option>
														<option
															value="BH"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bh.svg" alt="Bahrain Flag" /><span class="text-truncate">Bahrain</span></span>'
														>
															Bahrain
														</option>
														<option
															value="BD"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bd.svg" alt="Bangladesh Flag" /><span class="text-truncate">Bangladesh</span></span>'
														>
															Bangladesh
														</option>
														<option
															value="BB"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bb.svg" alt="Barbados Flag" /><span class="text-truncate">Barbados</span></span>'
														>
															Barbados
														</option>
														<option
															value="BY"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/by.svg" alt="Belarus Flag" /><span class="text-truncate">Belarus</span></span>'
														>
															Belarus
														</option>
														<option
															value="BE"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/be.svg" alt="Belgium Flag" /><span class="text-truncate">Belgium</span></span>'
														>
															Belgium
														</option>
														<option
															value="BZ"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bz.svg" alt="Belize Flag" /><span class="text-truncate">Belize</span></span>'
														>
															Belize
														</option>
														<option
															value="BJ"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bj.svg" alt="Benin Flag" /><span class="text-truncate">Benin</span></span>'
														>
															Benin
														</option>
														<option
															value="BM"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bm.svg" alt="Bermuda Flag" /><span class="text-truncate">Bermuda</span></span>'
														>
															Bermuda
														</option>
														<option
															value="BT"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bt.svg" alt="Bhutan Flag" /><span class="text-truncate">Bhutan</span></span>'
														>
															Bhutan
														</option>
														<option
															value="BO"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bo.svg" alt="Bolivia (Plurinational State of) Flag" /><span class="text-truncate">Bolivia (Plurinational State of)</span></span>'
														>
															Bolivia (Plurinational State of)
														</option>
														<option
															value="BQ"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bq.svg" alt="Bonaire, Sint Eustatius and Saba Flag" /><span class="text-truncate">Bonaire, Sint Eustatius and Saba</span></span>'
														>
															Bonaire, Sint Eustatius and Saba
														</option>
														<option
															value="BA"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/ba.svg" alt="Bosnia and Herzegovina Flag" /><span class="text-truncate">Bosnia and Herzegovina</span></span>'
														>
															Bosnia and Herzegovina
														</option>
														<option
															value="BW"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bw.svg" alt="Botswana Flag" /><span class="text-truncate">Botswana</span></span>'
														>
															Botswana
														</option>
														<option
															value="BR"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/br.svg" alt="Brazil Flag" /><span class="text-truncate">Brazil</span></span>'
														>
															Brazil
														</option>
														<option
															value="IO"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/io.svg" alt="British Indian Ocean Territory Flag" /><span class="text-truncate">British Indian Ocean Territory</span></span>'
														>
															British Indian Ocean Territory
														</option>
														<option
															value="BN"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bn.svg" alt="Brunei Darussalam Flag" /><span class="text-truncate">Brunei Darussalam</span></span>'
														>
															Brunei Darussalam
														</option>
														<option
															value="BG"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bg.svg" alt="Bulgaria Flag" /><span class="text-truncate">Bulgaria</span></span>'
														>
															Bulgaria
														</option>
														<option
															value="BF"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bf.svg" alt="Burkina Faso Flag" /><span class="text-truncate">Burkina Faso</span></span>'
														>
															Burkina Faso
														</option>
														<option
															value="BI"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/bi.svg" alt="Burundi Flag" /><span class="text-truncate">Burundi</span></span>'
														>
															Burundi
														</option>
														<option
															value="CV"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/cv.svg" alt="Cabo Verde Flag" /><span class="text-truncate">Cabo Verde</span></span>'
														>
															Cabo Verde
														</option>
														<option
															value="KH"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/kh.svg" alt="Cambodia Flag" /><span class="text-truncate">Cambodia</span></span>'
														>
															Cambodia
														</option>
														<option
															value="CM"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/cm.svg" alt="Cameroon Flag" /><span class="text-truncate">Cameroon</span></span>'
														>
															Cameroon
														</option>
														<option
															value="CA"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/ca.svg" alt="Canada Flag" /><span class="text-truncate">Canada</span></span>'
														>
															Canada
														</option>
														<option
															value="KY"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/ky.svg" alt="Cayman Islands Flag" /><span class="text-truncate">Cayman Islands</span></span>'
														>
															Cayman Islands
														</option>
														<option
															value="CF"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/cf.svg" alt="Central African Republic Flag" /><span class="text-truncate">Central African Republic</span></span>'
														>
															Central African Republic
														</option>
														<option
															value="TD"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/td.svg" alt="Chad Flag" /><span class="text-truncate">Chad</span></span>'
														>
															Chad
														</option>
														<option
															value="GB"
															data-option-template='<span class="d-flex align-items-center"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="United Kingdom Flag" /><span class="text-truncate">United Kingdom</span></span>'
														>
															United Kingdom
														</option>
													</select>
													<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position plugin-dropdown_input full has-items">
														<div
															className="ts-control"
															role="combobox"
															aria-haspopup="listbox"
															aria-expanded="false"
															aria-controls="tomselect-3-ts-dropdown"
															id="tomselect-3-ts-control"
															tabIndex={0}
														>
															<span
																className="d-flex align-items-center item"
																data-value="GB"
																data-ts-item="true"
															>
																<img
																	className="avatar avatar-xss avatar-circle me-2"
																	src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg"
																	alt="United Kingdom Flag"
																/>
																<span className="text-truncate">
																	United Kingdom
																</span>
															</span>
															<input className="items-placeholder" tabIndex={-1} />
														</div>
														<div className="tom-select-custom">
															<div
																className="ts-dropdown single plugin-change_listener plugin-hs_smart_position plugin-dropdown_input"
																style={{ display: "none" }}
															>
																<div className="dropdown-input-wrap">
																	<input
																		type="select-one"
																		autoComplete="off"
																		size={1}
																		tabIndex={-1}
																		className="dropdown-input"
																	/>
																</div>
																<div
																	role="listbox"
																	tabIndex={-1}
																	className="ts-dropdown-content"
																	id="tomselect-3-ts-dropdown"
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="d-grid">
											<a className="btn btn-primary">
												Apply
											</a>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
								<th
									rowSpan={1}
									colSpan={1}
									style={{ width: "45px" }}
									className="table-column-ps-0"
								/>
								<th rowSpan={1} colSpan={1} style={{ width: "279.656px" }}>
									Name
								</th>
								<th
									rowSpan={1}
									colSpan={1}
									style={{ width: "175.938px" }}
									className="table-column-ps-0"
								>
									Description
								</th>
								<th
									rowSpan={1}
									colSpan={1}
									style={{ width: "113.938px" }}
									className="table-column-ps-0"
								>
									Risk
								</th>
								<th rowSpan={1} colSpan={1} style={{ width: "200.625px" }}>
									Date requested
								</th>
								<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
									Date approved
								</th>
								<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
									Approver
								</th>
								<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
									Priority
								</th>
								<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
									Status
								</th>
								<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
									Notes
								</th>
								<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }} />
							</tr>
						</thead>
						<tbody>
							<tr role="row" className="odd">
								<td className="table-column-pe-0" />
								<td className="table-column-ps-0">
									<span className="d-flex align-items-center" href="#">
										<div className="ms-3">
											<span className="d-block h5 text-inherit mb-0">
												ADMIN_BILLING{" "}
											</span>
										</div>
									</span>
								</td>
								<td className="table-column-ps-0">
									Lorem ipsum dolor sit amet, consectetur <br />
									adipiscing elit, sed do eiusmod tempor
								</td>
								<td className="table-column-ps-0">High</td>
								<td>
									20/05/2023 9:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>
									20/05/2023 11:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>Julian Guzman</td>
								<td>
									<span className="badge text-danger">Urgent</span>
								</td>
								<td>
									<span className="badge bg-soft-warning text-warning">
										Pending
									</span>
								</td>
								<td>
									<small>Need to generate new customer invoices</small>
								</td>
							</tr>
							<tr role="row" className="odd">
								<td className="table-column-pe-0" />
								<td className="table-column-ps-0">
									<span className="d-flex align-items-center" href="#">
										<div className="ms-3">
											<span className="d-block h5 text-inherit mb-0">
												ADMIN_INVOICES{" "}
											</span>
										</div>
									</span>
								</td>
								<td className="table-column-ps-0">
									Lorem ipsum dolor sit amet, consectetur <br />
									adipiscing elit, sed do eiusmod tempor
								</td>
								<td className="table-column-ps-0">High</td>
								<td>
									20/05/2023 9:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>
									20/05/2023 11:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>Julian Guzman</td>
								<td>
									<span className="badge text-dark">Normal</span>
								</td>
								<td>
									<span className="badge bg-soft-success text-success">
										Approved
									</span>
								</td>
								<td>
									<small />
								</td>
							</tr>
							<tr role="row" className="odd">
								<td className="table-column-pe-0" />
								<td className="table-column-ps-0">
									<span className="d-flex align-items-center" href="#">
										<div className="ms-3">
											<span className="d-block h5 text-inherit mb-0">
												ADMIN_INVENTORY{" "}
											</span>
										</div>
									</span>
								</td>
								<td className="table-column-ps-0">
									Lorem ipsum dolor sit amet, consectetur <br />
									adipiscing elit, sed do eiusmod tempor
								</td>
								<td className="table-column-ps-0">High</td>
								<td>
									20/05/2023 9:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>
									20/05/2023 11:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>Julian Guzman</td>
								<td>
									<span className="badge text-dark">Normal</span>
								</td>
								<td>
									<span className="badge bg-soft-success text-success">
										Approved
									</span>
								</td>
								<td>
									<small />
								</td>
							</tr>
							<tr role="row" className="odd">
								<td className="table-column-pe-0" />
								<td className="table-column-ps-0">
									<span className="d-flex align-items-center" href="#">
										<div className="ms-3">
											<span className="d-block h5 text-inherit mb-0">
												ADMIN_WORKFORCE{" "}
											</span>
										</div>
									</span>
								</td>
								<td className="table-column-ps-0">
									Lorem ipsum dolor sit amet, consectetur <br />
									adipiscing elit, sed do eiusmod tempor
								</td>
								<td className="table-column-ps-0">High</td>
								<td>
									20/05/2023 9:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>
									20/05/2023 11:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>Julian Guzman</td>
								<td>
									<span className="badge text-dark">Normal</span>
								</td>
								<td>
									<span className="badge bg-soft-success text-success">
										Approved
									</span>
								</td>
								<td>
									<small />
								</td>
							</tr>
							<tr role="row" className="odd">
								<td className="table-column-pe-0" />
								<td className="table-column-ps-0">
									<span className="d-flex align-items-center" href="#">
										<div className="ms-3">
											<span className="d-block h5 text-inherit mb-0">
												ADMIN_ANALYTICS{" "}
											</span>
										</div>
									</span>
								</td>
								<td className="table-column-ps-0">
									Lorem ipsum dolor sit amet, consectetur <br />
									adipiscing elit, sed do eiusmod tempor
								</td>
								<td className="table-column-ps-0">High</td>
								<td>
									20/05/2023 9:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>
									20/05/2023 11:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>Julian Guzman</td>
								<td>
									<span className="badge text-dark">Normal</span>
								</td>
								<td>
									<span className="badge bg-soft-success text-success">
										Approved
									</span>
								</td>
								<td>
									<small>Required for 2023 KPI analysis</small>
								</td>
							</tr>
							<tr role="row" className="odd">
								<td className="table-column-pe-0" />
								<td className="table-column-ps-0">
									<span className="d-flex align-items-center" href="#">
										<div className="ms-3">
											<span className="d-block h5 text-inherit mb-0">
												ADMIN_CONFIGURATION{" "}
											</span>
										</div>
									</span>
								</td>
								<td className="table-column-ps-0">
									Lorem ipsum dolor sit amet, consectetur <br />
									adipiscing elit, sed do eiusmod tempor
								</td>
								<td className="table-column-ps-0">High</td>
								<td>
									20/05/2023 9:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>
									20/05/2023 11:00:00 AM<small className="font-italic">(Est)</small>
								</td>
								<td>Julian Guzman</td>
								<td>
									<span className="badge text-dark">Normal</span>
								</td>
								<td>
									<span className="badge bg-soft-success text-success">
										Approved
									</span>
								</td>
								<td>
									<small />
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
			<div className="card-footer">
				<div className="row justify-content-center justify-content-sm-between align-items-sm-center">
					<div className="col-sm mb-2 mb-sm-0">
						<div className="d-flex justify-content-center justify-content-sm-start align-items-center">
							<span className="me-2">Showing:</span>
							<div className="tom-select-custom">
								<select
									id="datatableEntries"
									className="js-select form-select form-select-borderless w-auto tomselected ts-hidden-accessible"
									autoComplete="off"
									tabIndex={-1}
								>
									<option value={10}>10</option>
									<option value={20}>20</option>
									<option value={15}>15</option>
								</select>
								<div className="ts-wrapper js-select form-select form-select-borderless w-auto single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
									<div className="ts-control">
										<div data-value={15} className="item" data-ts-item="true">
											15
										</div>
									</div>
									<div className="tom-select-custom">
										<div
											className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
											style={{ display: "none" }}
										>
											<div
												role="listbox"
												tabIndex={-1}
												className="ts-dropdown-content"
												id="datatableEntries-ts-dropdown"
											/>
										</div>
									</div>
								</div>
							</div>
							<span className="text-secondary me-2">of</span>
							<span id="datatableWithPaginationInfoTotalQty">24</span>
						</div>
					</div>
					<div className="col-sm-auto">
						<div className="d-flex justify-content-center justify-content-sm-end">
							<nav id="datatablePagination" aria-label="Activity pagination">
								<div
									className="dataTables_paginate paging_simple_numbers"
									id="datatable_paginate"
								>
									<ul
										id="datatable_pagination"
										className="pagination datatable-custom-pagination"
									>
										<li className="paginate_item page-item disabled">
											<a
												className="paginate_button previous page-link"
												aria-controls="datatable"
												data-dt-idx={0}
												tabIndex={0}
												id="datatable_previous"
											>
												<span aria-hidden="true">Prev</span>
											</a>
										</li>
										<li className="paginate_item page-item active">
											<a
												className="paginate_button page-link"
												aria-controls="datatable"
												data-dt-idx={1}
												tabIndex={0}
											>
												1
											</a>
										</li>
										<li className="paginate_item page-item">
											<a
												className="paginate_button page-link"
												aria-controls="datatable"
												data-dt-idx={2}
												tabIndex={0}
											>
												2
											</a>
										</li>
										<li className="paginate_item page-item">
											<a
												className="paginate_button next page-link"
												aria-controls="datatable"
												data-dt-idx={3}
												tabIndex={0}
												id="datatable_next"
											>
												<span aria-hidden="true">Next</span>
											</a>
										</li>
									</ul>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>

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
	</>
);

export default ViewAccessList;

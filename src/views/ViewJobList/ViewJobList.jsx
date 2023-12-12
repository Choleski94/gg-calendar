import React from 'react';

import {
	hasPrimary,
	SUPPORTED_PHONE_TYPES,
} from './ViewJobList.controller';

import {
	SUPPORTED_JOB_SECTIONS,
	SUPPORTED_JOB_STATUSES,
	SUPPORTED_JOB_PRIORITIES,
} from '../../constants/jobs';

import Table from '../../components/Table';
import formatMessage from '../../../utils/formatMessage';

const DEFAULT_JOBS_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
	{ key: 'name', label: 'Name' },
	{ key: 'phone', label: 'Phone(s)' },
	{ key: 'email', label: 'Email(s)' },
	{ key: 'address', label: 'Address' },
	{ key: 'unit', label: 'Unit' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
	{ key: 'status', label: 'Status' },
	{ key: 'priority', label: 'Priority' },
	{ key: 'notes', label: 'Notes' },
];

const ViewJobList = ({ wrapperClassName = 'card', onClick = () => null, options = [] }) => {
	const filterOutCompleted = options;

	return (
		<Table
			height="63vh"
			elementsPerPage={300}
			searchPlaceholder="Search jobs"
			headers={DEFAULT_JOBS_TABLE_HEADER}
			data={options.map((payload, idx = 0) => ({
				'id': 123,
				'name': (
					<span className="d-flex align-items-center">
						<div>
							<span className="d-block h5 text-inherit mb-0">
								{payload?.firstName} {payload?.lastName}
								{payload?.isPrimary && (
									<>
										&nbsp;
										<i className="bi-patch-check-fill text-primary" />
									</>
								)}
								{payload?.isBlacklist && (
									<>
										&nbsp;
										<i className="bi-patch-exclamation-fill text-danger" />
									</>
								)}
							</span>
							{payload?.position && (
								<span className="d-block fs-5 text-body">
									{payload?.position}
								</span>
							)}
						</div>
					</span>
				),
				'phone': (
					payload?.phones && payload?.phones.length ? (
						payload?.phones.map(({ isPrimary, type, extension, value }) => (
							<div>
								{value}
								{extension && extension.length && (
									<>
										, ext. {extension}
									</>
								)}
								&nbsp;
								{type === SUPPORTED_PHONE_TYPES.HOME && (
									<small className="font-italic">
										(Home)
									</small>
								)}
								{type === SUPPORTED_PHONE_TYPES.MOBILE && (
									<small className="font-italic">
										(Mobile)
									</small>
								)}
								{type === SUPPORTED_PHONE_TYPES.OFFICE && (
									<small className="font-italic">
										(Office)
									</small>
								)}
								&nbsp;
								{hasPrimary(isPrimary, payload?.phones.length) && (
									<small className="font-italic">
										&nbsp;
										<i className="bi-patch-check-fill text-success" />
									</small>
								)}
							</div>
						))
					) : 'N/A'
				),
				'email': (
					payload?.emails && payload?.emails.length ? (
						payload?.emails.map(({ isPrimary, value }) => (
							<div>
								{value}
								{hasPrimary(isPrimary, payload?.emails.length) && (
									<>
										&nbsp;
										<i className="bi-patch-check-fill text-success" />
									</>
								)}
							</div>
						))
					) : 'N/A'
				),
				'address': (
					<small>
						{payload?.contact?.address}
					</small>
				),
				'unit': (
					<small className="text-uppercase">
						{payload?.contact?.unit}
					</small>
				),
				'city': (
					<small>
						{payload?.contact?.city}, {payload?.contact?.state}
					</small>
				),
				'zip': (
					<small>
						{payload?.contact?.zip}
					</small>
				),
				'status': (
					<small>
						{payload?.status === SUPPORTED_JOB_STATUSES.OPEN && (
							'Open'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.ON_HOLD && (
							'On Hold'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.REOPENED && (
							'Reopened'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.SCHEDULED && (
							'Scheduled'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.COMPLETED && (
							'Completed'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.CANCELLED && (
							'Cancelled'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.FOLLOW_UP && (
							'Follow Up'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.RESCHEDULED && (
							'Rescheduled'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.IN_PROGRESS && (
							'In Progress'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.PENDING_APPROVAL && (
							'Pending Approval'
						)}
						{payload?.status === SUPPORTED_JOB_STATUSES.WAITING_FOR_PARTS && (
							'Waiting For Parts'
						)}
					</small>
				),
				'priority': (
					<>
						{payload?.priority === SUPPORTED_JOB_PRIORITIES.URGENT && (
							<span className="badge text-danger">
								<span className="legend-indicator bg-danger"/>
								Urgent
							</span>
						)}
						{payload?.priority === SUPPORTED_JOB_PRIORITIES.HIGH && (
							<span className="badge text-warning">
								<span className="legend-indicator bg-warning"/>
								High
							</span>
						)}
						{payload?.priority === SUPPORTED_JOB_PRIORITIES.NORMAL && (
							<span className="badge text-success">
								<span className="legend-indicator bg-success"/>
								Normal
							</span>
						)}
						{payload?.priority === SUPPORTED_JOB_PRIORITIES.LOW && (
							<span className="badge text-dark">
								<span className="legend-indicator bg-dark"/>
								Low
							</span>
						)}
					</>
				),
				'notes': (
					<small>
						{(payload?.notes && payload?.notes.length ? payload?.notes[0].value : '')}
					</small>
				),
			}))}
			onRowClick={onClick}
		/>
	);
};

const abed = ({ wrapperClassName = 'card', onClick = () => null, options = [] }) => (
	<div className={wrapperClassName}>
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
							placeholder="Search jobs"
							aria-label="Search jobs"
						/>
					</div>
				</form>
			</div>
			<div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
				<div id="datatableCounterInfo" style={{ display: "none" }}>
					<div className="d-flex align-items-center">
						<span className="fs-5 me-3">
							<span id="datatableCounter">0</span>
							Selected
						</span>
						<a
							className="btn btn-outline-danger btn-sm"
						>
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
						{/* Card */}
						<div className="card">
							<div className="card-header card-header-content-between">
								<h5 className="card-header-title">Filter jobs</h5>
								{/* Toggle Button */}
								<button
									type="button"
									className="btn btn-ghost-secondary btn-icon btn-sm ms-2"
								>
									<i className="bi-x-lg" />
								</button>
								{/* End Toggle Button */}
							</div>
							<div className="card-body">
								<form>
									<div className="mb-4">
										<small className="text-cap text-body">Role</small>
										<div className="row">
											<div className="col">
												{/* Check */}
												<div className="form-check">
													<input
														className="form-check-input"
														type="checkbox"
														defaultValue
														id="jobsFilterCheckAll"
														defaultChecked
													/>
													<label
														className="form-check-label"
														htmlFor="jobsFilterCheckAll"
													>
														All
													</label>
												</div>
												{/* End Check */}
											</div>
											{/* End Col */}
											<div className="col">
												{/* Check */}
												<div className="form-check">
													<input
														className="form-check-input"
														type="checkbox"
														defaultValue
														id="jobsFilterCheckEmployee"
													/>
													<label
														className="form-check-label"
														htmlFor="jobsFilterCheckEmployee"
													>
														Employee
													</label>
												</div>
												{/* End Check */}
											</div>
											{/* End Col */}
										</div>
										{/* End Row */}
									</div>
									<div className="row">
										<div className="col-sm mb-4">
											<small className="text-cap text-body">
												Position
											</small>
											{/* Select */}
											<div className="tom-select-custom">
												<select
													className="js-select js-datatable-filter form-select form-select-sm tomselected ts-hidden-accessible"
													id="tomselect-1"
												>
													<option value>Any</option>
													<option value="Accountant">Accountant</option>
													<option value="Co-founder">Co-founder</option>
													<option value="Designer">Designer</option>
													<option value="Developer">Developer</option>
													<option value="Director">Director</option>
												</select>
												<div className="ts-wrapper js-select js-datatable-filter form-select form-select-sm single plugin-change_listener plugin-hs_smart_position">
													<div className="ts-control">
														<div className="ts-custom-placeholder">
															Any
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
																id="tomselect-1-ts-dropdown"
															/>
														</div>
													</div>
												</div>
												{/* End Select */}
											</div>
										</div>
										{/* End Col */}
										<div className="col-sm mb-4">
											<small className="text-cap text-body">Status</small>
											{/* Select */}
											<div className="tom-select-custom">
												<select
													className="js-select js-datatable-filter form-select form-select-sm tomselected ts-hidden-accessible"
													id="tomselect-2"
													tabIndex={-1}
												>
													<option value>Any status</option>
													<option
														value="Completed"
													>
														Completed
													</option>
													<option
														value="In progress"
													>
														In progress
													</option>
													<option
														value="To do"
													>
														To do
													</option>
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
											{/* End Select */}
										</div>
										{/* End Col */}
										<div className="col-12 mb-4">
											<span className="text-cap text-body">Location</span>
											{/* Select */}
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
														selected
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
															data-ts-item
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
														<input
															className="items-placeholder"
															tabIndex={-1}
															placeholder
														/>
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
											{/* End Select */}
										</div>
										{/* End Col */}
									</div>
									{/* End Row */}
									<div className="d-grid">
										<a className="btn btn-primary">
											Apply
										</a>
									</div>
								</form>
							</div>
						</div>
						{/* End Card */}
					</div>
				</div>
				{/* End Dropdown */}
			</div>
		</div>
		{/* Table */}
		<div className="table-responsive datatable-custom position-relative">
			<div
				id="datatable_wrapper"
				className="dataTables_wrapper no-footer"
			>
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
					className="table table-lg table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer"
				>
					<thead className="thead-light">
						<tr role="row">
							<th rowSpan={1} colSpan={1} style={{ width: "45px" }} />
							{/*
								<th
									rowSpan={1} colSpan={1}
									style={{ width: "175.938px" }}
								>
									Reference
								</th>
							*/}
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "279.656px" }}
							>
								Name
							</th>
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "175.938px" }}
							>
								Phone(s)
							</th>
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "151.344px" }}
							>
								Email(s)
							</th>
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "200.625px" }}
							>
								Address
							</th>
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "113.938px" }}
							>
								Unit
							</th>
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "113.938px" }}
							>
								City, State/Prov
							</th>
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "113.938px" }}
							>
								Zip/Post Code
							</th>
							{/*
								<th
									rowSpan={1} colSpan={1}
									style={{ width: "113.938px" }}
								>
									Agent
								</th>
								<th
									rowSpan={1} colSpan={1}
									style={{ width: "113.938px" }}
								>
									Category
								</th>
							*/}
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "113.938px" }}
							>
								Status
							</th>
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "113.938px" }}
							>
								Priority
							</th>
							<th
								rowSpan={1} colSpan={1}
								style={{ width: "113.938px" }}
							>
								Notes
							</th>
						</tr>
					</thead>
					<tbody>
						{options.map((payload, idx) => (
							<tr role="row" className="odd" onClick={(e) => onClick(e, payload?.id)}>
								<td className="table-column-pe-0" />
								{/*
									<td>
										<a href={'#' + payload?.id}>
											#{payload?.reference}
										</a>
									</td>
								*/}
								<td class="table-column-ps-0">
									<span class="d-flex align-items-center" href="#">
										<div class="ms-3">
											<span class="d-block h5 text-inherit mb-0">
												{payload?.firstName} {payload?.lastName}
												{payload?.isPrimary && (
													<>
														&nbsp;
														<i className="bi-patch-check-fill text-primary" />
													</>
												)}
												{payload?.isBlacklist && (
													<>
														&nbsp;
														<i className="bi-patch-exclamation-fill text-danger" />
													</>
												)}
											</span>
											{payload?.position && (
												<span className="d-block fs-5 text-body">
													{payload?.position}
												</span>
											)}
										</div>
									</span>
								</td>
								<td>
									{payload?.phones && payload?.phones.length ? (
										payload?.phones.map(({ isPrimary, type, extension, value }) => (
											<div>
												{value}
												{extension && extension.length && (
													<>
														, ext. {extension}
													</>
												)}
												&nbsp;
												{type === SUPPORTED_PHONE_TYPES.HOME && (
													<small className="font-italic">
														(Home)
													</small>
												)}
												{type === SUPPORTED_PHONE_TYPES.MOBILE && (
													<small className="font-italic">
														(Mobile)
													</small>
												)}
												{type === SUPPORTED_PHONE_TYPES.OFFICE && (
													<small className="font-italic">
														(Office)
													</small>
												)}
												&nbsp;
												{hasPrimary(isPrimary, payload?.phones.length) && (
													<small className="font-italic">
														&nbsp;
														<i className="bi-patch-check-fill text-success" />
													</small>
												)}
											</div>
										))
									) : 'N/A'}
								</td>
								<td>
									{payload?.emails && payload?.emails.length ? (
										payload?.emails.map(({ isPrimary, value }) => (
											<div>
												{value}
												{hasPrimary(isPrimary, payload?.emails.length) && (
													<>
														&nbsp;
														<i className="bi-patch-check-fill text-success" />
													</>
												)}
											</div>
										))
									) : 'N/A'}
								</td>
								<td>
									<small>
										{payload?.contact?.address}
									</small>
								</td>
								<td>
									<small className="text-uppercase">
										{payload?.contact?.unit}
									</small>
								</td>
								<td>
									<small>
										{payload?.contact?.city}, {payload?.contact?.state}
									</small>
								</td>
								<td>
									<small>
										{payload?.contact?.zip}
									</small>
								</td>
								{/*
									<td>
										<a href="#user-profile" className="d-flex align-items-center">
											<div className="flex-grow-2">
												T1. Julian Guzman
											</div>
										</a>
									</td>
									<td>
										<div className="flex-grow-2">
											<span className="legend-indicator bg-info" />
											Fridge
										</div>
									</td>
								*/}
								<td>
									<small>
										{payload?.status === SUPPORTED_JOB_STATUSES.OPEN && (
											'Open'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.ON_HOLD && (
											'On Hold'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.REOPENED && (
											'Reopened'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.SCHEDULED && (
											'Scheduled'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.COMPLETED && (
											'Completed'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.CANCELLED && (
											'Cancelled'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.FOLLOW_UP && (
											'Follow Up'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.RESCHEDULED && (
											'Rescheduled'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.IN_PROGRESS && (
											'In Progress'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.PENDING_APPROVAL && (
											'Pending Approval'
										)}
										{payload?.status === SUPPORTED_JOB_STATUSES.WAITING_FOR_PARTS && (
											'Waiting For Parts'
										)}
									</small>
								</td>
								<td>
									{payload?.priority === SUPPORTED_JOB_PRIORITIES.URGENT && (
										<span className="badge text-danger">
											<span class="legend-indicator bg-danger"/>
											Urgent
										</span>
									)}
									{payload?.priority === SUPPORTED_JOB_PRIORITIES.HIGH && (
										<span className="badge text-warning">
											<span class="legend-indicator bg-warning"/>
											High
										</span>
									)}
									{payload?.priority === SUPPORTED_JOB_PRIORITIES.NORMAL && (
										<span className="badge text-success">
											<span class="legend-indicator bg-success"/>
											Normal
										</span>
									)}
									{payload?.priority === SUPPORTED_JOB_PRIORITIES.LOW && (
										<span className="badge text-dark">
											<span class="legend-indicator bg-dark"/>
											Low
										</span>
									)}
								</td>
								<td>
									<small>
										{(payload?.notes && payload?.notes.length ? payload?.notes[0].value : '')}
									</small>
								</td>
							</tr>
						))}
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
		{/* Footer */}
		<div className="card-footer">
			<div className="row justify-content-center justify-content-sm-between align-items-sm-center">
				<div className="col-sm mb-2 mb-sm-0">
					<div className="d-flex justify-content-center justify-content-sm-start align-items-center">
						<span className="me-2">Showing:</span>
						{/* Select */}
						<div className="tom-select-custom">
							<select
								id="datatableEntries"
								className="js-select form-select form-select-borderless w-auto tomselected ts-hidden-accessible"
								autoComplete="off"
								tabIndex={-1}
							>
								<option value={10}>10</option>
								<option value={20}>20</option>
								<option value={15} selected>
									15
								</option>
							</select>
							<div className="ts-wrapper js-select form-select form-select-borderless w-auto single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
								<div className="ts-control">
									<div data-value={15} className="item" data-ts-item>
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
						{/* End Select */}
						<span className="text-secondary me-2">of</span>
						{/* Pagination Quantity */}
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
);

export default ViewJobList;

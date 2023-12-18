import React from 'react';

import mockJob from '@mocks/jobs';
import ViewJobList from '@views/ViewJobList';
import formatMessage from '@utils/formatMessage';

const Account = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);

	const fetchJobs = () => {
		setLoading(true);
		setOptions(mockJob.list)
		setLoading(false);
	};

	// TODO: get current accoutn userId
	React.useEffect(() => {
		fetchJobs();
	}, []);

	const hasData = React.useMemo(() => true, []); 

	return (
		<>
			<div className="col-lg-4">
				<div className="card card-body mb-3 mb-lg-5">
					<h5>
						Profile completion
					</h5>
					<div className="d-flex justify-content-between align-items-center">
						<div className="progress flex-grow-1">
							<div
								className="progress-bar bg-primary"
								role="progressbar"
								style={{ width: "15%" }}
								aria-valuenow={15}
								aria-valuemin={0}
								aria-valuemax={100}
							/>
						</div>
						<span className="ms-4">15%</span>
					</div>
				</div>
				{/* Card */}
				<div className="card mb-3 mb-lg-5">
					<div className="card-header card-header-content-between">
						<h4 className="card-header-title">
							General Information
						</h4>
					</div>
					<div className="card-body">
						<ul className="list-unstyled list-py-2 text-dark mb-0">
							<li className="pb-0">
								<span className="card-subtitle">About</span>
							</li>
							<li>
								<i className="bi-person dropdown-item-icon" /> Mark
								Williams
							</li>
							<li>
								<i className="bi-briefcase dropdown-item-icon" /> No
								department
							</li>
							<li>
								<i className="bi-building dropdown-item-icon" /> Pixeel
								Ltd.
							</li>
							<li className="pt-4 pb-0">
								<span className="card-subtitle">Contacts</span>
							</li>
							<li>
								<i className="bi-at dropdown-item-icon" /> mark@site.com
							</li>
							<li>
								<i className="bi-phone dropdown-item-icon" /> +1 (555)
								752-01-10
							</li>
							<li className="pt-4 pb-0">
								<span className="card-subtitle">Teams</span>
							</li>
							<li className="fs-6 text-body">
								<i className="bi-people dropdown-item-icon" /> You are
								not a member of any teams
							</li>
							<li className="fs-6 text-body">
								<i className="bi-stickies dropdown-item-icon" /> You are
								not working on any projects
							</li>
						</ul>
					</div>
					{/* End Body */}
				</div>
				{/* End Card */}
				{/* Card */}
				<div className="card card-lg mb-3 mb-lg-5">
					{/* Body */}
					<div className="card-body text-center">
						<div className="mb-4">
							<img
								className="avatar avatar-xl avatar-4x3"
								src="/assets/svg/illustrations/oc-unlock.svg"
								alt="Image Description"
								data-hs-theme-appearance="default"
							/>
						</div>
						<div className="mb-3">
							<h3>2-step verification</h3>
							<p>
								Protect your account now and enable 2-step verification
								in the settings.
							</p>
						</div>
						<a
							className="btn btn-primary"
							href="account-settings.html#twoStepVerificationSection"
						>
							Enable now
						</a>
					</div>
					{/* End Body */}
				</div>
				{/* End Card */}
			</div>
			{/* End Col */}
			<div className="col-lg-8">
				<div className="card card-centered mb-3 mb-lg-5">
					{/* Header */}
					<div className="card-header card-header-content-between">
						<h4 className="card-header-title">
							Activity stream
						</h4>
						{/* Dropdown */}
						<div className="dropdown">
							<button
								className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
								id="contentActivityStreamDropdown"
								data-bs-toggle="dropdown"
								aria-expanded="false"
								type="button"
							>
								<i className="bi-three-dots-vertical" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end mt-1"
								aria-labelledby="contentActivityStreamDropdown"
							>
								<span className="dropdown-header">Account</span>
								<a
									className="dropdown-item"
									href="user-profile-my-profile.html#"
								>
									<i className="bi-share-fill dropdown-item-icon" />{" "}
									Share connections
								</a>
								<a
									className="dropdown-item"
									href="user-profile-my-profile.html#"
								>
									<i className="bi-info-circle dropdown-item-icon" />{" "}
									Suggest edits
								</a>
								<div className="dropdown-divider" />
								<span className="dropdown-header">Feedback</span>
								<a
									className="dropdown-item"
									href="user-profile-my-profile.html#"
								>
									<i className="bi-chat-left-dots dropdown-item-icon" />{" "}
									Report
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
					{/* End Header */}
					{/* Body */}
					<div className="card-body card-body-height">
						{(!hasData) ? (
							<>
								<img
									className="avatar avatar-xxl mb-3"
									src="/assets/svg/illustrations/oc-error.svg"
									alt="Image Description"
									data-hs-theme-appearance="default"
								/>
								<p className="card-text">
									No data to show
								</p>
								<a className="btn btn-white btn-sm" href="index.html#">
									Start your Activity
								</a>
							</>
						) : (
							<ul className="step step-icon-xs mb-0">
								{/* Step Item */}
								<li className="step-item">
									<div className="step-content-wrapper">
										<span className="step-icon step-icon-pseudo step-icon-soft-dark" />
										<div className="step-content">
											<h5 className="step-title">
												<a className="text-dark" href="user-profile.html#">
													Task report - uploaded weekly reports
												</a>
											</h5>
											<p className="fs-5 mb-1">
												Added 3 files to task{" "}
												<a className="text-uppercase" href="user-profile.html#">
													<i className="bi-journal-bookmark-fill" /> Fd-7
												</a>
											</p>
											<ul className="list-group">
												{/* Item */}
												<li className="list-group-item list-group-item-light">
													<div className="row gx-1">
														<div className="col-sm-4">
															<div className="d-flex">
																<span className="flex-shrink-0">
																	<img
																		className="avatar avatar-xs"
																		src="/assets/svg/brands/excel-icon.svg"
																		alt="Image Description"
																	/>
																</span>
																<div className="flex-grow-1 text-truncate ms-2">
																	<span
																		className="d-block fs-6 text-dark text-truncate"
																		title="weekly-reports.xls"
																	>
																		weekly-reports.xls
																	</span>
																	<span className="d-block small text-muted">12kb</span>
																</div>
															</div>
														</div>
														{/* End Col */}
														<div className="col-sm-4">
															<div className="d-flex">
																<span className="flex-shrink-0">
																	<img
																		className="avatar avatar-xs"
																		src="/assets/svg/brands/word-icon.svg"
																		alt="Image Description"
																	/>
																</span>
																<div className="flex-grow-1 text-truncate ms-2">
																	<span
																		className="d-block fs-6 text-dark text-truncate"
																		title="weekly-reports.xls"
																	>
																		weekly-reports.xls
																	</span>
																	<span className="d-block small text-muted">4kb</span>
																</div>
															</div>
														</div>
														{/* End Col */}
														<div className="col-sm-4">
															<div className="d-flex">
																<span className="flex-shrink-0">
																	<img
																		className="avatar avatar-xs"
																		src="/assets/svg/brands/word-icon.svg"
																		alt="Image Description"
																	/>
																</span>
																<div className="flex-grow-1 text-truncate ms-2">
																	<span
																		className="d-block fs-6 text-dark text-truncate"
																		title="monthly-reports.xls"
																	>
																		monthly-reports.xls
																	</span>
																	<span className="d-block small text-muted">8kb</span>
																</div>
															</div>
														</div>
														{/* End Col */}
													</div>
													{/* End Row */}
												</li>
												{/* End Item */}
											</ul>
											<span className="text-muted small text-uppercase">Now</span>
										</div>
									</div>
								</li>
								{/* End Step Item */}
								{/* Step Item */}
								<li className="step-item">
									<div className="step-content-wrapper">
										<span className="step-icon step-icon-pseudo step-icon-soft-dark" />
										<div className="step-content">
											<h5 className="step-title">
												<a className="text-dark" href="user-profile.html#">
													Project status updated
												</a>
											</h5>
											<p className="fs-5 mb-1">
												Marked{" "}
												<a className="text-uppercase" href="user-profile.html#">
													<i className="bi-journal-bookmark-fill" /> Fr-6
												</a>{" "}
												as{" "}
												<span className="badge bg-soft-success text-success rounded-pill">
													<span className="legend-indicator bg-success" />
													"Completed"
												</span>
											</p>
											<span className="text-muted small text-uppercase">Today</span>
										</div>
									</div>
								</li>
								{/* End Step Item */}
								{/* Step Item */}
								<li className="step-item">
									<div className="step-content-wrapper">
										<span className="step-icon step-icon-pseudo step-icon-soft-dark" />
										<div className="step-content">
											<h5 className="step-title">
												<a className="text-dark" href="user-profile.html#">
													New card styles added
												</a>
											</h5>
											<p className="fs-5 mb-1">
												Added 3 card to <a href="user-profile.html#">Payments</a>
											</p>
											<ul className="list-group">
												{/* Item */}
												<li className="list-group-item list-group-item-light">
													<div className="row gx-2">
														<div className="col">
															<img
																className="img-fluid rounded-2"
																src="/assets/svg/components/card-1.svg"
																alt="Image Description"
															/>
														</div>
														<div className="col">
															<img
																className="img-fluid rounded-2"
																src="/assets/svg/components/card-2.svg"
																alt="Image Description"
															/>
														</div>
														<div className="col">
															<img
																className="img-fluid rounded-2"
																src="/assets/svg/components/card-3.svg"
																alt="Image Description"
															/>
														</div>
													</div>
												</li>
												{/* Item */}
											</ul>
											<span className="text-muted small text-uppercase">May 12</span>
										</div>
									</div>
								</li>
								{/* End Step Item */}
								{/* Step Item */}
								<li className="step-item">
									<div className="step-content-wrapper">
										<span className="step-icon step-icon-pseudo step-icon-soft-dark" />
										<div className="step-content">
											<h5 className="step-title">
												<a className="text-dark" href="user-profile.html#">
													Dean added a new team member
												</a>
											</h5>
											<p className="fs-5 mb-1">Added a new member to Front Dashboard</p>
											<span className="text-muted small text-uppercase">May 15</span>
										</div>
									</div>
								</li>
								{/* End Step Item */}
								{/* Step Item */}
								<li className="step-item">
									<div className="step-content-wrapper">
										<span className="step-icon step-icon-pseudo step-icon-soft-dark" />
										<div className="step-content">
											<h5 className="step-title">
												<a className="text-dark" href="user-profile.html#">
													Project status updated
												</a>
											</h5>
											<p className="fs-5 mb-1">
												Marked{" "}
												<a className="text-uppercase" href="user-profile.html#">
													<i className="bi-journal-bookmark-fill" /> Fr-3
												</a>{" "}
												as{" "}
												<span className="badge bg-soft-primary text-primary rounded-pill">
													<span className="legend-indicator bg-primary" />
													"In progress"
												</span>
											</p>
											<span className="text-muted small text-uppercase">Apr 29</span>
										</div>
									</div>
								</li>
								{/* End Step Item */}
								{/* Step Item */}
								<li className="step-item">
									<div className="step-content-wrapper">
										<span className="step-icon step-icon-pseudo step-icon-soft-dark" />
										<div className="step-content">
											<h5 className="step-title">
												<a className="text-dark" href="user-profile.html#">
													Achievements
												</a>
											</h5>
											<p className="fs-5 mb-1">
												Earned a "Top endorsed"{" "}
												<i className="tio-verified text-primary" /> badge
											</p>
											<span className="text-muted small text-uppercase">Apr 06</span>
										</div>
									</div>
								</li>
								{/* End Step Item */}
								{/* Step Item */}
								<li id="collapseActivitySection" className="step-item collapse">
									<div className="step-content-wrapper">
										<span className="step-icon step-icon-pseudo step-icon-soft-dark" />
										<div className="step-content">
											<h5 className="step-title">
												<a className="text-dark" href="user-profile.html#">
													Project status updated
												</a>
											</h5>
											<p className="fs-5 mb-1">
												Updated{" "}
												<a className="text-uppercase" href="user-profile.html#">
													<i className="bi-journal-bookmark-fill" /> Fr-3
												</a>{" "}
												as{" "}
												<span className="badge bg-soft-secondary text-secondary rounded-pill">
													<span className="legend-indicator bg-secondary" />
													"To do"
												</span>
											</p>
											<span className="text-muted small text-uppercase">Feb 10</span>
										</div>
									</div>
								</li>
							</ul>
						)}
					</div>
				</div>
				<div className="card card-centered mb-3 mb-lg-5">
					<div className="card-header card-header-content-between">
						<h4 className="card-header-title">
							Projects
						</h4>
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
								id="projectReportDropdown"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<i className="bi-three-dots-vertical" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end mt-1"
								aria-labelledby="projectReportDropdown"
							>
								<span className="dropdown-header">
									Account
								</span>
								<a
									className="dropdown-item"
									href="user-profile-my-profile.html#"
								>
									<i className="bi-share-fill dropdown-item-icon" />{" "}
									Share connections
								</a>
								<a
									className="dropdown-item"
									href="user-profile-my-profile.html#"
								>
									<i className="bi-info-circle dropdown-item-icon" />{" "}
									Suggest edits
								</a>
								<div className="dropdown-divider" />
								<span className="dropdown-header">Feedback</span>
								<a
									className="dropdown-item"
									href="user-profile-my-profile.html#"
								>
									<i className="bi-chat-left-dots dropdown-item-icon" />{" "}
									Report
								</a>
							</div>
						</div>
					</div>
					<div className="card-body card-body-height card-body-centered">
						<img
							className="avatar avatar-xxl mb-3"
							src="/assets/svg/illustrations/oc-error.svg"
							alt="Image Description"
							data-hs-theme-appearance="default"
						/>
						<p className="card-text">No data to show</p>
						<a className="btn btn-white btn-sm" href="projects.html">
							Start your Projects
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Account;

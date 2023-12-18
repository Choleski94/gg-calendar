import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import api from '@api';
import config from '@config';
import Modal from '@components/Modal';
import Layout from '@components/Layout';
import formatMessage from '@utils/formatMessage';
// import getServerSideProps from '@utils/getServerSideProps';

const SUPPORTED_SECTIONS = {
	TEAMS: 'TEAMS',
	ACCOUNT: 'ACCOUNT',
	PROJECTS: 'PROJECTS',
	CONNECTIONS: 'CONNECTIONS',
};

// className="nav-link disabled"

const setLinkClassName = (activeSection, currentSection) => [
	'nav-link',
	(currentSection === activeSection ? ' active' : '')
].join('');

const Profile = () => {

	const [data, setData] = React.useState({});
	const [optionMode, setOptionMode] = React.useState(false);
	const [activeSection, setActiveSection] = React.useState(SUPPORTED_SECTIONS.ACCOUNT);

	React.useState(() => {
		console.log('Mounted...');
	}, []);

	const handleToggleEditMode = (e) => {
		e.preventDefault();
	};	

	const handleToggleOptionMode = (e) => {
		e.preventDefault();
		setOptionMode(!optionMode);
	};

	const setCurrentSection = (e, section) => {
		e.preventDefault();
		if (section !== activeSection) {
			setActiveSection(section);
		}
	};

	const hasData = React.useMemo(() => (
		Boolean(Object.keys(data || {}).length)
	), [data]);

	return (
		<>
			<Head>
				<title>
					{formatMessage("meta.title.text")}
				</title>
			</Head>
			<Layout>
				<div className="content container-fluid">
					<div className="row justify-content-lg-center">
						<div className="col-lg-10">
							{/* Account Cover */}
							<div className="profile-cover">
								<div className="profile-cover-img-wrapper">
									<img
										id="profileCoverImg"
										className="profile-cover-img"
										src="/assets/img/1920x400/img2.jpg"
										alt="Image Description"
									/>
								</div>
							</div>
							{/* End Account Cover */}
							{/* Account Header */}
							<div className="text-center mb-5">
								{/* Avatar */}
								<label
									className="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar"
									htmlFor="editAvatarUploaderModal"
								>
									<img
										id="editAvatarImgModal"
										className="avatar-img"
										src="/assets/img/160x160/img6.jpg"
										alt="Image Description"
									/>
									<input
										type="file"
										className="js-file-attach avatar-uploader-input"
										id="editAvatarUploaderModal"
									/>
								</label>
								{/* End Avatar */}
								<h1 className="page-header-title">
									Mark Williams{" "}
									<i
										className="bi-patch-check-fill fs-2 text-primary"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										aria-label="Top endorsed"
										data-bs-original-title="Top endorsed"
									/>
								</h1>
								{/* List */}
								<ul className="list-inline list-px-2">
									<li className="list-inline-item">
										<i className="bi-building me-1" />
										<span>Pixeel Ltd.</span>
									</li>
									<li className="list-inline-item">
										<i className="bi-geo-alt me-1" />
										<a href="user-profile-my-profile.html#">London,</a>
										<a href="user-profile-my-profile.html#">UK</a>
									</li>
									<li className="list-inline-item">
										<i className="bi-calendar-week me-1" />
										<span>Joined March 2013</span>
									</li>
								</ul>
								{/* End List */}
							</div>
							<div className="js-nav-scroller hs-nav-scroller-horizontal mb-5">
								<span
									className="hs-nav-scroller-arrow-prev"
									style={{ display: "none" }}
								>
									<a className="hs-nav-scroller-arrow-link">
										<i className="bi-chevron-left" />
									</a>
								</span>
								<span
									className="hs-nav-scroller-arrow-next"
									style={{ display: "none" }}
								>
									<a className="hs-nav-scroller-arrow-link">
										<i className="bi-chevron-right" />
									</a>
								</span>
								<ul className="nav nav-tabs align-items-center">
									<li className="nav-item">
										<a
											href="#account"
											onClick={(e) => setCurrentSection(e, SUPPORTED_SECTIONS.ACCOUNT)}
											className={setLinkClassName(activeSection, SUPPORTED_SECTIONS.ACCOUNT)}
										>
											Account
										</a>
									</li>
									<li className="nav-item">
										<a
											href="#teams"
											onClick={(e) => setCurrentSection(e, SUPPORTED_SECTIONS.TEAMS)}
											className={setLinkClassName(activeSection, SUPPORTED_SECTIONS.TEAMS)}
										>
											Teams
										</a>
									</li>
									<li className="nav-item">
										<a
											href="#projects"
											onClick={(e) => setCurrentSection(e, SUPPORTED_SECTIONS.PROJECTS)}
											className={setLinkClassName(activeSection, SUPPORTED_SECTIONS.PROJECTS)}
										>
											Projects
											<span className="badge bg-soft-dark text-dark rounded-circle ms-1">
												3
											</span>
										</a>
									</li>
									<li className="nav-item">
										<a
											href="#connections"
											onClick={(e) => setCurrentSection(e, SUPPORTED_SECTIONS.CONNECTIONS)}
											className={setLinkClassName(activeSection, SUPPORTED_SECTIONS.CONNECTIONS)}
										>
											Connections
										</a>
									</li>
									<li className="nav-item ms-auto">
										<div className="d-flex gap-2">
											<a
												href="#"
												onClick={handleToggleEditMode}
												className="btn btn-white btn-sm"
											>
												<>
													<i className="bi-person-plus-fill" />
													&nbsp;
													Connect
												</>
											</a>
											<div className="dropdown nav-scroller-dropdown">
												<button
													type="button"
													id="profileDropdown"
													aria-expanded="false"
													data-bs-toggle="dropdown"
													onClick={handleToggleOptionMode}
													className="btn btn-white btn-icon btn-sm"
												>
													<i className="bi-three-dots-vertical" />
												</button>
												<div
													className="dropdown-menu dropdown-menu-end mt-1"
													aria-labelledby="profileDropdown"
												>
													<span className="dropdown-header">Account</span>
													<a
														className="dropdown-item"
														href="user-profile-my-profile.html#"
													>
														<i className="bi-share-fill dropdown-item-icon" />{" "}
														Share profile
													</a>
													<a
														className="dropdown-item"
														href="user-profile-my-profile.html#"
													>
														<i className="bi-slash-circle dropdown-item-icon" />{" "}
														Block page and profile
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
														<i className="bi-flag dropdown-item-icon" /> Report
													</a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="row justify-content-lg-center">
								{(activeSection === SUPPORTED_SECTIONS.ACCOUNT) && (
									<>
										<div className="col-lg-4">
											{/* Card */}
											<div className="card card-body mb-3 mb-lg-5">
												<h5>Complete your profile</h5>
												{/* Progress */}
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
												{/* End Progress */}
											</div>
											{/* End Card */}
											{/* Card */}
											<div className="card mb-3 mb-lg-5">
												{/* Header */}
												<div className="card-header card-header-content-between">
													<h4 className="card-header-title">Account</h4>
												</div>
												{/* End Header */}
												{/* Body */}
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
											{/* Card */}
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
															{/* End Step Item */}
														</ul>
													)}
												</div>
												{/* End Body */}
											</div>
											{/* End Card */}
											{/* Card */}
											<div className="card card-centered mb-3 mb-lg-5">
												{/* Header */}
												<div className="card-header card-header-content-between">
													<h4 className="card-header-title">
														Projects
													</h4>
													{/* Dropdown */}
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
												{(!hasData) ? (
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
												) : (
													<div className="table-responsive">
														<table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
															<thead className="thead-light">
																<tr>
																	<th>Project</th>
																	<th style={{ width: "40%" }}>Progress</th>
																	<th className="table-text-end">Hours spent</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		<div className="d-flex">
																			<span className="avatar avatar-xs avatar-soft-dark avatar-circle">
																				<span className="avatar-initials">U</span>
																			</span>
																			<div className="ms-3">
																				<h5 className="mb-0">UI/UX</h5>
																				<small>Updated 2 hours ago</small>
																			</div>
																		</div>
																	</td>
																	<td>
																		<div className="d-flex align-items-center">
																			<span className="me-3">0%</span>
																			<div className="progress table-progress">
																				<div
																					className="progress-bar"
																					role="progressbar"
																					style={{ width: "0%" }}
																					aria-valuenow={0}
																					aria-valuemin={0}
																					aria-valuemax={100}
																				/>
																			</div>
																		</div>
																	</td>
																	<td className="table-text-end">4:25</td>
																</tr>
																<tr>
																	<td>
																		<div className="d-flex">
																			<img
																				className="avatar avatar-xs"
																				src="/assets/svg/brands/spec-icon.svg"
																				alt="Image Description"
																			/>
																			<div className="ms-3">
																				<h5 className="mb-0">Get a complete audit store</h5>
																				<small>Updated 1 day ago</small>
																			</div>
																		</div>
																	</td>
																	<td>
																		<div className="d-flex align-items-center">
																			<span className="me-3">45%</span>
																			<div className="progress table-progress">
																				<div
																					className="progress-bar"
																					role="progressbar"
																					style={{ width: "45%" }}
																					aria-valuenow={45}
																					aria-valuemin={0}
																					aria-valuemax={100}
																				/>
																			</div>
																		</div>
																	</td>
																	<td className="table-text-end">18:42</td>
																</tr>
																<tr>
																	<td>
																		<div className="d-flex">
																			<img
																				className="avatar avatar-xs"
																				src="/assets/svg/brands/capsule-icon.svg"
																				alt="Image Description"
																			/>
																			<div className="ms-3">
																				<h5 className="mb-0">
																					Build stronger customer relationships
																				</h5>
																				<small>Updated 2 days ago</small>
																			</div>
																		</div>
																	</td>
																	<td>
																		<div className="d-flex align-items-center">
																			<span className="me-3">59%</span>
																			<div className="progress table-progress">
																				<div
																					className="progress-bar"
																					role="progressbar"
																					style={{ width: "59%" }}
																					aria-valuenow={59}
																					aria-valuemin={0}
																					aria-valuemax={100}
																				/>
																			</div>
																		</div>
																	</td>
																	<td className="table-text-end">9:01</td>
																</tr>
																<tr>
																	<td>
																		<div className="d-flex">
																			<img
																				className="avatar avatar-xs"
																				src="/assets/svg/brands/mailchimp-icon.svg"
																				alt="Image Description"
																			/>
																			<div className="ms-3">
																				<h5 className="mb-0">Update subscription method</h5>
																				<small>Updated 2 days ago</small>
																			</div>
																		</div>
																	</td>
																	<td>
																		<div className="d-flex align-items-center">
																			<span className="me-3">57%</span>
																			<div className="progress table-progress">
																				<div
																					className="progress-bar bg-success"
																					role="progressbar"
																					style={{ width: "57%" }}
																					aria-valuenow={57}
																					aria-valuemin={0}
																					aria-valuemax={100}
																				/>
																			</div>
																		</div>
																	</td>
																	<td className="table-text-end">0:37</td>
																</tr>
																<tr>
																	<td>
																		<div className="d-flex">
																			<img
																				className="avatar avatar-xs"
																				src="/assets/svg/brands/figma-icon.svg"
																				alt="Image Description"
																			/>
																			<div className="ms-3">
																				<h5 className="mb-0">Create a new theme</h5>
																				<small>Updated 1 week ago</small>
																			</div>
																		</div>
																	</td>
																	<td>
																		<div className="d-flex align-items-center">
																			<span className="me-3">100%</span>
																			<div className="progress table-progress">
																				<div
																					className="progress-bar bg-success"
																					role="progressbar"
																					style={{ width: "100%" }}
																					aria-valuenow={100}
																					aria-valuemin={0}
																					aria-valuemax={100}
																				/>
																			</div>
																		</div>
																	</td>
																	<td className="table-text-end">24:12</td>
																</tr>
																<tr>
																	<td>
																		<div className="d-flex">
																			<span className="avatar avatar-xs avatar-soft-info avatar-circle">
																				<span className="avatar-initials">I</span>
																			</span>
																			<div className="ms-3">
																				<h5 className="mb-0">Improve social banners</h5>
																				<small>Updated 1 week ago</small>
																			</div>
																		</div>
																	</td>
																	<td>
																		<div className="d-flex align-items-center">
																			<span className="me-3">0%</span>
																			<div className="progress table-progress">
																				<div
																					className="progress-bar"
																					role="progressbar"
																					style={{ width: "0%" }}
																					aria-valuenow={0}
																					aria-valuemin={0}
																					aria-valuemax={100}
																				/>
																			</div>
																		</div>
																	</td>
																	<td className="table-text-end">8:08</td>
																</tr>
															</tbody>
														</table>
													</div>
												)}
												{/* End Body */}
											</div>
											{/* End Card */}
										</div>
										{/* End Col */}
									</>
								)}

								{(activeSection === SUPPORTED_SECTIONS.TEAMS) && (
									<div className="col-lg-12">
										<div className="row align-items-center mb-5">
											<div className="col">
												<h3 className="mb-0">7 teams</h3>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Nav */}
												<ul className="nav nav-segment" id="profileTeamsTab" role="tablist">
													<li className="nav-item" role="presentation">
														<a
															className="nav-link active"
															id="grid-tab"
															data-bs-toggle="tab"
															href="user-profile-teams.html#grid"
															role="tab"
															aria-controls="grid"
															aria-selected="true"
															title="Column view"
														>
															<i className="bi-grid" />
														</a>
													</li>
													<li className="nav-item" role="presentation">
														<a
															className="nav-link"
															id="list-tab"
															data-bs-toggle="tab"
															href="user-profile-teams.html#list"
															role="tab"
															aria-controls="list"
															aria-selected="false"
															title="List view"
															tabIndex={-1}
														>
															<i className="bi-view-list" />
														</a>
													</li>
												</ul>
												{/* End Nav */}
											</div>
											{/* End Col */}
										</div>
										{/* End Row */}
										{/* Tab Content */}
										<div className="tab-content" id="profileTeamsTabContent">
											<div
												className="tab-pane fade show active"
												id="grid"
												role="tabpanel"
												aria-labelledby="grid-tab"
											>
												{/* Teams */}
												<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															{/* Body */}
															<div className="card-body pb-0">
																<div className="row align-items-center mb-2">
																	<div className="col-9">
																		<h4 className="mb-1">
																			<a href="user-profile-teams.html#">
																				#digitalmarketing
																			</a>
																		</h4>
																	</div>
																	{/* End Col */}
																	<div className="col-3 text-end">
																		{/* Dropdown */}
																		<div className="dropdowm">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																				id="teamsDropdown1"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																				aria-labelledby="teamsDropdown1"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Rename team
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Archive team
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-teams.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
																<p>
																	Our group promotes and sells products and services by
																	leveraging online marketing tactics
																</p>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer border-0 pt-0">
																<div className="list-group list-group-flush list-group-no-gutters">
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Industry:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				<a
																					className="badge bg-soft-primary text-primary p-2"
																					href="user-profile-teams.html#"
																				>
																					Marketing team
																				</a>
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Rated:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Stars */}
																				<div className="d-flex gap-1">
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star-half.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="default"
																					/>
																					<img
																						src="/assets/svg/illustrations-light/star-half.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="dark"
																					/>
																				</div>
																				{/* End Stars */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Members:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Avatar Group */}
																				<div className="avatar-group avatar-group-xs avatar-circle">
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Ella Lauda"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img9.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="David Harrison"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img3.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-dark"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Antony Taylor"
																					>
																						<span className="avatar-initials">A</span>
																					</span>
																					<span
																						className="avatar avatar-soft-info"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Sara Iwens"
																					>
																						<span className="avatar-initials">S</span>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Finch Hoot"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img5.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-light avatar-circle"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Sam Kart, Amanda Harvey and 1 more"
																					>
																						<span className="avatar-initials">+3</span>
																					</span>
																				</div>
																				{/* End Avatar Group */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																</div>
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															{/* Body */}
															<div className="card-body pb-0">
																<div className="row align-items-center mb-2">
																	<div className="col-9">
																		<h4 className="mb-1">
																			<a href="user-profile-teams.html#">#ethereum</a>
																		</h4>
																	</div>
																	<div className="col-3 text-end">
																		{/* Dropdown */}
																		<div className="dropdowm">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																				id="teamsDropdown2"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																				aria-labelledby="teamsDropdown2"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Rename team
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Archive team
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-teams.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
																<p>Focusing on innovative and disruptive business models</p>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer border-0 pt-0">
																<div className="list-group list-group-flush list-group-no-gutters">
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Industry:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				<a
																					className="badge bg-soft-dark text-dark p-2"
																					href="user-profile-teams.html#"
																				>
																					Blockchain
																				</a>
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Rated:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Stars */}
																				<div className="d-flex gap-1">
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star-muted.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="default"
																					/>
																					<img
																						src="/assets/svg/illustrations-light/star-muted.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="dark"
																					/>
																				</div>
																				{/* End Stars */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Members:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Avatar Group */}
																				<div className="avatar-group avatar-group-xs avatar-circle">
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Sam Kart"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img4.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-danger"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Teresa Eyker"
																					>
																						<span className="avatar-initials">T</span>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Amanda Harvey"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img10.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="David Harrison"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img3.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-warning"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Olivier L."
																					>
																						<span className="avatar-initials">O</span>
																					</span>
																					<span
																						className="avatar avatar-light avatar-circle"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Brian Halligan, Rachel Doe and 7 more"
																					>
																						<span className="avatar-initials">+9</span>
																					</span>
																				</div>
																				{/* End Avatar Group */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																</div>
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															{/* Body */}
															<div className="card-body pb-0">
																<div className="row align-items-center mb-2">
																	<div className="col-9">
																		<h4 className="mb-1">
																			<a href="user-profile-teams.html#">#conference</a>
																		</h4>
																	</div>
																	<div className="col-3 text-end">
																		{/* Dropdown */}
																		<div className="dropdowm">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																				id="teamsDropdown3"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																				aria-labelledby="teamsDropdown3"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Rename team
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Archive team
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-teams.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
																<p>Online meeting services group</p>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer border-0 pt-0">
																<div className="list-group list-group-flush list-group-no-gutters">
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Industry:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				<a
																					className="badge bg-soft-info text-info p-2"
																					href="user-profile-teams.html#"
																				>
																					Marketing team
																				</a>
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Rated:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Stars */}
																				<div className="d-flex gap-1">
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star-half.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="default"
																					/>
																					<img
																						src="/assets/svg/illustrations-light/star-half.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="dark"
																					/>
																				</div>
																				{/* End Stars */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Members:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Avatar Group */}
																				<div className="avatar-group avatar-group-xs avatar-circle">
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Costa Quinn"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img6.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Clarice Boone"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img7.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-dark"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Zack Ins"
																					>
																						<span className="avatar-initials">Z</span>
																					</span>
																				</div>
																				{/* End Avatar Group */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																</div>
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															{/* Body */}
															<div className="card-body pb-0">
																<div className="row align-items-center mb-2">
																	<div className="col-9">
																		<h4 className="mb-1">
																			<a href="user-profile-teams.html#">#supportteam</a>
																		</h4>
																	</div>
																	<div className="col-3 text-end">
																		{/* Dropdown */}
																		<div className="dropdowm">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																				id="teamsDropdown5"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																				aria-labelledby="teamsDropdown5"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Rename team
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Archive team
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-teams.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
																<p>Keep in touch and stay productive with us</p>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer border-0 pt-0">
																<div className="list-group list-group-flush list-group-no-gutters">
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Industry:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				<a
																					className="badge bg-soft-danger text-danger p-2"
																					href="user-profile-teams.html#"
																				>
																					Customer service
																				</a>
																			</div>
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Rated:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Stars */}
																				<div className="d-flex gap-1">
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star-half.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="default"
																					/>
																					<img
																						src="/assets/svg/illustrations-light/star-half.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="dark"
																					/>
																				</div>
																				{/* End Stars */}
																			</div>
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Members:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Avatar Group */}
																				<div className="avatar-group avatar-group-xs avatar-circle">
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Costa Quinn"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img6.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Clarice Boone"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img7.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-dark"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Adam Keep"
																					>
																						<span className="avatar-initials">A</span>
																					</span>
																				</div>
																				{/* End Avatar Group */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																</div>
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															{/* Body */}
															<div className="card-body pb-0">
																<div className="row align-items-center mb-2">
																	<div className="col-9">
																		<h4 className="mb-1">
																			<a href="user-profile-teams.html#">#invoices</a>
																		</h4>
																	</div>
																	<div className="col-3 text-end">
																		{/* Dropdown */}
																		<div className="dropdowm">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																				id="teamsDropdown4"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																				aria-labelledby="teamsDropdown4"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Rename team
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Archive team
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-teams.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
																<p>
																	This group serves online money transfers as an electronic
																	alternative to paper methods
																</p>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer border-0 pt-0">
																<div className="list-group list-group-flush list-group-no-gutters">
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Industry:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				<a
																					className="badge bg-soft-primary text-primary p-2"
																					href="user-profile-teams.html#"
																				>
																					Online payment
																				</a>
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Rated:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Stars */}
																				<div className="d-flex gap-1">
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star-muted.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="default"
																					/>
																					<img
																						src="/assets/svg/illustrations-light/star-muted.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="dark"
																					/>
																				</div>
																				{/* End Stars */}
																			</div>
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Members:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Avatar Group */}
																				<div className="avatar-group avatar-group-xs avatar-circle">
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Finch Hoot"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img5.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-dark"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Bob Bardly"
																					>
																						<span className="avatar-initials">B</span>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Linda Bates"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img8.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Ella Lauda"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img9.jpg"
																							alt="Image Description"
																						/>
																					</span>
																				</div>
																				{/* End Avatar Group */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																</div>
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															{/* Body */}
															<div className="card-body pb-0">
																<div className="row align-items-center mb-2">
																	<div className="col-9">
																		<h4 className="mb-1">
																			<a href="user-profile-teams.html#">#payments</a>
																		</h4>
																	</div>
																	<div className="col-3 text-end">
																		{/* Dropdown */}
																		<div className="dropdowm">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																				id="teamsDropdown6"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																				aria-labelledby="teamsDropdown6"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Rename team
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Archive team
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-teams.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
																<p>
																	Our responsibility to manage the money in this
																	organization
																</p>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer border-0 pt-0">
																<div className="list-group list-group-flush list-group-no-gutters">
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Industry:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				<a
																					className="badge bg-soft-info text-info p-2"
																					href="user-profile-teams.html#"
																				>
																					Finance
																				</a>
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Rated:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Stars */}
																				<div className="d-flex gap-1">
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																				</div>
																				{/* End Stars */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Members:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Avatar Group */}
																				<div className="avatar-group avatar-group-xs avatar-circle">
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Amanda Harvey"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img10.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="David Harrison"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img3.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-info"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Lisa Iston"
																					>
																						<span className="avatar-initials">L</span>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Sam Kart"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img4.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-dark"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Zack Ins"
																					>
																						<span className="avatar-initials">Z</span>
																					</span>
																					<span
																						className="avatar avatar-light avatar-circle"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Lewis Clarke, Chris Mathew and 3 more"
																					>
																						<span className="avatar-initials">+5</span>
																					</span>
																				</div>
																				{/* End Avatar Group */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																</div>
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															{/* Body */}
															<div className="card-body pb-0">
																<div className="row align-items-center mb-2">
																	<div className="col-9">
																		<h4 className="mb-1">
																			<a href="user-profile-teams.html#">#event</a>
																		</h4>
																	</div>
																	<div className="col-3 text-end">
																		{/* Dropdown */}
																		<div className="dropdowm">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																				id="teamsDropdown7"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																				aria-labelledby="teamsDropdown7"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Rename team
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-teams.html#"
																				>
																					Archive team
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-teams.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
																<p>
																	Because we love to know what's going on &amp; share great
																	ideas
																</p>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer border-0 pt-0">
																<div className="list-group list-group-flush list-group-no-gutters">
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Industry:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				<a
																					className="badge bg-soft-dark text-dark p-2"
																					href="user-profile-teams.html#"
																				>
																					Organizers
																				</a>
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Rated:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Stars */}
																				<div className="d-flex gap-1">
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star.svg"
																						alt="Review rating"
																						width={14}
																					/>
																					<img
																						src="/assets/svg/illustrations/star-muted.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="default"
																					/>
																					<img
																						src="/assets/svg/illustrations-light/star-muted.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="dark"
																					/>
																					<img
																						src="/assets/svg/illustrations/star-muted.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="default"
																					/>
																					<img
																						src="/assets/svg/illustrations-light/star-muted.svg"
																						alt="Review rating"
																						width={14}
																						data-hs-theme-appearance="dark"
																					/>
																				</div>
																				{/* End Stars */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																	{/* List Item */}
																	<div className="list-group-item">
																		<div className="row align-items-center">
																			<div className="col">
																				<span className="card-subtitle">Members:</span>
																			</div>
																			{/* End Col */}
																			<div className="col-auto">
																				{/* Avatar Group */}
																				<div className="avatar-group avatar-group-xs avatar-circle">
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Costa Quinn"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img6.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-info"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Bob Bardly"
																					>
																						<span className="avatar-initials">B</span>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Clarice Boone"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img7.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Sam Kart"
																					>
																						<img
																							className="avatar-img"
																							src="/assets/img/160x160/img4.jpg"
																							alt="Image Description"
																						/>
																					</span>
																					<span
																						className="avatar avatar-soft-primary"
																						data-toggle="tooltip"
																						data-placement="top"
																						title="Daniel Cs."
																					>
																						<span className="avatar-initials">D</span>
																					</span>
																				</div>
																				{/* End Avatar Group */}
																			</div>
																			{/* End Col */}
																		</div>
																	</div>
																	{/* End List Item */}
																</div>
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
												</div>
												{/* End Teams */}
											</div>
											<div
												className="tab-pane fade"
												id="list"
												role="tabpanel"
												aria-labelledby="list-tab"
											>
												<div className="row row-cols-1">
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="row align-items-md-center">
																<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																	<h4>
																		<a href="user-profile-teams.html#">#digitalmarketing</a>
																	</h4>
																	<a
																		className="badge bg-soft-primary text-primary p-2"
																		href="user-profile-teams.html#"
																	>
																		Marketing team
																	</a>
																</div>
																<div className="col-3 col-md-auto order-md-last text-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="teamsListDropdown1"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="teamsListDropdown1"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Rename team
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Add to favorites
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Archive team
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-teams.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
																{/* End Col */}
																<div className="col-sm mb-2 mb-sm-0">
																	<p>
																		Our group promotes and sells products and services by
																		leveraging online marketing tactics
																	</p>
																</div>
																{/* End Col */}
																<div className="col-sm-auto">
																	{/* Stars */}
																	<div className="d-flex gap-1 mb-2">
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star-half.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="default"
																		/>
																		<img
																			src="/assets/svg/illustrations-light/star-half.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="dark"
																		/>
																	</div>
																	{/* End Stars */}
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-xs avatar-circle">
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Ella Lauda"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img9.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="David Harrison"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img3.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-dark"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Antony Taylor"
																		>
																			<span className="avatar-initials">A</span>
																		</span>
																		<span
																			className="avatar avatar-soft-info"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Sara Iwens"
																		>
																			<span className="avatar-initials">S</span>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Finch Hoot"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img5.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-light avatar-circle"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Sam Kart, Amanda Harvey and 1 more"
																		>
																			<span className="avatar-initials">+3</span>
																		</span>
																	</div>
																	{/* End Avatar Group */}
																</div>
																{/* End Col */}
															</div>
															{/* End Row */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="row align-items-md-center">
																<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																	<h4>
																		<a href="user-profile-teams.html#">#ethereum</a>
																	</h4>
																	<a
																		className="badge bg-soft-dark text-dark p-2"
																		href="user-profile-teams.html#"
																	>
																		Blockchain
																	</a>
																</div>
																<div className="col-3 col-md-auto order-md-last text-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="teamsListDropdown2"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="teamsListDropdown2"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Rename team
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Add to favorites
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Archive team
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-teams.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
																{/* End Col */}
																<div className="col-sm mb-2 mb-sm-0">
																	<p>
																		Focusing on innovative and disruptive business models
																	</p>
																</div>
																{/* End Col */}
																<div className="col-sm-auto">
																	{/* Stars */}
																	<div className="d-flex gap-1 mb-2">
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star-muted.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="default"
																		/>
																		<img
																			src="/assets/svg/illustrations-light/star-muted.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="dark"
																		/>
																	</div>
																	{/* End Stars */}
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-xs avatar-circle">
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Sam Kart"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img4.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-danger"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Teresa Eyker"
																		>
																			<span className="avatar-initials">T</span>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Amanda Harvey"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img10.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="David Harrison"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img3.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-warning"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Olivier L."
																		>
																			<span className="avatar-initials">O</span>
																		</span>
																		<span
																			className="avatar avatar-light avatar-circle"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Brian Halligan, Rachel Doe and 7 more"
																		>
																			<span className="avatar-initials">+9</span>
																		</span>
																	</div>
																	{/* End Avatar Group */}
																</div>
																{/* End Col */}
															</div>
															{/* End Row */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="row align-items-md-center">
																<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																	<h4>
																		<a href="user-profile-teams.html#">#conference</a>
																	</h4>
																	<a
																		className="badge bg-soft-info text-info p-2"
																		href="user-profile-teams.html#"
																	>
																		Marketing team
																	</a>
																</div>
																<div className="col-3 col-md-auto order-md-last text-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="teamsListDropdown3"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="teamsListDropdown3"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Rename team
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Add to favorites
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Archive team
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-teams.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
																{/* End Col */}
																<div className="col-sm mb-2 mb-sm-0">
																	<p>Online meeting services group</p>
																</div>
																{/* End Col */}
																<div className="col-sm-auto">
																	{/* Stars */}
																	<div className="d-flex gap-1 mb-2">
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star-half.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="default"
																		/>
																		<img
																			src="/assets/svg/illustrations-light/star-half.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="dark"
																		/>
																	</div>
																	{/* End Stars */}
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-xs avatar-circle">
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Costa Quinn"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img6.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Clarice Boone"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img7.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-dark"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Zack Ins"
																		>
																			<span className="avatar-initials">Z</span>
																		</span>
																	</div>
																	{/* End Avatar Group */}
																</div>
																{/* End Col */}
															</div>
															{/* End Row */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="row align-items-md-center">
																<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																	<h4>
																		<a href="user-profile-teams.html#">#supportteam</a>
																	</h4>
																	<a
																		className="badge bg-soft-danger text-danger p-2"
																		href="user-profile-teams.html#"
																	>
																		Customer service
																	</a>
																</div>
																<div className="col-3 col-md-auto order-md-last text-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="teamsListDropdown4"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="teamsListDropdown4"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Rename team
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Add to favorites
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Archive team
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-teams.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
																{/* End Col */}
																<div className="col-sm mb-2 mb-sm-0">
																	<p>Keep in touch and stay productive with us</p>
																</div>
																{/* End Col */}
																<div className="col-sm-auto">
																	{/* Stars */}
																	<div className="d-flex gap-1 mb-2">
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star-half.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="default"
																		/>
																		<img
																			src="/assets/svg/illustrations-light/star-half.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="dark"
																		/>
																	</div>
																	{/* End Stars */}
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-xs avatar-circle">
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Costa Quinn"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img6.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Clarice Boone"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img7.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-dark"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Adam Keep"
																		>
																			<span className="avatar-initials">A</span>
																		</span>
																	</div>
																	{/* End Avatar Group */}
																</div>
																{/* End Col */}
															</div>
															{/* End Row */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="row align-items-md-center">
																<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																	<h4>
																		<a href="user-profile-teams.html#">#invoices</a>
																	</h4>
																	<a
																		className="badge bg-soft-primary text-primary p-2"
																		href="user-profile-teams.html#"
																	>
																		Online payment
																	</a>
																</div>
																<div className="col-3 col-md-auto order-md-last text-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="teamsListDropdown5"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="teamsListDropdown5"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Rename team
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Add to favorites
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Archive team
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-teams.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
																{/* End Col */}
																<div className="col-sm mb-2 mb-sm-0">
																	<p>
																		This group serves online money transfers as an
																		electronic alternative to paper methods
																	</p>
																</div>
																{/* End Col */}
																<div className="col-sm-auto">
																	{/* Stars */}
																	<div className="d-flex gap-1 mb-2">
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star-muted.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="default"
																		/>
																		<img
																			src="/assets/svg/illustrations-light/star-muted.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="dark"
																		/>
																	</div>
																	{/* End Stars */}
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-xs avatar-circle">
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Finch Hoot"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img5.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-dark"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Bob Bardly"
																		>
																			<span className="avatar-initials">B</span>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Linda Bates"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img8.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Ella Lauda"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img9.jpg"
																				alt="Image Description"
																			/>
																		</span>
																	</div>
																	{/* End Avatar Group */}
																</div>
																{/* End Col */}
															</div>
															{/* End Row */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="row align-items-md-center">
																<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																	<h4>
																		<a href="user-profile-teams.html#">#payments</a>
																	</h4>
																	<a
																		className="badge bg-soft-info text-info p-2"
																		href="user-profile-teams.html#"
																	>
																		Finance
																	</a>
																</div>
																<div className="col-3 col-md-auto order-md-last text-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="teamsListDropdown6"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="teamsListDropdown6"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Rename team
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Add to favorites
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Archive team
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-teams.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
																{/* End Col */}
																<div className="col-sm mb-2 mb-sm-0">
																	<p>
																		Our responsibility to manage the money in this
																		organization
																	</p>
																</div>
																{/* End Col */}
																<div className="col-sm-auto">
																	{/* Stars */}
																	<div className="d-flex gap-1 mb-2">
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																	</div>
																	{/* End Stars */}
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-xs avatar-circle">
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Amanda Harvey"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img10.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="David Harrison"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img3.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-info"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Lisa Iston"
																		>
																			<span className="avatar-initials">L</span>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Sam Kart"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img4.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-dark"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Zack Ins"
																		>
																			<span className="avatar-initials">Z</span>
																		</span>
																		<span
																			className="avatar avatar-light avatar-circle"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Lewis Clarke, Chris Mathew and 3 more"
																		>
																			<span className="avatar-initials">+5</span>
																		</span>
																	</div>
																	{/* End Avatar Group */}
																</div>
																{/* End Col */}
															</div>
															{/* End Row */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="row align-items-md-center">
																<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																	<h4>
																		<a href="user-profile-teams.html#">#event</a>
																	</h4>
																	<a
																		className="badge bg-soft-dark text-dark p-2"
																		href="user-profile-teams.html#"
																	>
																		Organizers
																	</a>
																</div>
																<div className="col-3 col-md-auto order-md-last text-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="teamsListDropdown7"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="teamsListDropdown7"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Rename team
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Add to favorites
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-teams.html#"
																			>
																				Archive team
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-teams.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
																{/* End Col */}
																<div className="col-sm mb-2 mb-sm-0">
																	<p>
																		Because we love to know what's going on &amp; share
																		great ideas
																	</p>
																</div>
																{/* End Col */}
																<div className="col-sm-auto">
																	{/* Stars */}
																	<div className="d-flex gap-1 mb-2">
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star.svg"
																			alt="Review rating"
																			width={14}
																		/>
																		<img
																			src="/assets/svg/illustrations/star-muted.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="default"
																		/>
																		<img
																			src="/assets/svg/illustrations-light/star-muted.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="dark"
																		/>
																		<img
																			src="/assets/svg/illustrations/star-muted.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="default"
																		/>
																		<img
																			src="/assets/svg/illustrations-light/star-muted.svg"
																			alt="Review rating"
																			width={14}
																			data-hs-theme-appearance="dark"
																		/>
																	</div>
																	{/* End Stars */}
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-xs avatar-circle">
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Costa Quinn"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img6.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-info"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Bob Bardly"
																		>
																			<span className="avatar-initials">B</span>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Clarice Boone"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img7.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Sam Kart"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img4.jpg"
																				alt="Image Description"
																			/>
																		</span>
																		<span
																			className="avatar avatar-soft-primary"
																			data-toggle="tooltip"
																			data-placement="top"
																			title="Daniel Cs."
																		>
																			<span className="avatar-initials">D</span>
																		</span>
																	</div>
																	{/* End Avatar Group */}
																</div>
																{/* End Col */}
															</div>
															{/* End Row */}
														</div>
														{/* End Card */}
													</div>
												</div>
												{/* End Row */}
											</div>
										</div>
										{/* End Tab Content */}
									</div>
								)}

								{(activeSection === SUPPORTED_SECTIONS.PROJECTS) && (
									<div className="col-lg-12">
										<div className="row align-items-center mb-5">
											<div className="col">
												<h3 className="mb-0">8 projects</h3>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Nav */}
												<ul className="nav nav-segment" id="projectsTab" role="tablist">
													<li className="nav-item" role="presentation">
														<a
															className="nav-link active"
															id="grid-tab"
															data-bs-toggle="tab"
															href="user-profile-projects.html#grid"
															role="tab"
															aria-controls="grid"
															aria-selected="true"
															title="Column view"
														>
															<i className="bi-grid" />
														</a>
													</li>
													<li className="nav-item" role="presentation">
														<a
															className="nav-link"
															id="list-tab"
															data-bs-toggle="tab"
															href="user-profile-projects.html#list"
															role="tab"
															aria-controls="list"
															aria-selected="false"
															title="List view"
															tabIndex={-1}
														>
															<i className="bi-view-list" />
														</a>
													</li>
												</ul>
												{/* End Nav */}
											</div>
											{/* End Col */}
										</div>
										{/* End Filter */}
										{/* Tab Content */}
										<div className="tab-content" id="projectsTabContent">
											<div
												className="tab-pane fade show active"
												id="grid"
												role="tabpanel"
												aria-labelledby="grid-tab"
											>
												<div className="row row-cols-1 row-cols-md-2">
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-hover-shadow text-center h-100">
															<div className="card-progress-wrap">
																{/* Progress */}
																<div className="progress card-progress">
																	<div
																		className="progress-bar"
																		role="progressbar"
																		style={{ width: "0%" }}
																		aria-valuenow={0}
																		aria-valuemin={0}
																		aria-valuemax={100}
																	/>
																</div>
																{/* End Progress */}
															</div>
															{/* Body */}
															<div className="card-body">
																<div className="row align-items-center text-start mb-4">
																	<div className="col">
																		<span className="badge bg-soft-secondary text-secondary p-2">
																			To do
																		</span>
																	</div>
																	{/* End Col */}
																	<div className="col-auto">
																		{/* Dropdown */}
																		<div className="dropdown">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																				id="projectsGridDropdown8"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-end"
																				aria-labelledby="projectsGridDropdown8"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Rename project{" "}
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Archive project
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-projects.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																<div className="d-flex justify-content-center mb-2">
																	{/* Avatar */}
																	<img
																		className="avatar avatar-lg"
																		src="/assets/svg/brands/google-webdev-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="mb-4">
																	<h2 className="mb-1">Webdev</h2>
																	<span className="fs-5">Updated 2 hours ago</span>
																</div>
																<small className="card-subtitle">Members</small>
																<div className="d-flex justify-content-center">
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Finch Hoot"
																			data-bs-original-title="Finch Hoot"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img5.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-dark"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Bob Bardly"
																		>
																			<span className="avatar-initials">B</span>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Clarice Boone"
																			data-bs-original-title="Clarice Boone"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img7.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-dark"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Adam Keep"
																		>
																			<span className="avatar-initials">A</span>
																		</a>
																	</div>
																	{/* End Avatar Group */}
																</div>
																<a
																	className="stretched-link"
																	href="user-profile-projects.html#"
																/>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																{/* Stats */}
																<div className="row col-divider">
																	<div className="col">
																		<span className="h4">19</span>
																		<span className="d-block fs-5">Tasks</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">33</span>
																		<span className="d-block fs-5">Completed</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">10</span>
																		<span className="d-block fs-5">Days left</span>
																	</div>
																	{/* End Col */}
																</div>
																{/* End Stats */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-hover-shadow text-center h-100">
															{/* Progress */}
															<div className="card-progress-wrap">
																<div className="progress card-progress">
																	<div
																		className="progress-bar"
																		role="progressbar"
																		style={{ width: "45%" }}
																		aria-valuenow={45}
																		aria-valuemin={0}
																		aria-valuemax={100}
																	/>
																</div>
															</div>
															{/* End Progress */}
															{/* Body */}
															<div className="card-body">
																<div className="row align-items-center text-start mb-4">
																	<div className="col">
																		<span className="badge bg-soft-primary text-primary p-2">
																			In progress
																		</span>
																	</div>
																	{/* End Col */}
																	<div className="col-auto">
																		{/* Dropdown */}
																		<div className="dropdown">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																				id="projectsGridDropdown1"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-end"
																				aria-labelledby="projectsGridDropdown1"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Rename project{" "}
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Archive project
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-projects.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																<div className="d-flex justify-content-center mb-2">
																	{/* Avatar */}
																	<img
																		className="avatar avatar-lg"
																		src="/assets/svg/brands/spec-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="mb-4">
																	<h2 className="mb-1">Get a complete store audit</h2>
																	<span className="fs-5">Updated 1 day ago</span>
																</div>
																<small className="card-subtitle">Members</small>
																<div className="d-flex justify-content-center">
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Ella Lauda"
																			data-bs-original-title="Ella Lauda"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img9.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="David Harrison"
																			data-bs-original-title="David Harrison"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img3.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-dark"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Antony Taylor"
																		>
																			<span className="avatar-initials">A</span>
																		</a>
																		<a
																			className="avatar avatar-soft-info"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Sara Iwens"
																		>
																			<span className="avatar-initials">S</span>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Finch Hoot"
																			data-bs-original-title="Finch Hoot"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img5.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-light avatar-circle"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Sam Kart, Amanda Harvey and 1 more"
																		>
																			<span className="avatar-initials">+3</span>
																		</a>
																	</div>
																	{/* End Avatar Group */}
																</div>
																<a
																	className="stretched-link"
																	href="user-profile-projects.html#"
																/>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																{/* Stats */}
																<div className="row col-divider">
																	<div className="col">
																		<span className="h4">4</span>
																		<span className="d-block fs-5">Tasks</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">8</span>
																		<span className="d-block fs-5">Completed</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">18</span>
																		<span className="d-block fs-5">Days left</span>
																	</div>
																	{/* End Col */}
																</div>
																{/* End Stats */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-hover-shadow text-center h-100">
															{/* Progress */}
															<div className="card-progress-wrap">
																<div className="progress card-progress">
																	<div
																		className="progress-bar bg-success"
																		role="progressbar"
																		style={{ width: "100%" }}
																		aria-valuenow={100}
																		aria-valuemin={0}
																		aria-valuemax={100}
																	/>
																</div>
															</div>
															{/* End Progress */}
															{/* Body */}
															<div className="card-body">
																<div className="row align-items-center text-start mb-4">
																	<div className="col">
																		<span className="badge bg-soft-success text-success p-2">
																			Completed
																		</span>
																	</div>
																	<div className="col-auto">
																		{/* Dropdown */}
																		<div className="dropdown">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																				id="projectsGridDropdown6"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-end"
																				aria-labelledby="projectsGridDropdown6"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Rename project{" "}
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Archive project
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-projects.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																<div className="d-flex justify-content-center mb-2">
																	{/* Avatar */}
																	<img
																		className="avatar avatar-lg"
																		src="/assets/svg/brands/capsule-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="mb-4">
																	<h2 className="mb-1">
																		Build stronger customer relationships
																	</h2>
																	<span className="fs-5">Updated 1 day ago</span>
																</div>
																<small className="card-subtitle">Members</small>
																<div className="d-flex justify-content-center">
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Amanda Harvey"
																			data-bs-original-title="Amanda Harvey"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img10.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="David Harrison"
																			data-bs-original-title="David Harrison"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img3.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-info"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Lisa Iston"
																		>
																			<span className="avatar-initials">L</span>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Sam Kart"
																			data-bs-original-title="Sam Kart"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img4.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-dark"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Zack Ins"
																		>
																			<span className="avatar-initials">Z</span>
																		</a>
																		<a
																			className="avatar avatar-light avatar-circle"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Lewis Clarke, Chris Mathew and 3 more"
																		>
																			<span className="avatar-initials">+5</span>
																		</a>
																	</div>
																	{/* End Avatar Group */}
																</div>
																<a
																	className="stretched-link"
																	href="user-profile-projects.html#"
																/>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																{/* Stats */}
																<div className="row col-divider">
																	<div className="col">
																		<span className="h4">7</span>
																		<span className="d-block fs-5">Tasks</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">7</span>
																		<span className="d-block fs-5">Completed</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">0</span>
																		<span className="d-block fs-5">Days left</span>
																	</div>
																	{/* End Col */}
																</div>
																{/* End Stats */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-hover-shadow text-center h-100">
															{/* Progress */}
															<div className="card-progress-wrap">
																<div className="progress card-progress">
																	<div
																		className="progress-bar"
																		role="progressbar"
																		style={{ width: "57%" }}
																		aria-valuenow={57}
																		aria-valuemin={0}
																		aria-valuemax={100}
																	/>
																</div>
															</div>
															{/* End Progress */}
															{/* Body */}
															<div className="card-body">
																<div className="row align-items-center text-start mb-4">
																	<div className="col">
																		<span className="badge bg-soft-primary text-primary p-2">
																			In progress
																		</span>
																	</div>
																	{/* End Col */}
																	<div className="col-auto">
																		{/* Dropdown */}
																		<div className="dropdown">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																				id="projectsGridDropdown2"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-end"
																				aria-labelledby="projectsGridDropdown2"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Rename project{" "}
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Archive project
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-projects.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																<div className="d-flex justify-content-center mb-2">
																	{/* Avatar */}
																	<img
																		className="avatar avatar-lg"
																		src="/assets/svg/brands/prosperops-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="mb-4">
																	<h2 className="mb-1">Cloud computing</h2>
																	<span className="fs-5">Updated 2 days ago</span>
																</div>
																<small className="card-subtitle">Members</small>
																<div className="d-flex justify-content-center">
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Finch Hoot"
																			data-bs-original-title="Finch Hoot"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img5.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-dark"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Bob Bardly"
																		>
																			<span className="avatar-initials">B</span>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Linda Bates"
																			data-bs-original-title="Linda Bates"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img8.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Ella Lauda"
																			data-bs-original-title="Ella Lauda"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img9.jpg"
																				alt="Image Description"
																			/>
																		</a>
																	</div>
																	{/* End Avatar Group */}
																</div>
																<a
																	className="stretched-link"
																	href="user-profile-projects.html#"
																/>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																{/* Stats */}
																<div className="row col-divider">
																	<div className="col">
																		<span className="h4">4</span>
																		<span className="d-block fs-5">Tasks</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">8</span>
																		<span className="d-block fs-5">Completed</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">30</span>
																		<span className="d-block fs-5">Days left</span>
																	</div>
																	{/* End Col */}
																</div>
																{/* End Stats */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-hover-shadow text-center h-100">
															{/* Progress */}
															<div className="card-progress-wrap">
																<div className="progress card-progress">
																	<div
																		className="progress-bar"
																		role="progressbar"
																		style={{ width: "59%" }}
																		aria-valuenow={59}
																		aria-valuemin={0}
																		aria-valuemax={100}
																	/>
																</div>
															</div>
															{/* End Progress */}
															{/* Body */}
															<div className="card-body">
																<div className="row align-items-center text-start mb-4">
																	<div className="col">
																		<span className="badge bg-soft-primary text-primary p-2">
																			In progress
																		</span>
																	</div>
																	{/* End Col */}
																	<div className="col-auto">
																		{/* Dropdown */}
																		<div className="dropdown">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																				id="projectsGridDropdown4"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-end"
																				aria-labelledby="projectsGridDropdown4"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Rename project{" "}
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Archive project
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-projects.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																<div className="d-flex justify-content-center mb-2">
																	{/* Avatar */}
																	<img
																		className="avatar avatar-lg"
																		src="/assets/svg/brands/mailchimp-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="mb-4">
																	<h2 className="mb-1">Update subscription method</h2>
																	<span className="fs-5">Updated 2 days ago</span>
																</div>
																<small className="card-subtitle">Members</small>
																<div className="d-flex justify-content-center">
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Costa Quinn"
																			data-bs-original-title="Costa Quinn"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img6.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Clarice Boone"
																			data-bs-original-title="Clarice Boone"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img7.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-dark"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Adam Keep"
																		>
																			<span className="avatar-initials">A</span>
																		</a>
																	</div>
																	{/* End Avatar Group */}
																</div>
																<a
																	className="stretched-link"
																	href="user-profile-projects.html#"
																/>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																{/* Stats */}
																<div className="row col-divider">
																	<div className="col">
																		<span className="h4">25</span>
																		<span className="d-block fs-5">Tasks</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">30</span>
																		<span className="d-block fs-5">Completed</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">20</span>
																		<span className="d-block fs-5">Days left</span>
																	</div>
																	{/* End Col */}
																</div>
																{/* End Stats */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-hover-shadow text-center h-100">
															{/* Progress */}
															<div className="card-progress-wrap">
																<div className="progress card-progress">
																	<div
																		className="progress-bar"
																		role="progressbar"
																		style={{ width: "0%" }}
																		aria-valuenow={0}
																		aria-valuemin={0}
																		aria-valuemax={100}
																	/>
																</div>
															</div>
															{/* End Progress */}
															{/* Body */}
															<div className="card-body">
																<div className="row align-items-center text-start mb-4">
																	<div className="col">
																		<span className="badge bg-soft-secondary text-secondary p-2">
																			To do
																		</span>
																	</div>
																	<div className="col-auto">
																		{/* Dropdown */}
																		<div className="dropdown">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																				id="projectsGridDropdown7"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-end"
																				aria-labelledby="projectsGridDropdown7"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Rename project{" "}
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Archive project
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-projects.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																<div className="d-flex justify-content-center mb-2">
																	{/* Avatar */}
																	<span className="avatar avatar-lg avatar-soft-info avatar-circle">
																		<span className="avatar-initials">I</span>
																	</span>
																	{/* End Avatar */}
																</div>
																<div className="mb-4">
																	<h2 className="mb-1">Improve social banners</h2>
																	<span className="fs-5">Updated 1 week ago</span>
																</div>
																<small className="card-subtitle">Members</small>
																<div className="d-flex justify-content-center">
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Costa Quinn"
																			data-bs-original-title="Costa Quinn"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img6.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-info"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Bob Bardly"
																		>
																			<span className="avatar-initials">B</span>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Clarice Boone"
																			data-bs-original-title="Clarice Boone"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img7.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Sam Kart"
																			data-bs-original-title="Sam Kart"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img4.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-primary"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Daniel Cs."
																		>
																			<span className="avatar-initials">D</span>
																		</a>
																	</div>
																	{/* End Avatar Group */}
																</div>
																<a
																	className="stretched-link"
																	href="user-profile-projects.html#"
																/>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																{/* Stats */}
																<div className="row col-divider">
																	<div className="col">
																		<span className="h4">9</span>
																		<span className="d-block fs-5">Tasks</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">16</span>
																		<span className="d-block fs-5">Completed</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">21</span>
																		<span className="d-block fs-5">Days left</span>
																	</div>
																	{/* End Col */}
																</div>
																{/* End Stats */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-hover-shadow text-center h-100">
															{/* Progress */}
															<div className="card-progress-wrap">
																<div className="progress card-progress">
																	<div
																		className="progress-bar bg-success"
																		role="progressbar"
																		style={{ width: "100%" }}
																		aria-valuenow={100}
																		aria-valuemin={0}
																		aria-valuemax={100}
																	/>
																</div>
															</div>
															{/* End Progress */}
															{/* Body */}
															<div className="card-body">
																<div className="row align-items-center text-start mb-4">
																	<div className="col">
																		<span className="badge bg-soft-success text-success p-2">
																			Completed
																		</span>
																	</div>
																	<div className="col-auto">
																		{/* Dropdown */}
																		<div className="dropdown">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																				id="projectsGridDropdown3"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-end"
																				aria-labelledby="projectsGridDropdown3"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Rename project{" "}
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Archive project
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-projects.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																<div className="d-flex justify-content-center mb-2">
																	{/* Avatar */}
																	<img
																		className="avatar avatar-lg"
																		src="/assets/svg/brands/figma-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="mb-4">
																	<h2 className="mb-1">Create a new theme</h2>
																	<span className="fs-5">Updated 1 week ago</span>
																</div>
																<small className="card-subtitle">Members</small>
																<div className="d-flex justify-content-center">
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Costa Quinn"
																			data-bs-original-title="Costa Quinn"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img6.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Clarice Boone"
																			data-bs-original-title="Clarice Boone"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img7.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-dark"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Zack Ins"
																		>
																			<span className="avatar-initials">Z</span>
																		</a>
																	</div>
																	{/* End Avatar Group */}
																</div>
																<a
																	className="stretched-link"
																	href="user-profile-projects.html#"
																/>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																{/* Stats */}
																<div className="row col-divider">
																	<div className="col">
																		<span className="h4">7</span>
																		<span className="d-block fs-5">Tasks</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">7</span>
																		<span className="d-block fs-5">Completed</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">0</span>
																		<span className="d-block fs-5">Days left</span>
																	</div>
																	{/* End Col */}
																</div>
																{/* End Stats */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-hover-shadow text-center h-100">
															{/* Progress */}
															<div className="card-progress-wrap">
																<div className="progress card-progress">
																	<div
																		className="progress-bar"
																		role="progressbar"
																		style={{ width: "77%" }}
																		aria-valuenow={77}
																		aria-valuemin={0}
																		aria-valuemax={100}
																	/>
																</div>
															</div>
															{/* End Progress */}
															{/* Body */}
															<div className="card-body">
																<div className="row align-items-center text-start mb-4">
																	<div className="col">
																		<span className="badge bg-soft-primary text-primary p-2">
																			In progress
																		</span>
																	</div>
																	{/* End Col */}
																	<div className="col-auto">
																		{/* Dropdown */}
																		<div className="dropdown">
																			<button
																				type="button"
																				className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																				id="projectsGridDropdown5"
																				data-bs-toggle="dropdown"
																				aria-expanded="false"
																			>
																				<i className="bi-three-dots-vertical" />
																			</button>
																			<div
																				className="dropdown-menu dropdown-menu-end"
																				aria-labelledby="projectsGridDropdown5"
																			>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Rename project{" "}
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Add to favorites
																				</a>
																				<a
																					className="dropdown-item"
																					href="user-profile-projects.html#"
																				>
																					Archive project
																				</a>
																				<div className="dropdown-divider" />
																				<a
																					className="dropdown-item text-danger"
																					href="user-profile-projects.html#"
																				>
																					Delete
																				</a>
																			</div>
																		</div>
																		{/* End Dropdown */}
																	</div>
																	{/* End Col */}
																</div>
																<div className="d-flex justify-content-center mb-2">
																	{/* Avatar */}
																	<span className="avatar avatar-lg avatar-soft-dark avatar-circle">
																		<span className="avatar-initials">N</span>
																	</span>
																	{/* End Avatar */}
																</div>
																<div className="mb-4">
																	<h2 className="mb-1">Notifications</h2>
																	<span className="fs-5">Updated 1 week ago</span>
																</div>
																<small className="card-subtitle">Members</small>
																<div className="d-flex justify-content-center">
																	{/* Avatar Group */}
																	<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Sam Kart"
																			data-bs-original-title="Sam Kart"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img4.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-danger"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Teresa Eyker"
																		>
																			<span className="avatar-initials">T</span>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="Amanda Harvey"
																			data-bs-original-title="Amanda Harvey"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img10.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			aria-label="David Harrison"
																			data-bs-original-title="David Harrison"
																		>
																			<img
																				className="avatar-img"
																				src="/assets/img/160x160/img3.jpg"
																				alt="Image Description"
																			/>
																		</a>
																		<a
																			className="avatar avatar-soft-warning"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Olivier L."
																		>
																			<span className="avatar-initials">O</span>
																		</a>
																		<a
																			className="avatar avatar-light avatar-circle"
																			href="user-profile-projects.html#"
																			data-bs-toggle="tooltip"
																			data-bs-placement="top"
																			data-bs-original-title="Brian Halligan, Rachel Doe and 7 more"
																		>
																			<span className="avatar-initials">+9</span>
																		</a>
																	</div>
																	{/* End Avatar Group */}
																</div>
																<a
																	className="stretched-link"
																	href="user-profile-projects.html#"
																/>
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																{/* Stats */}
																<div className="row col-divider">
																	<div className="col">
																		<span className="h4">9</span>
																		<span className="d-block fs-5">Tasks</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">16</span>
																		<span className="d-block fs-5">Completed</span>
																	</div>
																	{/* End Col */}
																	<div className="col">
																		<span className="h4">21</span>
																		<span className="d-block fs-5">Days left</span>
																	</div>
																	{/* End Col */}
																</div>
																{/* End Stats */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
												</div>
												{/* End Row */}
											</div>
											<div
												className="tab-pane fade"
												id="list"
												role="tabpanel"
												aria-labelledby="list-tab"
											>
												<div className="row row-cols-1">
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex">
																{/* Avatar */}
																<div className="flex-shrink-0 me-3 me-lg-4">
																	<img
																		className="avatar"
																		src="/assets/svg/brands/google-webdev-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-sm-center">
																		<div className="col">
																			<span className="badge bg-soft-secondary text-secondary p-2 mb-2">
																				To do
																			</span>
																			<h3 className="mb-1">Webdev</h3>
																		</div>
																		{/* End Col */}
																		<div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
																			{/* Avatar Group */}
																			<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Finch Hoot"
																					data-bs-original-title="Finch Hoot"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img5.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-soft-dark"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Bob Bardly"
																				>
																					<span className="avatar-initials">B</span>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Clarice Boone"
																					data-bs-original-title="Clarice Boone"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img7.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-soft-dark"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Adam Keep"
																				>
																					<span className="avatar-initials">A</span>
																				</a>
																			</div>
																			{/* End Avatar Group */}
																		</div>
																		<div className="col-auto">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																					id="projectsListDropdown1"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-end"
																					aria-labelledby="projectsListDropdown1"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-projects.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Unfold */}
																		</div>
																	</div>
																	{/* End Row */}
																	{/* Stats */}
																	<ul className="list-inline">
																		<li className="list-inline-item">
																			<span className="fs-5">Updated:</span>
																			<span className="fw-semibold text-dark">
																				2 hours ago
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Tasks:</span>
																			<span className="fw-semibold text-dark">19</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Completed:</span>
																			<span className="fw-semibold text-dark">33</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Days left:</span>
																			<span className="fw-semibold text-dark">10</span>
																		</li>
																	</ul>
																	{/* End Stats */}
																	{/* Progress */}
																	<div className="progress card-progress">
																		<div
																			className="progress-bar"
																			role="progressbar"
																			style={{ width: "0%" }}
																			aria-valuenow={0}
																			aria-valuemin={0}
																			aria-valuemax={100}
																		/>
																	</div>
																	{/* End Progress */}
																	<a
																		className="stretched-link"
																		href="user-profile-projects.html#"
																	/>
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex">
																{/* Avatar */}
																<div className="flex-shrink-0 me-3 me-lg-4">
																	<img
																		className="avatar"
																		src="/assets/svg/brands/spec-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-sm-center">
																		<div className="col">
																			<span className="badge bg-soft-primary text-primary p-2 mb-2">
																				In progress
																			</span>
																			<h3 className="mb-1">Get a complete store audit</h3>
																		</div>
																		{/* End Col */}
																		<div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
																			{/* Avatar Group */}
																			<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Ella Lauda"
																					data-bs-original-title="Ella Lauda"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img9.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-soft-info"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Sara Iwens"
																				>
																					<span className="avatar-initials">S</span>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Finch Hoot"
																					data-bs-original-title="Finch Hoot"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img5.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-light avatar-circle"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Sam Kart, Amanda Harvey and 1 more"
																				>
																					<span className="avatar-initials">+5</span>
																				</a>
																			</div>
																			{/* End Avatar Group */}
																		</div>
																		<div className="col-auto">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																					id="projectsListDropdown2"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-end"
																					aria-labelledby="projectsListDropdown2"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-projects.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Unfold */}
																		</div>
																	</div>
																	{/* End Row */}
																	{/* Stats */}
																	<ul className="list-inline">
																		<li className="list-inline-item">
																			<span className="fs-5">Updated:</span>
																			<span className="fw-semibold text-dark">
																				1 day ago
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Tasks:</span>
																			<span className="fw-semibold text-dark">4</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Completed:</span>
																			<span className="fw-semibold text-dark">8</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Days left:</span>
																			<span className="fw-semibold text-dark">18</span>
																		</li>
																	</ul>
																	{/* End Stats */}
																	{/* Progress */}
																	<div className="progress card-progress">
																		<div
																			className="progress-bar"
																			role="progressbar"
																			style={{ width: "45%" }}
																			aria-valuenow={45}
																			aria-valuemin={0}
																			aria-valuemax={100}
																		/>
																	</div>
																	{/* End Progress */}
																	<a
																		className="stretched-link"
																		href="user-profile-projects.html#"
																	/>
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex">
																{/* Avatar */}
																<div className="flex-shrink-0 me-3 me-lg-4">
																	<img
																		className="avatar"
																		src="/assets/svg/brands/capsule-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-sm-center">
																		<div className="col">
																			<span className="badge bg-soft-success text-success p-2 mb-2">
																				Completed
																			</span>
																			<h3 className="mb-1">
																				Build stronger customer relationships
																			</h3>
																		</div>
																		{/* End Col */}
																		<div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
																			{/* Avatar Group */}
																			<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Amanda Harvey"
																					data-bs-original-title="Amanda Harvey"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img10.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="David Harrison"
																					data-bs-original-title="David Harrison"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img3.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-soft-dark"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Zack Ins"
																				>
																					<span className="avatar-initials">Z</span>
																				</a>
																				<a
																					className="avatar avatar-light avatar-circle"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Lewis Clarke, Chris Mathew and 3 more"
																				>
																					<span className="avatar-initials">+5</span>
																				</a>
																			</div>
																			{/* End Avatar Group */}
																		</div>
																		<div className="col-auto">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																					id="projectsListDropdown3"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-end"
																					aria-labelledby="projectsListDropdown3"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-projects.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Unfold */}
																		</div>
																	</div>
																	{/* End Row */}
																	{/* Stats */}
																	<ul className="list-inline">
																		<li className="list-inline-item">
																			<span className="fs-5">Updated:</span>
																			<span className="fw-semibold text-dark">
																				1 day ago
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Tasks:</span>
																			<span className="fw-semibold text-dark">7</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Completed:</span>
																			<span className="fw-semibold text-dark">7</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Days left:</span>
																			<span className="fw-semibold text-dark">0</span>
																		</li>
																	</ul>
																	{/* End Stats */}
																	{/* Progress */}
																	<div className="progress card-progress">
																		<div
																			className="progress-bar bg-success"
																			role="progressbar"
																			style={{ width: "100%" }}
																			aria-valuenow={100}
																			aria-valuemin={0}
																			aria-valuemax={100}
																		/>
																	</div>
																	{/* End Progress */}
																	<a
																		className="stretched-link"
																		href="user-profile-projects.html#"
																	/>
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex">
																{/* Avatar */}
																<div className="flex-shrink-0 me-3 me-lg-4">
																	<img
																		className="avatar"
																		src="/assets/svg/brands/prosperops-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-sm-center">
																		<div className="col">
																			<span className="badge bg-soft-primary text-primary p-2 mb-2">
																				In progress
																			</span>
																			<h3 className="mb-1">Cloud computing</h3>
																		</div>
																		{/* End Col */}
																		<div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
																			{/* Avatar Group */}
																			<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Finch Hoot"
																					data-bs-original-title="Finch Hoot"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img5.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-soft-dark"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Bob Bardly"
																				>
																					<span className="avatar-initials">B</span>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Linda Bates"
																					data-bs-original-title="Linda Bates"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img8.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Ella Lauda"
																					data-bs-original-title="Ella Lauda"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img9.jpg"
																						alt="Image Description"
																					/>
																				</a>
																			</div>
																			{/* End Avatar Group */}
																		</div>
																		<div className="col-auto">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																					id="projectsListDropdown4"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-end"
																					aria-labelledby="projectsListDropdown4"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-projects.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Unfold */}
																		</div>
																	</div>
																	{/* End Row */}
																	{/* Stats */}
																	<ul className="list-inline">
																		<li className="list-inline-item">
																			<span className="fs-5">Updated:</span>
																			<span className="fw-semibold text-dark">
																				2 hours ago
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Tasks:</span>
																			<span className="fw-semibold text-dark">4</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Completed:</span>
																			<span className="fw-semibold text-dark">8</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Days left:</span>
																			<span className="fw-semibold text-dark">30</span>
																		</li>
																	</ul>
																	{/* End Stats */}
																	{/* Progress */}
																	<div className="progress card-progress">
																		<div
																			className="progress-bar"
																			role="progressbar"
																			style={{ width: "57%" }}
																			aria-valuenow={57}
																			aria-valuemin={0}
																			aria-valuemax={100}
																		/>
																	</div>
																	{/* End Progress */}
																	<a
																		className="stretched-link"
																		href="user-profile-projects.html#"
																	/>
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex">
																{/* Avatar */}
																<div className="flex-shrink-0 me-3 me-lg-4">
																	<img
																		className="avatar"
																		src="/assets/svg/brands/mailchimp-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-sm-center">
																		<div className="col">
																			<span className="badge bg-soft-primary text-primary p-2 mb-2">
																				In progress
																			</span>
																			<h3 className="mb-1">Update subscription method</h3>
																		</div>
																		{/* End Col */}
																		<div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
																			{/* Avatar Group */}
																			<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Costa Quinn"
																					data-bs-original-title="Costa Quinn"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img6.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Clarice Boone"
																					data-bs-original-title="Clarice Boone"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img7.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-soft-dark"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Adam Keep"
																				>
																					<span className="avatar-initials">A</span>
																				</a>
																			</div>
																			{/* End Avatar Group */}
																		</div>
																		<div className="col-auto">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																					id="projectsListDropdown5"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-end"
																					aria-labelledby="projectsListDropdown5"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-projects.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Unfold */}
																		</div>
																	</div>
																	{/* End Row */}
																	{/* Stats */}
																	<ul className="list-inline">
																		<li className="list-inline-item">
																			<span className="fs-5">Updated:</span>
																			<span className="fw-semibold text-dark">
																				2 days ago
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Tasks:</span>
																			<span className="fw-semibold text-dark">25</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Completed:</span>
																			<span className="fw-semibold text-dark">30</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Days left:</span>
																			<span className="fw-semibold text-dark">20</span>
																		</li>
																	</ul>
																	{/* End Stats */}
																	{/* Progress */}
																	<div className="progress card-progress">
																		<div
																			className="progress-bar"
																			role="progressbar"
																			style={{ width: "59%" }}
																			aria-valuenow={59}
																			aria-valuemin={0}
																			aria-valuemax={100}
																		/>
																	</div>
																	{/* End Progress */}
																	<a
																		className="stretched-link"
																		href="user-profile-projects.html#"
																	/>
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex">
																{/* Avatar */}
																<span className="avatar avatar-soft-info avatar-circle me-3 me-lg-4">
																	<span className="avatar-initials">I</span>
																</span>
																{/* End Avatar */}
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-sm-center">
																		<div className="col">
																			<span className="badge bg-soft-secondary text-secondary p-2 mb-2">
																				To do
																			</span>
																			<h3 className="mb-1">Improve social banners</h3>
																		</div>
																		{/* End Col */}
																		<div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
																			{/* Avatar Group */}
																			<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Costa Quinn"
																					data-bs-original-title="Costa Quinn"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img6.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Clarice Boone"
																					data-bs-original-title="Clarice Boone"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img7.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Sam Kart"
																					data-bs-original-title="Sam Kart"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img4.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-soft-primary"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Daniel Cs."
																				>
																					<span className="avatar-initials">D</span>
																				</a>
																			</div>
																			{/* End Avatar Group */}
																		</div>
																		<div className="col-auto">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																					id="projectsListDropdown6"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-end"
																					aria-labelledby="projectsListDropdown6"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-projects.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Unfold */}
																		</div>
																	</div>
																	{/* End Row */}
																	{/* Stats */}
																	<ul className="list-inline">
																		<li className="list-inline-item">
																			<span className="fs-5">Updated:</span>
																			<span className="fw-semibold text-dark">
																				1 week ago
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Tasks:</span>
																			<span className="fw-semibold text-dark">9</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Completed:</span>
																			<span className="fw-semibold text-dark">16</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Days left:</span>
																			<span className="fw-semibold text-dark">21</span>
																		</li>
																	</ul>
																	{/* End Stats */}
																	{/* Progress */}
																	<div className="progress card-progress">
																		<div
																			className="progress-bar"
																			role="progressbar"
																			style={{ width: "0%" }}
																			aria-valuenow={0}
																			aria-valuemin={0}
																			aria-valuemax={100}
																		/>
																	</div>
																	{/* End Progress */}
																	<a
																		className="stretched-link"
																		href="user-profile-projects.html#"
																	/>
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex">
																{/* Avatar */}
																<div className="flex-shrink-0 me-3 me-lg-4">
																	<img
																		className="avatar"
																		src="/assets/svg/brands/figma-icon.svg"
																		alt="Image Description"
																	/>
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-sm-center">
																		<div className="col">
																			<span className="badge bg-soft-success text-success p-2 mb-2">
																				Completed
																			</span>
																			<h3 className="mb-1">Create a new theme</h3>
																		</div>
																		{/* End Col */}
																		<div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
																			{/* Avatar Group */}
																			<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Costa Quinn"
																					data-bs-original-title="Costa Quinn"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img6.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Clarice Boone"
																					data-bs-original-title="Clarice Boone"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img7.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-soft-dark"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Zack Ins"
																				>
																					<span className="avatar-initials">Z</span>
																				</a>
																			</div>
																			{/* End Avatar Group */}
																		</div>
																		<div className="col-auto">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																					id="projectsListDropdown7"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-end"
																					aria-labelledby="projectsListDropdown7"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-projects.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Unfold */}
																		</div>
																	</div>
																	{/* End Row */}
																	{/* Stats */}
																	<ul className="list-inline">
																		<li className="list-inline-item">
																			<span className="fs-5">Updated:</span>
																			<span className="fw-semibold text-dark">
																				1 week ago
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Tasks:</span>
																			<span className="fw-semibold text-dark">7</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Completed:</span>
																			<span className="fw-semibold text-dark">7</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Days left:</span>
																			<span className="fw-semibold text-dark">0</span>
																		</li>
																	</ul>
																	{/* End Stats */}
																	{/* Progress */}
																	<div className="progress card-progress">
																		<div
																			className="progress-bar bg-success"
																			role="progressbar"
																			style={{ width: "100%" }}
																			aria-valuenow={100}
																			aria-valuemin={0}
																			aria-valuemax={100}
																		/>
																	</div>
																	{/* End Progress */}
																	<a
																		className="stretched-link"
																		href="user-profile-projects.html#"
																	/>
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex">
																{/* Avatar */}
																<span className="avatar avatar-soft-dark avatar-circle me-3 me-lg-4">
																	<span className="avatar-initials">N</span>
																</span>
																{/* End Avatar */}
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-sm-center">
																		<div className="col">
																			<span className="badge bg-soft-primary text-primary p-2 mb-2">
																				In progress
																			</span>
																			<h3 className="mb-1">Notifications</h3>
																		</div>
																		{/* End Col */}
																		<div className="col-md-3 d-none d-md-flex justify-content-md-end ms-n3">
																			{/* Avatar Group */}
																			<div className="avatar-group avatar-group-sm avatar-circle card-avatar-group">
																				<a
																					className="avatar avatar-soft-danger"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Teresa Eyker"
																				>
																					<span className="avatar-initials">T</span>
																				</a>
																				<a
																					className="avatar"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					aria-label="Amanda Harvey"
																					data-bs-original-title="Amanda Harvey"
																				>
																					<img
																						className="avatar-img"
																						src="/assets/img/160x160/img10.jpg"
																						alt="Image Description"
																					/>
																				</a>
																				<a
																					className="avatar avatar-soft-warning"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Olivier L."
																				>
																					<span className="avatar-initials">O</span>
																				</a>
																				<a
																					className="avatar avatar-light avatar-circle"
																					href="user-profile-projects.html#"
																					data-bs-toggle="tooltip"
																					data-bs-placement="top"
																					data-bs-original-title="Brian Halligan, Rachel Doe and 7 more"
																				>
																					<span className="avatar-initials">+9</span>
																				</a>
																			</div>
																			{/* End Avatar Group */}
																		</div>
																		<div className="col-auto">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm card-dropdown-btn rounded-circle"
																					id="projectsListDropdown8"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-end"
																					aria-labelledby="projectsListDropdown8"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-projects.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-projects.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Unfold */}
																		</div>
																	</div>
																	{/* End Row */}
																	{/* Stats */}
																	<ul className="list-inline">
																		<li className="list-inline-item">
																			<span className="fs-5">Updated:</span>
																			<span className="fw-semibold text-dark">
																				1 week ago
																			</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Tasks:</span>
																			<span className="fw-semibold text-dark">9</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Completed:</span>
																			<span className="fw-semibold text-dark">16</span>
																		</li>
																		<li className="list-inline-item">
																			<span className="fs-5">Days left:</span>
																			<span className="fw-semibold text-dark">21</span>
																		</li>
																	</ul>
																	{/* End Stats */}
																	{/* Progress */}
																	<div className="progress card-progress">
																		<div
																			className="progress-bar"
																			role="progressbar"
																			style={{ width: "77%" }}
																			aria-valuenow={77}
																			aria-valuemin={0}
																			aria-valuemax={100}
																		/>
																	</div>
																	{/* End Progress */}
																	<a
																		className="stretched-link"
																		href="user-profile-projects.html#"
																	/>
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
												</div>
												{/* End Row */}
											</div>
										</div>
										{/* End Tab Content */}
									</div>
								)}

								{(activeSection === SUPPORTED_SECTIONS.CONNECTIONS) && (
									<div className="col-lg-12">
										{/* Filter */}
										<div className="row align-items-center mb-5">
											<div className="col">
												<h3 className="mb-0">7 connections</h3>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Nav */}
												<ul className="nav nav-segment" id="connectionsTab" role="tablist">
													<li className="nav-item" role="presentation">
														<a
															className="nav-link active"
															id="grid-tab"
															data-bs-toggle="tab"
															href="user-profile-connections.html#grid"
															role="tab"
															aria-controls="grid"
															aria-selected="true"
															title="Column view"
														>
															<i className="bi-grid" />
														</a>
													</li>
													<li className="nav-item" role="presentation">
														<a
															className="nav-link"
															id="list-tab"
															data-bs-toggle="tab"
															href="user-profile-connections.html#list"
															role="tab"
															aria-controls="list"
															aria-selected="false"
															title="List view"
															tabIndex={-1}
														>
															<i className="bi-list" />
														</a>
													</li>
												</ul>
												{/* End Nav */}
											</div>
											{/* End Col */}
										</div>
										{/* End Filter */}
										{/* Tab Content */}
										<div className="tab-content" id="connectionsTabContent">
											<div
												className="tab-pane fade show active"
												id="grid"
												role="tabpanel"
												aria-labelledby="grid-tab"
											>
												{/* Connections */}
												<div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															<div className="card-pinned">
																<div className="card-pinned-top-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="connectionsDropdown1"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="connectionsDropdown1"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Share connection
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Block connection
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-connections.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
															</div>
															{/* Body */}
															<div className="card-body text-center">
																{/* Avatar */}
																<div className="avatar avatar-xl avatar-soft-primary avatar-circle avatar-centered mb-3">
																	<span className="avatar-initials">R</span>
																	<span className="avatar-status avatar-sm-status avatar-status-warning" />
																</div>
																{/* End Avatar */}
																<h3 className="mb-1">
																	<a
																		className="text-dark"
																		href="user-profile-connections.html#"
																	>
																		Rachel Doe
																	</a>
																</h3>
																<div className="mb-3">
																	<i className="bi-building me-1" />
																	<span>Design</span>
																</div>
																{/* Badges */}
																<ul className="list-inline mb-0">
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			UI/UX
																		</a>
																	</li>
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Sketch
																		</a>
																	</li>
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Figma
																		</a>
																	</li>
																</ul>
																{/* End Badges */}
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																<div className="row justify-content-between align-items-center">
																	<div className="col-auto py-1">
																		<a
																			className="fs-6 text-body"
																			href="user-profile-connections.html#"
																		>
																			25 connections
																		</a>
																	</div>
																	<div className="col-auto py-1">
																		{/* Form Check */}
																		<div className="form-check form-check-switch">
																			<input
																				className="form-check-input"
																				type="checkbox"
																				defaultValue
																				id="connectionsCheckbox1"
																				defaultChecked
																			/>
																			<label
																				className="form-check-label btn btn-sm"
																				htmlFor="connectionsCheckbox1"
																			>
																				<span className="form-check-default">
																					<i className="bi-person-plus-fill" /> Connect
																				</span>
																				<span className="form-check-active">
																					<i className="bi-check-lg me-2" /> Connected
																				</span>
																			</label>
																		</div>
																		{/* End Form Check */}
																	</div>
																</div>
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															<div className="card-pinned">
																<div className="card-pinned-top-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="connectionsDropdown2"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="connectionsDropdown2"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Share connection
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Block connection
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-connections.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
															</div>
															{/* Body */}
															<div className="card-body text-center">
																{/* Avatar */}
																<div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
																	<img
																		className="avatar-img"
																		src="/assets/img/160x160/img8.jpg"
																		alt="Image Description"
																	/>
																	<span className="avatar-status avatar-sm-status avatar-status-success" />
																</div>
																{/* End Avatar */}
																<h3 className="mb-1">
																	<a
																		className="text-dark"
																		href="user-profile-connections.html#"
																	>
																		Isabella Finley
																	</a>
																</h3>
																<div className="mb-3">
																	<i className="bi-building me-1" />
																	<span>FrontApp</span>
																</div>
																{/* Badges */}
																<ul className="list-inline mb-0">
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Human resources
																		</a>
																	</li>
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Support
																		</a>
																	</li>
																</ul>
																{/* End Badges */}
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																<div className="row justify-content-between align-items-center">
																	<div className="col-auto py-1">
																		<a
																			className="fs-6 text-body"
																			href="user-profile-connections.html#"
																		>
																			79 connections
																		</a>
																	</div>
																	{/* End Col */}
																	<div className="col-auto py-1">
																		{/* Form Check */}
																		<div className="form-check form-check-switch">
																			<input
																				className="form-check-input"
																				type="checkbox"
																				defaultValue
																				id="connectionsCheckbox2"
																				defaultChecked
																			/>
																			<label
																				className="form-check-label btn btn-sm"
																				htmlFor="connectionsCheckbox2"
																			>
																				<span className="form-check-default">
																					<i className="bi-person-plus-fill" /> Connect
																				</span>
																				<span className="form-check-active">
																					<i className="bi-check-lg me-2" /> Connected
																				</span>
																			</label>
																		</div>
																		{/* End Form Check */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															<div className="card-pinned">
																<div className="card-pinned-top-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="connectionsDropdown3"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="connectionsDropdown3"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Share connection
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Block connection
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-connections.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
															</div>
															{/* Body */}
															<div className="card-body text-center">
																{/* Avatar */}
																<div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
																	<img
																		className="avatar-img"
																		src="/assets/img/160x160/img3.jpg"
																		alt="Image Description"
																	/>
																	<span className="avatar-status avatar-sm-status avatar-status-warning" />
																</div>
																{/* End Avatar */}
																<h3 className="mb-1">
																	<a
																		className="text-dark"
																		href="user-profile-connections.html#"
																	>
																		David Harrison
																	</a>
																</h3>
																<div className="mb-3">
																	<i className="bi-building me-1" />
																	<span>Unassigned</span>
																</div>
																{/* Badges */}
																<ul className="list-inline mb-0">
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Marketing
																		</a>
																	</li>
																</ul>
																{/* End Badges */}
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																<div className="row justify-content-between align-items-center">
																	<div className="col-auto py-1">
																		<a
																			className="fs-6 text-body"
																			href="user-profile-connections.html#"
																		>
																			0 connections
																		</a>
																	</div>
																	{/* End Col */}
																	<div className="col-auto py-1">
																		{/* Form Check */}
																		<div className="form-check form-check-switch">
																			<input
																				className="form-check-input"
																				type="checkbox"
																				defaultValue
																				id="connectionsCheckbox3"
																			/>
																			<label
																				className="form-check-label btn btn-sm"
																				htmlFor="connectionsCheckbox3"
																			>
																				<span className="form-check-default">
																					<i className="bi-person-plus-fill" /> Connect
																				</span>
																				<span className="form-check-active">
																					<i className="bi-check-lg me-2" /> Connected
																				</span>
																			</label>
																		</div>
																		{/* End Form Check */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															<div className="card-pinned">
																<div className="card-pinned-top-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="connectionsDropdown4"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="connectionsDropdown4"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Share connection
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Block connection
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-connections.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
															</div>
															{/* Body */}
															<div className="card-body text-center">
																{/* Avatar */}
																<div className="avatar avatar-xl avatar-soft-dark avatar-circle avatar-centered mb-3">
																	<span className="avatar-initials">B</span>
																	<span className="avatar-status avatar-sm-status avatar-status-danger" />
																</div>
																{/* End Avatar */}
																<h3 className="mb-1">
																	<a
																		className="text-dark"
																		href="user-profile-connections.html#"
																	>
																		Bob Dean
																	</a>
																</h3>
																<div className="mb-3">
																	<i className="bi-building me-1" />
																	<span>Sales</span>
																</div>
																{/* Badges */}
																<ul className="list-inline mb-0">
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Sales
																		</a>
																	</li>
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Legal
																		</a>
																	</li>
																</ul>
																{/* End Badges */}
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																<div className="row justify-content-between align-items-center">
																	<div className="col-auto py-1">
																		<a
																			className="fs-6 text-body"
																			href="user-profile-connections.html#"
																		>
																			25 connections
																		</a>
																	</div>
																	{/* End Col */}
																	<div className="col-auto py-1">
																		{/* Form Check */}
																		<div className="form-check form-check-switch">
																			<input
																				className="form-check-input"
																				type="checkbox"
																				defaultValue
																				id="connectionsCheckbox4"
																			/>
																			<label
																				className="form-check-label btn btn-sm"
																				htmlFor="connectionsCheckbox4"
																			>
																				<span className="form-check-default">
																					<i className="bi-person-plus-fill" /> Connect
																				</span>
																				<span className="form-check-active">
																					<i className="bi-check-lg me-2" /> Connected
																				</span>
																			</label>
																		</div>
																		{/* End Form Check */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															<div className="card-pinned">
																<div className="card-pinned-top-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="connectionsDropdown5"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="connectionsDropdown5"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Share connection
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Block connection
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-connections.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
															</div>
															{/* Body */}
															<div className="card-body text-center">
																{/* Avatar */}
																<div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
																	<img
																		className="avatar-img"
																		src="/assets/img/160x160/img10.jpg"
																		alt="Image Description"
																	/>
																	<span className="avatar-status avatar-sm-status avatar-status-success" />
																</div>
																{/* End Avatar */}
																<h3 className="mb-1">
																	<a
																		className="text-dark"
																		href="user-profile-connections.html#"
																	>
																		Amanda Harvey
																	</a>
																</h3>
																<div className="mb-3">
																	<i className="bi-building me-1" />
																	<span>Atlassian</span>
																</div>
																{/* Badges */}
																<ul className="list-inline mb-0">
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Human resources
																		</a>
																	</li>
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Legal
																		</a>
																	</li>
																</ul>
																{/* End Badges */}
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																<div className="row justify-content-between align-items-center">
																	<div className="col-auto py-1">
																		<a
																			className="fs-6 text-body"
																			href="user-profile-connections.html#"
																		>
																			3 connections
																		</a>
																	</div>
																	{/* End Col */}
																	<div className="col-auto py-1">
																		{/* Form Check */}
																		<div className="form-check form-check-switch">
																			<input
																				className="form-check-input"
																				type="checkbox"
																				defaultValue
																				id="connectionsCheckbox5"
																				defaultChecked
																			/>
																			<label
																				className="form-check-label btn btn-sm"
																				htmlFor="connectionsCheckbox5"
																			>
																				<span className="form-check-default">
																					<i className="bi-person-plus-fill" /> Connect
																				</span>
																				<span className="form-check-active">
																					<i className="bi-check-lg me-2" /> Connected
																				</span>
																			</label>
																		</div>
																		{/* End Form Check */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															<div className="card-pinned">
																<div className="card-pinned-top-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="connectionsDropdown6"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="connectionsDropdown6"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Share connection
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Block connection
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-connections.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
															</div>
															{/* Body */}
															<div className="card-body text-center">
																{/* Avatar */}
																<div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
																	<img
																		className="avatar-img"
																		src="/assets/img/160x160/img5.jpg"
																		alt="Image Description"
																	/>
																	<span className="avatar-status avatar-sm-status avatar-status-success" />
																</div>
																{/* End Avatar */}
																<h3 className="mb-1">
																	<a
																		className="text-dark"
																		href="user-profile-connections.html#"
																	>
																		Finch Hoot
																	</a>
																</h3>
																<div className="mb-3">
																	<i className="bi-building me-1" />
																	<span>Dev</span>
																</div>
																{/* Badges */}
																<ul className="list-inline mb-0">
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			JS
																		</a>
																	</li>
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			Vue.js
																		</a>
																	</li>
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			HTML5
																		</a>
																	</li>
																</ul>
																{/* End Badges */}
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																<div className="row justify-content-between align-items-center">
																	<div className="col-auto py-1">
																		<a
																			className="fs-6 text-body"
																			href="user-profile-connections.html#"
																		>
																			7 connections
																		</a>
																	</div>
																	{/* End Col */}
																	<div className="col-auto py-1">
																		{/* Form Check */}
																		<div className="form-check form-check-switch">
																			<input
																				className="form-check-input"
																				type="checkbox"
																				defaultValue
																				id="connectionsCheckbox6"
																				defaultChecked
																			/>
																			<label
																				className="form-check-label btn btn-sm"
																				htmlFor="connectionsCheckbox6"
																			>
																				<span className="form-check-default">
																					<i className="bi-person-plus-fill" /> Connect
																				</span>
																				<span className="form-check-active">
																					<i className="bi-check-lg me-2" /> Connected
																				</span>
																			</label>
																		</div>
																		{/* End Form Check */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3 mb-lg-5">
														{/* Card */}
														<div className="card h-100">
															<div className="card-pinned">
																<div className="card-pinned-top-end">
																	{/* Dropdown */}
																	<div className="dropdown">
																		<button
																			type="button"
																			className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																			id="connectionsDropdown7"
																			data-bs-toggle="dropdown"
																			aria-expanded="false"
																		>
																			<i className="bi-three-dots-vertical" />
																		</button>
																		<div
																			className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																			aria-labelledby="connectionsDropdown7"
																		>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Share connection
																			</a>
																			<a
																				className="dropdown-item"
																				href="user-profile-connections.html#"
																			>
																				Block connection
																			</a>
																			<div className="dropdown-divider" />
																			<a
																				className="dropdown-item text-danger"
																				href="user-profile-connections.html#"
																			>
																				Delete
																			</a>
																		</div>
																	</div>
																	{/* End Dropdown */}
																</div>
															</div>
															{/* Body */}
															<div className="card-body text-center">
																{/* Avatar */}
																<div className="avatar avatar-xl avatar-circle avatar-centered mb-3">
																	<img
																		className="avatar-img"
																		src="/assets/img/160x160/img6.jpg"
																		alt="Image Description"
																	/>
																	<span className="avatar-status avatar-sm-status avatar-status-danger" />
																</div>
																{/* End Avatar */}
																<h3 className="mb-1">
																	<a
																		className="text-dark"
																		href="user-profile-connections.html#"
																	>
																		Costa Quinn
																	</a>
																</h3>
																<div className="mb-3">
																	<i className="bi-building me-1" />
																	<span>Research team</span>
																</div>
																{/* Badges */}
																<ul className="list-inline mb-0">
																	<li className="list-inline-item">
																		<a
																			className="badge bg-soft-secondary text-secondary p-2"
																			href="user-profile-connections.html#"
																		>
																			SEO
																		</a>
																	</li>
																</ul>
																{/* End Badges */}
															</div>
															{/* End Body */}
															{/* Footer */}
															<div className="card-footer">
																<div className="row justify-content-between align-items-center">
																	<div className="col-auto py-1">
																		<a
																			className="fs-6 text-body"
																			href="user-profile-connections.html#"
																		>
																			9 connections
																		</a>
																	</div>
																	{/* End Col */}
																	<div className="col-auto py-1">
																		{/* Form Check */}
																		<div className="form-check form-check-switch">
																			<input
																				className="form-check-input"
																				type="checkbox"
																				defaultValue
																				id="connectionsCheckbox7"
																			/>
																			<label
																				className="form-check-label btn btn-sm"
																				htmlFor="connectionsCheckbox7"
																			>
																				<span className="form-check-default">
																					<i className="bi-person-plus-fill" /> Connect
																				</span>
																				<span className="form-check-active">
																					<i className="bi-check-lg me-2" /> Connected
																				</span>
																			</label>
																		</div>
																		{/* End Form Check */}
																	</div>
																	{/* End Col */}
																</div>
																{/* End Row */}
															</div>
															{/* End Footer */}
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
												</div>
												{/* End Connections */}
											</div>
											<div
												className="tab-pane fade"
												id="list"
												role="tabpanel"
												aria-labelledby="list-tab"
											>
												<div className="row row-cols-1">
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex align-items-md-center">
																<div className="flex-shrink-0">
																	{/* Avatar */}
																	<div className="avatar avatar-lg avatar-soft-primary avatar-circle">
																		<span className="avatar-initials">R</span>
																		<span className="avatar-status avatar-sm-status avatar-status-warning" />
																	</div>
																	{/* End Avatar */}
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-md-center">
																		<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																			<h4 className="mb-1">
																				<a
																					className="text-dark"
																					href="user-profile-connections.html#"
																				>
																					Rachel Doe
																				</a>
																			</h4>
																			<span className="d-block">
																				<i className="bi-building me-1" />
																				<span>Design</span>
																			</span>
																		</div>
																		{/* End Col */}
																		<div className="col-3 col-md-auto order-md-last text-end ms-n3">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																					id="connectionsListDropdown1"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																					aria-labelledby="connectionsListDropdown1"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-connections.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Dropdown */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm mb-2 mb-sm-0">
																			{/* Badges */}
																			<ul className="list-inline mb-0">
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						UI/UX
																					</a>
																				</li>
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Sketch
																					</a>
																				</li>
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Figma
																					</a>
																				</li>
																			</ul>
																			{/* End Badges */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm-auto">
																			{/* Form Check */}
																			<div className="form-check form-check-switch">
																				<input
																					className="form-check-input"
																					type="checkbox"
																					defaultValue
																					id="connectionsListCheckbox1"
																					defaultChecked
																				/>
																				<label
																					className="form-check-label btn btn-sm"
																					htmlFor="connectionsListCheckbox1"
																				>
																					<span className="form-check-default">
																						<i className="bi-person-plus-fill" /> Connect
																					</span>
																					<span className="form-check-active">
																						<i className="bi-check-lg me-2" /> Connected
																					</span>
																				</label>
																			</div>
																			{/* End Form Check */}
																		</div>
																		{/* End Col */}
																	</div>
																	{/* End Row */}
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex align-items-md-center">
																<div className="flex-shrink-0">
																	{/* Avatar */}
																	<div className="avatar avatar-lg avatar-circle">
																		<img
																			className="avatar-img"
																			src="/assets/img/160x160/img8.jpg"
																			alt="Image Description"
																		/>
																		<span className="avatar-status avatar-sm-status avatar-status-success" />
																	</div>
																	{/* End Avatar */}
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-md-center">
																		<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																			<h4 className="mb-1">
																				<a
																					className="text-dark"
																					href="user-profile-connections.html#"
																				>
																					Isabella Finley
																				</a>
																			</h4>
																			<span className="d-block">
																				<i className="bi-building me-1" />
																				<span>FrontApp</span>
																			</span>
																		</div>
																		{/* End Col */}
																		<div className="col-3 col-md-auto order-md-last text-end ms-n3">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																					id="connectionsListDropdown2"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																					aria-labelledby="connectionsListDropdown2"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-connections.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Dropdown */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm mb-2 mb-sm-0">
																			{/* Badges */}
																			<ul className="list-inline mb-0">
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Human resources
																					</a>
																				</li>
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Support
																					</a>
																				</li>
																			</ul>
																			{/* End Badges */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm-auto">
																			{/* Form Check */}
																			<div className="form-check form-check-switch">
																				<input
																					className="form-check-input"
																					type="checkbox"
																					defaultValue
																					id="connectionsListCheckbox2"
																					defaultChecked
																				/>
																				<label
																					className="form-check-label btn btn-sm"
																					htmlFor="connectionsListCheckbox2"
																				>
																					<span className="form-check-default">
																						<i className="bi-person-plus-fill" /> Connect
																					</span>
																					<span className="form-check-active">
																						<i className="bi-check-lg me-2" /> Connected
																					</span>
																				</label>
																			</div>
																			{/* End Form Check */}
																		</div>
																		{/* End Col */}
																	</div>
																	{/* End Row */}
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex align-items-md-center">
																<div className="flex-shrink-0">
																	{/* Avatar */}
																	<div className="avatar avatar-lg avatar-circle">
																		<img
																			className="avatar-img"
																			src="/assets/img/160x160/img3.jpg"
																			alt="Image Description"
																		/>
																		<span className="avatar-status avatar-sm-status avatar-status-warning" />
																	</div>
																	{/* End Avatar */}
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-md-center">
																		<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																			<h4 className="mb-1">
																				<a
																					className="text-dark"
																					href="user-profile-connections.html#"
																				>
																					David Harrison
																				</a>
																			</h4>
																			<span className="d-block">
																				<i className="bi-building me-1" />
																				<span>Unassigned</span>
																			</span>
																		</div>
																		{/* End Col */}
																		<div className="col-3 col-md-auto order-md-last text-end ms-n3">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																					id="connectionsListDropdown3"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																					aria-labelledby="connectionsListDropdown3"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-connections.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Dropdown */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm mb-2 mb-sm-0">
																			{/* Badges */}
																			<ul className="list-inline mb-0">
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Marketing
																					</a>
																				</li>
																			</ul>
																			{/* End Badges */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm-auto">
																			{/* Form Check */}
																			<div className="form-check form-check-switch">
																				<input
																					className="form-check-input"
																					type="checkbox"
																					defaultValue
																					id="connectionsListCheckbox3"
																				/>
																				<label
																					className="form-check-label btn btn-sm"
																					htmlFor="connectionsListCheckbox3"
																				>
																					<span className="form-check-default">
																						<i className="bi-person-plus-fill" /> Connect
																					</span>
																					<span className="form-check-active">
																						<i className="bi-check-lg me-2" /> Connected
																					</span>
																				</label>
																			</div>
																			{/* End Form Check */}
																		</div>
																		{/* End Col */}
																	</div>
																	{/* End Row */}
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex align-items-md-center">
																<div className="flex-shrink-0">
																	{/* Avatar */}
																	<div className="avatar avatar-lg avatar-soft-dark avatar-circle">
																		<span className="avatar-initials">B</span>
																		<span className="avatar-status avatar-sm-status avatar-status-danger" />
																	</div>
																	{/* End Avatar */}
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-md-center">
																		<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																			<h4 className="mb-1">
																				<a
																					className="text-dark"
																					href="user-profile-connections.html#"
																				>
																					Bob Dean
																				</a>
																			</h4>
																			<span className="d-block">
																				<i className="bi-building me-1" />
																				<span>Sales</span>
																			</span>
																		</div>
																		{/* End Col */}
																		<div className="col-3 col-md-auto order-md-last text-end ms-n3">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																					id="connectionsListDropdown4"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																					aria-labelledby="connectionsListDropdown4"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-connections.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Dropdown */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm mb-2 mb-sm-0">
																			{/* Badges */}
																			<ul className="list-inline mb-0">
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Sales
																					</a>
																				</li>
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Legal
																					</a>
																				</li>
																			</ul>
																			{/* End Badges */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm-auto">
																			{/* Form Check */}
																			<div className="form-check form-check-switch">
																				<input
																					className="form-check-input"
																					type="checkbox"
																					defaultValue
																					id="connectionsListCheckbox4"
																				/>
																				<label
																					className="form-check-label btn btn-sm"
																					htmlFor="connectionsListCheckbox4"
																				>
																					<span className="form-check-default">
																						<i className="bi-person-plus-fill" /> Connect
																					</span>
																					<span className="form-check-active">
																						<i className="bi-check-lg me-2" /> Connected
																					</span>
																				</label>
																			</div>
																			{/* End Form Check */}
																		</div>
																		{/* End Col */}
																	</div>
																	{/* End Row */}
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex align-items-md-center">
																<div className="flex-shrink-0">
																	{/* Avatar */}
																	<div className="avatar avatar-lg avatar-circle">
																		<img
																			className="avatar-img"
																			src="/assets/img/160x160/img10.jpg"
																			alt="Image Description"
																		/>
																		<span className="avatar-status avatar-sm-status avatar-status-success" />
																	</div>
																	{/* End Avatar */}
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-md-center">
																		<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																			<h4 className="mb-1">
																				<a
																					className="text-dark"
																					href="user-profile-connections.html#"
																				>
																					Amanda Harvey
																				</a>
																			</h4>
																			<span className="d-block">
																				<i className="bi-building me-1" />
																				<span>Atlassian</span>
																			</span>
																		</div>
																		{/* End Col */}
																		<div className="col-3 col-md-auto order-md-last text-end ms-n3">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																					id="connectionsListDropdown5"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																					aria-labelledby="connectionsListDropdown5"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-connections.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Dropdown */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm mb-2 mb-sm-0">
																			{/* Badges */}
																			<ul className="list-inline mb-0">
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Human resources
																					</a>
																				</li>
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Legal
																					</a>
																				</li>
																			</ul>
																			{/* End Badges */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm-auto">
																			{/* Form Check */}
																			<div className="form-check form-check-switch">
																				<input
																					className="form-check-input"
																					type="checkbox"
																					defaultValue
																					id="connectionsListCheckbox5"
																					defaultChecked
																				/>
																				<label
																					className="form-check-label btn btn-sm"
																					htmlFor="connectionsListCheckbox5"
																				>
																					<span className="form-check-default">
																						<i className="bi-person-plus-fill" /> Connect
																					</span>
																					<span className="form-check-active">
																						<i className="bi-check-lg me-2" /> Connected
																					</span>
																				</label>
																			</div>
																			{/* End Form Check */}
																		</div>
																		{/* End Col */}
																	</div>
																	{/* End Row */}
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex align-items-md-center">
																<div className="flex-shrink-0">
																	{/* Avatar */}
																	<div className="avatar avatar-lg avatar-circle">
																		<img
																			className="avatar-img"
																			src="/assets/img/160x160/img5.jpg"
																			alt="Image Description"
																		/>
																		<span className="avatar-status avatar-sm-status avatar-status-success" />
																	</div>
																	{/* End Avatar */}
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-md-center">
																		<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																			<h4 className="mb-1">
																				<a
																					className="text-dark"
																					href="user-profile-connections.html#"
																				>
																					Finch Hoot
																				</a>
																			</h4>
																			<span className="d-block">
																				<i className="bi-building me-1" />
																				<span>Dev</span>
																			</span>
																		</div>
																		{/* End Col */}
																		<div className="col-3 col-md-auto order-md-last text-end ms-n3">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																					id="connectionsListDropdown6"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																					aria-labelledby="connectionsListDropdown6"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-connections.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Dropdown */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm mb-2 mb-sm-0">
																			{/* Badges */}
																			<ul className="list-inline mb-0">
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						JS
																					</a>
																				</li>
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						Vue.js
																					</a>
																				</li>
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						HTML5
																					</a>
																				</li>
																			</ul>
																			{/* End Badges */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm-auto">
																			{/* Form Check */}
																			<div className="form-check form-check-switch">
																				<input
																					className="form-check-input"
																					type="checkbox"
																					defaultValue
																					id="connectionsListCheckbox6"
																					defaultChecked
																				/>
																				<label
																					className="form-check-label btn btn-sm"
																					htmlFor="connectionsListCheckbox6"
																				>
																					<span className="form-check-default">
																						<i className="bi-person-plus-fill" /> Connect
																					</span>
																					<span className="form-check-active">
																						<i className="bi-check-lg me-2" /> Connected
																					</span>
																				</label>
																			</div>
																			{/* End Form Check */}
																		</div>
																		{/* End Col */}
																	</div>
																	{/* End Row */}
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
													<div className="col mb-3">
														{/* Card */}
														<div className="card card-body">
															<div className="d-flex align-items-md-center">
																<div className="flex-shrink-0">
																	{/* Avatar */}
																	<div className="avatar avatar-lg avatar-circle">
																		<img
																			className="avatar-img"
																			src="/assets/img/160x160/img6.jpg"
																			alt="Image Description"
																		/>
																		<span className="avatar-status avatar-sm-status avatar-status-danger" />
																	</div>
																	{/* End Avatar */}
																</div>
																<div className="flex-grow-1 ms-3">
																	<div className="row align-items-md-center">
																		<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
																			<h4 className="mb-1">
																				<a
																					className="text-dark"
																					href="user-profile-connections.html#"
																				>
																					Costa Quinn
																				</a>
																			</h4>
																			<span className="d-block">
																				<i className="bi-building me-1" />
																				<span>Research team</span>
																			</span>
																		</div>
																		{/* End Col */}
																		<div className="col-3 col-md-auto order-md-last text-end ms-n3">
																			{/* Dropdown */}
																			<div className="dropdown">
																				<button
																					type="button"
																					className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
																					id="connectionsListDropdown7"
																					data-bs-toggle="dropdown"
																					aria-expanded="false"
																				>
																					<i className="bi-three-dots-vertical" />
																				</button>
																				<div
																					className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
																					aria-labelledby="connectionsListDropdown7"
																				>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Rename project{" "}
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Add to favorites
																					</a>
																					<a
																						className="dropdown-item"
																						href="user-profile-connections.html#"
																					>
																						Archive project
																					</a>
																					<div className="dropdown-divider" />
																					<a
																						className="dropdown-item text-danger"
																						href="user-profile-connections.html#"
																					>
																						Delete
																					</a>
																				</div>
																			</div>
																			{/* End Dropdown */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm mb-2 mb-sm-0">
																			{/* Badges */}
																			<ul className="list-inline mb-0">
																				<li className="list-inline-item">
																					<a
																						className="badge bg-soft-secondary text-secondary p-2"
																						href="user-profile-connections.html#"
																					>
																						SEO
																					</a>
																				</li>
																			</ul>
																			{/* End Badges */}
																		</div>
																		{/* End Col */}
																		<div className="col-sm-auto">
																			{/* Form Check */}
																			<div className="form-check form-check-switch">
																				<input
																					className="form-check-input"
																					type="checkbox"
																					defaultValue
																					id="connectionsListCheckbox7"
																				/>
																				<label
																					className="form-check-label btn btn-sm"
																					htmlFor="connectionsListCheckbox7"
																				>
																					<span className="form-check-default">
																						<i className="bi-person-plus-fill" /> Connect
																					</span>
																					<span className="form-check-active">
																						<i className="bi-check-lg me-2" /> Connected
																					</span>
																				</label>
																			</div>
																			{/* End Form Check */}
																		</div>
																		{/* End Col */}
																	</div>
																	{/* End Row */}
																</div>
															</div>
														</div>
														{/* End Card */}
													</div>
													{/* End Col */}
												</div>
												{/* End Row */}
											</div>
										</div>
										{/* End Tab Content */}
									</div>

								)}
							</div>
							{/* End Row */}
						</div>
						{/* End Col */}
					</div>
					{/* End Row */}
				</div>
			</Layout>
			{/* showModal && (
				<Modal onCloseRequest={toggleTechPerformanceEdit}>
					<div className="form search-form inputs-underline">
						<form>
							<div className="section-title">
								<h2>
									Edit techs job requirement
								</h2>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label for="email">
										Techs
									</label>
									<br />
									<br />
									<Select
										isMulti
										placeholder="Techs"
										styles={colourStyles}
										options={techOptions}
										onChange={onTechChange}
										closeMenuOnSelect={false}
										classNamePrefix="react-select"
										components={animatedComponents}
										className="react-select-container"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="form-group">
									<label for="password">
										Required job qty
									</label>
									<br />
									<br />
									<Input 
										type="number" 
										name="capacity" 
										placeholder="6" 
										className="form-control" 
										value={formData.capacity} 
										onChange={onTechJobsChange} 
									/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group center">
									<button type="submit" className="btn btn-primary width-100" onClick={onTechEditSubmit}>
										Update
									</button>
								</div>
							</div>
						</form>
					</div>
				</Modal>
			) */}
		</>
	);
}

// export { getServerSideProps };
export const getServerSideProps = () => {
	return {
		props: {}
	}
};

export default Profile;

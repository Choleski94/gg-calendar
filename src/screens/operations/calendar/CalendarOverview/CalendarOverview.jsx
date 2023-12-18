import React from 'react';

import { Modal, Card } from '@components';
import mockCustomer from '@mocks/customers';
import formatMessage from '@utils/formatMessage';

// import AddCalendarForm from './forms/AddCalendarForm';

const CalendarScreen = ({ calendarId = '', setCalendarId }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ activeSection, setActiveSection ] = React.useState('');

	const fetchCalendars = () => {
		setLoading(true);
		setOptions(mockCustomer.list);
		setLoading(false);
	}

	React.useEffect(() => fetchCalendars(), []);

	const onSectionClick = (e, currentSection = '') => {
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const toggleAddUser = () => setShowModal(!showModal);

	const onAddCalendarClick = (e) => {
		e.preventDefault();
		toggleAddUser();
	};

	const onCalendarClick = (e, { id }) => {
		e.preventDefault();
		setCalendarId(id);
	};

	const renderAddCalendar = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddCalendarClick}>
			<i className="bi-plus" />
			Create new job
		</button>
	);

	return (
		<>
			<div className="row">
				<div className="col-lg-2 mb-3 mb-lg-5">
					<div className="d-grid gap-2 gap-lg-4">
						<Card>
							<Card.Header>
								<h4 className="header-title">Techs</h4>
							</Card.Header>
							<Card.Body>
								<ul className="step mb-0">
									<li className="step-item mb-3">
										<div className="step-content-wrapper">
											<div className="step-avatar">
												<img
													className="step-avatar"
													src="/assets/img/160x160/img9.jpg"
													alt="Image Description"
												/>
											</div>
											<div className="step-content">
												<h3 className="mt-2 mb-3">Iana Robinson</h3>
											</div>
										</div>
									</li>
									<li className="step-item mb-3">
										<div className="step-content-wrapper">
											<span className="step-icon step-icon-soft-dark">B</span>
											<div className="step-content">
												<h3 className="mt-2 mb-3">Bob Dean</h3>
											</div>
										</div>
									</li>
									<li className="step-item mb-3">
										<div className="step-content-wrapper">
											<div className="step-avatar">
												<img
													className="step-avatar-img"
													src="/assets/img/160x160/img3.jpg"
													alt="Image Description"
												/>
											</div>
											<div className="step-content">
												<h3 className="mt-2 mb-3">Crane</h3>
											</div>
										</div>
									</li>
									<li className="step-item mb-3">
										<div className="step-content-wrapper">
											<span className="step-icon step-icon-soft-info">D</span>
											<div className="step-content">
												<h3 className="mt-2 mb-3">David Lidell</h3>
											</div>
										</div>
									</li>
									<li className="step-item mb-3">
										<div className="step-content-wrapper">
											<div className="step-avatar">
												<img
													className="step-avatar-img"
													src="/assets/img/160x160/img7.jpg"
													alt="Image Description"
												/>
											</div>
											<div className="step-content">
												<h3 className="mt-2 mb-3">Rachel King</h3>
											</div>
										</div>
									</li>
									<li className="step-item mb-3">
										<div className="step-content-wrapper">
											<div className="step-avatar">
												<img
													className="step-avatar-img"
													src="/assets/img/160x160/img6.jpg"
													alt="Image Description"
												/>
											</div>
											<div className="step-content">
												<h3 className="mt-2 mb-3">
													<a className="text-dark" href="#">
														Mark Williams
													</a>
												</h3>
											</div>
										</div>
									</li>
									<li className="step-item mb-0">
										<div className="step-content-wrapper">
											<span className="step-icon step-icon-soft-primary">C</span>
											<div className="step-content">
												<h3 className="mt-2 mb-3">
													<a className="text-dark" href="#">
														Costa Quinn
													</a>
												</h3>
											</div>
										</div>
									</li>
								</ul>
							</Card.Body>
						</Card>
						<Card>
							<Card.Header>
								<h4 className="header-title">
									Tags
								</h4>
							</Card.Header>
							<Card.Body>
								<div className="mb-2">
									<span className="d-inline-block">
										<span className="badge bg-soft-primary text-primary">
											<span className="bi bi-fire" />
											&nbsp;
											Gas
										</span>
									</span>
								</div>
								<div className="mb-2">
									<span className="d-inline-block">
										<span className="badge bg-soft-warning text-warning">
											<span className="bi bi-car-front-fill" />
											&nbsp;
											Cars
										</span>
									</span>
								</div>
								<div className="mb-2">
									<span className="d-inline-block">
										<span className="badge bg-soft-success text-success">
											<span className="bi bi-person-fill" />
											&nbsp;
											x2 Techs
										</span>
									</span>
								</div>
								<div className="mb-2">
									<span className="d-inline-block">
										<span className="badge bg-soft-danger text-danger">
											<span className="bi bi-hammer" />
											&nbsp;
											Need special tool
										</span>
									</span>
								</div>
							</Card.Body>
						</Card>
						<Card>
							<Card.Header>
								<h4 className="header-title">
									Status
								</h4>
							</Card.Header>
							<Card.Body>
								<div className="mb-2">
									<span className="d-inline-block">
										<span className="badge bg-soft-primary text-primary">
											<span className="bi bi-cash" />
											&nbsp;
											Money Owed
										</span>
									</span>
								</div>
								<div className="mb-2">
									<span className="d-inline-block">
										<span className="badge bg-soft-warning text-warning">
											<span className="bi bi-arrow-counterclockwise" />
											&nbsp;
											Recalls
										</span>
									</span>
								</div>
								<div className="mb-2">
									<span className="d-inline-block">
										<span className="badge bg-soft-danger text-danger">
											<span className="bi bi-x-lg" />
											&nbsp;
											Cancelled
										</span>
									</span>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
				<div className="col-lg-10 mb-3 mb-lg-5">
					<div className="d-grid gap-2 gap-lg-4">
						<Card>
							<Card.Header>
								<h4 className="mb-0">
									This Week Jobs
								</h4>
							</Card.Header>
							<Card.Body>
								<div className="table-responsive" id="jobsCalendarTable">
									<table className="table table-bordered custom__table btn-sm">
										<thead>
											<tr>
												<th id="big__th" className="text-center" colSpan={8}>
													Work Flow all time
												</th>
											</tr>
											<tr>
												<th>Reschedule</th>
												<th>Waiting List</th>
												<th>Parts Research</th>
												<th>To Call?</th>
												<th>Order Parts</th>
												<th>Waiting for Parts</th>
												<th>Backorder waiting</th>
												<th>Parts Recieved</th>
											</tr>
										</thead>
										<tbody id="jobsCalendarList">
											<tr>
												<td>
													<span className="jobCalendarBadge">Job 1234 ✈ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 4324 ✪ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 6456 ❤ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 2423 ☆ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 9789 ✈ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 7567 ✪ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 5345 ❤ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 7567 ☆ - ☹</span>
												</td>
											</tr>
											<tr>
												<td>
													<span className="jobCalendarBadge">Job 1234 ✈ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 4324 ✪ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 6456 ❤ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 2423 ☆ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 9789 ✈ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 7567 ✪ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 5345 ❤ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 7567 ☆ - ☹</span>
												</td>
											</tr>
											<tr>
												<td>
													<span className="jobCalendarBadge">Job 1234 ✈ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 4324 ✪ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 6456 ❤ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 2423 ☆ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 9789 ✈ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 7567 ✪ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 5345 ❤ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 7567 ☆ - ☹</span>
												</td>
											</tr>
											<tr>
												<td>
													<span className="jobCalendarBadge">Job 1234 ✈ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 4324 ✪ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 6456 ❤ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 2423 ☆ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 9789 ✈ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 7567 ✪ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 5345 ❤ - ☹</span>
												</td>
												<td>
													<span className="jobCalendarBadge">Job 7567 ☆ - ☹</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</Card.Body>
						</Card>
						<Card>
							<Card.Header>
								<h4 className="mb-0">
									Calls missing This week
								</h4>
							</Card.Header>
							<Card.Body>
								<div className="table-responsive" id="jobWeeklyStatsCalendar">
									<table className="table table-bordered custom__table btn-sm">
										<thead>
											<tr>
												<th id="big__th" className="text-center" colSpan={7}>
													Calls missing This week
												</th>
												<th id="big__th" className="text-center" colSpan={3}>
													This week
												</th>
											</tr>
											<tr>
												<th>Sunday</th>
												<th>Monday</th>
												<th>Tuesday</th>
												<th>Wednesday</th>
												<th>Thursday</th>
												<th>Friday</th>
												<th>Saturday</th>
												<th>Payment Due</th>
												<th>Recalls this week</th>
												<th>Cancelled</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>2</td>
												<td>3</td>
												<td>4</td>
												<td>5</td>
												<td>6</td>
												<td>7</td>
												<td>8</td>
												<td>9</td>
												<td>10</td>
											</tr>
										</tbody>
									</table>
								</div>
							</Card.Body>
						</Card>
						<Card>
							<Card.Body>
								<div className="d-flex justify-content-between mb-2">
									<span />
									<div>
										<input type="hidden" id="type" defaultValue name="type" />
										<a
											className="btn btn-sm btn-primary c-green"
											href="index.html%3Ftype=TechAssigned.html"
										>
											Tech Assigned
										</a>
										&nbsp;
										<a
											className="btn btn-sm btn-primary c-green"
											href="index.html%3Ftype=Status.html"
										>
											Status
										</a>
										&nbsp;
										<a
											className="btn btn-sm btn-primary c-green"
											href="index.html%3Ftype=DispatchZone.html"
										>
											Dispatch Zone
										</a>
									</div>
								</div>
								<div
									id="mainCalendar"
									className="fc fc-media-screen fc-direction-ltr fc-theme-standard"
									style={{ height: "800px" }}
								>
									<div className="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
										<div className="fc-toolbar-chunk">
											<div className="fc-button-group">
												<button
													type="button"
													title="Previous week"
													aria-pressed="false"
													className="fc-prev-button fc-button fc-button-primary"
												>
													<span className="fc-icon fc-icon-chevron-left" />
												</button>
												<button
													type="button"
													title="Next week"
													aria-pressed="false"
													className="fc-next-button fc-button fc-button-primary"
												>
													<span className="fc-icon fc-icon-chevron-right" />
												</button>
											</div>
											<button
												type="button"
												title="This week"
												disabled
												aria-pressed="false"
												className="fc-today-button fc-button fc-button-primary"
											>
												today
											</button>
										</div>
										<div className="fc-toolbar-chunk">
											<h2 className="fc-toolbar-title" id="fc-dom-1">
												Jul 3 – 9, 2023
											</h2>
										</div>
										<div className="fc-toolbar-chunk">
											<div className="fc-button-group">
												<button
													type="button"
													title="month view"
													aria-pressed="false"
													className="fc-dayGridMonth-button fc-button fc-button-primary"
												>
													month
												</button>
												<button
													type="button"
													title="week view"
													aria-pressed="false"
													className="fc-timeGridWeek-button fc-button fc-button-primary"
												>
													week
												</button>
												<button
													type="button"
													title="day view"
													aria-pressed="false"
													className="fc-timeGridDay-button fc-button fc-button-primary"
												>
													day
												</button>
											</div>
										</div>
									</div>
									<div
										aria-labelledby="fc-dom-1"
										className="fc-view-harness fc-view-harness-active"
									>
										<div className="fc-daygrid fc-dayGridWeek-view fc-view">
											<table
												role="grid"
												className="fc-scrollgrid  fc-scrollgrid-liquid"
											>
												<thead role="rowgroup">
													<tr
														role="presentation"
														className="fc-scrollgrid-section fc-scrollgrid-section-header "
													>
														<th role="presentation">
															<div className="fc-scroller-harness">
																<div
																	className="fc-scroller"
																	style={{ overflow: "hidden" }}
																>
																	<table
																		role="presentation"
																		className="fc-col-header "
																		style={{ width: "1282px" }}
																	>
																		<colgroup />
																		<thead role="presentation">
																			<tr role="row">
																				<th
																					role="columnheader"
																					className="fc-col-header-cell fc-day fc-day-mon fc-day-past"
																					data-date="2023-07-03"
																				>
																					<div className="fc-scrollgrid-sync-inner">
																						<a
																							className="fc-col-header-cell-cushion "
																							aria-label="July 3, 2023"
																						>
																							Mon 7/3
																						</a>
																					</div>
																				</th>
																				<th
																					role="columnheader"
																					className="fc-col-header-cell fc-day fc-day-tue fc-day-today "
																					data-date="2023-07-04"
																				>
																					<div className="fc-scrollgrid-sync-inner">
																						<a
																							className="fc-col-header-cell-cushion "
																							aria-label="July 4, 2023"
																						>
																							Tue 7/4
																						</a>
																					</div>
																				</th>
																				<th
																					role="columnheader"
																					className="fc-col-header-cell fc-day fc-day-wed fc-day-future"
																					data-date="2023-07-05"
																				>
																					<div className="fc-scrollgrid-sync-inner">
																						<a
																							className="fc-col-header-cell-cushion "
																							aria-label="July 5, 2023"
																						>
																							Wed 7/5
																						</a>
																					</div>
																				</th>
																				<th
																					role="columnheader"
																					className="fc-col-header-cell fc-day fc-day-thu fc-day-future"
																					data-date="2023-07-06"
																				>
																					<div className="fc-scrollgrid-sync-inner">
																						<a
																							className="fc-col-header-cell-cushion "
																							aria-label="July 6, 2023"
																						>
																							Thu 7/6
																						</a>
																					</div>
																				</th>
																				<th
																					role="columnheader"
																					className="fc-col-header-cell fc-day fc-day-fri fc-day-future"
																					data-date="2023-07-07"
																				>
																					<div className="fc-scrollgrid-sync-inner">
																						<a
																							className="fc-col-header-cell-cushion "
																							aria-label="July 7, 2023"
																						>
																							Fri 7/7
																						</a>
																					</div>
																				</th>
																				<th
																					role="columnheader"
																					className="fc-col-header-cell fc-day fc-day-sat fc-day-future"
																					data-date="2023-07-08"
																				>
																					<div className="fc-scrollgrid-sync-inner">
																						<a
																							className="fc-col-header-cell-cushion "
																							aria-label="July 8, 2023"
																						>
																							Sat 7/8
																						</a>
																					</div>
																				</th>
																				<th
																					role="columnheader"
																					className="fc-col-header-cell fc-day fc-day-sun fc-day-future"
																					data-date="2023-07-09"
																				>
																					<div className="fc-scrollgrid-sync-inner">
																						<a
																							className="fc-col-header-cell-cushion "
																							aria-label="July 9, 2023"
																						>
																							Sun 7/9
																						</a>
																					</div>
																				</th>
																			</tr>
																		</thead>
																	</table>
																</div>
															</div>
														</th>
													</tr>
												</thead>
												<tbody role="rowgroup">
													<tr
														role="presentation"
														className="fc-scrollgrid-section fc-scrollgrid-section-body  fc-scrollgrid-section-liquid"
													>
														<td role="presentation">
															<div className="fc-scroller-harness fc-scroller-harness-liquid">
																<div
																	className="fc-scroller fc-scroller-liquid-absolute"
																	style={{ overflow: "hidden auto" }}
																>
																	<div
																		className="fc-daygrid-body fc-daygrid-body-unbalanced "
																		style={{ width: "1282px" }}
																	>
																		<table
																			role="presentation"
																			className="fc-scrollgrid-sync-table"
																			style={{ width: "1282px", height: "694px" }}
																		>
																			<colgroup />
																			<tbody role="presentation">
																				<tr role="row">
																					<td
																						role="gridcell"
																						className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
																						data-date="2023-07-03"
																					>
																						<div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
																							<div className="fc-daygrid-day-events">
																								<div
																									className="fc-daygrid-day-bottom"
																									style={{ marginTop: "0px" }}
																								/>
																							</div>
																							<div className="fc-daygrid-day-bg" />
																						</div>
																					</td>
																					<td
																						role="gridcell"
																						className="fc-daygrid-day fc-day fc-day-tue fc-day-today "
																						data-date="2023-07-04"
																					>
																						<div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
																							<div className="fc-daygrid-day-events">
																								<div
																									className="fc-daygrid-day-bottom"
																									style={{ marginTop: "0px" }}
																								/>
																							</div>
																							<div className="fc-daygrid-day-bg" />
																						</div>
																					</td>
																					<td
																						role="gridcell"
																						className="fc-daygrid-day fc-day fc-day-wed fc-day-future"
																						data-date="2023-07-05"
																					>
																						<div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
																							<div className="fc-daygrid-day-events">
																								<div
																									className="fc-daygrid-day-bottom"
																									style={{ marginTop: "0px" }}
																								/>
																							</div>
																							<div className="fc-daygrid-day-bg" />
																						</div>
																					</td>
																					<td
																						role="gridcell"
																						className="fc-daygrid-day fc-day fc-day-thu fc-day-future"
																						data-date="2023-07-06"
																					>
																						<div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
																							<div className="fc-daygrid-day-events">
																								<div
																									className="fc-daygrid-day-bottom"
																									style={{ marginTop: "0px" }}
																								/>
																							</div>
																							<div className="fc-daygrid-day-bg" />
																						</div>
																					</td>
																					<td
																						role="gridcell"
																						className="fc-daygrid-day fc-day fc-day-fri fc-day-future"
																						data-date="2023-07-07"
																					>
																						<div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
																							<div className="fc-daygrid-day-events">
																								<div
																									className="fc-daygrid-day-bottom"
																									style={{ marginTop: "0px" }}
																								/>
																							</div>
																							<div className="fc-daygrid-day-bg" />
																						</div>
																					</td>
																					<td
																						role="gridcell"
																						className="fc-daygrid-day fc-day fc-day-sat fc-day-future"
																						data-date="2023-07-08"
																					>
																						<div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
																							<div className="fc-daygrid-day-events">
																								<div
																									className="fc-daygrid-day-bottom"
																									style={{ marginTop: "0px" }}
																								/>
																							</div>
																							<div className="fc-daygrid-day-bg" />
																						</div>
																					</td>
																					<td
																						role="gridcell"
																						className="fc-daygrid-day fc-day fc-day-sun fc-day-future"
																						data-date="2023-07-09"
																					>
																						<div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
																							<div className="fc-daygrid-day-events">
																								<div
																									className="fc-daygrid-day-bottom"
																									style={{ marginTop: "0px" }}
																								/>
																							</div>
																							<div className="fc-daygrid-day-bg" />
																						</div>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
				<div id="calendarModal" className="modal" tabIndex={-1}>
					<div className="modal-dialog modal-dialog-centered modal-xl">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">
									<b>Detailed Job View (#30143)</b>
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								/>
							</div>
							<div className="modal-body">
								<div className="row">
									<div className="col-md-6">
										<iframe
											src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.80094804192!2d-73.68534308405313!3d45.433513743510844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91692ffd227a1%3A0x425a79efc273a71!2s2080%20Bd%20Saint-Joseph%20%23301%2C%20Lachine%2C%20QC%20H8S%202N6%2C%20Canada!5e0!3m2!1sen!2sus!4v1663395791423!5m2!1sen!2sus"
											width="100%"
											height="50%"
											style={{ border: 0 }}
										/>
										<table className="table border table-sm custom__job__table mt-3">
											<tbody>
												<tr>
													<th>Current Status</th>
													<td>
														Review Sent <br />
														<b>
															Invoice#<a href="index.html#">1458742</a>
														</b>
													</td>
												</tr>
												<tr>
													<th>Start &amp; End Dates</th>
													<td>11/08/2022</td>
												</tr>
												<tr>
													<th>Estimated Duration</th>
													<td>1h 30m</td>
												</tr>
												<tr>
													<th>Arrival Time Window</th>
													<td>08:00 to 08:30</td>
												</tr>
												<tr>
													<th>Assigned Techs</th>
													<td>T1 - Mike .</td>
												</tr>
												<tr>
													<th>Notes For Techs</th>
													<td>Not Set</td>
												</tr>
												<tr>
													<th>Completion Notes</th>
													<td>Not Set</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="col-md-6">
										<p>
											<b>Current Status:</b>
											<br />
											<span className="badge bg-info bg-sm">Review Sent</span>
										</p>
										<table className="table border custom__job__table table-sm">
											<tbody>
												<tr>
													<th>Customer</th>
													<td>
														<a href="index.html#">John Cena</a>
													</td>
												</tr>
												<tr>
													<th>Primary Contact</th>
													<td>
														Elizabeth Verge
														<br />
														514-219-7027 (Mobile)
													</td>
												</tr>
												<tr>
													<th>Service Location</th>
													<td>2080 Boulevard Saint-Joseph #301</td>
												</tr>
												<tr>
													<th>Job Description</th>
													<td>First call, Wood panel F&amp;P fridge</td>
												</tr>
												<tr>
													<th>PO #</th>
													<td>Not Set</td>
												</tr>
											</tbody>
										</table>
										<table className="table border table-sm custom__job__table">
											<tbody>
												<tr>
													<th>Paid By</th>
													<td>Credit Card (Offline)</td>
												</tr>
												<tr>
													<th>Check/Ref#</th>
													<td>Not Set</td>
												</tr>
												<tr>
													<th>Terms</th>
													<td>DUR</td>
												</tr>
												<tr>
													<th>Status</th>
													<td>
														<span className="badge bg-primary bg-sm">
															Paid in Full
														</span>
													</td>
												</tr>
											</tbody>
										</table>
										<div>
											<a
												href="index.html#"
												className="btn btn-primary c-btn mb-2 w-100"
											>
												View Details
											</a>
											<br />
											<a
												href="index.html#"
												className="btn btn-primary c-btn mb-2 w-100"
											>
												Make Changes
											</a>
											<br />
											<a
												href="index.html#"
												className="btn btn-primary c-btn mb-2 w-100"
											>
												Deposits
											</a>
											<br />
											<a
												href="index.html#"
												className="btn btn-danger c-btn mb-2 w-100"
												data-bs-dismiss="modal"
											>
												Exit
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			{showModal && (
				<Modal onCloseRequest={toggleAddUser}>
					Todo add calendar form
				</Modal>
			)}
		</>
	);
};

export default CalendarScreen;

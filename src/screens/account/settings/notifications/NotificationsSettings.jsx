import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Card, Modal, SwitchToggle } from '@components';

const NotificationsSettings = () => {
	return (
		<Card>
			<Card.Header>
				<Card.Title>
					Notifications
				</Card.Title>
			</Card.Header>
			<form>
				<div className="table-responsive datatable-custom">
					<table className="table table-thead-bordered table-nowrap table-align-middle table-first-col-px-0">
						<thead className="thead-light">
							<tr>
								<th>Type</th>
								<th className="text-center">
									<div className="mb-1">
										<img
											className="avatar avatar-xs"
											src="/assets/svg/illustrations/oc-email-at.svg"
											alt="Image Description"
											data-hs-theme-appearance="default"
										/>
									</div>
									Email
								</th>
								<th className="text-center">
									<div className="mb-1">
										<img
											className="avatar avatar-xs"
											src="/assets/svg/illustrations/oc-globe.svg"
											alt="Image Description"
											data-hs-theme-appearance="default"
										/>
									</div>
									Browser
								</th>
								<th className="text-center">
									<div className="mb-1">
										<img
											className="avatar avatar-xs"
											src="/assets/svg/illustrations/oc-phone.svg"
											alt="Image Description"
											data-hs-theme-appearance="default"
										/>
									</div>
									App
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>New for you</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									Account activity{" "}
									<i
										className="bi-question-circle text-body ms-1"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										aria-label="Get important notifications about you or activity you've missed"
										data-bs-original-title="Get important notifications about you or activity you've missed"
									/>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
							</tr>
							<tr>
								<td>A new browser used to sign in</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
							</tr>
							<tr>
								<td>A new device is linked</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
							</tr>
							<tr>
								<td>
									A new device connected{" "}
									<i
										className="bi-question-circle text-body ms-1"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										aria-label="Email me when a new device connected"
										data-bs-original-title="Email me when a new device connected"
									/>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<SwitchToggle />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</form>
			<Card.Body>
				<div className="row">
					<div className="col-md-12">
						<div className="d-flex justify-content-end">
							<button type="submit" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}

export default NotificationsSettings;

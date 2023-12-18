import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import { Card, Modal } from '@components';
import formatMessage from '@utils/formatMessage';

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
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox1"
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox1"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox2"
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox2"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox3"
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox3"
										/>
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
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox4"
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox4"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox5"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox5"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox6"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox6"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td>A new browser used to sign in</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox7"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox7"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox8"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox8"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox9"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox9"
										/>
									</div>
								</td>
							</tr>
							<tr>
								<td>A new device is linked</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox10"
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox10"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox11"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox11"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox12"
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox12"
										/>
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
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox13"
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox13"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox14"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox14"
										/>
									</div>
								</td>
								<td className="text-center">
									<div className="form-check form-check-inline">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue
											id="editUserModalAlertsCheckbox15"
											defaultChecked
										/>
										<label
											className="form-check-label"
											htmlFor="editUserModalAlertsCheckbox15"
										/>
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

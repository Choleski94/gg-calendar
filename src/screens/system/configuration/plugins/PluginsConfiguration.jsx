import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import { Card, Modal } from '@components';
import formatMessage from '@utils/formatMessage';

const PluginsConfiguration = () => {
	return (
		<>
			<Card>
				<Card.Header>
					<Card.Title>
						Supported Plugins
					</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						Integrated features from these accounts make it easier to
						collaborate with people you know on Tigado Dashboard.
					</Card.Text>
					<form>
						<div className="list-group list-group-lg list-group-flush list-group-no-gutters">
							{/* List Item */}
							<div className="list-group-item">
								<div className="d-flex">
									<div className="flex-shrink-0">
										<img
											className="avatar avatar-xs"
											src="/assets/svg/brands/google-icon.svg"
											alt="Image Description"
										/>
									</div>
									<div className="flex-grow-1 ms-3">
										<div className="row align-items-center">
											<div className="col">
												<h4 className="mb-0">Google</h4>
												<p className="fs-5 text-body mb-0">
													Calendar and contacts
												</p>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Form Switch */}
												<div className="form-check form-switch">
													<input
														className="form-check-input"
														type="checkbox"
														id="connectedAccounts1"
													/>
													<label
														className="form-check-label"
														htmlFor="connectedAccounts1"
													/>
												</div>
												{/* End Form Switch */}
											</div>
											{/* End Col */}
										</div>
										{/* End Row */}
									</div>
								</div>
							</div>
							{/* End List Item */}
							{/* List Item */}
							<div className="list-group-item">
								<div className="d-flex">
									<div className="flex-shrink-0">
										<img
											className="avatar avatar-xs"
											src="/assets/svg/brands/spec-icon.svg"
											alt="Image Description"
										/>
									</div>
									<div className="flex-grow-1 ms-3">
										<div className="row align-items-center">
											<div className="col">
												<h4 className="mb-0">Spec</h4>
												<p className="fs-5 text-body mb-0">
													Project management
												</p>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Form Switch */}
												<div className="form-check form-switch">
													<input
														className="form-check-input"
														type="checkbox"
														id="connectedAccounts2"
													/>
													<label
														className="form-check-label"
														htmlFor="connectedAccounts2"
													/>
												</div>
												{/* End Form Switch */}
											</div>
											{/* End Col */}
										</div>
										{/* End Row */}
									</div>
								</div>
							</div>
							{/* End List Item */}
							{/* List Item */}
							<div className="list-group-item">
								<div className="d-flex">
									<div className="flex-shrink-0">
										<img
											className="avatar avatar-xs"
											src="/assets/svg/brands/slack-icon.svg"
											alt="Image Description"
										/>
									</div>
									<div className="flex-grow-1 ms-3">
										<div className="row align-items-center">
											<div className="col">
												<h4 className="mb-0">Slack</h4>
												<p className="fs-5 text-body mb-0">
													Communication{" "}
													<a
														className="link"
														href="account-settings.html#"
													>
														Learn more
													</a>
												</p>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Form Switch */}
												<div className="form-check form-switch">
													<input
														className="form-check-input"
														type="checkbox"
														id="connectedAccounts3"
														defaultChecked
													/>
													<label
														className="form-check-label"
														htmlFor="connectedAccounts3"
													/>
												</div>
												{/* End Form Switch */}
											</div>
											{/* End Col */}
										</div>
										{/* End Row */}
									</div>
								</div>
							</div>
							{/* End List Item */}
							{/* List Item */}
							<div className="list-group-item">
								<div className="d-flex">
									<div className="flex-shrink-0">
										<img
											className="avatar avatar-xs"
											src="/assets/svg/brands/mailchimp-icon.svg"
											alt="Image Description"
										/>
									</div>
									<div className="flex-grow-1 ms-3">
										<div className="row align-items-center">
											<div className="col">
												<h4 className="mb-0">Mailchimp</h4>
												<p className="fs-5 text-body mb-0">
													Email marketing service
												</p>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Form Switch */}
												<div className="form-check form-switch">
													<input
														className="form-check-input"
														type="checkbox"
														id="connectedAccounts4"
														defaultChecked
													/>
													<label
														className="form-check-label"
														htmlFor="connectedAccounts4"
													/>
												</div>
												{/* End Form Switch */}
											</div>
											{/* End Col */}
										</div>
										{/* End Row */}
									</div>
								</div>
							</div>
							{/* End List Item */}
							{/* List Item */}
							<div className="list-group-item">
								<div className="d-flex">
									<div className="flex-shrink-0">
										<img
											className="avatar avatar-xs"
											src="/assets/svg/brands/google-webdev-icon.svg"
											alt="Image Description"
										/>
									</div>
									<div className="flex-grow-1 ms-3">
										<div className="row align-items-center">
											<div className="col">
												<h4 className="mb-0">Google Webdev</h4>
												<p className="fs-5 text-body mb-0">
													Tools for Web Developers{" "}
													<a
														className="link"
														href="account-settings.html#"
													>
														Learn more
													</a>
												</p>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Form Switch */}
												<div className="form-check form-switch">
													<input
														className="form-check-input"
														type="checkbox"
														id="connectedAccounts5"
													/>
													<label
														className="form-check-label"
														htmlFor="connectedAccounts5"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</Card.Body>
			</Card>
		</>
	);
}

export default PluginsConfiguration;

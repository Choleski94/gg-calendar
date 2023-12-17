import React from 'react';

import formatMessage from '@utils/formatMessage';

const InvitePeople = () => {
	return (
		<>
			<div className="mb-4">
				<div className="input-group mb-2 mb-sm-0">
					<input
						type="text"
						name="fullName"
						className="form-control"
						placeholder="Search by id, name or emails"
						aria-label="Search by id, name or emails"
					/>
					<div className="input-group-append input-group-append-last-sm-down-none">
						<div className="tom-select-custom tom-select-custom-end">
							<select
								className="js-select form-select tom-select-custom-form-select-invite-user tomselected ts-hidden-accessible"
								autoComplete="off"
								id="tomselect-4"
								tabIndex={-1}
							>
								<option value="can edit">Can edit</option>
								<option value="can comment">Can comment</option>
								<option value="full access">Full access</option>
								<option value="guest" selected>
									Guest
								</option>
							</select>
							<div className="ts-wrapper js-select form-select tom-select-custom-form-select-invite-user single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
								<div className="ts-control">
									<div data-value="guest" className="item" data-ts-item>
										Guest
									</div>
								</div>
								<div className="tom-select-custom" />
							</div>
						</div>
						<a
							className="btn btn-primary d-none d-sm-inline-block"
							href="javascript:;"
						>
							Invite
						</a>
					</div>
				</div>
				<a className="btn btn-primary w-100 d-sm-none" href="javascript:;">
					Invite
				</a>
			</div>
			<ul className="list-unstyled list-py-2">
				<li>
					<div className="d-flex">
						<div className="flex-shrink-0">
							<span className="icon icon-soft-dark icon-sm icon-circle">
								<i className="bi-people-fill" />
							</span>
						</div>
						<div className="flex-grow-1 ms-3">
							<div className="row align-items-center">
								<div className="col-sm">
									<h5 className="text-body mb-0">#digitalmarketing</h5>
									<span className="d-block fs-6">8 members</span>
								</div>
								<div className="col-sm-auto">
									<div className="tom-select-custom tom-select-custom-sm-end">
										<select
											className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0 tomselected ts-hidden-accessible"
											autoComplete="off"
											id="tomselect-5"
											tabIndex={-1}
										>
											<option value="guest">Guest</option>
											<option value="can comment">Can comment</option>
											<option value="full access">Full access</option>
											<option
												value="remove"
												data-option-template='<div class="text-danger">Remove</div>'
											>
												Remove
											</option>
											<option value="can edit" selected>
												Can edit
											</option>
										</select>
										<div className="ts-wrapper js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0 single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
											<div className="ts-control">
												<div
													data-value="can edit"
													className="item"
													data-ts-item
												>
													Can edit
												</div>
											</div>
											<div className="tom-select-custom" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className="d-flex">
						<div className="flex-shrink-0">
							<div className="avatar avatar-sm avatar-circle">
								<img
									className="avatar-img"
									src="/assets/img/160x160/img3.jpg"
									alt="Image Description"
								/>
							</div>
						</div>
						<div className="flex-grow-1 ms-3">
							<div className="row align-items-center">
								<div className="col-sm">
									<h5 className="text-body mb-0">David Harrison</h5>
									<span className="d-block fs-6">david@site.com</span>
								</div>
								<div className="col-sm-auto">
									<div className="tom-select-custom tom-select-custom-sm-end">
										<select
											className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0 tomselected ts-hidden-accessible"
											autoComplete="off"
											id="tomselect-6"
											tabIndex={-1}
										>
											<option value="guest">Guest</option>
											<option value="can comment">Can comment</option>
											<option value="full access">Full access</option>
											<option
												value="remove"
												data-option-template='<div class="text-danger">Remove</div>'
											>
												Remove
											</option>
											<option value="can edit" selected>
												Can edit
											</option>
										</select>
										<div className="ts-wrapper js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0 single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
											<div className="ts-control">
												<div
													data-value="can edit"
													className="item"
													data-ts-item
												>
													Can edit
												</div>
											</div>
											<div className="tom-select-custom" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className="d-flex">
						<div className="flex-shrink-0">
							<div className="avatar avatar-sm avatar-circle">
								<img
									className="avatar-img"
									src="/assets/img/160x160/img9.jpg"
									alt="Image Description"
								/>
							</div>
						</div>
						<div className="flex-grow-1 ms-3">
							<div className="row align-items-center">
								<div className="col-sm">
									<h5 className="text-body mb-0">
										Ella Lauda{" "}
										<i
											className="bi-patch-check-fill text-primary"
											data-bs-toggle="tooltip"
											data-bs-placement="top"
											aria-label="Top endorsed"
											data-bs-original-title="Top endorsed"
										/>
									</h5>
									<span className="d-block fs-6">Markvt@site.com</span>
								</div>
								<div className="col-sm-auto">
									<div className="tom-select-custom tom-select-custom-sm-end">
										<select
											className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0 tomselected ts-hidden-accessible"
											autoComplete="off"
											id="tomselect-7"
											tabIndex={-1}
										>
											<option value="guest">Guest</option>
											<option value="can comment">Can comment</option>
											<option value="full access">Full access</option>
											<option
												value="remove"
												data-option-template='<div class="text-danger">Remove</div>'
											>
												Remove
											</option>
											<option value="can edit" selected>
												Can edit
											</option>
										</select>
										<div className="ts-wrapper js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0 single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
											<div className="ts-control">
												<div
													data-value="can edit"
													className="item"
													data-ts-item
												>
													Can edit
												</div>
											</div>
											<div className="tom-select-custom" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
				<li>
					<div className="d-flex">
						<div className="flex-shrink-0">
							<span className="icon icon-soft-dark icon-sm icon-circle">
								<i className="bi-people-fill" />
							</span>
						</div>
						<div className="flex-grow-1 ms-3">
							<div className="row align-items-center">
								<div className="col-sm">
									<h5 className="text-body mb-0">#conference</h5>
									<span className="d-block fs-6">3 members</span>
								</div>
								<div className="col-sm-auto">
									<div className="tom-select-custom tom-select-custom-sm-end">
										<select
											className="js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0 tomselected ts-hidden-accessible"
											autoComplete="off"
											id="tomselect-8"
											tabIndex={-1}
										>
											<option value="guest">Guest</option>
											<option value="can comment">Can comment</option>
											<option value="full access">Full access</option>
											<option
												value="remove"
												data-option-template='<div class="text-danger">Remove</div>'
											>
												Remove
											</option>
											<option value="can edit" selected>
												Can edit
											</option>
										</select>
										<div className="ts-wrapper js-select form-select form-select-borderless tom-select-custom-form-select-invite-user tom-select-form-select-ps-0 single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
											<div className="ts-control">
												<div
													data-value="can edit"
													className="item"
													data-ts-item
												>
													Can edit
												</div>
											</div>
											<div className="tom-select-custom" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
			<label className="row form-check form-switch">
				<span className="col-8 col-sm-9 ms-0">
					<i className="bi-bell text-primary me-2" />
					<span className="text-dark">
						Inform all project members
					</span>
				</span>
				<span className="col-4 col-sm-3 text-end">
					<input
						type="checkbox"
						defaultChecked
						className="form-check-input"
					/>
				</span>
			</label>
		</>
	);
};

export default InvitePeople;

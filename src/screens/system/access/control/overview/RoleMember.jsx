
import React from 'react';

import formatMessage from '@utils/formatMessage';

const RoleMember = () => {
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
						<a
							className="btn btn-primary d-none d-sm-inline-block"
						>
							Invite
						</a>
					</div>
				</div>
				<a className="btn btn-primary w-100 d-sm-none">
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
								<div className="col-sm-auto" />
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
								<div className="col-sm-auto" />
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
								<div className="col-sm-auto" />
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
								<div className="col-sm-auto" />
							</div>
						</div>
					</div>
				</li>
			</ul>
			<label className="row form-check form-switch">
				<span className="col-8 col-sm-9 ms-0">
					<i className="bi-bell text-primary me-2" />
					<span className="text-dark">
						Inform all team members
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

export default RoleMember;

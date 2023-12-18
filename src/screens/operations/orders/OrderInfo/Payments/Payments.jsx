import React from 'react';

import api from '@api';
import Modal from '@components/Modal';
import formatMessage from '@utils/formatMessage';

export const PaymentsCTA = ({ onClick }) => (
	<a className="btn btn-primary" href="#add-payment" onClick={onClick}>
		<i className="bi bi-credit-card-2-back-fill me-1" /> Add new payment
	</a>
);

const Payments = ({ id: customerId = '' }) => {

	const [ showModal, setShowModal ] = React.useState(false);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<div className="card">
				<div className="card-header card-header-content-between">
					<h4 className="card-header-title">
						Payment Method
					</h4>
				</div>
				<div className="card-body">
					<div className="mb-4">
						<p>
							Cards will be charged either at the end of the month or whenever
							your balance exceeds the usage threshold. All major credit /
							debit cards accepted.
						</p>
					</div>
					<ul className="list-group mb-5">
						<li className="list-group-item">
							<div className="mb-2">
								<h5>
									Maria Williams
									&nbsp;
									<span className="badge bg-primary ms-1">Primary</span>
								</h5>
							</div>
							<div className="d-flex">
								<div className="flex-shrink-0">
									<img
										className="avatar avatar-sm"
										src="/assets/svg/brands/mastercard.svg"
										alt="Image Description"
									/>
								</div>
								<div className="flex-grow-1 ms-3">
									<div className="row">
										<div className="col-sm mb-3 mb-sm-0">
											<span className="d-block text-dark">
												MasterCard •••• 4242
											</span>
											<small className="d-block text-muted">
												Checking - Expires 12/22
											</small>
										</div>
										<div className="col-sm-auto">
											<div className="d-flex gap-3">
												<a
													className="btn btn-white btn-sm"
													data-bs-toggle="modal"
													data-bs-target="#accountEditCardModal"
												>
													<i className="bi-pencil-fill me-1" /> Edit
												</a>
												<button
													type="button"
													className="btn btn-white btn-sm text-danger"
												>
													<i className="bi-trash me-1" /> Delete
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="list-group-item">
							<div className="mb-2">
								<h5>
									Maria Williams
									&nbsp;
									<span className="text-danger small ms-1">Expired</span>
								</h5>
							</div>
							<div className="d-flex">
								<div className="flex-shrink-0">
									<img
										className="avatar avatar-sm"
										src="/assets/svg/brands/visa.svg"
										alt="Image Description"
									/>
								</div>
								<div className="flex-grow-1 ms-3">
									<div className="row">
										<div className="col-sm mb-3 mb-sm-0">
											<span className="d-block text-dark">
												Visa •••• 9016
											</span>
											<small className="d-block text-muted">
												Debit - Expires 04/20
											</small>
										</div>
										<div className="col-sm-auto">
											<div className="d-flex gap-3">
												<a
													className="btn btn-white btn-sm"
													data-bs-toggle="modal"
													data-bs-target="#accountEditCardModal"
												>
													<i className="bi-pencil-fill me-1" /> Edit
												</a>
												<button
													type="button"
													className="btn btn-white btn-sm text-danger"
												>
													<i className="bi-trash me-1" /> Delete
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<div className="mb-4">
						<h4>Tax location</h4>
						<p className="mb-0">CA - 15.00% GST</p>
						<a className="link" href="#">
							More info
						</a>
					</div>
					<p className="mb-0">
						Your invoice location determines the taxes that are applied to your bill.
					</p>
					<a className="link" href="#">
						How do I correct my tax location?
					</a>
				</div>
			</div>
		</div>
	);
};

export default Payments;

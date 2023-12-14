import React from 'react';

import formatMessage from '@utils/formatMessage';

const SummaryCard = () => {
	return (
		<>
			<div className="card card-body mb-3 mb-lg-5">
				<div className="row col-lg-divider gx-lg-6">
					<div className="col-lg-3">
						<div className="d-flex">
							<div className="flex-grow-1">
								<h6 className="card-subtitle mb-3">
									Invoice
								</h6>
								<h3 className="card-title">$7,820.75</h3>
								<div className="d-flex align-items-center">
									<span className="d-block fs-6">5k orders</span>
									<span className="badge bg-soft-success text-success ms-2">
										<i className="bi-graph-up" /> 4.3%
									</span>
								</div>
							</div>
							<span className="icon icon-soft-secondary icon-sm icon-circle ms-3">
								<i className="bi-shop" />
							</span>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="d-flex">
							<div className="flex-grow-1">
								<h6 className="card-subtitle mb-3">
									Estimate
								</h6>
								<h3 className="card-title">$985,937.45</h3>
								<div className="d-flex align-items-center">
									<span className="d-block fs-6">21k orders</span>
									<span className="badge bg-soft-success text-success ms-2">
										<i className="bi-graph-up" /> 12.5%
									</span>
								</div>
							</div>
							<span className="icon icon-soft-secondary icon-sm icon-circle ms-3">
								<i className="bi-layout-text-window-reverse" />
							</span>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="d-flex">
							<div className="flex-grow-1">
								<h6 className="card-subtitle mb-3">
									Payment
								</h6>
								<h3 className="card-title">$15,503.00</h3>
								<div className="d-flex align-items-center">
									<span className="d-block fs-6">6k orders</span>
								</div>
							</div>
							<span className="icon icon-soft-secondary icon-sm icon-circle ms-3">
								<i className="bi-percent" />
							</span>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="d-flex">
							<div className="flex-grow-1">
								<h6 className="card-subtitle mb-3">
									Due Balance
								</h6>
								<h3 className="card-title">$3,982.53</h3>
								<div className="d-flex align-items-center">
									<span className="d-block fs-6">150 orders</span>
									<span className="badge bg-soft-danger text-danger ms-2">
										<i className="bi-graph-down" /> 4.4%
									</span>
								</div>
							</div>
							<span className="icon icon-soft-secondary icon-sm icon-circle ms-3">
								<i className="bi-people" />
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SummaryCard;


import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const ProductDetailsEdit = ({ readOnly }) => (
	<div className="d-grid gap-3 gap-lg-5 mt-5">
		<div className="row">
			<div className="col-lg-12">
				<div className="row">
					<div className="col-lg-12">
						<div className="mb-4">
							<label className="form-label">
								Category
							</label>
							<div className="tom-select-custom">
								<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
									<div className="ts-control">
										<div className="item">
											Washer
										</div>
									</div>
									<div className="tom-select-custom" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="mb-4">
							<label className="form-label">
								Name
							</label>
							<input type="text" className="form-control mb-3" placeholder="" aria-label="Postal Code" disabled={readOnly} />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="mb-4">
							<label className="form-label">
								Product #
							</label>
							<input type="text" className="form-control mb-3" placeholder="" aria-label="Postal Code" disabled={readOnly} />
						</div>
					</div>
					<div className="col-lg-4">
						<div className="mb-4">
							<label className="form-label">
								State
							</label>
							<div className="tom-select-custom">
								<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
									<div className="ts-control">
										<div className="item">
											Québec
										</div>
									</div>
									<div className="tom-select-custom" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="mb-4">
							<label className="form-label">
								City
							</label>
							<div className="tom-select-custom">
								<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
									<div className="ts-control">
										<div className="item">
											Montréal
										</div>
									</div>
									<div className="tom-select-custom" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-9">
						<div className="mb-4">
							<label className="form-label">
								Address
							</label>
							<input type="text" className="form-control mb-3" placeholder="" aria-label="Address" disabled={readOnly} />
						</div>
					</div>
					<div className="col-sm-3">
						<div className="mb-4">
							<label className="form-label">
								Unit
							</label>
							&nbsp;
							<span className="form-label-secondary">
								(Optional)
							</span>
							<input type="text" className="form-control mb-3" placeholder="" aria-label="Unit" disabled={readOnly} />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ProductDetailsEdit;

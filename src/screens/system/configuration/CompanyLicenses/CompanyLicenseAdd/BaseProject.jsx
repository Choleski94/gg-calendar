import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const BaseProject = ({ readOnly }) => (
	<div className="row">
		<div className="col-lg-12">
			<h5 className="bg-light p-2">
				Basic Info
			</h5>
		</div>
		<div className="col-lg-12">
			<div className="row">
				<div className="col-lg-6">
					<div className="mb-4">
						<label className="form-label">
							Brand
						</label>
						<div className="tom-select-custom">
							<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
								<div className="ts-control">
									<div className="item">
										Fridge
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
							Equipment
						</label>
						<div className="tom-select-custom">
							<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
								<div className="ts-control">
									<div className="item">
										Service
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
							Model
						</label>
						&nbsp;
						<span className="form-label-secondary">
							(Optional)
						</span>
						<input type="text" className="form-control mb-3" placeholder="Project model" aria-label="Project model" disabled={readOnly} />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="mb-4">
						<label className="form-label">
							Serial
						</label>
						&nbsp;
						<span className="form-label-secondary">
							(Optional)
						</span>
						<input type="text" className="form-control mb-3" placeholder="Project code" aria-label="Project code" disabled={readOnly} />
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-6">
					<div className="mb-4">
						<label className="form-label">
							Status
						</label>
						<input type="text" className="form-control mb-3" placeholder="Project status" aria-label="Project status" disabled={readOnly} />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="mb-4">
						<label className="form-label">
							Extimated next visit time
						</label>
						<input type="text" className="form-control mb-3" placeholder="Next visit time estimate" aria-label="Next visit time estimate" disabled={readOnly} />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default BaseProject;

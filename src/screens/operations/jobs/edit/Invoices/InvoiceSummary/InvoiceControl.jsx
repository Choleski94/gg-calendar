import React from 'react';

import formatMessage from '@utils/formatMessage';

const InvoiceControl = () => (
	<div id="stickyBlockStartPoint">
		<div className="js-sticky-block">
			<div className="d-grid gap-2 gap-sm-3 mb-2 mb-sm-3">
				<a className="btn btn-primary">
					<i className="bi-cursor-fill me-1" /> Send invoice
				</a>
			</div>
			<div className="row gx-3">
				<div className="col-sm mb-2 mb-sm-0">
					<div className="d-grid">
						<a className="btn btn-white">
							Print
						</a>
					</div>
				</div>
				{/* End Col */}
				<div className="col-sm">
					<div className="d-grid">
						<a className="btn btn-white">
							Save
						</a>
					</div>
				</div>
				{/* End Col */}
			</div>
			{/* End Row */}
			<hr className="my-4" />
			{/* Form */}
			<div className="mb-4">
				<label
					htmlFor="currencyLabel-ts-control"
					className="form-label"
					id="currencyLabel-ts-label"
				>
					Currency
				</label>
				<div className="tom-select-custom">
					<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
						<div className="ts-control">
							<span
								className="d-flex align-items-center text-truncate item"
								data-value="currency1"
								data-ts-item
							>
								<img
									className="avatar avatar-xss avatar-circle me-2"
									src="/assets/vendor/flag-icon-css/flags/1x1/ca.svg"
									alt="Image description"
									width={16}
								/>
								<span>CAD (Canadian Dollar)</span>
							</span>
						</div>
						<div className="tom-select-custom" />
					</div>
				</div>
			</div>
			<div className="d-grid gap-3">
				<label className="row form-check form-switch">
					<span className="col-8 col-sm-9 ms-0">
						Payment terms
					</span>
					<span className="col-4 col-sm-3 text-end">
						<input
							type="checkbox"
							className="form-check-input"
							id="invoicePaymentTermsSwitch"
							defaultChecked
						/>
					</span>
				</label>
				<label className="row form-check form-switch">
					<span className="col-8 col-sm-9 ms-0">
						Techs notes
					</span>
					<span className="col-4 col-sm-3 text-end">
						<input
							type="checkbox"
							className="form-check-input"
							id="invoiceClientNotesSwitch"
						/>
					</span>
				</label>
				<label className="row form-check form-switch">
					<span className="col-8 col-sm-9 ms-0">
						Warranty policy
					</span>
					<span className="col-4 col-sm-3 text-end">
						<input
							type="checkbox"
							defaultChecked
							className="form-check-input"
							id="invoiceAttachPDFSwitch"
						/>
					</span>
				</label>
				<label className="row form-check form-switch">
					<span className="col-8 col-sm-9 ms-0">
						Attach PDF in mail
					</span>
					<span className="col-4 col-sm-3 text-end">
						<input
							type="checkbox"
							className="form-check-input"
							id="invoiceAttachPDFSwitch"
						/>
					</span>
				</label>
			</div>
		</div>
	</div>
);

export default InvoiceControl;

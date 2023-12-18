import React from 'react';
import { useNavigate } from 'react-router-dom';

import api from '@api';
import { Card, Input } from '@components';
import formatMessage from '@utils/formatMessage';

const ExpenseSettings = ({ data, setData }) => {
	const navigate = useNavigate();

	const [ errors, setErrors ] = React.useState({});

	const onChange = (e) => setData({
		...data,
		[e.target.name]: e.target.value
	});

	const onCancelClick = (e) => {
		e.preventDefault();
		return navigate('/accounting/expenses');
	}

	const onSaveClick = (e) => {

	}

	return (
		<Card>
			<Card.Body>
				<div className="js-sticky-block">
					{/*
					<div className="d-grid gap-2 gap-sm-3 mb-2 mb-sm-3">
						<a className="btn btn-white">
							<i className="bi-download me-1" /> Download
						</a>
					</div>
					<hr className="my-4" />
					*/}
					<div className="row">
						<div className="col-md-6">
							<Input 
								id="id"
								type="text" 
								name="id" 
								label="Job Id"
								placeholder="A-1023"
								onChange={onChange}
								value={data?.id}
								error={errors?.id}
								className="form-control mb-3" 
							/>
						</div>
						<div className="col-md-6">
							<div className="mb-4">
								<label className="form-label" id="currencyLabel-ts-label">
									Status
								</label>
								<div className="tom-select-custom">
									<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
										<div className="ts-control">
											<span
												className="d-flex align-items-center text-truncate item"
												data-value="currency1"
												data-ts-item
											>
												<span>
													Draft
												</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-4">
						<label className="form-label" id="currencyLabel-ts-label">
							Currency
						</label>
						{/* Select */}
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
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<Input 
								id="deposit"
								type="number" 
								name="deposit" 
								label="Deposit"
								placeholder="0.00"
								onChange={onChange}
								value={data?.deposit}
								error={errors?.deposit}
								className="form-control mb-3" 
							/>
						</div>
						<div className="col-md-6">
							<Input 
								id="discount"
								type="number" 
								name="discount" 
								label="Discount"
								placeholder="0.00"
								onChange={onChange}
								value={data?.discount}
								error={errors?.discount}
								className="form-control mb-3" 
							/>
						</div>
					</div>
					<Input 
						type="text" 
						id="taxPercent"
						name="taxPercent" 
						label="Tax Percent"
						placeholder="15.00"
						onChange={onChange}
						value={data?.taxPercent}
						error={errors?.taxPercent}
						className="form-control mb-3" 
					/>
					<div className="d-grid gap-3 mb-4">
						<label
							className="row form-check form-switch"
							htmlFor="expensePaymentTermsSwitch"
						>
							<span className="col-8 col-sm-9 ms-0">
								Important notes
							</span>
							<span className="col-4 col-sm-3 text-end">
								<input
									type="checkbox"
									className="form-check-input"
									id="expensePaymentTermsSwitch"
									defaultChecked
								/>
							</span>
						</label>
						<label
							className="row form-check form-switch"
							htmlFor="expenseTechNotesSwitch"
						>
							<span className="col-8 col-sm-9 ms-0">
								Tech notes
							</span>
							<span className="col-4 col-sm-3 text-end">
								<input
									type="checkbox"
									id="expenseTechNotesSwitch"
									className="form-check-input"
								/>
							</span>
						</label>
						<label
							className="row form-check form-switch"
							htmlFor="expenseAttachPDFSwitch"
						>
							<span className="col-8 col-sm-9 ms-0">
								Attach PDF in mail
							</span>
							<span className="col-4 col-sm-3 text-end">
								<input
									type="checkbox"
									className="form-check-input"
									id="expenseAttachPDFSwitch"
								/>
							</span>
						</label>
					</div>
					<div className="row gx-3">
						<div className="col-sm mb-2 mb-sm-0">
							<div className="d-grid">
								<a className="btn btn-outline-danger" onClick={onCancelClick}>
									<i className="bi-trash-fill me-1" /> Cancel
								</a>
							</div>
						</div>
						<div className="col-sm">
							<div className="d-grid">
								<a className="btn btn-outline-success" onClick={onSaveClick}>
									<i className="bi-save-fill me-1" /> Save expense
								</a>
							</div>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default ExpenseSettings;

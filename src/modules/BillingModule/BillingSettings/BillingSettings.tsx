import React from 'react';
import { useNavigate } from 'react-router-dom';

import { request } from '@utils/request';
import { parseSelectOptionValues } from '@utils';
import formatMessage from '@utils/formatMessage';
import { Card, Input, Select } from '@components';
import { ENTITY_INVOICE } from '@constants/invoices';
import { ENTITY_ESTIMATE } from '@constants/estimates';

const DEFAULT_STATUS_OPTIONS = [
	{ label: 'Draft', value: 'draft' },
	{ label: 'Pending', value: 'pending' },
	{ label: 'Sent', value: 'sent' }, 
];

const BillingSettings = ({ type, data, setData }) => {
	const navigate = useNavigate();

	const [ errors, setErrors ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);

	// Set supported type statuses.
	const statusOptions = React.useMemo(() => {
		let res = [ ...DEFAULT_STATUS_OPTIONS ];

		if (type !== 'INVOICE') {
			res.push({
				label: 'Accepted', 
				value: 'accepted',
			});
		}

		return res;
	}, [ type ]);

	const onChange = (e) => setData({
		...data,
		[e.target.name]: e.target.value
	})

	const onFilterChange = (currentOptions, key) => {
		setData({ ...data, [key]: currentOptions });
	}

	const onCancelClick = (e) => {
		e.preventDefault();
		return navigate('/accounting/invoices');
	}

	const onMailClick = (e) => {
		e.preventDefault();
		// TODO: console.log('Mailling...');
	}

	const onDownloadClick = (e) => {
		e.preventDefault();
		// TODO: console.log('Download...');
	}

	const [ activeEntity, redirectUrl, numberPlaceholder, ctaText ] = React.useMemo(() => {
		let [ aEntity, rUrl, nPlaceholder, cText ] = [ '', '', '', '' ];
		if (type === 'INVOICE') {
			cText = 'invoice';
			aEntity = ENTITY_INVOICE;
			nPlaceholder = 'INVOICE-1023';
			rUrl = '/accounting/invoices';
		} else {
			cText = 'estimate';
			aEntity = ENTITY_ESTIMATE;
			nPlaceholder = 'ESTIMATE-1023';
			rUrl = '/accounting/estimates';
		}

		return [ aEntity, rUrl, nPlaceholder, cText ];
	}, [ type ]);

	const onSaveClick = (e) => {
		setLoading(true);

		const payload = {
			client: data?.client, 
			number: data?.number,
			taxRate: Number(data?.taxRate), 
			expiredDate: data?.expiredDate,
			year: data?.year, date: data?.date,
			status: (data?.status || {}).value,
			items: data?.items.map(({ itemName, description, quantity, price, total }) => ({
				price: Number(price), 
				itemName, description, 
				quantity: Number(quantity),
				total: Number(price) * Number(quantity),
			}))
		}

		request.create({ entity: activeEntity, jsonData: payload }).then((data) => {
			setLoading(false);
			if (data.success === true) {
				return navigate(redirectUrl);
			}
		}).catch((error) => {
			setLoading(false);
		});
	}

	return (
		<Card>
			<Card.Body>
				<div className="js-sticky-block">
					<div className="row">
						<div className="col-md-6">
							<div className="mb-4">
								<Input 
									label="PO"
									id="number"
									type="text" 
									name="number" 
									onChange={onChange}
									value={data?.number}
									error={errors?.number}
									className="form-control mb-3" 
									placeholder={numberPlaceholder}
								/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="mb-4">
								<Select 
									label="Status"
									closeMenuOnSelect
									value={data?.status}
									options={statusOptions}
									classNamePrefix="react-select"
									className="react-select-container"
									onChange={(data) => onFilterChange(data, 'status')}
								/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6">
							<div className="mb-4">
								<Input 
									id="date"
									type="date" 
									name="date" 
									label="Date"
									value={data?.date}
									error={errors?.date}
									onChange={onChange}
									className="form-control mb-3" 
								/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="mb-4">
								<Input 
									type="date" 
									id="expiredDate"
									name="expiredDate" 
									onChange={onChange}
									label="Expired date"
									className="form-control mb-3" 
									value={data?.expiredDate}
									error={errors?.expiredDate}
								/>
							</div>
						</div>
					</div>
					{/*
					<div className="mb-4">
						<label className="form-label" id="currencyLabel-ts-label">
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
							</div>
						</div>
					</div>
					*/}
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
						id="taxRate"
						name="taxRate" 
						label="Tax Percent"
						placeholder="15.00"
						onChange={onChange}
						value={data?.taxRate}
						error={errors?.taxRate}
						className="form-control mb-3" 
					/>
					<div className="d-grid gap-3 mb-4">
						{(data?.id && type !== 'INVOICE') ? (
							<label
								className="row form-check form-switch"
								htmlFor="invoicePaymentTermsSwitch"
							>
								<span className="col-8 col-sm-9 ms-0">
									Convert to invoice
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
						) : null}
						<label
							className="row form-check form-switch"
							htmlFor="invoicePaymentTermsSwitch"
						>
							<span className="col-8 col-sm-9 ms-0">
								Important notes
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
						<label
							className="row form-check form-switch"
							htmlFor="invoiceTechNotesSwitch"
						>
							<span className="col-8 col-sm-9 ms-0">
								Tech notes
							</span>
							<span className="col-4 col-sm-3 text-end">
								<input
									type="checkbox"
									id="invoiceTechNotesSwitch"
									className="form-check-input"
								/>
							</span>
						</label>
						<label
							className="row form-check form-switch"
							htmlFor="invoiceAttachPDFSwitch"
						>
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
					{data?.id ? (
						<>
							<div className="row gx-3">
								<div className="col-sm mb-2 mb-sm-0">
									<div className="d-grid">
										<a className="btn btn-white" onClick={onMailClick}>
											<i className="bi-envelope me-1" />
											&nbsp;
											Mail {ctaText}
										</a>
									</div>
								</div>
								<div className="col-sm">
									<div className="d-grid">
										<a className="btn btn-white" onClick={onDownloadClick}>
											<i className="bi-download me-1" />
											&nbsp;
											Download
										</a>
									</div>
								</div>
							</div>
							<hr className="my-4" />
						</>
					) : null}
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
									<i className="bi-save-fill me-1" />
									&nbsp;
									Save {ctaText}
								</a>
							</div>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default BillingSettings;


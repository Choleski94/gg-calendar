import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Input, Select, Schedule, ImageUpload } from '@components';

const orgId = '8fa9a6e2-d4f3-49e3-9d1c-42b227f64fd2';

const CompanyInformationForm = ({ defaultValue, typeOptions = [], sectorOptions = [] }) => {
	const [ errors, setErrors ] = React.useState({});
	const [ payload, setPayload ] = React.useState({});

	React.useEffect(() => {
		setPayload(defaultValue);
	}, [ defaultValue ]);

	const { executeMutation, loading } = {};

	const handleMutation = async (mutationVariables) => {
		try {
			setErrors({}); // Clear previous errors

			const { data, error } = await executeMutation(mutationVariables);

			if (!error) {
				return data?.update_organizations.returning;
			}
		} catch (err) {
			setErrors({ name: errorMessages.unique });
		}
	};

	React.useEffect(() => {
		setPayload({
			id: defaultValue?.id,
			www: defaultValue?.www,
			name: defaultValue?.name,
			logo: defaultValue?.logo,
			slogan: defaultValue?.slogan,
			type_id: defaultValue?.type_id,
			sector_id: defaultValue?.sector_id,
			org_number: defaultValue?.org_number,
			pst_number: defaultValue?.pst_number,
			gst_number: defaultValue?.gst_number,
			pst_percent: defaultValue?.pst_percent,
			gst_percent: defaultValue?.gst_percent,
		});
	}, [ defaultValue ]);

	const errorMessages = {
		empty: 'Can\'t be empty.',
	};

	const validate = (payload) => {
		const errs = {};

		// Check for empty input(s).
		if (!payload.name) {
			errs.name = errorMessages.empty;
		}

		return errs;
	}

	const onChange = (e) => setPayload({
		...payload, [e.target.name]: e.target.value
	});

        const onSelectChange = ({ value }, key = '') => setPayload({
		...payload, [key]: value
	});

	const onSubmit = (e) => {
		// Check if we have error(s).
		const errs = validate(payload);
		setErrors(errs);

		if (Object.keys(errs).length) return null;

		handleMutation({ payload });
	}

	/* Labels */
	const sectorLabel = (
		<>
			Sector
			&nbsp;
			<span className="form-label-secondary">
				(Optional)
			</span>
		</>
	);

	const typeLabel = (
		<>
			Type
			&nbsp;
			<span className="form-label-secondary">
				(Optional)
			</span>
		</>
	)

	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="row">
					<div className="col-lg-12">
						<h5 className="mb-2 text-uppercase bg-light p-2">
							Company Information
						</h5>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<div className="col-lg-12 mt-3">
							<ImageUpload type="BUSINESS" />
						</div>
						<div className="col-lg-12 mt-3">
							<Input
								id="slogan"
								type="text"
								name="slogan"
								label={(
									<>
										Slogan
										&nbsp;
										<span className="form-label-secondary">
											(Optional)
										</span>
									</>
								)}
								value={payload?.slogan}
								onChange={onChange}
								error={errors?.slogan}
								className="form-control form-control-lg"
								// placeholder={formatMessage('page.signin.form.name.text')}
							/>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="col-lg-12 mt-3">
							<Input
								id="name"
								type="text"
								name="name"
								label="Name"
								value={payload?.name}
								onChange={onChange}
								error={errors?.name}
								className="form-control form-control-lg"
								// placeholder={formatMessage('page.signin.form.name.text')}
							/>
						</div>
						<div className="col-lg-12 mt-4">
							<Input
								id="org_number"
								type="text"
								name="org_number"
								label="Business Number"
								value={payload?.org_number}
								onChange={onChange}
								error={errors?.org_number}
								className="form-control form-control-lg"
								// placeholder={formatMessage('page.signin.form.name.text')}
							/>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="col-lg-12 mt-3">
							<Select
								closeMenuOnSelect
								defaultValue={payload?.type_id}
								label={typeLabel} options={typeOptions} 
								onChange={(payload) => onSelectChange(payload, 'type_id')}
							/>
						</div>
						<div className="col-lg-12">
							<div className="row">
								<div className="col-lg-8 mt-4">
									<Input
										id="pst_number"
										type="text"
										name="pst_number"
										label="PST/QST Number"
										value={payload?.pst_number}
										onChange={onChange}
										error={errors?.pst_number}
										className="form-control form-control-lg"
										// placeholder={formatMessage('page.signin.form.name.text')}
									/>
								</div>
								<div className="col-lg-4 mt-4">
									<Input
										id="pst_percent"
										type="text"
										name="pst_percent"
										label="PST/QST %"
										value={payload?.pst_percent}
										onChange={onChange}
										error={errors?.pst_percent}
										className="form-control form-control-lg"
										placeholder="9.975"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="col-lg-12 mt-3">
							<Select
								closeMenuOnSelect
								defaultValue={payload?.sector_id}
								label={sectorLabel} options={sectorOptions} 
								onChange={(payload) => onSelectChange(payload, 'sector_id')}
							/>
						</div>
						<div className="col-lg-12">
							<div className="row">
								<div className="col-lg-8 mt-4">
									<Input
										id="gst_number"
										type="text"
										name="gst_number"
										label="GST Number"
										value={payload?.gst_number}
										onChange={onChange}
										error={errors?.gst_number}
										className="form-control form-control-lg"
										// placeholder={formatMessage('page.signin.form.name.text')}
									/>
								</div>
								<div className="col-lg-4 mt-4">
									<Input
										id="gst_percent"
										type="text"
										name="gst_percent"
										label="GST %"
										value={payload?.gst_percent}
										onChange={onChange}
										error={errors?.gst_percent}
										className="form-control form-control-lg"
										placeholder="5"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 mt-3">
						<Input
							id="www"
							type="text"
							name="www"
							label={(
								<>
									Website
									&nbsp;
									<span className="form-label-secondary">
										(Optional)
									</span>
								</>
							)}
							value={payload?.www}
							onChange={onChange}
							error={errors?.www}
							className="form-control form-control-lg"
							// placeholder={formatMessage('page.signin.form.name.text')}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 mt-4">
						<div className="d-flex align-items-center">
							<div className="ms-auto">
								<button type="button" className="btn btn-primary" onClick={onSubmit}>
									<i className="bi bi-save" />
									&nbsp;
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CompanyInformationForm;

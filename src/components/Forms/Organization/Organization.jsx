import React from 'react';
import { Country, State, City } from 'country-state-city';

import { getClearOptions } from '@utils';
import formatMessage from '@utils/formatMessage';
import { Button, Input, Select, MultiInput, ImageUpload } from '@components';

import useOrganizationOptions from './useOrganizationOptions';
import { initForm, initPayload } from './Organization.controller';

const OrganizationForm = ({
	data = {}, 
	handleSubmit, 
	setData = () => null, 
	withoutSubmit = false,
}) => {
	const [ errors, setErrors ] = React.useState({});
	const [ payload, setPayload ] = React.useState({});
	const [ isFormChanged, setIsFormChanged ] = React.useState(false);

	const {
		typeOptions, 
		phoneOptions,
		emailOptions,
		sectorOptions,
	} = useOrganizationOptions();

	// Initialize form with data.
	React.useEffect(() => {
		if (isFormChanged) return 

		setPayload(initPayload(data));
	}, [ data ]);

	React.useEffect(() => {
		if (isFormChanged) {
			// Check if we have error(s).
			const errs = validate(payload);

			setErrors(errs);

			if (!Object.keys(errs).length) {
				setData(initForm(payload));
			} else {
				setData({});
			}
		}
	}, [ payload ]);

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
	};

	const validate = (payload = {}) => {
		const errs = {};

		// Check for empty firstname.
		if (!payload?.firstName) {
			errs.firstName = errorMessages.empty;
		}

		// Check for empty lastname.
		if (!payload?.lastName) {
			errs.lastName = errorMessages.empty;
		}

		return errs;
	};

	const onSubmit = (e) => {
		e.preventDefault();

		// Check if we have error(s).
		const errs = validate(payload);

		setErrors(errs);

		if (Object.keys(errs).length) return null;

		handleSubmit(initForm(payload));
	}

	const onChange = (e) => {
		if (!isFormChanged) {
			setIsFormChanged(true);
		}

		setPayload({
			...payload, [e.target?.name]: (
				(e.target.type === 'checkbox') ? 
				e.target.checked : e.target.value
			)
		});
	}

	const onOptionChange = ({ name, value }) => setPayload({
		...payload, [name]: value
	});

	const onSelectChange = {
		orgType: (currentOrgTypeOptions) => {
			if (!isFormChanged) setIsFormChanged(true);

			setPayload({ ...payload, orgType: currentOrgTypeOptions });
		},
		orgSector: (currentOrgSectorOptions) => {
			if (!isFormChanged) setIsFormChanged(true);

			setPayload({ ...payload, orgSector: currentOrgSectorOptions });
		},
		country: (currentCountryOptions) => {
			if (!isFormChanged) setIsFormChanged(true);

			const currentPayload = getClearOptions(payload, [ 'state', 'city' ]);
			setPayload({ ...currentPayload, country: currentCountryOptions });
		},
		state: (currentStateOptions) => {
			if (!isFormChanged) setIsFormChanged(true);

			const currentPayload = getClearOptions(payload, [ 'city' ]);
			setPayload({ ...currentPayload, state: currentStateOptions });
		},
		city: (currentCityOptions) => {
			if (!isFormChanged) setIsFormChanged(true);

			setPayload({ ...payload, city: currentCityOptions });
		},
	};

	const onImageUpload = (e) => {
		if (!isFormChanged) setIsFormChanged(true);

		setPayload({
			...payload, [e.target.name]: e.target.result,
		});
	}

	const countryOptions = React.useMemo(() => (
		Country.getAllCountries().map(({ name, isoCode }) => ({
			label: name, value: isoCode
		}))
	), []);

	const stateOptions = React.useMemo(() => {
		let res = [];

		const { country } = payload;

		const hasCountry = Boolean(Object.keys(country || {}).length);

		if (hasCountry) {
			res = State.getStatesOfCountry(country?.value || country).map(({ name, isoCode }) => ({
				label: name, value: isoCode
			}));		
		}

		return res;
	}, [ payload?.country ]);

	const cityOptions = React.useMemo(() => {
		let res = [];

		const { country, state } = payload;

		const hasState = Boolean(Object.keys(state || {}).length);
		const hasCountry = Boolean(Object.keys(country || {}).length);

		if (hasState && hasCountry) {
			res = City.getCitiesOfState(country?.value || country, state?.value || state).map(({ name }) => ({
				label: name, value: name
			}));		
		}

		return res;
	}, [ payload?.state ]);

	return (
		<div className="row">
			<div className="col-lg-3">
				<ImageUpload 
					id="photo"
					name="photo"
					type="BUSINESS" 
					value={payload?.photo}
					onChange={onImageUpload}
				/>
			</div>
			<div className="col-lg-4">
				<Input
					id="name"
					type="text"
					name="name"
					label="Name"
					onChange={onChange}
					error={errors?.name}
					value={payload?.name}
					className="form-control form-control-lg"
				/>
			</div>
			<div className="col-lg-5">
				<Input
					id="slogan"
					type="text"
					name="slogan"
					label="Slogan"
					onChange={onChange}
					error={errors?.slogan}
					value={payload?.slogan}
					secondaryLabel="(Optional)"
					className="form-control form-control-lg"
				/>
			</div>
			<div className="col-lg-12 mt-4">
				<div className="row">
					<div className="col-lg-3">
						<Input
							id="orgNum"
							type="text"
							name="orgNum"
							onChange={onChange}
							error={errors?.orgNum}
							value={payload?.orgNum}
							label="Business Number"
							secondaryLabel="(Optional)"
							className="form-control form-control-lg"
						/>
					</div>
					<div className="col-lg-4">
						<Select
							label="Type" 
							closeMenuOnSelect
							options={typeOptions} 
							data={payload?.orgType}
							secondaryLabel="(Optional)" 
							onChange={(payload) => onSelectChange(payload, 'orgType')}
						/>
					</div>
					<div className="col-lg-5">
						<Select
							label="Sector" 
							closeMenuOnSelect
							options={sectorOptions} 
							data={payload?.orgSector}
							secondaryLabel="(Optional)" 
							onChange={(payload) => onSelectChange(payload, 'orgSector')}
						/>
					</div>
				</div>
			</div>

			<hr className="divider mt-4 mb-3" />

			<div className="col-lg-4">
				<Input
					id="www"
					type="text"
					name="www"
					label="Website"
					onChange={onChange}
					error={errors?.www}
					value={payload?.www}
					secondaryLabel="(Optional)"
					className="form-control form-control-lg"
				/>
			</div>
			<div className="col-lg-4">
				<Input
					id="email"
					type="text"
					name="email"
					label="Email"
					onChange={onChange}
					value={payload?.email}
					secondaryLabel="(Optional)"
					placeholder="business@mail.com"
					className="form-control form-control-lg"
				/>
			</div>
			<div className="col-lg-4">
				<Input
					id="phone"
					type="text"
					name="phone"
					label="Phone"
					onChange={onChange}
					value={payload?.phone}
					secondaryLabel="(Optional)"
					placeholder="+x(xxx)xxx-xx-xx"
					className="form-control form-control-lg"
				/>
			</div>

			<hr className="divider mt-4 mb-4" />

			<div className="col-lg-6">
				<div className="row">
					<div className="col-lg-8">
						<Input
							type="text"
							id="pstNum"
							name="pstNum"
							onChange={onChange}
							label="PST/QST Number"
							error={errors?.pstNum}
							value={payload?.pstNum}
							secondaryLabel="(Optional)"
							className="form-control form-control-lg"
						/>
					</div>
					<div className="col-lg-4">
						<Input
							type="number"
							id="pstPercent"
							name="pstPercent"
							label="PST/QST %"
							placeholder="9.975"
							onChange={onChange}
							error={errors?.pstPercent}
							value={payload?.pstPercent}
							className="form-control form-control-lg"
						/>
					</div>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="row">
					<div className="col-lg-8">
						<Input
							id="gstNum"
							type="text"
							name="gstNum"
							label="GST Number"
							onChange={onChange}
							error={errors?.gstNum}
							value={payload?.gstNum}
							secondaryLabel="(Optional)"
							className="form-control form-control-lg"
						/>
					</div>
					<div className="col-lg-4">
						<Input
							type="number"
							label="GST %"
							id="gstPercent"
							placeholder="5"
							name="gstPercent"
							onChange={onChange}
							error={errors?.gstPercent}
							value={payload?.gstPercent}
							className="form-control form-control-lg"
						/>
					</div>
				</div>
			</div>

			<hr className="divider mt-4 mb-4" />

			<div className="col-lg-12">
				<div className="row">
					<div className="col-lg-12">
						<div className="mb-4">
							<Select 
								label="Country"
								closeMenuOnSelect
								options={countryOptions}
								value={payload?.country}
								secondaryLabel="(Optional)"
								classNamePrefix="react-select"
								onChange={onSelectChange.country}
								className="react-select-container"
							/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="mb-4">
							<Select 
								closeMenuOnSelect
								label="State/Province"
								options={stateOptions}
								value={payload?.state}
								secondaryLabel="(Optional)"
								classNamePrefix="react-select"
								onChange={onSelectChange.state}
								className="react-select-container"
							/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="mb-4">
							<Select 
								label="City"
								closeMenuOnSelect
								options={cityOptions}
								value={payload?.city}
								secondaryLabel="(Optional)"
								classNamePrefix="react-select"
								onChange={onSelectChange.city}
								className="react-select-container"
							/>
						</div>
					</div>
					<div className="col-lg-4">
						<Input
							id="zip"
							name="zip"
							type="text"
							label="Postal Code"
							onChange={onChange}
							error={errors?.zip}
							value={payload?.zip}
							secondaryLabel="(Optional)"
							className="form-control form-control-lg"
						/>
					</div>
					<div className="col-sm-6">
						<Input
							type="text"
							id="address"
							name="address"
							label="Address"
							onChange={onChange}
							error={errors?.address}
							value={payload?.address}
							secondaryLabel="(Optional)"
							className="form-control form-control-lg"
						/>
					</div>
					<div className="col-sm-3">
						<Input
							id="unit"
							type="text"
							name="unit"
							label="Unit"
							onChange={onChange}
							error={errors?.unit}
							value={payload?.unit}
							secondaryLabel="(Optional)"
							className="form-control form-control-lg"
						/>
					</div>
					<div className="col-sm-3">
						<div className="mb-4">
							<Input
								id="buzzer"
								type="text"
								name="buzzer"
								label="Buzzer #"
								onChange={onChange}
								error={errors?.buzzer}
								value={payload?.buzzer}
								secondaryLabel="(Optional)"
								className="form-control form-control-lg"
							/>
						</div>
					</div>
				</div>
			</div>
			{!withoutSubmit ? (
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
			) : null}
		</div>
	);
}

export default OrganizationForm;

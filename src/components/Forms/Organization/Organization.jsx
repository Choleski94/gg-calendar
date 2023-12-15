import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Country, State, City }  from 'country-state-city';
import { trimString, formatOptionValueType } from '@utils';
import { Input, Select, Schedule, ImageUpload } from '@components';

const orgId = '8fa9a6e2-d4f3-49e3-9d1c-42b227f64fd2';

const typeOptions = [];
const sectorOptions = [];

const SUPPORTED_INPUT_FORM_NAMES = [ 'firstName', 'lastName', 'birthday', 'zip', 'address', 'unit', 'buzzer', 'notes'];

// const SUPPORTED_SELECT_FORM_NAME = [ 'gender', 'languages', 'phones', 'emails', 'country', 'state', 'city' ];

/*
 * Utility helper function to clear options
 *
 * @param {Object.<string, any>} payload - Data object.
 * @param {Array.<string>} - elts element required to clear.
 *
 * @returns {Object.<string, any>} - Return cleared data object.
 */
const getClearOptions = (payload = {}, elts = []) => {
	const clonedPayload = { ...payload };

	elts.forEach((currentKey) => {
		clonedPayload[currentKey] = [];
	});

	return clonedPayload;
}

const OrganizationForm = ({ data, setData = () => null, handleSubmit, withoutSubmit = false }) => {
	const [ errors, setErrors ] = React.useState({});
	const [ isFormChanged, setIsFormChanged ] = React.useState(false);
	const [ payload, setPayload ] = React.useState({ orgId: 'reparation_flash' }); // TODO: Remove organization

	React.useEffect(() => {
		if (isFormChanged) return 

		setPayload({
			photo: data?.photo,
			zip: data?.zip,
			unit: data?.unit,
			color: data?.color,
			buzzer: data?.buzzer,
			address: data?.address,
			lastName: data.lastName,
			birthday: data?.birthday,
			firstName: data?.firstName,
			city: data?.city,
			email: data?.email,
			phone: data?.phone,
			state: data?.state,
			gender: data?.gender,
			country: data?.country,
			position: data?.position,
			department: data?.department,
			languages: data?.languages,
			...SUPPORTED_INPUT_FORM_NAMES.reduce((agg, currentKey) => {
				const value = data[currentKey];

				// Check if the value is non-empty before adding it to the aggregated object
				if (value !== undefined && value !== null && value !== '') {
					agg[currentKey] = value;
				}

				return agg;
			}, {}),
		});
	}, [ data ]);


	React.useEffect(() => {
		if (isFormChanged) {
			// Check if we have error(s).
			const errs = validate(payload);

			setErrors(errs);

			if (!Object.keys(errs).length) {
				setData({
					email: payload?.email,
					phone: payload?.phone,
					photo: payload?.photo,
					zip: trimString(payload?.zip),
					name: trimString(payload.name),
					unit: trimString(payload?.unit),
					buzzer: trimString(payload?.buzzer),
					address: trimString(payload?.address),
					city: trimString((payload?.city || {}).value),
					state: trimString((payload?.state || {}).value),
					country: trimString((payload?.country || {}).value),
				});
			}
		}
	}, [ payload ]);

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
		email: formatMessage('form.validation.email.error.text')
	};

	const validate = (payload = {}) => {
	        const errs = {};

		// Check for empty name.
		if (!payload?.name) {
			errs.name = errorMessages.empty;
		}

		// // Check for empty lastname.
		// if (!payload?.lastName) {
		// 	errs.lastName = errorMessages.empty;
		// }

	        return errs;
	};

	const onSubmit = (e) => {
		e.preventDefault();

		// Check if we have error(s).
		const errs = validate(payload);

		setErrors(errs);

		if (Object.keys(errs).length) return null;

		handleSubmit({
			email: payload?.email,
			phone: payload?.phone,
			photo: payload?.photo,
			zip: trimString(payload?.zip),
			unit: trimString(payload?.unit),
			color: trimString(payload?.color),
			buzzer: trimString(payload?.buzzer),
			address: trimString(payload?.address),
			lastName: trimString(payload.lastName),
			birthday: trimString(payload?.birthday),
			firstName: trimString(payload?.firstName),
			city: trimString((payload?.city || {}).value),
			state: trimString((payload?.state || {}).value),
			gender: trimString((payload?.gender || {}).value),
			country: trimString((payload?.country || {}).value),
			position: trimString((payload?.position || {}).value),
			department: trimString((payload?.department || {}).value),
			languages: payload?.languages,
		});
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
	);

	const onChange = (e) => {
		if (!isFormChanged) setIsFormChanged(true);
		setPayload({
			...payload, [e.target?.name]: (
				(e.target.type === 'checkbox') ? 
				e.target.checked : e.target.value
			)
		});
	}

	const onOptionChange = ({ name, value }) => {
		// TODO: FIX if (!isFormChanged) setIsFormChanged(true);
		setPayload({
			...payload, [name]: value
		});
	}

	const onSelectChange = {
		gender: (currentGenderOptions) => {
			if (!isFormChanged) setIsFormChanged(true);
	
			setPayload({ ...payload, gender: currentGenderOptions });
		},
		position: (currentPositionOptions) => {
			if (!isFormChanged) setIsFormChanged(true);

			setPayload({ ...payload, position: currentPositionOptions });
		},
		languages: (currentLanguageOptions) => {
			if (!isFormChanged) setIsFormChanged(true);
	
			setPayload({ ...payload, languages: currentLanguageOptions });
		},
		department: (currentDepartmentOptions) => {
			if (!isFormChanged) setIsFormChanged(true);
	
			setPayload({ ...payload, department: currentDepartmentOptions });
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
					<div className="col-lg-5">
						<Select
							closeMenuOnSelect
							data={payload?.orgType}
							label={typeLabel} options={typeOptions} 
							onChange={(payload) => onSelectChange(payload, 'orgType')}
						/>
					</div>
					<div className="col-lg-4">
						<Select
							closeMenuOnSelect
							data={payload?.orgSector}
							label={sectorLabel} options={sectorOptions} 
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
							type="text"
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
							type="text"
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

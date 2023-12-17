import React from 'react';
import { Country, State, City } from 'country-state-city';

import formatMessage from '@utils/formatMessage';
import { hasObjectKey, getClearOptions } from '@utils';
import { Button, Input, TextArea, Select, MultiInput, ImageUpload } from '@components';

import useContactOptions from './useContactOptions';
import { initForm, initPayload, parseBirthday } from './Contact.controller';

const Contact = ({ 
	data = {}, 
	isEmployee, 
	withNote = false, 
	withPhoto = false, 
	layout = 'VERTICAL', 
	submitText = 'Save',
	setData = () => null, 
	withoutSubmit = false, 
	withMultiPhone = false, 
	withMultiEmail = false, 
}) => {
	const [ errors, setErrors ] = React.useState({});
	const [ payload, setPayload ] = React.useState({});
	const [ isFormChanged, setIsFormChanged ] = React.useState(false);

	const {
		phoneOptions,
		emailOptions,
		genderOptions,
		languageOptions,
		positionOptions,
		departmentOptions,
	} = useContactOptions();

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

			if (!hasObjectKey(errs)) {
				setData(initForm(payload));
			} else {
				setData({});
			}
		}
	}, [ payload ]);

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
		email: formatMessage('form.validation.email.error.text')
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

		if (hasObjectKey(errs)) return null;

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

	const layoutClassName = React.useMemo(() => (
		layout === 'VERTICAL' ? 'col-md-12' : 'col-md-6'
	), [ layout ]);

	const countryOptions = React.useMemo(() => (
		Country.getAllCountries().map(({ name, isoCode }) => ({
			label: name, value: isoCode
		}))
	), []);

	const stateOptions = React.useMemo(() => {
		let res = [];

		const { country } = payload;

		const hasCountry = Boolean(hasObjectKey(country || {}));

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

		const hasState = Boolean(hasObjectKey(state || {}));
		const hasCountry = Boolean(hasObjectKey(country || {}));

		if (hasState && hasCountry) {
			res = City.getCitiesOfState(country?.value || country, state?.value || state).map(({ name }) => ({
				label: name, value: name
			}));		
		}

		return res;
	}, [ payload?.state ]);

	return (
		<div className="row">
			<div className={layoutClassName}>
				<div className="row">
					{/* Profile picture */}
					{withPhoto ? (
						<div className="col-lg-3">
							<ImageUpload 
								id="photo"
								name="photo"
								type="INDIVIDUAL" 
								value={payload?.photo}
								onChange={onImageUpload}
							/>
						</div>
					) : null}

					{/* First name & Last name */}
					<div className={withPhoto ? 'col-lg-9' : 'col-lg-12'}>
						<div className="mb-4">
							<label className="form-label">
								Full Name
							</label>
							<div className="input-group input-group-sm-vertical">
								<Input
									type="text"
									id="firstName"
									name="firstName"
									onChange={onChange}
									placeholder="First name"
									error={errors?.firstName}
									value={payload?.firstName}
									className="form-control form-control-lg"
								/>
								<Input
									type="text"
									id="lastName"
									name="lastName"
									onChange={onChange}
									placeholder="Last name"
									error={errors?.lastName}
									value={payload?.lastName}
									className="form-control form-control-lg"
								/>
							</div>
						</div>
					</div>

					{/* birthday, gender & languages */}
					<div className="col-lg-4">
						<div className="mb-4">
							<Input
								id="birthday"
								name="birthday"
								type="date"
								label="Birthday"
								onChange={onChange}
								error={errors?.birthday}
								secondaryLabel="(Optional)"
								value={parseBirthday(payload?.birthday)}
								className="form-control form-control-lg"
							/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="mb-4">
							<Select 
								label="Gender"
								closeMenuOnSelect
								options={genderOptions}
								value={payload?.gender}
								secondaryLabel="(Optional)"
								onChange={onSelectChange.gender}
							/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="mb-4">
							<Select 
								isMulti
								label="Language"
								closeMenuOnSelect
								options={languageOptions}
								value={payload?.languages}
								onChange={onSelectChange.languages}
							/>
						</div>
					</div>

					{/* Departement & Position */}
					{isEmployee ? (
						<>
							<div className="col-lg-4">
								<div className="mb-4">
									<Select 
										closeMenuOnSelect
										label="Department"
										value={payload?.department}
										secondaryLabel="(Optional)"
										options={departmentOptions}
										onChange={onSelectChange.department}
									/>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="mb-4">
									<Select 
										label="Position"
										closeMenuOnSelect
										value={payload?.position}
										options={positionOptions}
										secondaryLabel="(Optional)"
										onChange={onSelectChange.position}
									/>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="mb-4">
									<Input
										id="color"
										type="text"
										name="color"
										onChange={onChange}
										value={payload?.color}
										label="Avatar Color"
										error={errors?.color}
										secondaryLabel="(Optional)"
										className="form-control form-control-lg"
									/>
								</div>
							</div>
						</>
					) : null}

					{/* Contact (phone & email) */}
					<div className="col-lg-12">
						<div className="mb-4">
							{withMultiPhone ? (
								<MultiInput
									name="phones"
									label="Phone"
									addLabel="Add phone"
									options={phoneOptions}
									value={payload?.phones}
									secondaryLabel="(Optional)"
									placeholder="+x(xxx)xxx-xx-xx"
									onOptionChange={onOptionChange}
								/>
							) : (
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
							)}
						</div>
					</div>
					<div className="col-lg-12">
						<div className="mb-4">
							{withMultiEmail ? (
								<MultiInput
									name="emails"
									label="Email"
									addLabel="Add email"
									options={emailOptions}
									placeholder="email@gmail.com"
									onOptionChange={onOptionChange}
								/>
							) : (
								<Input
									disabled
									id="email"
									type="text"
									name="email"
									label="Email"
									onChange={onChange}
									value={payload?.email}
									placeholder="contact@mail.com"
									className="form-control form-control-lg"
								/>
							)}
						</div>
					</div>

				</div>
			</div>
			<div className={layoutClassName}>
				<div className="row">
					<div className="col-lg-12">
						<div className="mb-4">
							<Select 
								label="Country"
								closeMenuOnSelect
								options={countryOptions}
								value={payload?.country}
								secondaryLabel="(Optional)"
								onChange={onSelectChange.country}
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
								onChange={onSelectChange.state}
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
								onChange={onSelectChange.city}
							/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="mb-4">
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
					</div>
					<div className="col-sm-6">
						<div className="mb-4">
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
					</div>
					<div className="col-sm-3">
						<div className="mb-4">
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
					{withNote ? (
						<div className="col-md-12">
							<div className="mb-4">
								<TextArea
									type="text"
									name="note"
									label="Notes"
									value={payload?.note}
									onChange={onChange}
									secondaryLabel="(Optional)"
								/>
							</div>
						</div>
					) : null}
				</div>
			</div>
			{!withoutSubmit ? (
				<div className="col-lg-12">
					<div className="d-flex justify-content-end align-items-center">
						<Button onClick={onSubmit}>
							{submitText}
						</Button>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default Contact;

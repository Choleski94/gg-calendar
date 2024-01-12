import React from 'react';

import formatMessage from '@utils/formatMessage';
import { Input, Select, TextArea, SwitchToggle } from '@components';

import useTemplateOptions from './useTemplateOptions';

const Template = ({
	disabled = false,
	defaultValues = {}, 
	handleSubmit = () => null,
}) => {
	const [ errors, setErrors ] = React.useState({});
	const [ isFormChanged, setIsFormChanged ] = React.useState(false);
	const [ payload, setPayload ] = React.useState({
		name: '', 
		enabled: false, 
		permissions: [],
		description: '', 
	});

	const {
		typeOptions,
		categoryOptions,
		languageOptions,
	} = useTemplateOptions();

	React.useEffect(() => {
		setPayload(defaultValues);
	}, []);

	const errorMessages = {
		empty: 'Can\'t be empty.',
		unique: 'Name already taken',
		longer: 'Requires a minimum length of 3 characters.',
	};

	const validate = (payload) => {
		const errs = {};

		// Check for empty name input.
		if (!payload.name) {
			errs.name = errorMessages.empty;
		}

		if (payload.name <= 3) {
			errs.name = errorMessages.longer;
		}

		// Check for empty description input.
		if (!payload.description) {
			errs.description = errorMessages.empty;
		}

		if (payload.description <= 3) {
			errs.description = errorMessages.longer;
		}

		return errs;
	}

	const onChange = (e) => setPayload({
		...payload, [e.target.name]: e.target.value
	});

	const onSelectChange = {
		languages: (currentLanguageOptions) => {
			if (!isFormChanged) setIsFormChanged(true);

			setPayload({ ...payload, languages: currentLanguageOptions });
		},
		category: (currentCategoryOptions) => {
			if (!isFormChanged) setIsFormChanged(true);

			setPayload({ ...payload, category: currentCategoryOptions });
		},
		type: (currentTypeOptions) => {
			if (!isFormChanged) setIsFormChanged(true);

			setPayload({ ...payload, type: currentTypeOptions });
		},
	};

	const onSubmit = (e) => {
		// Check if we have error(s).
		const errs = validate(payload);
		setErrors(errs);

		if (disabled || Object.keys(errs).length) return null;

		handleSubmit(payload);
	}

	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="row">
					<div className="col-md-11">
						<div className="mb-4">
							<Input
								id="name"
								type="text"
								name="name"
								label="Name"
								disabled={disabled}
								onChange={onChange}
								error={errors?.name}
								value={payload?.name}
							/>
						</div>
					</div>
					<div className="col-lg-1">
						<div className="mb-4">
							<label className="form-label" htmlFor="slug">
								Active
							</label>
							<SwitchToggle 
								name="enabled" 
								disabled={disabled}
								onChange={onChange} 
								value={payload?.enabled}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
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
					<div className="col-md-4">
						<div className="mb-4">
							<Select
								label="Category"
								closeMenuOnSelect
								options={categoryOptions}
								value={payload?.category}
								secondaryLabel="(Optional)"
								onChange={onSelectChange.category}
							/>
						</div>
					</div>
					<div className="col-md-4">
						<div className="mb-4">
							<Select
								label="Type"
								closeMenuOnSelect
								value={payload?.type}
								options={typeOptions}
								secondaryLabel="(Optional)"
								onChange={onSelectChange.type}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<TextArea
							rows="4"
							type="text"
							id="description"
							name="description"
							onChange={onChange}
							disabled={disabled}
							label="Description"
							description="description"
							error={errors?.description}
							value={payload?.description}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="mt-4 d-flex align-items-center">
							<div className="ms-auto">
								<button type="button" className="btn btn-sm btn-outline-primary" onClick={onSubmit}>
									Update template
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Template;


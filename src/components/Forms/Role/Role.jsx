import React from 'react';

import formatMessage from '@utils/formatMessage';
import { SUPPORTED_STATUSES } from '@constants/access';
import { Input, TextArea, SwitchToggle } from '@components';

const SUPPORTED_MODES = {
	CREATE: 'CREATE',
	UPDATE: 'UPDATE',
}

const DEFAULT_PAYLOAD = {
	name: '', 
	enabled: false, 
	permissions: [],
	description: '', 
}

const RoleForm = ({
	disabled = false,
	defaultValues = {}, 
	updateText = 'Update',
	createText = 'Create',
	handleSubmit = () => null,
	mode = SUPPORTED_MODES.CREATE, 
}) => {
	const [ errors, setErrors ] = React.useState({});
	const [ payload, setPayload ] = React.useState(DEFAULT_PAYLOAD);

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

		if (payload.name < 3) {
			errs.name = errorMessages.longer;
		}

		// Check for empty description input.
		if (!payload.description) {
			errs.description = errorMessages.empty;
		}

		if (payload.description< 3) {
			errs.description = errorMessages.longer;
		}

		return errs;
	}

	const onChange = (e) => setPayload({
		...payload, [e.target.name]: e.target.value
	});

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
					<div className={mode !== SUPPORTED_MODES.CREATE ? 'col-md-11' : 'col-md-12'}>
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
					{mode !== SUPPORTED_MODES.CREATE && (
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
					)}
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
									{mode === SUPPORTED_MODES.CREATE ? (
										<>
											<i className="bi-plus" />
											&nbsp;
											{createText}
										</>
									) : (
										<>
											<i className="bi-save" />
											&nbsp;
											{updateText}
										</>
									)} 
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoleForm;


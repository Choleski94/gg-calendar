import React from 'react';

import formatMessage from '@utils/formatMessage';
import { SUPPORTED_STATUSES } from '@constants/access';
import { deleteObject, updateOrPushObject } from '@utils';
import { Input, TextArea, SwitchToggle } from '@components';

const SUPPORTED_MODES = {
	CREATE: 'CREATE',
	UPDATE: 'UPDATE',
}

const DeleteRoleButton = ({ orgId = '', payload = {}, aggregateOption }) => {
	const { executeMutation, loading } = {};

	const handleMutation = async (mutationVariables) => {
		try {
			const res = await executeMutation(mutationVariables);
			aggregateOption(payload, true);
		} catch (err) {
			console.error('ERROR::::', err);
		}
	};

	const onDelete = (e) => handleMutation({ orgId, id: payload?.id });

	return (
		<button type="button" className="btn btn-outline-danger" onClick={onDelete}>
			<i className="bi bi-trash" /> Delete
		</button>
	);
};

const RoleForm = ({ defaultValues = {}, orgId = '', mode = SUPPORTED_MODES.CREATE, aggregateOption }) => {
	const [ currentMode, setcurrentMode ] = React.useState(mode);
	const [ errors, setErrors ] = React.useState({});
	const [ payload, setPayload ] = React.useState({
		orgId, name: '', 
		description: '',
		...defaultValues
	});

	const errorMessages = {
		empty: 'Can\'t be empty.',
		unique: 'Name already taken',
	};

	const hasUpdateMode = React.useMemo(() => {
		return currentMode !== SUPPORTED_MODES.CREATE;
	}, [ currentMode ]);

	const activeMutationQuery = React.useMemo(() => {
		if (currentMode === SUPPORTED_MODES.CREATE) {
			return {};
		} else {
			return {};
		}
	}, [ currentMode ]);

	const { executeMutation, loading } = {};

	const handleMutation = async (mutationVariables) => {
		try {
			const { data, error } = await executeMutation(mutationVariables);
			if (!error) {
				let payload = null;

				if (currentMode === SUPPORTED_MODES.CREATE) {
					payload = data?.insert_organization_positions?.returning;
				} else {
					payload = data?.update_organization_positions?.returning;
				}

				return aggregateOption(...payload);
			}
		} catch (err) {
			console.error('ERROR::::', err);
		}
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

	const onSubmit = (e) => {
		// Check if we have error(s).
		const errs = validate(payload);
		setErrors(errs);

		if (Object.keys(errs).length) return null;

		handleMutation(payload);
	}

	const renderDescriptionLabel = (
		<>
			Description &nbsp;
			<span className="form-label-secondary">(Optional)</span>
		</>
	);

	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="row">
					<div className="col-lg-10">
						<div className="mb-4">
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
					</div>
					<div className="col-lg-2">
						<div className="mb-4">
							<label className="form-label" htmlFor="slug">
								Active
							</label>
							<SwitchToggle 
								name="status" 
								onChange={onChange} 
								options={[
									SUPPORTED_STATUSES.INACTIVE, 
									SUPPORTED_STATUSES.ACTIVE
								]}
								value={payload?.status === SUPPORTED_STATUSES.ACTIVE}
							/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<TextArea
							type="text"
							id="description"
							name="description"
							onChange={onChange}
							description="description"
							value={payload?.description}
							error={errors?.description}
							label={renderDescriptionLabel}
							className="form-control form-control-lg"
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="mt-4 d-flex align-items-center">
							{currentMode !== SUPPORTED_MODES.CREATE && (
								<DeleteRoleButton 
									orgId={orgId} payload={payload} 
									aggregateOption={aggregateOption}
								/>
							)}
							<div className="ms-auto">
								<button type="button" className="btn btn-primary" onClick={onSubmit}>
									<i className="bi bi-plus" />
									&nbsp;
									Save role
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

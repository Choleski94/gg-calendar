import React from 'react';

import { SwitchToggle } from '@components';

const NA = 'N/A';

const PermissionRow = ({ payload = {}, isDisabled = false, defaultValue = {} }) => {
	const [ data, setData ] = React.useState(defaultValue);

	const onChange = (e) => {
		const { name, value } = e.target;
		if (!isDisabled) {
			// TODO
		}
	}

	return (
		<tr key={payload?.id}>
			<td>
				{payload?.slug}
				&nbsp;
				<i
					data-bs-placement="top"
					data-bs-toggle="tooltip"
					className="bi-question-circle text-body ms-1"
				/>
			</td>
			<td className="text-center">
				{payload?.has_read ? (
					<div className="d-flex justify-content-center">
						<SwitchToggle 
							name="has_read"
							onChange={onChange} 
							disabled={isDisabled}
							value={data.can_read}
						/>
					</div>
				) : NA}
			</td>
			<td className="text-center">
				{payload?.has_create ? (
					<div className="d-flex justify-content-center">
						<SwitchToggle 
							name="has_create"
							onChange={onChange} 
							disabled={isDisabled}
							value={data.can_create}
						/>
					</div>
				) : NA}
			</td>
			<td className="text-center">
				{payload?.has_update ? (
					<div className="d-flex justify-content-center">
						<SwitchToggle 
							name="has_update"
							onChange={onChange} 
							disabled={isDisabled}
							value={data.can_update}
						/>
					</div>
				) : NA}
			</td>
			<td className="text-center">
				{payload?.has_delete ? (
					<div className="d-flex justify-content-center">
						<SwitchToggle 
							name="has_delete"
							onChange={onChange} 
							disabled={isDisabled}
							value={data.can_delete}
						/>
					</div>
				) : NA}
			</td>
		</tr>
	)
}

const RolePermissions = ({ orgId = '', roleId = '' }) => {
	const [ option, setOption ] = React.useState({ permissions: [], role: {} });

	const { loading, errors, data } = {};

	React.useEffect(() => {
		if (!loading && data) {
			const { permissions, roles: [ role ] } = data;
			
			setOption({ permissions, role });
		}
	}, [ loading, data ]);

	const getRolePermissionsDefaultValue = (currentSlug = '') => {
		const rolePermissions = option?.role?.permissions || [];
		const [ currentRolePermission ] = rolePermissions.filter(({ plugin }) => currentSlug === plugin?.slug);
		return currentRolePermission;
	}

	return (
		<div className="table-responsive datatable-custom">
			<table className="table table-thead-bordered table-nowrap table-align-middle table-first-col-px-0">
				<thead className="thead-light">
					<tr>
						<th>
							Name
						</th>
						<th className="text-center">
							<div className="mb-1">
								<i className="bi bi-file-text" />
							</div>
							View
						</th>
						<th className="text-center">
							<div className="mb-1">
								<i className="bi bi-pencil-square" />
							</div>
							Create
						</th>
						<th className="text-center">
							<div className="mb-1">
								<i className="bi bi-arrow-counterclockwise" />
							</div>
							Edit
						</th>
						<th className="text-center">
							<div className="mb-1">
								<i className="bi bi-trash3" />
							</div>
							Delete
						</th>
					</tr>
				</thead>
				<tbody>
					{option.permissions && option.permissions.length ? (
						option.permissions.map((payload) => (
							<PermissionRow 
								payload={payload} isDisabled={!option?.role?.is_editable}
								defaultValue={getRolePermissionsDefaultValue(payload?.slug)}
							/>
						))
					) : null}
				</tbody>
			</table>
		</div>
	);
}

export default RolePermissions;

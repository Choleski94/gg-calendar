
import React from 'react';

import formatMessage from '@utils/formatMessage';
import { Modal, Table, ActionMenu } from '@components';
import mockWorkforceRole from '@mocks/workforce/roles';
import { deleteObject, updateOrPushObject } from '@utils';
import { DEFAULT_ROLES_TABLE_HEADER, SUPPORTED_TEAMS_STATUSES } from '@constants/workforce';

import WorkforceRoleForm from './WorkforceRoleForm';
import WorkforceRoleDialog from './WorkforceRoleDialog';

const orgId = '8fa9a6e2-d4f3-49e3-9d1c-42b227f64fd2';

const SUPPORTED_MODAL_VIEWS = {
	ADD: 'ADD',
	EDIT: 'EDIT',
	DELETE: 'DELETE',
}

const parseWorforceRoleOptions = (options = [], actionMenuOptions = []) => options.map((payload) => ({
	query: [
		payload?.name,
		payload?.description,
	].join(' '),
	slug: payload?.slug,
	name: (
		<a className="d-inline">
			#{payload.slug}
		</a>
	),
	status: payload?.status,
	statusBadge: (
		<>
			{payload?.status === SUPPORTED_TEAMS_STATUSES.ACTIVE && (
				<span className="badge bg-soft-success text-success">
					Active
				</span>
			)}
			{payload?.status === SUPPORTED_TEAMS_STATUSES.INACTIVE && (
				<span className="badge bg-soft-warning text-warning">
					Inactive
				</span>
			)}
		</>
	),
	actions: (
		<ActionMenu 
			options={actionMenuOptions}
		/>
	),
	...payload,
}));

const WorkforceRoles = () => {
	const [ options, setOptions ] = React.useState([]);
	// const [ loading, setLoading ] = React.useState(false);
	const [ activeOption, setActiveOption ] = React.useState({});
	const [ modalSection, setModalSection ] = React.useState('');

	const { loading, errors, data } = {};

	React.useEffect(() => {
		if (!loading && data) {
			setOptions(data?.roles);
		}
	}, [ loading, data ]);

	// const fetchRoles = () => {
	// 	setLoading(true);
	// 	setOptions(mockWorkforceRole.list);
	// 	setLoading(false);
	// }

	// React.useEffect(() => {
	// 	fetchRoles();
	// }, []);

	const toggleModal = () => setModalSection('');

	const onAddRoleClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.ADD);
	}

	const onEditRoleClick = (e, currentOption) => {
		e.preventDefault();

		setActiveOption({ ...currentOption });
		setModalSection(SUPPORTED_MODAL_VIEWS.EDIT);
	}

	const onDeleteRoleClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.DELETE);
	}

	const renderAddRole = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddRoleClick}>
			<i className="bi-plus" />
			Create Role
		</button>
	);

	const aggregateOption = (newOption = {}, shouldDelete = false) => {
		if (shouldDelete) {
			setOptions(deleteObject(newOption, options));
			setModalSection('');
		} else {
			setOptions(updateOrPushObject(newOption, options));
			setModalSection('');
		}
	}

	const actionMenuOptions = [
		{
			key: 'copy',
			value: (
				<span>
					<i className="bi bi-files" /> Copy
				</span>
			),
			cb: () => console.log('Duplicating content...')
		},
		{
			key: 'delete',
			value: (
				<span className="text-danger">
					<i className="bi bi-trash3" /> Delete
				</span>
			),
			cb: () => console.log('Delete content...')
		}
	]

	return (
		<>
			<Table
				height="63vh"
				cta={renderAddRole}
				elementsPerPage={300}
				onRowClick={onEditRoleClick}
				headers={DEFAULT_ROLES_TABLE_HEADER}
				searchPlaceholder="Search workforce role"
				noDataMessage="No worforce positions found"
				data={parseWorforceRoleOptions(options, actionMenuOptions)}
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.ADD && (
				<Modal 
					size="md" centered 
					onCloseRequest={toggleModal} 
					title="Add workforce rolen" 
				>
					<WorkforceRoleForm 
						orgId={orgId} mode="CREATE" 
						aggregateOption={aggregateOption} 
					/>
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.EDIT && (
				<Modal 
					size="lg" centered 
					onCloseRequest={toggleModal} 
					title={`Edit ${activeOption.name} role`} 
				>
					<WorkforceRoleDialog
						orgId={orgId} 
						roleId={activeOption?.id} 
						defaultValues={activeOption} 
						aggregateOption={aggregateOption} 
					/>
				</Modal>
			)}
		</>
	);
};

export default WorkforceRoles;

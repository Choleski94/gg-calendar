import React from 'react';

import { request } from '@utils/request';
import mockAccessRole from '@mocks/access';
import formatMessage from '@utils/formatMessage';
import { deleteObject, updateOrPushObject } from '@utils';
import { Card, Counter, Modal, Table, ActionMenu } from '@components';
import { ENTITY_ROLE, DEFAULT_TABLE_HEADER, DEFAULT_TABLE_ACTIVE_HEADER, SUPPORTED_STATUSES } from '@constants/access';

import RoleForm from './RoleForm';
import RoleDialog from './RoleDialog';
import useAccessOptions from './useAccessOptions';

const parseWorforceRoleOptions = (options = [], actionMenuOptions = []) => options.map((payload) => ({
	query: [
		payload?.name,
		payload?.description,
	].join(' '),
	id: payload?._id,
	name: payload?.name,
	system: payload?.system,
	createdAt: payload?.createdAt,
	description: payload?.description,
	enabled: (
		payload?.enabled ? (
			<span className="badge bg-soft-success text-success">
				Active
			</span>
		) : (
			<span className="badge bg-soft-danger text-danger">
				Inactive
			</span>
		)
	),
	actions: (
		<ActionMenu 
			options={actionMenuOptions}
		/>
	),
}));

const AccessOverview = ({ setRoleId }) => {
	const [ data, setData ] = React.useState({});
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);

	const fetchRoles = () => {
		setLoading(true);

		request.list({ entity: ENTITY_ROLE, options }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setOptions(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	const handleSubmit = (payload) => {
		setLoading(true);

		request.create({ entity: ENTITY_ROLE, jsonData: payload }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setShowModal(false);
				fetchRoles();
			}
		}).catch((error) => {
			setLoading(false);
		});
	}

	React.useEffect(() => {
		fetchRoles();
	}, []);

	const toggleModal = () => setShowModal(false);

	const onAddRoleClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	}

	const onEditRoleClick = (e, currentOption) => {
		e.preventDefault();
		return setRoleId(currentOption.id);
	};

	const onDeleteRoleClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	const renderAddRole = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddRoleClick}>
			<i className="bi-plus" />
			Create Role
		</button>
	);

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
	];

	const { totalRole, totalActiveRole, totalInactiveRole }= useAccessOptions(options);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<div className="row">
				<div className="col-sm-4 col-lg-4">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total permissions
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={totalRole} />
									</span>
								</div>
								{/*
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 5.0%
									</span>
								</div>
								*/}
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-4 col-lg-4">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active permissions
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={totalActiveRole} />
									</span>
								</div>
								{/*
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 1.2%
									</span>
								</div>
								*/}
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-4 col-lg-4">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Inactive permissions
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={totalInactiveRole} />
									</span>
								</div>
								{/*
								<div className="col-auto">
									<span className="badge bg-soft-danger text-danger p-1">
										<i className="bi-graph-down" /> 2.8%
									</span>
								</div>
								*/}
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>

			<Table
				withFilter
				height="63vh"
				cta={renderAddRole}
				elementsPerPage={300}
				onRowClick={onEditRoleClick}
				headers={DEFAULT_TABLE_HEADER}
				noDataMessage="No roles found"
				searchPlaceholder="Search roles"
				defaultActiveKeys={DEFAULT_TABLE_ACTIVE_HEADER}
				data={parseWorforceRoleOptions(options, actionMenuOptions)}
			/>

			{showModal ? (
				<Modal 
					size="md" centered 
					title="Create new role" 
					onCloseRequest={toggleModal} 
				>
					<RoleForm 
						data={data}
						mode="CREATE" 
						handleSubmit={handleSubmit}
					/>
				</Modal>
			) : null}
		</div>
	);
};

export default AccessOverview;

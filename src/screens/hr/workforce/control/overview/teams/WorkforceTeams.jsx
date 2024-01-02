
import React from 'react';

import formatMessage from '@utils/formatMessage';
import { deleteObject, updateOrPushObject } from '@utils';
import { Modal, Table, Card, Counter } from '@components';
import { DEFAULT_TEAMS_TABLE_HEADER, SUPPORTED_TEAMS_STATUSES } from '@constants/workforce';

import WorkforceTeamForm from './WorkforceTeamForm';
import WorkforceTeamDialog from './WorkforceTeamDialog';

const authorId = 769912;

const orgId = '8fa9a6e2-d4f3-49e3-9d1c-42b227f64fd2';

const SUPPORTED_MODAL_VIEWS = {
	ADD: 'ADD',
	EDIT: 'EDIT',
	DELETE: 'DELETE',
}

const parseWorforceTeamOptions = (options = []) =>options.map((payload, idx) => ({
	...payload,
	query: [
		payload?.slug,
		payload?.description,
	].join(' '),
	slug: payload?.slug,
	name: (
		<a className="d-inline">
			#{payload.slug}
		</a>
	),
	members: payload?.member_metrics?.total,
	status: payload?.status,
	statusBadge: (
		<>
			{String(payload?.status?.value || '').toUpperCase() === SUPPORTED_TEAMS_STATUSES.ACTIVE && (
				<span className="badge bg-soft-success text-success">
					Active
				</span>
			)}
			{String(payload?.status?.value || '').toUpperCase()  === SUPPORTED_TEAMS_STATUSES.INACTIVE && (
				<span className="badge bg-soft-warning text-warning">
					Inactive
				</span>
			)}
		</>
	),
}));

const WorkforceTeams = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ activeOption, setActiveOption ] = React.useState({});
	const [ modalSection, setModalSection ] = React.useState('');

	const { loading, errors, data } = {};

	React.useEffect(() => {
		if (!loading && data) {
			const teamData = data?.teams || [];

			setOptions(teamData.map((payload) => ({
				...payload, status: payload?.status[0] || {},
			})));
		}
	}, [ loading, data ]);

	const toggleModal = () => setModalSection('');

	const onAddTeamClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.ADD);
	}

	const onEditTeamClick = (e, currentOption) => {
		e.preventDefault();
		setActiveOption({
			id: currentOption?.id,
			slug: currentOption?.slug,
			status: currentOption?.status,
			description: currentOption?.description,
		});
		setModalSection(SUPPORTED_MODAL_VIEWS.EDIT);
	}

	const onDeleteTeamClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.DELETE);
	}

	const renderAddTeam = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddTeamClick}>
			<i className="bi-plus" />
			Add Team
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

	return (
		<>
			<Table
				height="63vh"
				cta={renderAddTeam}
				elementsPerPage={300}
				onRowClick={onEditTeamClick}
				headers={DEFAULT_TEAMS_TABLE_HEADER}
				data={parseWorforceTeamOptions(options)}
				searchPlaceholder="Search workforce team"
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.ADD && (
				<Modal 
					size="md" centered 
					onCloseRequest={toggleModal} 
					title="Add workforce team" 
				>
					<WorkforceTeamForm 
						orgId={orgId} 
						mode="CREATE" 
						authorId={authorId}
						aggregateOption={aggregateOption} 
					/>
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.EDIT && (
				<Modal 
					size="md" centered 
					onCloseRequest={toggleModal} 
					title={`Update #${activeOption.slug} team `}
				>
					<WorkforceTeamDialog
						authorId={authorId}
						orgId={orgId} mode="UPDATE" 
						defaultValues={activeOption} 
						aggregateOption={aggregateOption} 
					/>
				</Modal>
			)}
		</>
	);
};

export default WorkforceTeams;

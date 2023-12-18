import React from 'react';

import ProjectInfo from './ProjectInfo';
import ProjectCreate from './ProjectCreate';

import {
	SUPPORTED_STATUSES, 
	SUPPORTED_CATEGORIES,
	DEFAULT_TABLE_HEADER, 
} from '@constants/projects';

import mockProject from '@mocks/projects';
import { Modal, Table } from '@components';
import formatMessage from '@utils/formatMessage';

const SUPPORTED_MODAL_VIEWS = {
	EDIT: 'EDIT',
	CREATE: 'CREATE',
}

const parseTech = (payload = {}) => {
	let res = 'N/A';

	if (payload?.jobs && payload?.jobs.length) {
		const allTechs = payload.jobs[0].techs;
		if (allTechs && allTechs.length) {
			const techNames = allTechs.map(({ firstName, lastName }) => `${firstName} ${lastName}`)
			res = techNames.slice(0, 3).join(', ');
		}
	}

	return res;
}

const Projects = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ modalSection, setModalSection ] = React.useState('');

	const fetchProjects = async () => {
		setLoading(true);
		setOptions(mockProject.list);
		setLoading(false);
	};

	React.useEffect(() => {
		fetchProjects();
	}, []);

	const toggleModal = () => setModalSection('');

	const onEditProjectClick = (e, { id }) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.EDIT);
	};

	const onAddProjectClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.CREATE);
	};

	const renderAddProject = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddProjectClick}>
			<i className="bi-plus" />
			Update inventory
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<Table
				withFilter
				height="63vh"
				elementsPerPage={300}
				cta={renderAddProject}
				searchPlaceholder="Search related products"
				headers={DEFAULT_TABLE_HEADER}
				data={options.map((payload, idx) => ({
					id: payload?.id,
					brand: payload?.brand,
					category: SUPPORTED_CATEGORIES[payload?.equipment] || 'N/A',
					model: (
						<span className="text-uppercase">
							{payload?.model}
						</span>
					),
					serial: (
						<span className="text-uppercase">
							{payload?.serial}
						</span>
					),
					status: (
						<>
							{payload?.status === SUPPORTED_STATUSES.COMPLETE && (
								<span className="badge bg-soft-success text-success">
									<span className="legend-indicator bg-success" />
									Complete
								</span>
							)}
							{payload?.status === SUPPORTED_STATUSES.PENDING && (
								<span className="badge bg-soft-info text-info">
									<span className="legend-indicator bg-info" />
									Pending
								</span>
							)}
							{payload?.status === SUPPORTED_STATUSES.PROCESSING && (
								<span className="badge bg-soft-warning text-warning">
									<span className="legend-indicator bg-warning" />
									Processing
								</span>
							)}
							{payload?.status === SUPPORTED_STATUSES.NA && (
								<span className="badge bg-soft-dark text-dark">
									<span className="legend-indicator bg-dark" />
									N/A
								</span>
							)}
						</>
					),
					techs: parseTech(payload),
					lastUpdate: (
						payload?.jobs && payload?.jobs.length ? (
							payload?.jobs[0].lastUpdate
						) : 'N/A'
					),
					notes: payload?.notes
				}))}
				onRowClick={onEditProjectClick}
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.EDIT && (
				<Modal onCloseRequest={toggleModal} title="Edit project" size="xl">
					<ProjectInfo />
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.CREATE && (
				<Modal onCloseRequest={toggleModal} title="Add new project" size="xl" withFooter>
					<ProjectCreate />
				</Modal>
			)}
		</div>
	);
};

export default Projects;

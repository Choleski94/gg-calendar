import React from 'react';

import {
	SUPPORTED_STATUSES, 
	SUPPORTED_CATEGORIES,
	DEFAULT_TABLE_HEADER, 
} from '@constants/projects';

import mockProject from '@mocks/projects';
import formatMessage from '@utils/formatMessage';
import { Card, Counter, Modal, Table } from '@components';

import ProjectInfo from './info';
import ProjectCreate from './create';

const withMetrics = false;

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

const parseOptions = (data = []) => data.map((payload, idx) => ({
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
}));

const Projects = ({ id }) => {
	const [ loading, setLoading ] = React.useState(false);
	const [ modalSection, setModalSection ] = React.useState('');
	const [ projectOptions, setProjectOptions ] = React.useState([]);

	// Evaluate if we are in create mode.
	const hasCreateMode = React.useMemo(() => (
		Boolean(id === 'create')
	), [ id ]);

	const fetchProjects = async () => {
		if (id !== 'create') {
			setLoading(true);
			setProjectOptions(mockProject.list);
			setLoading(false);
		}
	};

	React.useEffect(() => {
		fetchProjects(id);
	}, []);

	React.useEffect(() => {
		fetchProjects(id);
	}, [ id ]);

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
			Add project
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			{withMetrics && (
				<div className="row">
					<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Total jobs
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={1} />
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Estimated Techs Required
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={1} />
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-6 col-lg-6 mb-3 mb-lg-5">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Total
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											$
											<Counter number={250} />
											&nbsp;
											CAD
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			)}

			<Table
				height="63vh"
				elementsPerPage={300}
				cta={renderAddProject}
				withFilter={!hasCreateMode}
				headers={DEFAULT_TABLE_HEADER}
				onRowClick={onEditProjectClick}
				noDataMessag="No projects found"
				title={hasCreateMode ? 'Projects' : null}
				data={parseOptions(projectOptions)}
				searchPlaceholder={hasCreateMode ? null : 'Search projects'}
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.EDIT && (
				<Modal onCloseRequest={toggleModal} title="Edit project" size="xl">
					<ProjectInfo />
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.CREATE && (
				<Modal onCloseRequest={toggleModal} title="Add new project" size="xl">
					<ProjectCreate />
				</Modal>
			)}
		</div>
	);
};

export default Projects;

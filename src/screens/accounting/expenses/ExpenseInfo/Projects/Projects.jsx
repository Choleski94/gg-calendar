import React from 'react';

import ProjectEdit from './ProjectEdit';

import api from '@api';
import Table from '@components/Table';
import Modal from '@components/Modal';
import mockProject from '@mocks/projects';
import formatMessage from '@utils/formatMessage';
import { SUPPORTED_STATUSES } from '@constants/projects';

const SUPPORTED_EQUIPMENTS = {
	GAS: 'Gas',
	FRIDGE: 'Fridge',
	TLWASHER: 'Top load washer',
	FLWASHER: 'Front load washer',
	FLDRYER: 'Top load dryer',
	TPDRYER: 'Front load dryer',
};

const DEFAULT_PROJECT_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
	{ key: 'brand', label: 'Brand' },
	{ key: 'project', label: 'Project' },
	{ key: 'model', label: 'Model' },
	{ key: 'serial', label: 'Serial #' },
	{ key: 'status', label: 'Status' },
	{ key: 'tech', label: 'Techs' },
	{ key: 'lastService', label: 'Last Service' },
	{ key: 'note', label: 'Notes' },
];

export const ProjectsCTA = ({ onClick }) => (
	<a className="btn btn-primary" href="#add-equipment" onClick={onClick}>
		<i className="bi bi-box-seam-fill me-1" /> Add equipments
	</a>
);

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
	const [ showModal, setShowModal ] = React.useState(false);
	const [ activeEqpt, setActiveEqpt ] = React.useState(null);

	const fetchProjects = async () => {
		setOptions([]);
		setLoading(true);
		setOptions(mockProject.list);
		setLoading(false);
	};

	React.useEffect(() => {
		fetchProjects();
	}, []);

	const showEdit = React.useMemo(() => (
		Boolean(activeEqpt)
	), [ activeEqpt]);

	const handleProjectClick = (eqptId = '') => {
		setActiveEqpt(eqptId);
	};

	const toggleModal = () => setActiveEqpt(null);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			{showEdit && (
				<Modal onCloseRequest={toggleModal} title="Edit equipment" withFooter>
					<ProjectEdit />
				</Modal>
			)}
			<Table
				withFilter
				height="63vh"
				elementsPerPage={300}
				searchPlaceholder="Search projects"
				headers={DEFAULT_PROJECT_TABLE_HEADER}
				data={options.map((payload, idx = 0) => ({
					'id': 123,
					'brand': payload?.brand,
					'project': SUPPORTED_EQUIPMENTS[payload?.equipment],
					'model': (
						<span className="text-uppercase">
							{payload?.model}
						</span>
					),
					'serial': (
						<span className="text-uppercase">
							{payload?.serial}
						</span>
					),
					'status': (
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
					'tech': parseTech(payload),
					'lastService': (
						payload?.jobs && payload?.jobs.length ? (
							payload?.jobs[0].lastUpdate
						) : 'N/A'
					),
					'note': payload?.notes,
				}))}
				onRowClick={(e, payload) => handleProjectClick(payload.id)}
			/>
		</div>
	);
};

export default Projects;

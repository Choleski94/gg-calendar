
import React from 'react';

import { Modal, Table } from '@components';
import formatMessage from '@utils/formatMessage';
import { deleteObject, updateOrPushObject } from '@utils';
import { DEFAULT_POSITION_TABLE_HEADER } from '@constants/workforce';

import WorkforcePositionForm from './WorkforcePositionForm';
import WorkforcePositionDialog from './WorkforcePositionDialog';

const orgId = '8fa9a6e2-d4f3-49e3-9d1c-42b227f64fd2';

const SUPPORTED_MODAL_VIEWS = {
	ADD: 'ADD',
	EDIT: 'EDIT',
	DELETE: 'DELETE',
}

const parseWorforcePositionOptions = (options = []) => options.map((payload) => ({
	query: [
		payload?.name,
		payload?.description,
	].join(' '),
	id: payload?.id,
	name: payload?.name,
	description: payload?.description,
}));

const WorkforcePositions = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ activeOption, setActiveOption ] = React.useState({});
	const [ modalSection, setModalSection ] = React.useState('');

	const { loading, errors, data } = {};

	React.useEffect(() => {
		if (!loading && data) {
			setOptions(data?.positions);
		}
	}, [ loading, data ]);

	const toggleModal = () => setModalSection('');

	const onAddPositionClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.ADD);
	}

	const onEditPositionClick = (e, currentOption) => {
		e.preventDefault();
		setActiveOption({ ...currentOption });
		setModalSection(SUPPORTED_MODAL_VIEWS.EDIT);
	}

	const onDeletePositionClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.DELETE);
	}

	const renderAddPosition = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddPositionClick}>
			<i className="bi-plus" />
			Create Position
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
				elementsPerPage={300}
				cta={renderAddPosition}
				onRowClick={onEditPositionClick}
				headers={DEFAULT_POSITION_TABLE_HEADER}
				noDataMessage="No worforce positions found"
				data={parseWorforcePositionOptions(options)}
				searchPlaceholder="Search workforce position"
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.ADD && (
				<Modal 
					size="md" centered 
					onCloseRequest={toggleModal} 
					title="Add workforce position" 
				>
					<WorkforcePositionForm 
						orgId={orgId} mode="CREATE" 
						aggregateOption={aggregateOption} 
					/>
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.EDIT && (
				<Modal 
					size="md" centered 
					onCloseRequest={toggleModal} 
					title={`Edit ${activeOption.name} position`} 
				>
					<WorkforcePositionDialog
						orgId={orgId} 
						defaultValues={activeOption} 
						aggregateOption={aggregateOption} 
					/>
				</Modal>
			)}
		</>
	);
};

export default WorkforcePositions;

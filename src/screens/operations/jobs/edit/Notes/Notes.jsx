import React from 'react';

import api from '@api';
import mockNote from '@mocks/notes';
import { Table, Modal } from '@components';
import formatMessage from '@utils/formatMessage';

import NoteEdit from './NoteEdit';

const SUPPORTED_EQUIPMENTS = {
	GAS: 'Gas',
	FRIDGE: 'Fridge',
	TLWASHER: 'Top load washer',
	FLWASHER: 'Front load washer',
	FLDRYER: 'Top load dryer',
	TPDRYER: 'Front load dryer',
};

const SUPPORTED_TYPES = {
	SERVICE: 'SERVICE',
	DIAGNOSTIC: 'DIAGNOSTIC',
};

const DEFAULT_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
	{ key: 'date_created', label: 'Date created' },
	{ key: 'type', label: 'Type' },
	{ key: 'author', label: 'Author' },
	{ key: 'value', label: 'Note' },
];

const Notes = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ activeEqpt, setActiveEqpt ] = React.useState(null);

	const fetchNotes = async () => {
		setLoading(true);
		setOptions(mockNote.list);
		setLoading(false);
	};

	React.useEffect(() => { fetchNotes(); }, []);

	const toggleAddNote = () => setShowModal(!showModal);

	const onAddNoteClick = (e) => {
		e.preventDefault();
		toggleAddNote();
	}

	const setNoteId = (e, payload) => {
		toggleAddNote();
	}

	const renderAddNote = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddNoteClick}>
			<i className="bi-plus" />
			Add new note
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<Table
				withFilter
				height="63vh"
				cta={renderAddNote}
				elementsPerPage={300}
				headers={DEFAULT_TABLE_HEADER}
				searchPlaceholder="Search notes"
				data={options.map((payload, idx = 0) => ({
					'id': 123,
					'query': [
						payload?.value,
						payload?.author?.lastName,
						payload?.author?.firstName,
					].join(' '),
					'date_created': payload['date_created'],
					'author': (
						<small>
							{payload?.author?.firstName} {payload?.author?.lastName}
						</small>
					),
					'type': (
						<small>
							{payload?.type === SUPPORTED_TYPES.SERVICE && (
								<span className="badge bg-soft-success text-success">
									<span className="legend-indicator bg-success" />
									Service
								</span>
							)}
							{payload?.type === SUPPORTED_TYPES.DIAGNOSTIC && (
								<span className="badge bg-soft-warning text-warning">
									<span className="legend-indicator bg-warning" />
									Diagnostic
								</span>
							)}
						</small>
					),
					'value': (
						<small>
							{payload?.value}
						</small>
					),
				}))}
				onRowClick={setNoteId}
			/>
			{showModal && (
				<Modal onCloseRequest={toggleAddNote} title="Edit note" size="md" withFooter>
					<NoteEdit />
				</Modal>
			)}
		</div>
	);
};

export default Notes;

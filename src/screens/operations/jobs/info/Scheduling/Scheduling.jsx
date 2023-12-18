import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import mockCalendar from '@mocks/calendar';
import formatMessage from '@utils/formatMessage';
import { Table, Modal, Forms } from '@components';
import { DEFAULT_TABLE_HEADER, SUPPORTED_CATEGORIES } from '@constants/calendar';

import SchedulingEdit from './SchedulingEdit';
				
const parseOptions = (data = []) => data.map((payload) => ({
	id: payload?.id,
	date: payload?.date,
	time: payload?.time,
	duration: payload?.duration,
	techs: (
		<Link className="d-flex align-items-center" to={`/hr/employee/workforce/${payload?.author?.id}`}>
			<div>
				{payload?.author.firstName} {payload?.author.lastName}
			</div>
		</Link>
	),
	status: (SUPPORTED_CATEGORIES[payload?.type_id] ? (
		<span className="badge bg-soft-success text-success">
			<span className="legend-indicator bg-success"/>
			{SUPPORTED_CATEGORIES[payload?.type_id]}
		</span>
	) : null),
	notes: payload?.notes && payload.notes.length && (
		payload.notes[0].value
	),
}));

const Scheduling = ({ id = '' }) => {
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ schedulingOptions, setSchedulingOptions ] = React.useState([]);

	const fetchJobCalendar = () => {
		if (id !== 'create') {
			setSchedulingOptions([]);
			setLoading(true);
			setSchedulingOptions(mockCalendar.list);
			setLoading(false);
		}
	};

	React.useEffect(() => {
		fetchJobCalendar();
	}, []);

	const toggleModal = () => setShowModal(false);

	const onAddBookingClick = (e) => {
		onBookingClick(e);
	};

	const renderBook = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddBookingClick}>
			<i className="bi bi-calendar-plus"/>
			&nbsp;
			Add booking
		</button>
	);

	const onBookingClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	return (
		<>
			<Table
				height="63vh"
				cta={renderBook}
				title="Scheduling"
				elementsPerPage={300}
				onRowClick={onBookingClick}
				headers={DEFAULT_TABLE_HEADER}
				noDataMessage="No events to show"
				data={parseOptions(schedulingOptions)}
			/>
			{showModal && (
				<Modal onCloseRequest={toggleModal} title="Edit booking" size="md">
					<SchedulingEdit />
				</Modal>
			)}
		</>
	);
};

export default Scheduling;

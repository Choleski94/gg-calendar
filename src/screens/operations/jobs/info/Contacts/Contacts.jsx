import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import mockJobs from '@mocks/jobs';
import mockCalendar from '@mocks/calendar';
import formatMessage from '@utils/formatMessage';
import { Card, Table, Modal, Forms } from '@components';
import { SUPPORTED_CATEGORIES } from '@constants/calendar';

// import ContactAdd from './ContactAdd';

const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'phone', label: 'Phone' },
	{ key: 'email', label: 'Email' },
	{ key: 'language', label: 'Language' },
];

const SUPPORTED_MODAL_VIEWS = {
	SUMMARY: 'SUMMARY',
	CREATE: 'CREATE',
}

const parseOptions = (data = []) => data.map((payload) => ({
	id: payload?.id,
	name: (
		<Link className="d-flex align-items-center" to="/crm/customers/456">
			<div className="ms-3">
				<span className="d-block h5 text-inherit mb-0">
					{payload?.firstName} {payload?.lastName}
				</span>
				<span className="d-block fs-5 text-body">
					{payload?.position}
				</span>
			</div>
		</Link>
	),
	phone: renderPhone(payload.phones),
	email: renderEmail(payload.emails),
	language: renderLang(payload.languages),
}));

const renderPhone = (options = []) => (
	options && options.length ? (
		options.map((payload) => (
			<div key={`phone-${payload?.id}`}>
				{payload?.type === 'MOBILE' ? (
					<i className="bi bi-phone-fill" />
				) : (
					<i className="bi bi-telephone-fill" />
				)}
				&nbsp;
				{payload?.value}
				&nbsp;
				<small className="font-italic">
					{payload?.type === 'MOBILE' ? (
						'(mobile)'
					) : (
						'(Home)'
					)}
				</small>
				&nbsp;
				{payload?.isPrimary && (
					<small className="font-italic">
						<i className="bi-patch-check-fill text-success" />
					</small>
				)}
			</div>
		))
	) : null
);

const renderLang = (options = []) => (
	options && options.length ? (
		options.map((payload) => (
			<div key={`lang-${payload?.id}`}>
				{payload?.code === 'en' && 'English'}
				{payload?.code === 'fr' && 'Français'}
				&nbsp;
				{payload?.isPrimary && (
					<small className="font-italic">
						<i className="bi-patch-check-fill text-success" />
					</small>
				)}
			</div>
		))
	) : null
);

const renderEmail = (options = []) => (
	options[0].value // TODO
);


const Contacts = ({ id = '' }) => {
	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ modalSection, setModalSection ] = React.useState('');
	const [ contactOptions, setContactOptions ] = React.useState([]);

	const fetchContacts = async (id = '') => {
		if (id !== 'create') {
			setLoading(true);
			setContactOptions(mockJobs.get.contacts);
			setLoading(false);
		}
	}

	React.useEffect(() => {
		fetchContacts(id);
	}, []);

	React.useEffect(() => {
		fetchContacts(id);
	}, [ id ]);

	const toggleModal = () => setModalSection('');

	const onContactClick = (e, { id }) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.SUMMARY);
	}

	const onAddContactClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.CREATE);
	}

	const renderBook = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddContactClick}>
			<i className="bi bi-person-plus"/>
			&nbsp;
			Add contact
		</button>
	);

	return (
		<>
			<Table
				height="63vh"
				cta={renderBook}
				title="Contacts"
				elementsPerPage={300}
				onRowClick={onContactClick}
				headers={DEFAULT_TABLE_HEADER}
				data={parseOptions(contactOptions)}
				noDataMessage="No contacts associated"
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.SUMMARY && (
				<Modal onCloseRequest={toggleModal} title="Edit contact location" size="lg">
					<Forms.Contact
						withNote
						data={data}
						handleSubmit={handleSubmit}
					/>
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.CREATE && (
				<Modal onCloseRequest={toggleModal} title="Add new contact location" size="lg">
					<Forms.Contact
						withNote
						data={data}
						handleSubmit={handleSubmit}
					/>
				</Modal>
			)}
		</>
	);
};

export default Contacts;

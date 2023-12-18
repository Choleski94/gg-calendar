import React from 'react';

import api from '@api';
import mockRoles from '@mocks/workforce/roles';
import formatMessage from '@utils/formatMessage';
import { Modal, Card, Table, Layout, Counter } from '@components';

const DEFAULT_ACCESS_TABLE_HEADER = [
	{
		key: 'name',
		label: 'Name'
	},
	{
		key: 'description',
		label: 'Description'
	},
	{
		key: 'risk',
		label: 'Risk'
	},
	{
		key: 'date_requested',
		label: 'Date requested'
	},
	{
		key: 'date_approved',
		label: 'Date approved'
	},
	{
		key: 'approver',
		label: 'Approver'
	},
	{
		key: 'priority',
		label: 'Priority'
	},
	{
		key: 'status',
		label: 'Status'
	},
];

const SUPPORTED_SECTIONS = {
	INFO: 'INFO',
	FINANCE: 'FINANCE',
	INVOICE: 'INVOICE',
	LOCATION: 'LOCATION',
	DOCUMENT: 'DOCUMENT',
	INVOICES: 'INVOICES',
	EQUIPMENT: 'EQUIPMENT',
};

const hasActiveSectionTabClassName = (activeSection = '', currentSection = '') => [
	'nav-link',
	(currentSection === activeSection ? 'active' : ''),
].join(' '); 

const ACCESS_BREADCRUMB_OPTIONS = [
	{
		path: '/crm',
		value: 'CRM'
	},
	{
		path: '/crm/access',
		value: 'Access'
	},
];

const SUPPORTED_SCREEN_SECTIONS = {
	OVERVIEW: 'OVERVIEW',
	SETTINGS: 'SETTINGS',
	STATISTICS: 'STATISTICS',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SCREEN_SECTIONS.OVERVIEW,
		value: 'Overview',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.STATISTICS,
		value: 'Statistics',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.SETTINGS,
		value: 'Settings',
	},
];

const AccessOverview = ({ accessId, setAccessId }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ activeSection, setActiveSection ] = React.useState('');

	const fetchAccess = () => {
		setLoading(true);
		setOptions(mockRoles.list);
		setLoading(false);
	}

	React.useEffect(() => fetchAccess(), []);

	const onSectionClick = (e, currentSection = '') => {
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const toggleAddUser = () => setShowModal(!showModal);

	const onAddAccessClick = (e) => {
		e.preventDefault();
		toggleAddUser();
	};

	const onAccessClick = (e, { id }) => {
		e.preventDefault();
		setAccessId(id);
	};

	const renderAddAccess = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddAccessClick}>
			<i className="bi-plus" />
			Add access
		</button>
	);

	return (
		<>
			<div className="row">
				<div className="col-sm-12 col-lg-4 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total access
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={24} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active access
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={12} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Innactive access
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={5} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>

			<Table
				withFilter
				height="63vh"
				elementsPerPage={300}
				cta={renderAddAccess}
				onRowClick={onAccessClick}
				data={options.map((payload) => ({
					...payload, query: payload.name,
				}))}
				headers={DEFAULT_ACCESS_TABLE_HEADER}
				searchPlaceholder="Search access template"
			/>
		</>
	);
};

export default AccessOverview;

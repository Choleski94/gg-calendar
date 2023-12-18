import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import mockJobs from '@mocks/jobs';
import formatMessage from '@utils/formatMessage';
import { Card, NavPill, Layout, Breadcrumb, GetSupport } from '@components';

import Files from './Files';
import Notes from './Notes';
import Orders from './Orders';
import General from './General';
import Invoices from './Invoices';
import Projects from './Projects';
import Activity from './Activity';
import Contacts from './Contacts';
import Scheduling from './Scheduling';
import ContactInfo from './ContactInfo';
import JobInfoMetrics from './JobInfoMetrics';

const getPageHeaderTitle = (id) => (
	id === 'create' ? 'Create new job' : `Job #${id}`
);

const JOBS_INFO_BREADCRUMB_OPTIONS = [
	{
		path: '/operations',
		value: 'Operations'
	},
	{
		path: '/operations/jobs',
		value: 'Jobs'
	},
];

const SUPPORTED_SECTIONS = {
	TOOLS: 'TOOLS',
	FILES: 'FILES',
	ORDERS: 'ORDERS',
	NOTES: 'NOTES',
	INVOICE: 'INVOICE',
	ACTIVITY: 'ACTIVITY',
	PROJECTS: 'PROJECTS',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SECTIONS.PROJECTS,
		value: 'Projects',
	},
	{
		key: SUPPORTED_SECTIONS.ORDERS,
		value: 'Purchase Orders',
	},
	{
		key: SUPPORTED_SECTIONS.FILES,
		value: 'Files',
	},
	{
		key: SUPPORTED_SECTIONS.ACTIVITY,
		value: 'Activity Log',
	},
	{
		key: SUPPORTED_SECTIONS.NOTES,
		value: 'Notes',
	},
	{
		key: SUPPORTED_SECTIONS.INVOICE,
		value: 'Invoices',
	},
];


const SUPPORTED_MODAL_VIEWS = {
	INFO: 'INFO',
	SERVICE_LOCATION: 'SERVICE_LOCATION',
	CONTACT_LOCATION: 'CONTACT_LOCATION',
};

const DEFAULT_CTA_STATES = Object.keys(SUPPORTED_SECTIONS).reduce((agg, ctaKey) => (
	Object.assign(agg, { [ctaKey]: false })
), {});

const JobInfo = ({ id = '' }) => {
	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ ctas, setCtas ] = React.useState(DEFAULT_CTA_STATES);
	const [ activeSection, setActiveSection] = React.useState(SUPPORTED_SECTIONS.PROJECTS);

	// Evaluate if we are in create mode.
	const createMode = React.useMemo(() => (
		id === 'create'
	), [ id ]);

	// Set breadcrumb options.
	const breadcrumbOptions = React.useMemo(() => ([
		...JOBS_INFO_BREADCRUMB_OPTIONS,
		(id !== 'create' && {
			path: `/operations/jobs/${id}`, 
			value: id
		})
	].filter(Boolean)), [ id ]);

	const fetchJob = (id) => {
		if (id !== 'create') {
			console.log('ID:::', id);
			setLoading(true);
			setData(mockJobs.get);
			setLoading(false);
		}
	};

	React.useEffect(() => {
		fetchJob(id);
	}, []);

	React.useEffect(() => {
		fetchJob(id);
	}, [ id ]);

	const onSectionClick = (e, currentSection = '') => {
		e.preventDefault();
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const toggleCta = (currentCta = '') => setCtas({
		...ctas,
		[currentCta]: !ctas[currentCta]
	});

	const onCtaClick = (e, currentCta = '') => {
		e.preventDefault();
		toggleCta(currentCta);
	};

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-end">
					<div className="col-lg mb-3 mb-lg-0 mb-4">
						<Breadcrumb options={breadcrumbOptions} />
						<h1 className="page-header-title">
							{getPageHeaderTitle(id)}
						</h1>
					</div>
					<div className="col-lg-auto">
						<GetSupport />
						{!createMode ? (
							<NavPill 
								id="accountTab" 
								options={NAV_TAB_OPTIONS}
								handleTabClick={setActiveSection}
							/>
						) : null}
					</div>
				</div>
			</Layout.StickyHeader>


			<div className="row mt-13">
				{!createMode ? (
					<JobInfoMetrics id={id} />
				) : null}
				<div className="col-12">
					<General 
						id={id}
					/>
				</div>
				<div className="col-6 mt-4">
					<Scheduling id={id} />
				</div>
				<div className="col-6 mt-4">
					<Contacts id={id} />
				</div>
				<div className="col-md-12 mt-4">
					{activeSection === SUPPORTED_SECTIONS.PROJECTS && (
						<Projects 
							id={id}
							hasActiveCta={ctas.PROJECTS} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.PROJECTS)} 
						/>
					)}

					{activeSection === SUPPORTED_SECTIONS.ORDERS && (
						<Orders 
							id={id}
							hasActiveCta={ctas.ORDERS} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.ORDERS)} 
						/>
					)}

					{activeSection === SUPPORTED_SECTIONS.FILES && (
						<Files 
							id={id}
							hasActiveCta={ctas.FILES} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.FILES)} 
						/>
					)}

					{activeSection === SUPPORTED_SECTIONS.ACTIVITY && (
						<Card>
							<Card.Body>
								<Activity
									id={id}
									hasActiveCta={ctas.ACTIVITY} 
									toggleCta={() => toggleCta(SUPPORTED_SECTIONS.ACTIVITY)} 
								/>
							</Card.Body>
						</Card>
					)}

					{activeSection === SUPPORTED_SECTIONS.NOTES && (
						<Notes 
							id={id}
							hasActiveCta={ctas.NOTES} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.NOTES)} 
						/>
					)}

					{activeSection === SUPPORTED_SECTIONS.INVOICE && (
						<Invoices 
							id={id}
							hasActiveCta={ctas.INVOICE} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.INVOICE)} 
						/>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default JobInfo;

import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import { withPrivateRouter } from '@utils/hocs';
import formatMessage from '@utils/formatMessage';
import { Layout, Table, Card, Forms, Counter, NavPill, Modal, GetSupport } from '@components';

const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'description', label: 'Description' },
	{ key: 'industry', label: 'Industry' },
	{ key: 'members', label: 'Members' },
];

const DEFAULT_ACTIVE_HEADER_KEYS = [
	'name', 'description', 'industry',
	'members'
];

const parseOptions = () => [];

const dummyData = [
	{
		id: '123',
		isAdmin: true,
		name: 'Flash Repair',
		description: 'Our group promotes and sells products and services by leveraging',
		industry: {
			id: '102',
			slug: 'repair-appliance',
			name: 'Repair appliance',
		},
		totalMembers: 1,
		members: [
			{
				id: '1',
				initials: 'Lac',
				avatarColor: '',
				avatar: '/assets/img/160x160/img4.jpg',
				firstName: 'Choleski',
				lastName: 'Louis',
			}
		],
	},
	{
		id: '456',
		isAdmin: false,
		name: 'Karel Woodcraft',
		description: 'I\'ve been building things for years and also happen to have a passion for problem solving.',
		industry: {
			id: '102',
			slug: 'carpentry',
			name: 'Carpentry',
		},
		totalMembers: 10,
		members: [
			{
				id: '20',
				initials: 'Lac',
				avatarColor: '',
				avatar: '/assets/img/160x160/img3.jpg',
				firstName: 'Choleski',
				lastName: 'Louis',
			},
			{
				id: '21',
				initials: 'Lac',
				avatarColor: '',
				avatar: '/assets/img/160x160/img6.jpg',
				firstName: 'Choleski',
				lastName: 'Louis',
			},
			{
				id: '60',
				initials: '',
				avatarColor: '',
				avatar: '/assets/img/160x160/img9.jpg',
				firstName: 'Sandu',
				lastName: 'Patel',
			}
		],
	},
	{
		id: '789',
		isAdmin: false,
		name: 'oPhone',
		description: 'One of the best, locally-owned, and most reliable cell phone repair',
		industry: {
			id: '102',
			slug: 'phone-repair',
			name: 'Phone Repair',
		},
		totalMembers: 10,
		members: [
			{
				id: '30',
				initials: 'JK',
				avatarColor: '',
				avatar: '/assets/img/160x160/img7.jpg',
				firstName: 'Jasmine',
				lastName: 'Khosban',
			}
		],
	},
	{
		id: '101',
		isAdmin: false,
		name: 'Luxury Outdoor Landscaping',
		description: 'Luxury pools and landscaping that will transform your outdoor living space.',
		industry: {
			id: '102',
			slug: 'landscaping',
			name: 'Landscaping',
		},
		totalMembers: 10,
		members: [
			{
				id: '40',
				initials: 'Lac',
				avatarColor: '',
				avatar: '/assets/img/160x160/img5.jpg',
				firstName: 'Choleski',
				lastName: 'Louis',
			},
			{
				id: '41',
				initials: 'T',
				avatarColor: 'dark',
				avatar: null,
				firstName: 'Tommy',
				lastName: 'Jhonson',
			}
		],
	},
	{
		id: '112',
		isAdmin: false,
		name: 'Belmonte Léger SEP',
		description: 'Business consulting, Business startup services, Business tax planning, Business tax',
		industry: {
			id: '102',
			slug: 'financial-reporting',
			name: 'Financial Reporting',
		},
		totalMembers: 10,
		members: [
			{
				id: '5',
				initials: 'Lac',
				avatarColor: '',
				avatar: '/assets/img/160x160/img4.jpg',
				firstName: 'Choleski',
				lastName: 'Louis',
			}
		],
	},
	{
		id: '131',
		isAdmin: false,
		name: 'ebenisterie Tech Art',
		description: 'Carpentry, Custom Bookcases, Custom Built-ins, Custom Cabinets, Custom Entertainment',
		industry: {
			id: '102',
			slug: 'carpentry',
			name: 'Carpentry',
		},
		totalMembers: 10,
		members: [
			{
				id: '60',
				initials: '',
				avatarColor: '',
				avatar: '/assets/img/160x160/img9.jpg',
				firstName: 'Sandu',
				lastName: 'Patel',
			},
			{
				id: '61',
				initials: 'VK',
				avatarColor: 'danger',
				avatar: null,
				firstName: 'Vinesh',
				lastName: 'Khan',
			},
			{
				id: '62',
				initials: 'SA',
				avatarColor: 'success',
				avatar: null,
				firstName: 'Sunil',
				lastName: 'Atel',
			},
		],
	},
];

const Organizations = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);

	const fetchOrganizations = () => {
		setOptions([]);
		setLoading(true);
		// setOptions(dummyData);
		setLoading(false);
	}

	React.useEffect(() => {
		fetchOrganizations();
	}, []);

	const onModalClose = () => {
		setShowModal(false);
	};

	const onAddOrganizationClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	const onViewOrganizationClick = (e, { id }) => {
		e.preventDefault();
		return setModalSection('VIEW');
	};

	const renderAddOrganization = (
		<button 
			type="button" 
			onClick={onAddOrganizationClick}
			className="btn btn-sm btn-outline-primary" 
		>
			<i className="bi-plus" />
			Create organization
		</button>
	);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-center">
					<div className="col-sm mt-4 mb-2 mb-sm-0">
						<Layout.Title>
							Manage Organizations
						</Layout.Title>
						<p className="page-header-text">
							Easily way to check for any unusual or suspicious sign-in activity
						</p>
					</div>
					<div className="col-sm-auto">
						<GetSupport />
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				<div className="d-grid gap-3 gap-lg-5">
					<div className="row">
						<div className="col-sm-4 col-lg-4">
							<Card>
								<Card.Body>
									<Card.Subtitle>
										Total organizations
									</Card.Subtitle>
									<div className="row align-items-center gx-2">
										<div className="col">
											<span className="display-4 text-dark">
												<Counter number={18823302} />
											</span>
										</div>
										<div className="col-auto">
											<span className="badge bg-soft-success text-success p-1">
												<i className="bi-graph-up" /> 5.0%
											</span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className="col-sm-4 col-lg-4">
							<Card>
								<Card.Body>
									<Card.Subtitle>
										Oganization created
									</Card.Subtitle>
									<div className="row align-items-center gx-2">
										<div className="col">
											<span className="display-4 text-dark">
												<Counter number={11} />
											</span>
										</div>
										<div className="col-auto">
											<span className="badge bg-soft-success text-success p-1">
												<i className="bi-graph-up" /> 1.2%
											</span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className="col-sm-4 col-lg-4">
							<Card>
								<Card.Body>
									<Card.Subtitle>
										Oganization joined
									</Card.Subtitle>
									<div className="row align-items-center gx-2">
										<div className="col">
											<span className="display-4 text-dark">
												<Counter number={16} />
											</span>
										</div>
										<div className="col-auto">
											<span className="badge bg-soft-danger text-danger p-1">
												<i className="bi-graph-down" /> 2.8%
											</span>
										</div>
									</div>
								</Card.Body>
							</Card>
						</div>
					</div>
					<div className="d-grid gap-3 gap-lg-5">
						<Table
							withFilter
							fullHeight
							loading={loading}
							elementsPerPage={100}
							cta={renderAddOrganization}
							data={parseOptions(options)}
							headers={DEFAULT_TABLE_HEADER}
							// onRowClick={onViewOrganizationClick}
							searchPlaceholder="Search organizations"
							defaultActiveKeys={DEFAULT_ACTIVE_HEADER_KEYS}
						/>
						{showModal && (
							<Modal title="Create organization" size="lg" centered onCloseRequest={onModalClose}>
								<Forms.Organization />
							</Modal>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default withPrivateRouter(Organizations);

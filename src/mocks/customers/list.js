'use strict';

const customerList = [
	{
		id: '123',
		isPrimary: true,
		isBlacklist: false,
		position: 'Landlord',
		firstName: 'Jason',
		lastName: 'Richard',
		languages: [
			{
				locale: 'en-US',
				isPrimary: true,
			},
			{
				locale: 'es-ES',
				isPrimary: false,
			}
		],
		phones: [
			{
				type: 'MOBILE',
				isPrimary: true,
				extension: '',
				value: '514-948-5500',
			},
		],
		priority: 'URGENT', 			// HIGH, NORMAL, LOW
		status: 'SCHEDULED',			// SCHEDULED, IN_PROGRESS, ON_HOLD, COMPLETED, PENDING, APPROVAL, REOPENED, CANCELLED, RESCHEDULED, WAITING_FOR_PARTS, FOLLOW_UP, REQUIRED
		reference: '1001-5955-1',
		emails: [
			{
				isPrimary: true,
				value: 'amanda@yahoo.ca',
			},
			{
				isPrimary: false,
				value: 'amanda.harvey@gmail.com',
			},
		],
		contact: {
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
			unit: '3a',
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				author: {
					id: '123',
					firstName: 'T1.',
					lastName: 'Duncan',
				},
				value: 'Has sensitive floor',
				date_created: 1685627246,
			}
		],
		jobs: [
			{
				id: '534',
				payment: {
					status: 'OVERDUE',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			},
			{
				id: '434',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			},
			{
				id: '877',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			}
		]
	},
	{
		id: '456',
		isPrimary: false,
		isBlacklist: false,
		position: 'Building Manager',
		firstName: 'Alex',
		lastName: 'Thompson',
		languages: [
			{
				locale: 'en-US',
				isPrimary: true,
			},
		],
		phones: [
			{
				type: 'MOBILE',
				isPrimary: true,
				extension: '',
				value: '450-271-1316',
			},
		],
		priority: 'HIGH',
		status: 'COMPLETED',
		reference: '1001-4387-1',
		emails: [
			{
				isPrimary: true,
				value: 'alex.thompson@hotmail.com',
			},
		],
		contact: {
			address: '57 6e Av',
			country: 'Canada',
			city: 'Laval',
			state: 'QC',
			zip: 'H7N4L3',
			unit: '',
		},
		notes: [],
		jobs: [
			{
				id: '534',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			},
			{
				id: '877',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			}
		]
	},
	{
		id: '789',
		isPrimary: false,
		isBlacklist: false,
		position: 'Tenant',
		firstName: 'Stephan',
		lastName: 'Beauregard',
		languages: [
			{
				locale: 'fr-CA',
				isPrimary: true,
			},
		],
		phones: [
			{
				type: 'MOBILE',
				isPrimary: true,
				extension: '',
				value: '450-271-1316',
			},
			{
				type: 'HOME',
				isPrimary: false,
				extension: '',
				value: '514-600-1316',
			},
			{
				type: 'OFFICE',
				isPrimary: false,
				extension: '343',
				value: '1-877-225-5266',
			},
		],
		priority: 'NORMAL',
		status: 'RESCHEDULED',
		reference: '1001-4387-2',
		emails: [
			{
				isPrimary: true,
				value: 'stefan.beauregard@icloud.com',
			},
		],
		contact: {
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
			unit: '',
		},
		notes: [],
		jobs: [
			{
				id: '534',
				payment: {
					status: 'PARTIALLY_PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			},
			{
				id: '434',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			},
			{
				id: '877',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			}
		]
	},
	{
		id: '101',
		isPrimary: false,
		isBlacklist: false,
		position: 'Tenant',
		firstName: 'Amanda',
		lastName: 'Harvey',
		languages: [
			{
				locale: 'en-US',
				isPrimary: true,
			},
		],
		phones: [
			{
				type: 'HOME',
				isPrimary: true,
				extension: '',
				value: '438-115-9219',
			},
		],
		priority: 'NORMAL',
		status: 'COMPLETED',
		reference: '1001-6975-1',
		emails: [
			{
				isPrimary: true,
				value: 'aharvey@icloud.com',
			},
			{
				isPrimary: false,
				value: 'amanda.harvey@gmail.com',
			},
		],
		contact: {
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
			unit: '12b',
		},
		notes: [],
		jobs: [
			{
				id: '534',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			},
			{
				id: '434',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			},
			{
				id: '877',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			}
		]
	},
	{
		id: '112',
		isPrimary: false,
		isBlacklist: false,
		position: 'Tenant',
		firstName: 'Peter',
		lastName: 'Li',
		languages: [
			{
				locale: 'en-US',
				isPrimary: true,
			},
		],
		phones: [
			{
				type: 'MOBILE',
				isPrimary: true,
				extension: '',
				value: '810-727-8738',
			},
		],
		priority: 'LOW',
		status: 'COMPLETED',
		reference: '1001-8795-1',
		emails: [
			{
				isPrimary: true,
				value: 'peter.li.li@gmail.com',
			},
		],
		contact: {
			address: '121 Capital',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H7N3S1',
			unit: '',
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				author: {
					id: '123',
					firstName: 'T1.',
					lastName: 'Duncan',
				},
				value: 'Has a baby',
				date_created: 1685627246,
			}
		],
		jobs: []
	},
	{
		id: '131',
		isPrimary: false,
		isBlacklist: false,
		position: 'Tenant',
		firstName: 'Liu',
		lastName: 'Yen',
		languages: [
			{
				locale: 'fr-CA',
				isPrimary: true,
			},
			{
				locale: 'en-US',
				isPrimary: false,
			},
		],
		phones: [
			{
				type: 'HOME',
				isPrimary: true,
				extension: '',
				value: '514-510-8585',
			},
		],
		priority: 'NORMAL',
		status: 'WAITING_FOR_PARTS',
		reference: '1001-8795A-1',
		emails: [
			{
				isPrimary: true,
				value: 'liu.liu@yahoo.ca',
			},
		],
		contact: {
			address: '8520 bloomfield',
			country: 'Canada',
			city: 'Laval',
			state: 'QC',
			zip: 'H7N1K2',
			unit: '',
		},
		notes: [],
		jobs: [
			{
				id: '434',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			},
			{
				id: '877',
				payment: {
					status: 'PAID',
					lastUpdate: 1597252020,
				},
				dateCreated: 1597252020,
			}
		]
	},
];

export default customerList;


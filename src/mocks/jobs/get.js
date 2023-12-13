'use strict';

const jobGet = {
	id: '123',
	isPrimary: true,
	isBlacklist: false,
	position: 'Landlord',
	firstName: 'Jason',
	lastName: 'Richard',
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
	service_location: {
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
			unit: '3a',
	},
	contacts: [
		{
			id: '123',
			isPrimary: true,
			isBlacklist: false,
			position: 'Tenant',
			firstName: 'Albert',
			lastName: 'Li',
			phones: [
				{
					type: 'MOBILE',
					isPrimary: true,
					extension: '',
					value: '450-948-5500',
				},
			],
			emails: [
				{
					isPrimary: true,
					value: 'albert.li@yahoo.ca',
				},
			],
			languages: [
				{
					isPrimary: true,
					code: 'en',
				},
				{
					isPrimary: false,
					code: 'fr',
				},
			],
		},
		{
			id: '123',
			isPrimary: false,
			isBlacklist: false,
			position: 'Tenant',
			firstName: 'Vivian Xieu',
			lastName: 'Li',
			phones: [
				{
					type: 'MOBILE',
					isPrimary: true,
					extension: '',
					value: '450-948-5500',
				},
				{
					type: 'HOME',
					isPrimary: false,
					extension: '',
					value: '450-428-6223',
				},
			],
			emails: [
				{
					isPrimary: true,
					value: 'its.vivi@gmail.com',
				},
			],
			languages: [
				{
					isPrimary: true,
					code: 'en',
				},
				{
					isPrimary: false,
					code: 'fr',
				},
			],
		}
	],
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
			techs: [
				{
					id: 123,
					firstName: 'T1. Marek',
					lastName: '',
				}
			],
			dateCreated: 1597252020,
		},
		{
			id: '434',
			payment: {
				status: 'PAID',
				lastUpdate: 1597252020,
			},
			techs: [
				{
					id: 123,
					firstName: 'T1. Marek',
					lastName: '',
				}
			],
			dateCreated: 1597252020,
		},
		{
			id: '877',
			payment: {
				status: 'PAID',
				lastUpdate: 1597252020,
			},
			techs: [
				{
					id: 123,
					firstName: 'T1. Marek',
					lastName: '',
				}
			],
			dateCreated: 1597252020,
		}
	]
};

export default jobGet;


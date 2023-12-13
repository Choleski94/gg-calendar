'use strict';

// SCHEDULED, IN_PROGRESS, ON_HOLD, COMPLETED, PENDING, APPROVAL, REOPENED, CANCELLED, RESCHEDULED, WAITING_FOR_PARTS, FOLLOW_UP, REQUIRED

const calendarList = [
	{
		id: '123',
		type_id: 'COMPLETE',
		author: {
			id: '123',
			firstName: 'T1.',
			lastName: 'Duncan',
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				value: 'Service water pump'
			},
		],
		date_created: 1685627246,
		// TODO: Get data form epoch
		date: '23 August 2023',
		time: '15:03:00',
		duration: 2,
	},
	{
		id: '456',
		type_id: 'COMPLETE',
		author: {
			id: '123',
			firstName: 'T1.',
			lastName: 'Duncan',
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				value: 'Replace heating element'
			},
		],
		date_created: 1685627246,
		// TODO: Get data form epoch
		date: '22 August 2023',
		time: '08:13:00',
		duration: 0.5,
	},
	{
		id: '789',
		type_id: 'COMPLETE',
		author: {
			id: '123',
			firstName: 'T1.',
			lastName: 'Duncan',
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				value: 'Replace drain tubing'
			},
		],
		date_created: 1685627246,
		// TODO: Get data form epoch
		date: '20 August 2023',
		time: '15:23:00',
		duration: 3.5,
	},
	{
		id: '101',
		type_id: 'COMPLETE',
		author: {
			id: '123',
			firstName: 'T1.',
			lastName: 'Duncan',
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				value: 'Need new logic board'
			},
		],
		date_created: 1685627246,
		// TODO: Get data form epoch
		date: '18 August 2023',
		time: '18:15:00',
		duration: 1.5,
	},
	{
		id: '112',
		type_id: 'COMPLETE',
		author: {
			id: '123',
			firstName: 'T1.',
			lastName: 'Duncan',
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				value: 'Replace fuse'
			},
		],
		date_created: 1685627246,
		// TODO: Get data form epoch
		date: '17 August 2023',
		time: '15:36:00',
		duration: 2,
	},
	{
		id: '131',
		type_id: 'COMPLETE',
		author: {
			id: '123',
			firstName: 'T1.',
			lastName: 'Duncan',
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				value: 'Fix auxiliary switch'
			},
		],
		date_created: 1685627246,
		// TODO: Get data form epoch
		date: '15 August 2023',
		time: '17:23:00',
		duration: 2,
	},
];

export default calendarList;


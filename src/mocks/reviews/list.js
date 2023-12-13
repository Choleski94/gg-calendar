'use strict';

const reviewList = [
	{
		score: 5,
		job: {
			id: '534',
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
		source: 'FACEBOOK',
		reviewer: {
			isBlacklist: false,
			position: 'Landlord',
			firstName: 'Jason',
			lastName: 'Richard',
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
		}
	},
];

export default reviewList;


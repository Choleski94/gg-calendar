'use strict';

const projectList = [
	{
		id: '123',
		notes: 'Has broken switch',
		brand: 'Samsung',
		category: 'FRIDGE',
		model: 'SMG123-456 AX/0',
		serial: '62AAXHHVX',
		status: 'COMPLETE',
		jobs: [
			{
				id: '534', 
				techs: [
					{
						id: 123,
						firstName: 'T1. Marek',
						lastName: '',
					}
				],
				lastUpdate: 'Jan 17, 2020, 8:12'
			}
		]
	},
	{
		id: '123',
		brand: 'Maytag',
		category: 'FLDRYER',
		model: 'MT 7263 0293',
		serial: 'a28727330',
		status: 'PROCESSING',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'T1. Mike',
						lastName: '',
					}
				],
				lastUpdate: 'Jan 3, 2020, 10:08'
			},
			{
				id: '443',
				techs: [
					{
						id: 123,
						firstName: 'T4. Lent',
						lastName: '',
					}
				],
				lastUpdate: 'Jan 3, 2020, 10:08'
			},
			{
				id: '87',
				techs: [
					{
						id: 123,
						firstName: 'T4. Billy',
						lastName: '',
					}
				],
				lastUpdate: 'Jan 3, 2020, 10:08'
			},
		]
	},
	{
		id: '123',
		brand: 'Whirlpool',
		category: 'TLWASHER',
		model: 'WP 9965-137 WX',
		serial: '653458123',
		status: 'COMPLETE',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'T4. Billy',
						lastName: '',
					}
				],
				lastUpdate: 'May 20, 2020, 15:23'
			},
			{
				id: '443',
				techs: [
					{
						id: 123,
						firstName: 'T1. Mike',
						lastName: '',
					}
				],
				lastUpdate: 'May 20, 2020, 15:23'
			},
			{
				id: '877',
				techs: [
					{
						id: 123,
						firstName: 'T1. Mike',
						lastName: '',
					}
				],
				lastUpdate: 'May 20, 2020, 15:23'
			},
		]
	},
	{
		id: '123',
		brand: 'Kenmore',
		category: 'FRIDGE',
		model: 'KM F648B3-56A',
		serial: '502581723',
		status: 'COMPLETE',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Apr 16, 2020, 22:11'
			},
			{
				id: '443',
				techs: [
					{
						id: 123,
						firstName: 'F. Loic',
						lastName: '',
					}
				],
				lastUpdate: 'Apr 16, 2020, 22:11'
			},
			{
				id: '877',
				techs: [
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Apr 16, 2020, 22:11'
			},
		]
	},
	{
		id: '123',
		brand: 'KitchenAid',
		category: 'FRIDGE',
		model: 'KA 6253-882-A0',
		serial: '152341316',
		status: 'PENDING',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'T3. Razi',
						lastName: '',
					},
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Aug 17, 2020, 6:48'
			},
			{
				id: '877',
				techs: [
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Aug 17, 2020, 6:48'
			},
		]
	},
	{
		id: '123',
		brand: 'LG',
		category: 'TPDRYER',
		model: 'LG 63232/123',
		serial: '211331333',
		status: 'NA',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'I. Aaron',
						lastName: '',
					}
				],
				lastUpdate: 'Jun 27, 2020, 12:45'
			},
			{
				id: '877',
				techs: [
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Jun 27, 2020, 12:45'
			},
		]
	},
];

export default projectList;


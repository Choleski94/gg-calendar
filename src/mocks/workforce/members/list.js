'use strict';

const workforceList = [
	{
		date_joined: 1692289815,
		color_code: '#c4c4c4',
		is_active: true,
		position: {
			name: 'Office',
		},
		user: {
			id: 123,
			first_name: 'Rafi',
			last_name: 'Trowel',
			emails: [
				{
					is_primary: true,
					contact_type: 'WORK',
					address: 'rafi.trowel@yahoo.ca',
				},
			],
			phones: [
				{
					is_primary: true,
					contact_type: 'MOBILE', 
					phone_number: '5149485500',
				},
			],
			addresses: [
				{
					line_1: '8642 Rue Forest',
					line_2: null,
					country: {
						name: 'Canada'
					},
					state: {
						code: 'QC',
					},
					city: {
						name: 'Longueuil'
					},
					unit_num: null,
					zip_code: 'J4K2P8',
					buzzer_num: null
				}
			],
		},
		jobs: ['534', '434', '877'],
	},
	{
		date_joined: 1692289815,
		color_code: '#f64f64',
		is_active: true,
		position: {
			name: 'Office',
		},
		user: {
			id: 456,
			first_name: 'Gina',
			last_name: 'Alba',
			emails: [
				{
					is_primary: true,
					contact_type: null,
					address: 'gigi@outlook.com',
				},
			],
			phones: [
				{
					is_primary: true,
					contact_type: 'MOBILE', 
					phone_number: '4503429100',
				},
			],
			addresses: [
				{
					line_1: '9876 Rue Riverside',
					line_2: null,
					country: {
						name: 'Canada'
					},
					state: {
						code: 'QC',
					},
					city: {
						name: 'Laval'
					},
					unit_num: 8,
					zip_code: 'H7W 3P6',
					buzzer_num: null
				}
			],
		},
		jobs: ['534', '434', '877'],
	},
	{
		date_joined: 1692289815,
		color_code: '#00c9a7',
		is_active: false,
		position: {
			name: 'Technician T1',
		},
		user: {
			id: 789,
			first_name: 'Eddi Van Der',
			last_name: 'Weedenburg',
			emails: [
				{
					is_primary: true,
					contact_type: null,
					address: 'eddi@icloud.com',
				},
				{
					is_primary: false,
					contact_type: null,
					address: 'eddi@hotmail.ca',
				},
			],
			phones: [
				{
					contact_type: 'MOBILE', 
					is_primary: true,
					phone_number: '4322711321',
				},
			],
			addresses: [
				{
					line_1: '1234 Rue Maple',
					line_2: null,
					country: {
						name: 'Canada'
					},
					state: {
						code: 'QC',
					},
					city: {
						name: 'Montreal'
					},
					unit_num: 12,
					zip_code: 'H1X2Y3',
					buzzer_num: null
				}
			],
		},
		jobs: ['534', '434', '877'],
	},
	{
		date_joined: 1692289815,
		color_code: '#09a5be',
		is_active: true,
		position: {
			name: 'Technician T2',
		},
		user: {
			id: 101,
			first_name: 'Rolando',
			last_name: 'Follacaro',
			emails: [
				{
					is_primary: true,
					contact_type: null, 
					address: 'cr7.lando@videotron.ca',
				},
			],
			phones: [
				{
					is_primary: true,
					contact_type: 'MOBILE', 
					phone_number: '4505432876',
				},
			],
			addresses: [
				{
					line_1: '5678 Avenue Pine',
					line_2: null,
					country: {
						name: 'Canada'
					},
					state: {
						code: 'QC',
					},
					city: {
						name: 'Quebec City'
					},
					unit_num: null,
					zip_code: 'G2J4Z5',
					buzzer_num: null
				}
			],
		},
		jobs: ['534', '434', '877'],
	},
	{
		date_joined: 1692289815,
		color_code: '#ffca61',
		is_active: true,
		position: {
			name: 'Technician T3',
		},
		user: {
			id: 112,
			first_name: 'Peter',
			last_name: 'Mathelin',
			emails: [
				{
					is_primary: true,
					contact_type: null, 
					address: 'peter-mathelin@hotmail.ca',
				},
			],
			phones: [
				{
					is_primary: true,
					contact_type: 'MOBILE', 
					phone_number: '5142711316',
				},
				{
					is_primary: false,
					contact_type: 'HOME', 
					phone_number: '4505471336',
				},
			],
			addresses: [
				{
					line_1: '789 Rue Lakeview',
					line_2: null,
					country: {
						name: 'Canada'
					},
					state: {
						code: 'QC',
					},
					city: {
						name: 'Gatineau'
					},
					unit_num: null,
					zip_code: 'J8T6W9',
					buzzer_num: null
				}
			],
		},
		jobs: [],
	},
	{
		date_joined: 1692289815,
		color_code: '#377dff',
		is_active: true,
		position: {
			name: 'Technician T3',
		},
		user: {
			id: 131,
			first_name: 'Kareem',
			last_name: 'Clemett',
			emails: [
				{
					is_primary: true,
					contact_type: null, 
					address: 'kareem.clemett@yahoo.ca',
				},
			],
			phones: [
				{
					is_primary: true,
					contact_type: 'MOBILE', 
					phone_number: '5149485500',
				},
			],
			addresses: [
				{
					line_1: '555 Rue Valley',
					line_2: null,
					country: {
						name: 'Canada'
					},
					state: {
						code: 'QC',
					},
					city: {
						name: 'Saint-Jean-sur-Richelieu'
					},
					unit_num: null,
					zip_code: 'J3B6K7',
					buzzer_num: null
				}
			],
		},
		jobs: ['534', '877'],
	},
];

export default workforceList;


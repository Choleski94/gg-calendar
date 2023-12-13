'use strict';

const companyGet = [
	{
		id: '123',
		ordId: '534',
		isPrimary: true,
		isBlacklist: false,
		www: 'https://www.flashrepair.com',
		motto: 'Revive, Repair, Recharge: Your Electronic Lifeline',
		name: 'Flash Repair',
		primary_location: {
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
			unit: '3a',
		},
		phones: [
			{
				type: 'OFFICE',
				isPrimary: true,
				extension: '',
				value: '450-948-5500',
			},
		],
		emails: [
			{
				isPrimary: true,
				value: 'support@flashrepair.com',
			},
		],
		languages: [
			{
				isPrimary: false,
				code: 'en',
			},
		],
	},
	{
		id: '123',
		ordId: '534',
		isPrimary: false,
		isBlacklist: false,
		www: 'https://reparationflash.com',
		motto: 'Revivre, Réparer, Recharger : Votre Ligne de Vie Électronique',
		name: 'Réparation Flash',
		primary_location: {
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
			unit: '3a',
		},
		phones: [
			{
				type: 'OFFICE',
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
				value: 'support@reparationflash.com',
			},
		],
		languages: [
			{
				isPrimary: false,
				code: 'fr',
			},
		],
	}
];

export default companyGet;


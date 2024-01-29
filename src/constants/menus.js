'use strict';

export const ACCOUNT = [
	{
		slug: 'nav.account.access-logs.text',
		link: '/account/access-logs',
	},
	{
		slug: 'nav.account.settings.text',
		link: '/account/settings',
	},
];

export const CATEGORY_DEFAULT = [
	{
		id: '',
		path: '/',
		text: 'Nozama miniTV',
	},
	{
		id: '',
		path: '/',
		text: 'Best Sellers',
	},
	{
		id: '',
		path: '/',
		text: 'Mobiles',
	},
	{
		id: '',
		path: '/',
		text: 'Customer Services',
	},
	{
		id: '',
		path: '/',
		text: 'Today\'s Deals'
	},
	{
		id: '',
		path: '/',
		text: 'Electronics',
	},
	{
		id: '',
		path: '/',
		text: 'Prime',
	},
	{
		id: '',
		path: '/',
		text: 'Fashion',
	},
	{
		id: '',
		path: '/',
		text: 'Nozama Pay',
	},
	{
		id: '',
		path: '/',
		text: 'Home & Kitchen',
	},
];

export const CATEGORY_PRIME = [
	{
		id: '',
		path: '/',
		text: 'Digital',
		subMenu: [
			{
				id: '',
				path: '/',
				text: 'Electronic Products',
			},
			{
				id: '',
				path: '/',
				text: 'Phone',
			},
			{
				id: '',
				path: '/',
				text: 'Computer',
			},
			{
				id: '',
				path: '/',
				text: 'Watch',
			},
			{
				id: '',
				path: '/',
				text: 'Hacking',
			},
		],
	},
	{
		id: '',
		path: '/',
		text: 'Pills',
		subMenu: [
			{
				id: '',
				path: '/',
				text: 'Adderall',
			},
			{
				id: '',
				path: '/',
				text: 'Ritalin',
			},
			{
				id: '',
				path: '/',
				text: 'Xanax',
			},
			{
				id: '',
				path: '/',
				text: 'Oxycodone',
			},
			{
				id: '',
				path: '/',
				text: 'Tramadol',
			},
			{
				id: '',
				path: '/',
				text: 'Suboxone',
			},
			{
				id: '',
				path: '/',
				text: 'Morphine',
			},
			{
				id: '',
				path: '/',
				text: 'Methadone',
			},
			{
				id: '',
				path: '/',
				text: 'Diazepam',
			},
			{
				id: '',
				path: '/',
				text: 'Valium',
			},
			{
				id: '',
				path: '/',
				text: 'Alprazolam',
			},
			{
				id: '',
				path: '/',
				text: 'Captagon',
			},
			{
				id: '',
				path: '/',
				text: 'Targin',
			},
			{
				id: '',
				path: '/',
				text: 'Hydrocodone',
			},
			{
				id: '',
				path: '/',
				text: 'Yaba',
			},
			{
				id: '',
				path: '/',
				text: 'Lyrica',
			},
			{
				id: '',
				path: '/',
				text: 'Testosteron Enanthate',
			},
		],
	},
	{
		id: '',
		path: '/',
		text: 'Stimulants',
		subMenu: [
			{
				id: '',
				path: '/',
				text: 'Cocaine',
			},
			{
				id: '',
				path: '/',
				text: 'MDMA',
			},
			{
				id: '',
				path: '/',
				text: 'Ecstasy/XTC',
			},
			{
				id: '',
				path: '/',
				text: 'Crystal Meth',
			},
			{
				id: '',
				path: '/',
				text: 'Fentanyl',
			},
			{
				id: '',
				path: '/',
				text: 'Ketamine',
			},
			{
				id: '',
				path: '/',
				text: 'GHB',
			},
			{
				id: '',
				path: '/',
				text: 'Potassium Cyanide',
			},
		],
	},
	{
		id: '',
		path: '/',
		text: 'Psychedelics',
		subMenu: [
			{
				id: '',
				path: '/',
				text: 'LSD',
			},
			{
				id: '',
				path: '/',
				text: 'DMT',
			},
		],
	},
	{
		id: '',
		path: '/',
		text: 'Cannabis',
		subMenu: [
			{
				id: '',
				path: '/',
				text: 'Weed',
			},
			{
				id: '',
				path: '/',
				text: 'Hash',
			},
			{
				id: '',
				path: '/',
				text: 'Kush',
			},
			{
				id: '',
				path: '/',
				text: 'Vape',
			},
			{
				id: '',
				path: '/',
				text: 'Capsules',
			},
		],
	},
	{
		id: '',
		path: '/',
		text: 'Money Transfers',
		subMenu: [
			{
				id: '',
				path: '/',
				text: 'Western Union Transfer',
			},
			{
				id: '',
				path: '/',
				text: 'Paypal Transfer',
			},
			{
				id: '',
				path: '/',
				text: 'Moneygram Transfer',
			},
		],
	},
	{
		id: '',
		path: '/',
		text: 'Credit Cards',
		subMenu: [
			{
				id: '',
				path: '/',
				text: 'CC/CVV',
			},
			{
				id: '',
				path: '/',
				text: 'Virtual Bank Card',
			},
		],
	},
	{
		id: '',
		path: '/',
		text: 'Weapons/Guns',
		subMenu: [
			{
				id: '',
				path: '/',
				text: 'Pistols',
			},
			{
				id: '',
				path: '/',
				text: 'Rifles',
			},
			{
				id: '',
				path: '/',
				text: 'Ammo/Bullets',
			},
		],
	},
	{
		id: '',
		path: '/',
		text: 'Other',
		subMenu: [
			{
				id: '',
				path: '/',
				text: 'ID Card / Passports',
			},
			{
				id: '',
				path: '/',
				text: 'Gift Cards',
			},
		],
	},
];

export const MENUS = {
	ACCOUNT,
	CATEGORY: {
		PRIME: CATEGORY_PRIME,
		DEFAULT: CATEGORY_DEFAULT,
	},
};

export default MENUS;

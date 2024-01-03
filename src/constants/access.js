'use strict';

export const ENTITY_ROLE = 'roles';

export const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'description', label: 'Description' },
	{ key: 'enabled', label: 'Status' },
	{ key: 'createdAt', label: 'Date created' },
	{ key: 'actions', label: 'Actions' },
];

export const DEFAULT_TABLE_ACTIVE_HEADER = [
	'name',
	'description',
	'enabled',
	'actions'
];

export const DEFAULT_PERMISSION_TABLE_HEADER = [
	{ key: 'section', label: 'Section' },
	{ key: 'description', label: 'Description' },
	{ key: 'create', label: 'Create' },
	{ key: 'view', label: 'View' },
	{ key: 'update', label: 'Update' },
	{ key: 'remove', label: 'Delete' },
];

export const SUPPORTED_STATUSES = {
	ACTIVE: 'ACTIVE',
	INACTIVE: 'INACTIVE',
};

export const BREADCRUMB_ACCESS_OPTIONS = [
	{
		path: '/system',
		value: 'System'
	},
	{
		path: '/system/access',
		value: 'Access'
	},
];

export const SUPPORTED_SERVICES_SECTIONS = {
	CRM: 'CRM',
	SYSTEM: 'SYSTEM',
	INVENTORY: 'INVENTORY',
	MARKETING: 'MARKETING',
	ACCOUNTING: 'ACCOUNTING',
	OPERATIONS: 'OPERATIONS',
	ADMINISTRATION: 'ADMINISTRATION',
};

export const ADMINISTRATION_NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SERVICES_SECTIONS.ADMINISTRATION,
		value: 'Administration',
	},
	{
		key: SUPPORTED_SERVICES_SECTIONS.CRM,
		value: 'CRM',
	},
	{
		key: SUPPORTED_SERVICES_SECTIONS.OPERATIONS,
		value: 'Operations',
	},
	{
		key: SUPPORTED_SERVICES_SECTIONS.INVENTORY,
		value: 'Inventory'
	},
	{
		key: SUPPORTED_SERVICES_SECTIONS.ACCOUNTING,
		value: 'Accounting',
	},
	{
		key: SUPPORTED_SERVICES_SECTIONS.MARKETING,
		value: 'Marketing',
	},
	{
		key: SUPPORTED_SERVICES_SECTIONS.SYSTEM,
		value: 'System',
	},
];

export const SUPPORTED_SERVICES_ROWS = {
	[SUPPORTED_SERVICES_SECTIONS.CRM]: [
		{
			section: 'Administration > Customers',
			description: 'N/A',
		},
	],
	[SUPPORTED_SERVICES_SECTIONS.SYSTEM]: [
		{
			slug: 'SYS_ACCESS',
			section: 'System > Access',
			description: 'N/A',
		},
		{
			slug: 'SYS_TEMPLATE',
			section: 'System > Templates',
			description: 'N/A',
		},
		{
			slug: 'SYS_PAYMENT',
			section: 'System > Payments',
			description: 'N/A',
		},
		{
			slug: 'SYS_CONFIG',
			section: 'System > Configuration',
			description: 'N/A',
		},
	],
	[SUPPORTED_SERVICES_SECTIONS.INVENTORY]: [
		{
			slug: 'INV_FLEET',
			section: 'Inventory > Fleet',
			description: 'N/A',
		},
		{
			slug: 'INV_VENDOR',
			section: 'Inventory > Vendors',
			description: 'N/A',
		},
		{
			slug: 'INV_PRODUCT',
			section: 'Inventory > Products',
			description: 'N/A',
		},
		{
			slug: 'INV_TOOL',
			section: 'Inventory > Tools',
			description: 'N/A',
		},
		{
			slug: 'INV_SERVICE',
			section: 'Inventory > Services',
			description: 'N/A',
		},
	],
	[SUPPORTED_SERVICES_SECTIONS.MARKETING]: [
		{
			slug: 'MKTG_REVIEW',
			section: 'Marketing > Reviews',
			description: 'N/A',
		},
	],
	[SUPPORTED_SERVICES_SECTIONS.ACCOUNTING]: [
		{
			slug: 'ACCTG_INVOICE',
			section: 'Accounting > Invoices',
			description: 'N/A',
		},
		{
			slug: 'ACCTG_ESTIMATE',
			section: 'Accounting > Estimates',
			description: 'N/A',
		},
	],
	[SUPPORTED_SERVICES_SECTIONS.OPERATIONS]: [
		{
			slug: 'OP_JOB',
			section: 'Operations > Jobs',
			description: 'N/A',
		},
		{
			slug: 'OP_DISPATCH',
			section: 'Operations > Dispatch',
			description: 'N/A',
		},
		{
			slug: 'OP_CALENDAR',
			section: 'Operations > Calendar',
			description: 'N/A',
		},
		{
			slug: 'OP_ORDER',
			section: 'Operations > Orders',
			description: 'N/A',
		},
	],
	[SUPPORTED_SERVICES_SECTIONS.ADMINISTRATION]: [
		{
			slug: 'ADMIN_WORKFORCE',
			section: 'Administration > Workforce',
			description: 'N/A',
		},
	],
};

export default {
	ENTITY_ROLE,
	SUPPORTED_STATUSES,
	DEFAULT_TABLE_HEADER,
	SUPPORTED_SERVICES_ROWS,
	BREADCRUMB_ACCESS_OPTIONS,
	SUPPORTED_SERVICES_SECTIONS,
	DEFAULT_TABLE_ACTIVE_HEADER,
	ADMINISTRATION_NAV_TAB_OPTIONS,
	DEFAULT_PERMISSION_TABLE_HEADER,
};


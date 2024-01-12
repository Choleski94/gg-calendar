'use strict';

export const ENTITY_TEMPLATE = 'templates';

// TODO: Deprecate & replace with localization.
export const DEFAULT_CATEGORIES = {
	TRANSACTIONAL: 'Transactional',
	MARKETING: 'Marketing',
	BILLING: 'Billing',
	REVIEW: 'Review',
};

export const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'description', label: 'Description' },
	{ key: 'languages', label: 'Language(s)' },
	{ key: 'category', label: 'Category' },
	{ key: 'type', label: 'Type' },
	{ key: 'enabled', label: 'Status' },
	{ key: 'actions', label: 'Actions' },
];

export const DEFAULT_TABLE_ACTIVE_HEADER = [
	'name',
	'description',
	'enabled',
	'actions'
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
		path: '/system/templates',
		value: 'Templates'
	},
];

export default {
	ENTITY_TEMPLATE,
	SUPPORTED_STATUSES,
	DEFAULT_CATEGORIES,
	DEFAULT_TABLE_HEADER,
	BREADCRUMB_ACCESS_OPTIONS,
	DEFAULT_TABLE_ACTIVE_HEADER,
};


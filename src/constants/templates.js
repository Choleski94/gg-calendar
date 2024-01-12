'use strict';

export const ENTITY_TEMPLATE = 'templates';

export const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'description', label: 'Description' },
	{ key: 'languages', label: 'Language(s)' },
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
	DEFAULT_TABLE_HEADER,
	BREADCRUMB_ACCESS_OPTIONS,
	DEFAULT_TABLE_ACTIVE_HEADER,
};


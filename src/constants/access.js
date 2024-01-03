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

export const SUPPORTED_STATUSES = {
	ACTIVE: 'ACTIVE',
	INACTIVE: 'INACTIVE',
};

export default {
	ENTITY_ROLE,
	SUPPORTED_STATUSES,
	DEFAULT_TABLE_HEADER,
	DEFAULT_TABLE_ACTIVE_HEADER,
};


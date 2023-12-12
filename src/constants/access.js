'use strict';

export const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'description', label: 'Description' },
	{ key: 'status', label: 'Status' },
	{ key: 'qtyPermission', label: 'Total Permissions' },
	{ key: 'qtyMember', label: 'Total Members' },
	{ key: 'author', label: 'Author' },
	{ key: 'createdAt', label: 'Date created' },
	{ key: 'actions', label: 'Actions' },
];

export const DEFAULT_TABLE_ACTIVE_HEADER = [
	'name',
	'description',
	'status',
	'actions'
];

export const SUPPORTED_STATUSES = {
	ACTIVE: 'ACTIVE',
	INACTIVE: 'INACTIVE',
};

export default {
	SUPPORTED_STATUSES,
	DEFAULT_TABLE_HEADER,
	DEFAULT_TABLE_ACTIVE_HEADER,
};


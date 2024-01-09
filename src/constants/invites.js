'use strict';

export const ENTITY_INVITE = 'invites';

export const DEFAULT_TABLE_HEADER = [
	{ key: 'created', label: 'Date Created' },
	{ key: 'email', label: 'Email' },
	{ key: 'role', label: 'Role' },
	{ key: 'code', label: 'Code' },
	{ key: 'action', label: '' },
];

export const DEFAULT_ACTIVE_HEADER_KEYS = [
	'email', 'role', 'code', 
	'created', 'action',
];

export default {
	ENTITY_INVITE,
	DEFAULT_TABLE_HEADER,
	DEFAULT_ACTIVE_HEADER_KEYS,
}

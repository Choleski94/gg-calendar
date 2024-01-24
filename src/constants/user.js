'use strict';

export const ENTITY_USER = 'user';

export const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'phone', label: 'Phone' },
	{ key: 'email', label: 'Email' },
	{ key: 'address', label: 'Address' },
	{ key: 'unit', label: 'Unit' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
	{ key: 'created', label: 'Date Joined' },
];

export const DEFAULT_ACTIVE_HEADER_KEYS = [
	'name', 'phone', 'email', 'created'
];

export default {
	ENTITY_USER,
	DEFAULT_TABLE_HEADER,
	DEFAULT_ACTIVE_HEADER_KEYS,
}

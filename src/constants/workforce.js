'use strict';

export const ENTITY_WORKFORCE = 'employee';

export const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'phones', label: 'Phone' },
	{ key: 'emails', label: 'Email' },
	{ key: 'address', label: 'Address' },
	{ key: 'unit', label: 'Unit' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
	{ key: 'created', label: 'Date Joined' },
];

export const DEFAULT_ACTIVE_HEADER_KEYS = [
	'name', 'phones', 'emails',
	'address', 'unit', 'city', 
	'zip', 'created'
];

export default {
	ENTITY_WORKFORCE,
	DEFAULT_TABLE_HEADER,
	DEFAULT_ACTIVE_HEADER_KEYS,
}

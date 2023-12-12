'use strict';

export const ENTITY_CUSTOMER = 'client';

export const SUPPORTED_CUSTOMER_STATUSES = {
	VIP: 'VIP',
	ACTIVE: 'ACTIVE',
	CLOSED: 'CLOSED',
	PROSPECT: 'PROSPECT',
	SUSPENDED: 'SUSPENDED',
	BLACKLISTED: 'BLACKLISTED',
};

export const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'phones', label: 'Phone' },
	{ key: 'emails', label: 'Email' },
	{ key: 'address', label: 'Address' },
	{ key: 'unit', label: 'Unit' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
];

export default {
	ENTITY_CUSTOMER,
	DEFAULT_TABLE_HEADER,
	SUPPORTED_CUSTOMER_STATUSES,
}

'use strict';

export const DEFAULT_ROLES_TABLE_HEADER = [
	{ key: 'name', label: 'Team' },
	{ key: 'description', label: 'Description' },
	{ key: 'statusBadge', label: 'Status' },
	// { key: 'qtyPermission', label: 'Total Permissions' },
	// { key: 'qtyMembers', label: 'Total Members' },
	{ key: 'actions', label: 'Actions' },
];

export const SUPPORTED_ROLES_STATUSES = {
	ACTIVE: 'ACTIVE',
	INACTIVE: 'INACTIVE',
};

export const SUPPORTED_TEAMS_STATUSES = {
	ACTIVE: 'ACTIVE',
	INACTIVE: 'INACTIVE',
};

export const SUPPORTED_TEAMS_INDUSTRIES = {
	SALES: 'SALES',
	FINANCE: 'FINANCE',
	INSTALLER: 'INSTALLER',
	MARKETING: 'MARKETING',
	DEVELOPMENT: 'DEVELOPMENT',
	CUSTOMER_SERVICE: 'CUSTOMER_SERVICE',
};

export const DEFAULT_TEAMS_TABLE_HEADER = [
	{ key: 'name', label: 'Team' },
	{ key: 'description', label: 'Description' },
	{ key: 'statusBadge', label: 'Status' },
	{ key: 'members', label: 'Total Members' },
];

export const DEFAULT_POSITION_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'description', label: 'Description' },
];

//

export const SUPPORTED_WORKFORCE_STATUSES = {
	VIP: 'VIP',
	ACTIVE: 'ACTIVE',
	CLOSED: 'CLOSED',
	PROSPECT: 'PROSPECT',
	SUSPENDED: 'SUSPENDED',
	BLACKLISTED: 'BLACKLISTED',
};

export const DEFAULT_WORKFORCE_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'phone', label: 'Phone' },
	{ key: 'email', label: 'Email' },
	{ key: 'address', label: 'Address' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
	{ key: 'dateJoined', label: 'Date Joined' },
];

export default {
	SUPPORTED_TEAMS_STATUSES,
	SUPPORTED_TEAMS_INDUSTRIES,
	DEFAULT_TEAMS_TABLE_HEADER,
	// 
	SUPPORTED_WORKFORCE_STATUSES,
	DEFAULT_POSITION_TABLE_HEADER,
	DEFAULT_WORKFORCE_TABLE_HEADER,
	//
	SUPPORTED_ROLES_STATUSES,
	DEFAULT_ROLES_TABLE_HEADER,
}


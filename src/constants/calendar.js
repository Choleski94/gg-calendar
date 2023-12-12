'use strict'

export const SUPPORTED_STATUSES = {
	NA: 'NA',
	PENDING: 'PENDING',
	INSTALLED: 'INSTALLED',
	PROCESSING: 'PROCESSING',
};

export const DEFAULT_TABLE_HEADER = [
	{ key: 'date', label: 'Date' },
	{ key: 'time', label: 'Time' },
	{ key: 'duration', label: 'Duration' },
	{ key: 'techs', label: 'Techs' },
	{ key: 'status', label: 'Status' },
	{ key: 'notes', label: 'Notes' },
];

export const SUPPORTED_CATEGORIES = {
	COMPLETE: 'Complete',
};

export default {
	SUPPORTED_STATUSES,
	SUPPORTED_CATEGORIES,
	DEFAULT_TABLE_HEADER,
}

'use strict';

export const SUPPORTED_STATUSES = {
	NA: 'NA',
	PENDING: 'PENDING',
	COMPLETE: 'COMPLETE',
	PROCESSING: 'PROCESSING',
};

export const DEFAULT_TABLE_HEADER = [
	{ key: 'lastUpdate', label: 'Last Service' },
	{ key: 'brand', label: 'Brand' },
	{ key: 'equipment', label: 'Equipment' },
	{ key: 'model', label: 'Model' },
	{ key: 'serial', label: 'Serial #' },
	{ key: 'status', label: 'Status' },
	{ key: 'techs', label: 'Tech(s)' },
	{ key: 'notes', label: 'Notes' },
];

export const SUPPORTED_CATEGORIES = {
	GAS: 'Gas',
	FRIDGE: 'Fridge',
	TLWASHER: 'Top load washer',
	FLWASHER: 'Front load washer',
	FLDRYER: 'Top load dryer',
	TPDRYER: 'Front load dryer',
};

export default {
	SUPPORTED_STATUSES,
	SUPPORTED_CATEGORIES,
	DEFAULT_TABLE_HEADER,
}

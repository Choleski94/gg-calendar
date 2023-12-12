'use strict';

export const SUPPORTED_STATUSES = {
	NA: 'NA',
	PENDING: 'PENDING',
	INSTALLED: 'INSTALLED',
	PROCESSING: 'PROCESSING',
};

export const DEFAULT_TABLE_HEADER = [
	{ key: 'lastUpdate', label: 'Order Date' },
	{ key: 'jobId', label: 'Job #' },
	{ key: 'name', label: 'Name' },
	{ key: 'serial', label: 'Product #' },
	{ key: 'suggestedSerial', label: 'Sugegsted Part #' },
	{ key: 'tags', label: 'Tags' },
	{ key: 'type', label: 'Type' },
	{ key: 'inStock', label: 'In Stock' },
	{ key: 'qty', label: 'Qty' },
	{ key: 'unitPrice', label: 'Price' },
	{ key: 'orderId', label: 'PO #' },
	{ key: 'supplier', label: 'Supplier' },
	{ key: 'fulfilledETA', label: 'ETA' },
	{ key: 'status', label: 'Status' },
	{ key: 'techs', label: 'Agent' },
	{ key: 'fulfilledLocation', label: 'Location' },
	{ key: 'timeLeft', label: 'Time left' },
	{ key: 'fulfilledDate', label: 'Date Fulfilled' },
	{ key: 'receivedDate', label: 'Date Received' },
	{ key: 'notes', label: 'Notes' },
];

export const SUPPORTED_CATEGORIES = {
	SERVICE: 'Service',
	POWER_TOOL: 'Power Tool',
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

'use strict';

export const ENTITY_ESTIMATE = 'quote';

export const SUPPORTED_TERMS = {
	COD: 'COD',
	CASH: 'CASH',
	NET30: 'NET30',
	NET60: 'NET60',
	WARRANTY: 'WARRANTY',
	SUBSCRIPTION: 'SUBSCRIPTION',
};

export const SUPPORTED_STATUSES = {
	DUE: 'DUE',
	PAID: 'PAID',
	FREE: 'FREE',
	PENDING: 'PENDING',
	PROCESSING: 'PROCESSING',
};

export const SUPPORTED_METHODS = {
	CASH: 'CASH',
	DEBIT: 'DEBIT',
	CHEQUE: 'CHEQUE',
	UNKNOW: 'UNKNOW',
	CREDIT: 'CREDIT',
	ETRANSFER: 'ETRANSFER',
};

export const DEFAULT_TABLE_HEADER = [
	{ key: 'number', label: 'Id' },
	{ key: 'client', label: 'Client' },
	{ key: 'total', label: 'Total' },
	{ key: 'balance', label: 'balance' },
	{ key: 'status', label: 'Status' },
	{ key: 'payment_status', label: 'Payment' },
	{ key: 'date', label: 'Create date' },
	{ key: 'expiredDate', label: 'Due date' },
];

export default {
	ENTITY_ESTIMATE,
	SUPPORTED_TERMS,
	SUPPORTED_METHODS,
	SUPPORTED_STATUSES,
	DEFAULT_TABLE_HEADER,
}

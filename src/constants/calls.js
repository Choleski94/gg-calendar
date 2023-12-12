'use strict';

export const CALL_NAV_TABS = {
	LOG: 'LOG',
	NOT_CALLED: 'NOT_CALLED',
	STATISTICS: 'STATISTICS',
};

export const SUPPORTED_PHONE_TYPES = {
	HOME: 'HOME',
	MOBILE: 'MOBILE',
	OFFICE: 'OFFICE',
};

export const CALL_TABLE_HEADER_KEYS = {
	TIME: 'time',
	PHONE: 'phone',
	NOTES: 'notes',
	CALLED: 'called',
	REASON: 'reason',
	STATUS: 'status',
	OUTCOME: 'outcome',
	DURATION: 'duration',
	ROUTED: 'routed_to',
	SALES_LEAD: 'sales_lead',
	DIRECTION: 'callDirection',
};

export const CALL_DIRECTION_IN = 'in';

export const CALL_DIRECTION_OUT = 'out';

export const CALL_STATUS_NO_ANSWER = 'no-answer';

export const CALL_MISSING_REASON = 'Missing reason';

export const CALL_MISSING_OUTCOME = 'Missing outcome';

export const CALL_DIRECTION_OPTIONS = [
	{ value: CALL_DIRECTION_IN, label: CALL_DIRECTION_IN },
	{ value: CALL_DIRECTION_OUT, label: CALL_DIRECTION_OUT },
];

export const CALL_SALES_LEAD_OPTIONS = [
	{ value: 'Yes', label: 'Yes' },
	{ value: 'No', label: 'No' },
];

export const CALL_STATUS_OPTIONS = [
	{ value: 'completed', label: 'Completed' },
	{ value: 'no-answer', label: 'No Answer' },
	{ value: 'failed', label: 'Failed' },
];

export default {
	CALL_NAV_TABS,
	CALL_DIRECTION_IN,
	CALL_DIRECTION_OUT,
	CALL_MISSING_REASON,
	CALL_STATUS_OPTIONS,
	CALL_MISSING_OUTCOME,
	CALL_STATUS_NO_ANSWER,
	SUPPORTED_PHONE_TYPES,
	CALL_DIRECTION_OPTIONS,
	CALL_TABLE_HEADER_KEYS,
	CALL_SALES_LEAD_OPTIONS,
}

import React from 'react';

import formatMessage from '@utils/formatMessage';
import { CALL_NAV_TABS, CALL_TABLE_HEADER_KEYS } from '@constants/calls';

const useLocalizeContent = () => {

	const callTableHeader = [
		{
			key: CALL_TABLE_HEADER_KEYS.DIRECTION, 
			label: formatMessage('page.calls.table.header.direction.text'),
		},
		{
			key: CALL_TABLE_HEADER_KEYS.PHONE, 
			label: formatMessage('page.calls.table.header.phone.text'),
		},
		{
			key: CALL_TABLE_HEADER_KEYS.TIME,
			label: formatMessage('page.calls.table.header.time.text'),
		},
		{
			key: CALL_TABLE_HEADER_KEYS.CALLED,
			label: formatMessage('page.calls.table.header.called.text'),
		},
		{
			key: CALL_TABLE_HEADER_KEYS.ROUTED, 
			label: formatMessage('page.calls.table.header.routed.text'),
		},
		{
			key: CALL_TABLE_HEADER_KEYS.DURATION, 
			label: formatMessage('page.calls.table.header.duration.text'),
		},
		{
			key: CALL_TABLE_HEADER_KEYS.REASON,
			label: formatMessage('page.calls.table.header.reason.text'),
		},
		{
			key: CALL_TABLE_HEADER_KEYS.OUTCOME, 
			label: formatMessage('page.calls.table.header.outcome.text'),
		},
		{
			key: CALL_TABLE_HEADER_KEYS.SALES_LEAD, 
			label: formatMessage('page.calls.table.header.sales-lead.text'),
		},
		{
			key: CALL_TABLE_HEADER_KEYS.STATUS, 
			label: formatMessage('page.calls.table.header.status.text'),
		},
	];

	return {
		header: formatMessage('page.calls.header.text'),
		metrics: {
			qtyCalls: formatMessage('page.calls.metrics.total-call.text'),
			qtyUniqueCalls: formatMessage('page.calls.metrics.total-unique-call.text'),
			qtyCustomerCalls: formatMessage('page.calls.metrics.total-customer-call.text'),

			inboundCustomerCalls: formatMessage('page.calls.metrics.inbound-customer-call.text'),
			inboundTechnicianCalls: formatMessage('page.calls.metrics.inbound-technician-call.text'),

			outboundCustomerCalls: formatMessage('page.calls.metrics.outbound-customer-call.text'),
			outboundTechnicianCalls: formatMessage('page.calls.metrics.outbound-technician-call.text'),

			noAnswerTotalCalls: formatMessage('page.calls.metrics.no-answer-total-call.text'),
			noAnswerPercentCalls: formatMessage('page.calls.metrics.no-answer-percent-call.text'),
			noAnswerCustomerCalls: formatMessage('page.calls.metrics.no-answer-customer-call.text'),
			noAnswerTechnicianCalls: formatMessage('page.calls.metrics.no-answer-technician-call.text'),
		},
		tooltips: {
			qtyCalls: formatMessage('page.calls.tooltips.total-call.text'),
			qtyUniqueCalls: formatMessage('page.calls.tooltips.total-unique-call.text'),
			qtyCustomerCalls: formatMessage('page.calls.tooltips.total-customer-call.text'),

			inboundCustomerCalls: formatMessage('page.calls.tooltips.inbound-customer-call.text'),
			inboundTechnicianCalls: formatMessage('page.calls.tooltips.inbound-technician-call.text'),

			outboundCustomerCalls: formatMessage('page.calls.tooltips.outbound-customer-call.text'),
			outboundTechnicianCalls: formatMessage('page.calls.tooltips.outbound-technician-call.text'),

			noAnswerTotalCalls: formatMessage('page.calls.tooltips.no-answer-total-call.text'),
			noAnswerPercentCalls: formatMessage('page.calls.tooltips.no-answer-percent-call.text'),
			noAnswerCustomerCalls: formatMessage('page.calls.tooltips.no-answer-customer-call.text'),
			noAnswerTechnicianCalls: formatMessage('page.calls.tooltips.no-answer-technician-call.text'),
		},
		navOptions: [
			{
				key: CALL_NAV_TABS.LOG,
				value: formatMessage('page.calls.nav-tab-log.text'),
			},
			{
				key: CALL_NAV_TABS.NOT_CALLED,
				value: formatMessage('page.calls.nav-tab-not-called.text'),
			},
			// ! TODO: Need to be enable if desired.
			// {
			// 	key: CALL_NAV_TABS.STATISTICS,
			// 	value: formatMessage('page.calls.nav-tab-statistics.text'),
			// },
		],
		table: {
			all: callTableHeader,
			noAnswer: [
				...callTableHeader,
				{
					key: CALL_TABLE_HEADER_KEYS.NOTES, 
					label: formatMessage('page.calls.table.header.notes.text'),
				},
			],
			search: formatMessage('page.calls.table.search.text'),
		},
	}
};

export default useLocalizeContent;

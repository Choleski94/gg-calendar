import React from 'react';

import {
	CALL_TECH_TITLE,
	CALL_DIRECTION_IN,
	CALL_DIRECTION_OUT,
	CALL_STATUS_NO_ANSWER,
} from '@constants';

const useCallMetrics = (callData = []) => {
	const totalCallCount = React.useMemo(() => (
		callData.length
	), [ callData ]);

	const totalUniqueCallCount = React.useMemo(() => ([
		...new Set(
			callData.filter(({ status, direction, phoneTitle1, phoneTitle2 }) => (
				direction !== CALL_DIRECTION_OUT && 
				!phoneTitle1.includes(CALL_TECH_TITLE) && 
				!phoneTitle2.includes(CALL_TECH_TITLE)
			)).map(({ phone }) => phone)
		)
	].length), [ callData ]);

	const inboundCallCount = React.useMemo(() => (
		callData.filter(({ status, direction, phoneTitle1, phoneTitle2 }) => (
			direction === CALL_DIRECTION_IN && 
			status !== CALL_STATUS_NO_ANSWER &&
			!phoneTitle1.includes(CALL_TECH_TITLE) && 
			!phoneTitle2.includes(CALL_TECH_TITLE)
		)).length
	), [ callData ]);

	const outboundCallCount = React.useMemo(() => (
		callData.filter(({ direction, calledTitle1, calledTitle2 }) => (
			direction === CALL_DIRECTION_OUT && 
			!calledTitle1.includes(CALL_TECH_TITLE) && 
			!calledTitle2.includes(CALL_TECH_TITLE)
		)).length
	), [ callData ]);

	const noAnswerCallCount = React.useMemo(() => (
		callData.filter(({ status, phoneTitle1, phoneTitle2 }) => (
			status === CALL_STATUS_NO_ANSWER
		)).length
	), [ callData ]);

	const techInboundCallCount = React.useMemo(() => (
		callData.filter(({ direction, phoneTitle1, phoneTitle2 }) => {
			return direction === CALL_DIRECTION_IN && (
				phoneTitle1.includes(CALL_TECH_TITLE) || phoneTitle2.includes(CALL_TECH_TITLE)
			)
		}).length
	), [ callData ]);

	const techOutboundCallCount = React.useMemo(() => (
		callData.filter(({ direction, calledTitle1, calledTitle2 }) => {
			return direction === CALL_DIRECTION_OUT && (
				calledTitle1.includes(CALL_TECH_TITLE) || calledTitle2.includes(CALL_TECH_TITLE)
			)
		}).length
	), [ callData ]);

	const techNoAnswerCallCount = React.useMemo(() => (
		callData.filter(({ status, phoneTitle1, phoneTitle2 }) => {
			return status === CALL_STATUS_NO_ANSWER && (
				phoneTitle1.includes(CALL_TECH_TITLE) || phoneTitle2.includes(CALL_TECH_TITLE)
			)
		}).length
	), [ callData ]);

	const cxNoAnswerCallCount = React.useMemo(() => (
		callData.filter(({ status, phoneTitle1, phoneTitle2 }) => (
			status === CALL_STATUS_NO_ANSWER &&
			!phoneTitle1.includes(CALL_TECH_TITLE) && 
			!phoneTitle2.includes(CALL_TECH_TITLE)
		)).length
	), [ callData ]);

	const cxTotalCallCount = React.useMemo(() => (
		inboundCallCount + outboundCallCount
	), [ inboundCallCount, outboundCallCount ]);

	const cxPercentNoAnswerCall = React.useMemo(() => {
		const val = Number(
			(cxNoAnswerCallCount * 100) / cxTotalCallCount
		).toFixed(2);

		return isNaN(val) ? 0 : val;
	}, [ cxNoAnswerCallCount, cxTotalCallCount ]);

	return {
		totalCallCount,
		cxTotalCallCount,
		inboundCallCount,
		outboundCallCount,
		noAnswerCallCount,
		cxNoAnswerCallCount,
		totalUniqueCallCount,
		techInboundCallCount,
		cxPercentNoAnswerCall,
		techOutboundCallCount,
		techNoAnswerCallCount,
	};
};

export default useCallMetrics;

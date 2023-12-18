import React from 'react';

const useCallFilters = ({
	callData,
	/* Filters */
	filterUsers,
	filterReasons,
	filterStatuses,
	filterOutcomes,
	filterSalesLead,
 }) => {
	let res = [];

	const filteredByUserElts = React.useMemo(() => {
		if (!filterUsers?.length) return callData;

		return callData.filter(({ routedToUser, phoneTitle1, phoneTitle2, calledTitle1, calledTitle2 }) => 
			filterUsers.includes(routedToUser) || 
			filterUsers.includes(phoneTitle1) || 
			filterUsers.includes(phoneTitle2) ||
			filterUsers.includes(calledTitle1) ||
			filterUsers.includes(calledTitle2)
		);
	}, [ callData, filterUsers ]);

	const filteredByReasonElts = React.useMemo(() => {
		if (!filterReasons?.length) return filteredByUserElts;

		return filteredByUserElts.filter(({ reason }) => 
			filterReasons.includes(reason)
		);
	}, [ filteredByUserElts, filterReasons ]);

	const filteredByOutcomeElts = React.useMemo(() => {
		if (!filterOutcomes?.length) return filteredByReasonElts;

		return filteredByReasonElts.filter(({ outcome }) => 
			filterOutcomes.includes(outcome)
		);
	}, [ filteredByReasonElts, filterOutcomes ]);

	const filteredBySalesLeadElts = React.useMemo(() => {
		if (!filterSalesLead?.length) return filteredByOutcomeElts;

		return filteredByOutcomeElts.filter(({ sales_lead }) => 
			filterSalesLead.includes(sales_lead)
		);
	}, [ filteredByOutcomeElts, filterSalesLead ]);

	const filteredByStatusElts = React.useMemo(() => {
		if (!filterStatuses?.length) return filteredBySalesLeadElts;

		return filteredBySalesLeadElts.filter(({ status }) => 
			filterStatuses.includes(status)
		);
	}, [ filteredBySalesLeadElts, filterStatuses ]);

	return filteredByStatusElts;
};

export default useCallFilters;

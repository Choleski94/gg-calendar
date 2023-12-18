import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';
import BillingModule from '@modules/BillingModule';

import EstimateControl from './EstimateControl';

const EstimatesScreen = () => {
	const navigate = useNavigate();

	const { id = '' } = useParams();

	const setEstimateId = (id = '') => (
		navigate(`/accounting/estimates/${id}`)
	);

	const invoiceId = React.useMemo(() => (
		(id || '').toLowerCase()
	), [ id ]);

	return (
		invoiceId && invoiceId.length ? (
			<BillingModule
				type="ESTIMATE"
				id={invoiceId} 
			/>
		) : (
			<EstimateControl
				setEstimateId={setEstimateId}
			/>
		)
	);
};

export default withPrivateRouter(EstimatesScreen);

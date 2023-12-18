import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';
import BillingModule from '@modules/BillingModule';

import InvoiceControl from './InvoiceControl';

const InvoicesScreen = () => {
	const navigate = useNavigate();

	const { id = '' } = useParams();

	const setInvoiceId = (id = '') => (
		navigate(`/accounting/invoices/${id}`)
	);

	const invoiceId = React.useMemo(() => (
		(id || '').toLowerCase()
	), [ id ]);

	return (
		invoiceId && invoiceId.length ? (
			<BillingModule
				type="INVOICE"
				id={invoiceId} 
			/>
		) : (
			<InvoiceControl
				setInvoiceId={setInvoiceId}
			/>
		)
	);
};

export default withPrivateRouter(InvoicesScreen);

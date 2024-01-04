import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

import BaseInvoice from './BaseInvoice';
import InvoiceControl from './InvoiceControl';

const InvoiceSummary = ({ withControl }) => {
	return (
		<div className="row">
			<div className={withControl ? 'col-md-9' : 'col-md-12'}>
				<BaseInvoice />
			</div>
			{withControl && (
				<div className="col-md-3">
					<InvoiceControl />
				</div>
			)}
		</div>
	);
}

export default InvoiceSummary;

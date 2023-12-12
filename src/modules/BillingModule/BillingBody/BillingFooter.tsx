import React from 'react';

import formatMessage from '@utils/formatMessage';

const BillingFooter = ({ type }) => {

	const currentText = React.useMemo(() => (
		type === 'INVOICE' ? 'invoice' : 'estimate'
	), []);

	return (
		<>
			<div className="mb-3">
				<h3>Thank you!</h3>
				<p>
					If you have any questions concerning this {currentText}, use the following
					contact information:
				</p>
			</div>
			<p className="small mb-0">
				© 2023 Flash Repair.
			</p>
		</>
	);
}

export default BillingFooter;

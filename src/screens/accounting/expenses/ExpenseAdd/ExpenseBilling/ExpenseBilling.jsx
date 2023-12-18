import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const ExpenseBilling = () => {

	const onEditBillTo = (e) => {
		e.preventDefault();
	}

	return (
		<div className="row justify-content-md-between mb-3">
			<div className="col-md-3">
				<h4>
					Expense to:
					&nbsp;
					<a className="text-muted" onClick={onEditBillTo}>
						<i className="bi bi-pencil"/>
					</a>
				</h4>
				<address>
					Sara Williams
					<br />
					280 Suzanne Throughway,
					<br />
					Breannabury, QC H3N 2J3, Canada
					<br />
					<br />
					sara.williams@gmail.com
					<br />
					+1 (438) 409-0206
				</address>
			</div>
			<div className="col-md-6"/>
			<div className="col-md-3">
				<h4>
					Pay to:
				</h4>
				<address>
					Flash Repair Inc.
					<br />
					9300 Rue Charles-de-LaTour
					<br />
					Montréal, QC H4N 1M2, Canada
					<br />
					<br />
					support@flashgo.ca
					<br />
					+1 (514) 571-7049
				</address>
			</div>
		</div>
	);
};

export default ExpenseBilling;

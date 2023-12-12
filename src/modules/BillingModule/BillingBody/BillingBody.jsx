import React from 'react';

import formatMessage from '@utils/formatMessage';

import BillingNotes from './BillingNotes';
import BillingTotal from './BillingTotal';
import BillingFooter from './BillingFooter';

const BillingBody = ({ type, configData, items }) => (
	<>
		<div className="row justify-content-md-end mb-3">
			<table className="table table-borderless table-nowrap table-align-middle">
				<thead>
					<tr>
						<th style={{ width: "765.094px" }}>
							<h4 className="text-capitalize mb-0">
								Important notes:
							</h4>
						</th>
						<th style={{ width: "207.485px" }} />
						<th
							scope="col"
							rowSpan={1}
							colSpan={1}
							className="table-column-pe-0 sorting_disabled"
							style={{ width: "40px" }}
						/>
					</tr>
				</thead>
				<tbody>
					<tr>
						<BillingNotes />
						<BillingTotal 
							items={items}
							configData={configData}
						/>
					</tr>
				</tbody>
			</table>
		</div>
		<BillingFooter 
			type={type}
		/>
	</>
);

export default BillingBody;

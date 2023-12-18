import React from 'react';

import formatMessage from '@utils/formatMessage';

const OrderActivity = () => (
	<div className="row">
		<div className="col-lg-12">
			<table className="table table-nowrap table-align-middle table-thead-bordered">
				<thead>
					<tr>
						<th>Date &amp; Time</th>
						<th>Action</th>
						<th>Operator</th>
						<th>Qty</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2023-07-25 10:15 AM</td>
						<td>
							<span className="badge bg-soft-dark text-dark">
								Restock
							</span>
						</td>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/employee/workforce/123"
							>
								<div>Office</div>
							</a>
						</td>
						<td>
							+50
						</td>
					</tr>
					<tr>
						<td>2023-03-25 8:15 AM</td>
						<td>
							<span className="badge bg-soft-danger text-danger">
								Removal
							</span>
						</td>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/employee/workforce/123"
							>
								<div>T Julian</div>
							</a>
						</td>
						<td>
							-2
						</td>
					</tr>
					<tr>
						<td>2023-01-12 12:15 AM</td>
						<td>
							<span className="badge bg-soft-danger text-danger">
								Removal
							</span>
						</td>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/employee/workforce/123"
							>
								<div>T Duncan</div>
							</a>
						</td>
						<td>
							-2
						</td>
					</tr>
					<tr>
						<td>2023-01-12 12:15 AM</td>
						<td>
							<span className="badge bg-soft-danger text-danger">
								Removal
							</span>
						</td>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/employee/workforce/123"
							>
								<div>T Loic</div>
							</a>
						</td>
						<td>
							-5
						</td>
					</tr>
					<tr>
						<td>2023-01-12 12:15 AM</td>
						<td>
							<span className="badge bg-soft-danger text-danger">
								Removal
							</span>
						</td>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/employee/workforce/123"
							>
								<div>T Peter</div>
							</a>
						</td>
						<td>
							-5
						</td>
					</tr>
					<tr>
						<td>2023-01-12 12:15 AM</td>
						<td>
							<span className="badge bg-soft-danger text-danger">
								Removal
							</span>
						</td>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/employee/workforce/123"
							>
								<div>T Razi</div>
							</a>
						</td>
						<td>
							-1
						</td>
					</tr>
					<tr>
						<td>2023-01-12 12:15 AM</td>
						<td>
							<span className="badge bg-soft-success text-success">
								Restock
							</span>
						</td>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/employee/workforce/123"
							>
								<div>Office</div>
							</a>
						</td>
						<td>
							+10
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
);

export default OrderActivity;

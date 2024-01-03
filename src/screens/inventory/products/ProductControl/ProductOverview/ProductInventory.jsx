import React from 'react';

import formatMessage from '@utils/formatMessage';

const ProductInventory = () => (
	<div className="row">
		<div className="col-lg-12">
			<table className="table table-nowrap table-align-middle table-thead-bordered">
				<thead>
					<tr>
						<th>Techs</th>
						<th>Quantity</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/workforce/123"
							>
								<div>Office</div>
							</a>
						</td>
						<td>
							<div>12</div>
						</td>
					</tr>
					<tr>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/workforce/123"
							>
								<div>T Julian</div>
							</a>
						</td>
						<td>
							<div>0</div>
						</td>
					</tr>
					<tr>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/workforce/123"
							>
								<div>T Duncan</div>
							</a>
						</td>
						<td>
							<div>2</div>
						</td>
					</tr>
					<tr>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/workforce/123"
							>
								<div>T Loic</div>
							</a>
						</td>
						<td>
							<div>0</div>
						</td>
					</tr>
					<tr>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/workforce/123"
							>
								<div>T Peter</div>
							</a>
						</td>
						<td>
							<div>1</div>
						</td>
					</tr>
					<tr>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/workforce/123"
							>
								<div>T Razi</div>
							</a>
						</td>
						<td>
							<div>3</div>
						</td>
					</tr>
					<tr>
						<td>
							<a
								className="d-flex align-items-center"
								href="/hr/workforce/123"
							>
								<div>T Mike</div>
							</a>
						</td>
						<td>
							<div>5</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
);

export default ProductInventory;

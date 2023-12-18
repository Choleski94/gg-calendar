import React from 'react';
import Link from 'next/link';

import api from '../../../../api';
import formatMessage from '../../../../utils/formatMessage';

const Invoice = ({ id = '' }) => {
	return (
		<div className="card-body">
			<div className="row justify-content-lg-between">
				<div className="col-sm order-2 order-sm-1 mb-3">
					<div className="mb-2">
						<img
							className="avatar"
							src="./assets/svg/logos/logo-short.svg"
							alt="Logo"
						/>
					</div>
					<h1 className="h2 text-primary">Tigado Inc.</h1>
				</div>
				{/* End Col */}
				<div className="col-sm-auto order-1 order-sm-2 text-sm-end mb-3">
					<div className="mb-3">
						<h2>Invoice #</h2>
						<span className="d-block">3682303</span>
					</div>
					<address className="text-dark">
						45 Roker Terrace
						<br />
						Latheronwheel
						<br />
						KW5 8NW, Laval
						<br />
						Canada
					</address>
				</div>
				{/* End Col */}
			</div>
			{/* End Row */}
			<div className="row justify-content-md-between mb-3">
				<div className="col-md">
					<h4>Bill to:</h4>
					<h4>Sara Williams</h4>
					<address>
						280 Suzanne Throughway,
						<br />
						Breannabury, OR 45801,
						<br />
						United States
					</address>
				</div>
				{/* End Col */}
				<div className="col-md text-md-end">
					<dl className="row">
						<dt className="col-sm-8">Invoice date:</dt>
						<dd className="col-sm-4">03/10/2018</dd>
					</dl>
					<dl className="row">
						<dt className="col-sm-8">Due date:</dt>
						<dd className="col-sm-4">03/11/2018</dd>
					</dl>
				</div>
				{/* End Col */}
			</div>
			{/* End Row */}
			{/* Table */}
			<div className="table-responsive">
				<table className="table table-borderless table-nowrap table-align-middle">
					<thead className="thead-light">
						<tr>
							<th>Service</th>
							<th>Quantity</th>
							<th>Price</th>
							<th className="table-text-end">Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Diagnostic #1</th>
							<td>1</td>
							<td>$125</td>
							<td className="table-text-end">$125</td>
						</tr>
						<tr>
							<th>Diagnostic #2</th>
							<td>1</td>
							<td>$75</td>
							<td className="table-text-end">$75</td>
						</tr>
						<tr>
							<th>Repair</th>
							<td>1</td>
							<td>$125</td>
							<td className="table-text-end">$125</td>
						</tr>
					</tbody>
				</table>
			</div>
			{/* End Table */}
			<hr className="my-5" />
			<div className="row justify-content-md-end mb-3">
				<div className="col-md-8 col-lg-7">
					<dl className="row text-sm-end">
						<dt className="col-sm-6">Subtotal:</dt>
						<dd className="col-sm-6">$325.00</dd>
						<dt className="col-sm-6">Total:</dt>
						<dd className="col-sm-6">$325.00</dd>
						<dt className="col-sm-6">Tax:</dt>
						<dd className="col-sm-6">$48.75</dd>
						<dt className="col-sm-6">Amount paid:</dt>
						<dd className="col-sm-6">$373.75</dd>
						<dt className="col-sm-6">Due balance:</dt>
						<dd className="col-sm-6">$0.00</dd>
					</dl>
					{/* End Row */}
				</div>
			</div>
			{/* End Row */}
			<div className="mb-3">
				<h3>Thank you!</h3>
				<p>
					If you have any questions concerning this invoice, use the following
					contact information:
				</p>
			</div>
			<p className="small mb-0">© 2023 Tigado.</p>
		</div>
	);
};

export default Invoice;

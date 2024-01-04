import React from 'react';

import formatMessage from '@utils/formatMessage';

const BaseInvoice = () => (
	<>
		<div className="row justify-content-lg-between">
			<div className="col-sm order-2 order-sm-1 mb-3">
				<div className="mb-2">
					<img
						src="https://lh5.googleusercontent.com/-cE18-VSLU2g/AAAAAAAAAAI/AAAAAAAAAAA/1hAAnx_OODQ/s44-p-k-no-ns-nd/photo.jpg"
						className="avatar"
						alt="Logo"
					/>
				</div>
				<h1 className="h2">
					Flash Repair Inc.
				</h1>
			</div>
			<div className="col-sm-auto order-1 order-sm-2 text-sm-end mb-3">
				<div className="mb-3">
					<h2>Invoice #</h2>
					<span className="d-block">
						3682303
					</span>
				</div>
				<address className="text-dark">
					45 Roker Terrace
					<br />
					Latheronwheel
					<br />
					KW5 8NW, London
					<br />
					Canada
				</address>
			</div>
		</div>
		<div className="row justify-content-md-between mb-3">
			<div className="col-md">
				<h4>Bill to:</h4>
				<h4>Sara Williams</h4>
				<address>
					280 Suzanne Throughway,
					<br />
					Breannabury, QC H3N 2J3,
					<br />
					Canada
				</address>
			</div>
			<div className="col-md text-md-end">
				<dl className="row">
					<dt className="col-sm-8">Invoice date:</dt>
					<dd className="col-sm-4">03/10/2023</dd>
				</dl>
				<dl className="row">
					<dt className="col-sm-8">Due date:</dt>
					<dd className="col-sm-4">03/11/2023</dd>
				</dl>
			</div>
		</div>
		<div className="table-responsive">
			<table className="table table-borderless table-nowrap table-align-middle">
				<thead className="thead-light">
					<tr>
						<th>Item</th>
						<th>Quantity</th>
						<th>Rate</th>
						<th className="table-text-end">Amount</th>
						<th scope="col" className="table-column-pe-0 sorting_disabled" rowspan="1" colspan="1" style={{ width: '40px' }} />
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<h5>Diagnostic test</h5>
							<p>
								A test used to help figure out what condition an equipment has based on their signs and symptoms.
							</p>
						</td>
						<td>
							1
						</td>
						<td>
							$125.00
						</td>
						<td className="table-text-end">
							$125.00
						</td>
						<td className="table-column-pe-0">
							<div className="text-danger">
								<i className="bi bi-trash" />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<h5>
								Logic board
							</h5>
							<p>
								Samsung washer logic board
							</p>
						</td>
						<td>
							1
						</td>
						<td>
							$100.00
						</td>
						<td className="table-text-end">
							$100.00
						</td>
						<td className="table-column-pe-0">
							<div className="text-danger">
								<i className="bi bi-trash" />
							</div>
						</td>
					</tr>
					<tr>
						<td>
							<h5>
								Labour
							</h5>
							<p>
								Service labour
							</p>
						</td>
						<td>
							4.5
						</td>
						<td>
							$45.00
						</td>
						<td className="table-text-end">
							$202.50
						</td>
						<td className="table-column-pe-0">
							<div className="text-danger">
								<i className="bi bi-trash" />
							</div>
						</td>
					</tr>
					<tr>
						<td className="align-top">
							<div className="mb-3">
								<input
									type="text"
									className="form-control mb-3"
									placeholder="Item name"
									aria-label="Item name"
								/>
								<textarea 
									className="form-control mb-3"
									placeholder="Description"
									aria-label="Description"
								/>
							</div>
						</td>
						<td className="align-top">
							<div className="quantity-counter">
								<div className="js-quantity-counter row align-items-center">
									<div className="col">
										<input
											className="js-result form-control form-control-quantity-counter"
											type="text"
											defaultValue={1}
										/>
									</div>
									<div className="col-auto">
										<a
											className="js-minus btn btn-white btn-xs btn-icon rounded-circle"
										>
											<svg
												width={8}
												height={2}
												viewBox="0 0 8 2"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z"
													fill="currentColor"
												/>
											</svg>
										</a>
										<a
											className="js-plus btn btn-white btn-xs btn-icon rounded-circle"
										>
											<svg
												width={8}
												height={8}
												viewBox="0 0 8 8"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z"
													fill="currentColor"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</td>
						<td className="align-top">
							<div className="mb-3">
								<input
									type="number"
									aria-label="0"
									placeholder="0"
									className="form-control"
								/>
							</div>
						</td>
						<td className="table-text-end align-top">
							<div className="mb-3">
								<input
									type="number"
									aria-label="0"
									placeholder="0"
									className="form-control"
								/>
							</div>
						</td>
						<td className="table-column-pe-0 align-top">
							<div className="mt-2 mb-3">
								<div className="text-success">
									<i className="bi bi-save-fill" />
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<hr className="my-5" />
		<div className="row justify-content-md-end mb-3">
			<div className="col-md-8 col-lg-8">
				<ul className="fs-6">
					<li>
						<small>
							Garantie d'un an sur les pièces installées et achetées de nous, et la main-d'œuvre associée.
						</small>
					</li>
					<li>
						<small>
							Garantie de trois mois sur la main-d'œuvre pour toutes les réparations sans pièces installées.
						</small>
					</li>
					<li>
						<small>
							Garantie de trois mois sur les réparations du système scellé.
						</small>
					</li>
					<li>
						<small>
							Usage commercial, garantie de trois mois sur les pièces installées et achetées de nous, et la main-d'œuvre associée.
						</small>
					</li>
					<li>
						<small>
							Les dépôts sur les pièces commander ne sont pas remboursables.
						</small>
					</li>
				</ul>
				<ul className="fs-6">
					<li>
						<small>
							One year guarantee on parts installed and bought from us, and related labour.
						</small>
					</li>
					<li>
						<small>
							Three month guarantee on labour on all repairs with no parts installed.
						</small>
					</li>
					<li>
						<small>
							Three month guarantee on sealed system repairs.
						</small>
					</li>
					<li>
						<small>
							Commercial use, three month guarantee on parts installed and bought from us, and related labour.
						</small>
					</li>
					<li>
						<small>
							Deposits on ordered parts are non-refundable.
						</small>
					</li>
				</ul>
			</div>
			<div className="col-md-4 col-lg-4">
				<dl className="row text-sm-end">
					<dt className="col-sm-6">Subtotal:</dt>
					<dd className="col-sm-6">$2750.00</dd>
					<dt className="col-sm-6">Total:</dt>
					<dd className="col-sm-6">$2750.00</dd>
					<dt className="col-sm-6">Tax:</dt>
					<dd className="col-sm-6">$39.00</dd>
					<dt className="col-sm-6">Amount paid:</dt>
					<dd className="col-sm-6">$2789.00</dd>
					<dt className="col-sm-6">Due balance:</dt>
					<dd className="col-sm-6">$0.00</dd>
				</dl>
			</div>
		</div>
		<div className="mb-3">
			<h3>Thank you!</h3>
			<p>
				If you have any questions concerning this invoice, use the following
				contact information:
			</p>
		</div>
		<p className="small mb-0">
			© 2023 Flash Repair.
		</p>
	</>
);

export default BaseInvoice;

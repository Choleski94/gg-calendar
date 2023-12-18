import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Card, Layout, Breadcrumb, NavTab, GetSupport } from '@components';

import MultiItemTable from './MultiItemTable';
import ExpenseBilling from './ExpenseBilling';
import ExpenseSettings from './ExpenseSettings';

const EXPENSE_CREATE_BREADCRUMB_OPTIONS = [
	{
		path: '/accounting',
		value: 'Accounting'
	},
	{
		path: '/accounting/expenses',
		value: 'Expenses'
	},
	{
		path: '/accounting/expenses/create',
		value: 'Add'
	},
];

const DEFAULT_EXPENSE_CONFIG = { taxPercent: 15, deposit: '', discount: '' };

const parseMoney = (amount) => Number(amount || 0).toFixed(2);

const ExpenseAdd = () => {
	const [ items, setItems ] = React.useState([]);
	const [ configData, setConfigData ] = React.useState(DEFAULT_EXPENSE_CONFIG);

	const [ subTotal, taxAmount, total ] = React.useMemo(() => {
		// Evaluate sub total.
		const subTotalAmount = items.reduce((agg, currentItem) => {
			const itemTotal = (
				Number(currentItem.quantity) *
				Number(currentItem.price)
			);

			agg += itemTotal;

			return agg;
		}, 0);

		// Evaluate tax amount.
		const taxAmount = subTotalAmount * (Number(configData.taxPercent || 0) / 100);

		// Evaluate cost amount.
		const costAmount = Number(subTotalAmount || 0) + taxAmount;

		// TODO: Evalaute if we accept user to have negative We only apply discount if we have a subtotal.
		const parsedDiscount = Number(configData.discount || 0);

		// Parse deposit amount.
		const parsedDeposit = Number(configData.deposit || 0);

		// Evaluate total amount.
		const totalAmount = costAmount - (parsedDeposit + parsedDiscount);

		return [ subTotalAmount, taxAmount, totalAmount ];
	}, [ configData, items ]);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="col-lg mb-3 mb-lg-0">
								<Breadcrumb 
									options={EXPENSE_CREATE_BREADCRUMB_OPTIONS} 
								/>
								<h1 className="page-header-title mb-0">
									Add new expense
								</h1>
							</div>
							<div className="col-lg-auto">
								<GetSupport />
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="row mt-15">
				<div className="col-lg-9 mb-5 mb-lg-0">
					<Card>
						<Card.Body>
							<div className="row">
								<div className="col-md-12">
									<header>
										<div className="row align-items-center">
											<div className="col-sm-7 text-center text-sm-start mb-3 mb-sm-0">
												<div className="mb-2">
													<img
														src="https://lh5.googleusercontent.com/-cE18-VSLU2g/AAAAAAAAAAI/AAAAAAAAAAA/1hAAnx_OODQ/s44-p-k-no-ns-nd/photo.jpg"
														className="avatar"
														alt="Logo"
													/>
													<span
														className="h2"
														style={{ paddingLeft: "15px" }}
													>
														Flash Repair Inc.
													</span>
												</div>
											</div>
											<div className="col-sm-5 text-center text-sm-end">
												<h2 className="mb-0">
													Expense
												</h2>
											</div>
										</div>
										<hr />
									</header>
									<div className="row justify-content-md-between mb-3">
										<div className="col-md text-md-end">
											<dl className="row">
												<dt className="col-sm-1 pt-2">
													No:
												</dt>
												<dd className="col-sm-3">
													<input 
														className="form-control" 
														value="18004"
														type="text" 
													/>
												</dd>
											</dl>
										</div>
										<div className="col-md text-md-end pb-3">
											<dl className="row">
												<dt className="col-sm-8 pt-2">
													Expense date:
												</dt>
												<dd className="col-sm-4">
													<input 
														className="form-control" 
														value="03/10/2023"
														type="date" 
													/>
												</dd>
											</dl>
											<dl className="row">
												<dt className="col-sm-8 pt-2">
													Due date:
												</dt>
												<dd className="col-sm-4">
													<input 
														className="form-control" 
														value="03/11/2023"
														type="date" 
													/>
												</dd>
											</dl>
										</div>
										<hr />
									</div>

									<ExpenseBilling />

									<div className="my-5" />

									<MultiItemTable 
										items={items}
										setItems={setItems}
										addItemLabel="Add new item"
									/>

									<hr className="my-5" />

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
													<td className="align-top">
														<div className="mb-3">
															<div className="col-md-8 col-lg-8">
																<ul className="fs-6">
																	<li>
																		<small>
																			Garantie d'un an sur les pièces installées et achetées de
																			nous, et la main-d'œuvre associée.
																		</small>
																	</li>
																	<li>
																		<small>
																			Garantie de trois mois sur la main-d'œuvre pour toutes les
																			réparations sans pièces installées.
																		</small>
																	</li>
																	<li>
																		<small>
																			Garantie de trois mois sur les réparations du système scellé.
																		</small>
																	</li>
																	<li>
																		<small>
																			Usage commercial, garantie de trois mois sur les pièces
																			installées et achetées de nous, et la main-d'œuvre associée.
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
																			One year guarantee on parts installed and bought from us, and
																			related labour.
																		</small>
																	</li>
																	<li>
																		<small>
																			Three month guarantee on labour on all repairs with no parts
																			installed.
																		</small>
																	</li>
																	<li>
																		<small>Three month guarantee on sealed system repairs.</small>
																	</li>
																	<li>
																		<small>
																			Commercial use, three month guarantee on parts installed and
																			bought from us, and related labour.
																		</small>
																	</li>
																	<li>
																		<small>Deposits on ordered parts are non-refundable.</small>
																	</li>
																</ul>
															</div>
														</div>
													</td>
													<td className="align-top">
														<div className="mb-3">
															<dl className="row">
																{/* Subtotal */}
																<dt className="col-sm-6">
																	Subtotal:
																</dt>
																<dd className="col-sm-6 text-sm-end">
																	${parseMoney(subTotal)}
																</dd>
																{/* Deposit */}
																{Number(configData.deposit) ? (
																	<>
																		<dt className="col-sm-6">
																			Deposit:
																		</dt>
																		<dd className="col-sm-6 text-sm-end">
																			- ${parseMoney(configData.deposit)}
																		</dd>
																	</>
																) : null}
																{/* Discount */}
																{Number(configData.discount) ? (
																	<>
																		<dt className="col-sm-6">
																			Discount:
																		</dt>
																		<dd className="col-sm-6 text-sm-end">
																			- ${parseMoney(configData.discount)}
																		</dd>
																	</>
																) : null}
																{/* Tax */}
																<dt className="col-sm-6">
																	Tax ({configData.taxPercent} %):
																</dt>
																<dd className="col-sm-6 text-sm-end">
																	${parseMoney(taxAmount)}
																</dd>
																<hr className="my-3" />
																{/* Total */}
																<dt className="col-sm-6">
																	Total:
																</dt>
																<dd className="col-sm-6 text-sm-end">
																	${parseMoney(total)}
																</dd>
															</dl>
														</div>
													</td>
													<td className="table-column-pe-0 align-top" />
												</tr>
											</tbody>
										</table>
									</div>

									<div className="mb-3">
										<h3>Thank you!</h3>
										<p>
											If you have any questions concerning this expense, use the following
											contact information:
										</p>
									</div>
									<p className="small mb-0">
										© 2023 Flash Repair.
									</p>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-lg-3">
					<ExpenseSettings 
						data={configData}
						setData={setConfigData}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default ExpenseAdd;

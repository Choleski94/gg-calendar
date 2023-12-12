import React from 'react';

import formatMessage from '@utils/formatMessage';

import BillingNotes from './BillingNotes';

const parseMoney = (amount) => Number(amount || 0).toFixed(2);

const BillingTotal = ({ configData, items }) => {
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
		const taxAmount = subTotalAmount * (Number(configData.taxRate || 0) / 100);

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
		<tr>
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
							Tax ({configData.taxRate} %):
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
	);
};

export default BillingTotal;

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import InvoiceView from './Invoice.View';
import InvoiceCreate from './Invoice.Create';

import api from '@api';
import { Modal } from '@components';
import formatMessage from '@utils/formatMessage';

const INVOICE_SECTIONS = {
	VIEW: 'VIEW',
	CREATE: 'CREATE',
}

export const CustomerInvoicesCTA = ({ onClick }) => (
	<a href="#create-invoice" className="btn btn-outline-primary" onClick={onClick}>
		<i className="bi-receipt me-1" />
		&nbsp;
		New Invoice
	</a>	
);

const dummyData = []; // TODO: Add dummy data

const CustomerInvoices = ({ hasActiveCta = false, toggleCta = () => null }) => {
        const [ options, setOptions ] = React.useState([]);
        const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);

	const handleInvoiceClick = (invoiceId = '') => {
		setShowModal(true);
	};

	const toggleModal = () => {
		setShowModal(false);
		if (hasActiveCta) {
			toggleCta();
		}
	};

	const activeSection = React.useMemo(() => {
		let res = INVOICE_SECTIONS.VIEW;

		if (hasActiveCta) {
			res = INVOICE_SECTIONS.CREATE;
			setShowModal(true);
		}

		return res;
	}, [ hasActiveCta ]);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			{showModal && (
				<Modal onCloseRequest={toggleModal}>
					{activeSection === INVOICE_SECTIONS.VIEW && (
						<InvoiceView />
					)}
					{activeSection === INVOICE_SECTIONS.CREATE && (
						<InvoiceCreate />
					)}
				</Modal>
			)}
			<div className="card">
				<div className="card-header card-header-content-between">
					<h4 className="card-header-title">
						Job Invoices
					</h4>
					<a className="btn btn-ghost-secondary btn-sm" href="#">
						View all
					</a>
				</div>
				<div className="table-responsive position-relative">
					<table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
						<thead className="thead-light">
							<tr>
								<th>Reference</th>
								<th>Status</th>
								<th>Amount</th>
								<th>Updated</th>
								<th>Invoice</th>
								<th />
							</tr>
						</thead>
						<tbody>
							<tr role="row" className="odd" onClick={(e) => handleInvoiceClick('123')}>
								<td>
									<a href="#">#3682303</a>
								</td>
								<td>
									<span className="badge bg-soft-warning text-warning">
										Pending
									</span>
								</td>
								<td>$264</td>
								<td>22/04/2020</td>
								<td>
									<a className="btn btn-white btn-sm" href="#">
										<i className="bi-file-earmark-arrow-down-fill me-1" /> PDF
									</a>
								</td>
								<td>
									<a
										className="btn btn-white btn-sm"
										data-bs-toggle="modal"
										data-bs-target="#accountInvoiceReceiptModal"
									>
										<i className="bi-eye-fill me-1" /> Quick view
									</a>
								</td>
							</tr>
							<tr role="row" className="odd" onClick={(e) => handleInvoiceClick('123')}>
								<td>
									<a href="#">#2333234</a>
								</td>
								<td>
									<span className="badge bg-soft-success text-success">
										Successful
									</span>
								</td>
								<td>$264</td>
								<td>22/04/2019</td>
								<td>
									<a className="btn btn-white btn-sm" href="#">
										<i className="bi-file-earmark-arrow-down-fill me-1" /> PDF
									</a>
								</td>
								<td>
									<a
										className="btn btn-white btn-sm"
										data-bs-toggle="modal"
										data-bs-target="#accountInvoiceReceiptModal"
									>
										<i className="bi-eye-fill me-1" /> Quick view
									</a>
								</td>
							</tr>
							<tr role="row" className="odd" onClick={(e) => handleInvoiceClick('123')}>
								<td>
									<a href="#">#9834283</a>
								</td>
								<td>
									<span className="badge bg-soft-success text-success">
										Successful
									</span>
								</td>
								<td>$264</td>
								<td>22/04/2018</td>
								<td>
									<a className="btn btn-white btn-sm" href="#">
										<i className="bi-file-earmark-arrow-down-fill me-1" /> PDF
									</a>
								</td>
								<td>
									<a
										className="btn btn-white btn-sm"
										data-bs-toggle="modal"
										data-bs-target="#accountInvoiceReceiptModal"
									>
										<i className="bi-eye-fill me-1" /> Quick view
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CustomerInvoices;

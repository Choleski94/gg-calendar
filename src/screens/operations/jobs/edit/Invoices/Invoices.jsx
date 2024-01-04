import React from 'react';

import api from '@api';
import mockInvoice from '@mocks/invoices';
import formatMessage from '@utils/formatMessage';
import { Modal, Table, Forms } from '@components';

import {
	SUPPORTED_TERMS,
	SUPPORTED_STATUSES, 
	DEFAULT_TABLE_HEADER, 
} from '@constants/invoices';

// import InvoiceView from './Invoice.View';
import InvoiceCreate from './Invoice.Create';
import InvoiceSummary from './InvoiceSummary';

const INVOICE_SECTIONS = {
VIEW: 'VIEW',
      CREATE: 'CREATE',
}

const SUPPORTED_MODAL_VIEWS = {
INVENTORY_SUMMARY: 'INVENTORY_SUMMARY',
		   CREATE: 'CREATE',
}

export const InvoiceCTA = ({ onClick }) => (
	<a className="btn btn-primary" href="#create-invoice" onClick={onClick}>
		<i className="bi-receipt me-1" />
		&nbsp;
		New Invoice
	</a>	
);

const parseTech = (payload = {}) => {
	let res = 'N/A';

	if (payload?.techs && Object.keys(payload?.techs).length) {
		res = `${payload.techs.firstName} ${payload.techs.lastName}`;
	}

	return res;
}

const dummyData = []; // TODO: Add dummy data

const Invoices = ({ hasActiveCta = false, toggleCta = () => null }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ modalSection, setModalSection ] = React.useState('');

	const fetchInvoices = async () => {
		setLoading(true);
		setOptions(mockInvoice.list);
		setLoading(false);
	};

	React.useEffect(() => {
			fetchInvoices();
			}, []);

	const toggleModal = () => setModalSection('');

	const onEditInvoiceClick = (e, { id }) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.INVENTORY_SUMMARY);
	};

	const onAddInvoiceClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.CREATE);
	};

	const renderAddInvoice = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddInvoiceClick}>
			<i className="bi-plus" />
			Create new invoice
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<Table
				withFilter
				height="63vh"
				cta={renderAddInvoice}
				elementsPerPage={300}
				searchPlaceholder="Search invoice"
				headers={DEFAULT_TABLE_HEADER}
				data={options.map((payload, idx) => ({
					id: payload?.id,
					query: [
						payload?.name,
					].join(' '),
					name: payload?.name,
					paymentMethod: (
						<div className="d-flex align-items-center">
							<img
								className="avatar avatar-xss avatar-4x3 me-2"
								src="/assets/svg/brands/mastercard.svg"
								alt="Image Description"
							/>
							<span className="text-dark">•••• 4242</span>
						</div>
					),
					serial: payload?.serial,
					category: SUPPORTED_TERMS[payload?.category] || 'N/A',
					inStock: (
						payload?.inStock ? (
							<span className="text-success h3">
								<i className="bi bi-check" />
							</span>
						) : (
							<span className="text-danger h3">
								<i className="bi bi-x" />
							</span>
						)
					),
					qty: (payload?.qty|| '').toFixed(2),
					rate: (
						<span>
							${(payload?.unitPrice || '').toFixed(2)} CAD
						</span>
					),
					total: (
						<span>
							${(payload?.qty * payload?.unitPrice || '').toFixed(2)} CAD
						</span>
					),
					orderId: payload?.orderId,
					lastUpdate: payload?.lastUpdate || 'N/A',
					status: (
						<>
							{payload?.status === SUPPORTED_STATUSES.PAID && (
								<span className="badge bg-soft-success text-success">
									Paid
								</span>
							)}
							{payload?.status === SUPPORTED_STATUSES.DUE && (
								<span className="badge bg-soft-danger text-danger">
									Payment Due
								</span>
							)}
							{payload?.status === SUPPORTED_STATUSES.FREE && (
								<span className="badge bg-soft-warning text-warning">
									Free estimate
								</span>
							)}
						</>
					),
					techs: parseTech(payload),
					notes: payload?.notes
				}))}
				onRowClick={onEditInvoiceClick}
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.INVENTORY_SUMMARY && (
				<Modal onCloseRequest={toggleModal} title="Create new summary" size="xl">
					<InvoiceSummary />
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.CREATE && (
				<Modal onCloseRequest={toggleModal} title="Add new invoice" withFooter>
					Forms.JobInvoices
				</Modal>
			)}
		</div>
	);
};

export default Invoices;

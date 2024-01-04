import React from 'react';

import OrderCreate from './OrderCreate';
import OrderSummary from './OrderSummary';
import OrderInventory from './OrderInventory';

import {
	SUPPORTED_STATUSES, 
	SUPPORTED_CATEGORIES,
	DEFAULT_TABLE_HEADER, 
} from '@constants/orders';

import mockOrder from '@mocks/orders';
import formatMessage from '@utils/formatMessage';
import { Modal, Table, Forms } from '@components';

const SUPPORTED_MODAL_VIEWS = {
	CREATE: 'CREATE',
	SUMMARY: 'SUMMARY',
	INVENTORY: 'INVENTORY',
}

const parseTech = (payload = {}) => {
	let res = 'N/A';

	if (payload?.techs && Object.keys(payload?.techs).length) {
		res = `${payload.techs.firstName} ${payload.techs.lastName}`;
	}

	return res;
}

const Orders = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ modalSection, setModalSection ] = React.useState('');

	const fetchOrders = async () => {
		setLoading(true);
		setOptions(mockOrder.get);
		setLoading(false);
	};

	React.useEffect(() => {
		fetchOrders();
	}, []);

	const toggleModal = () => setModalSection('');

	const onEditOrderClick = (e, { id }) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.SUMMARY);
	};

	const onAddOrderClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.CREATE);
	};

	const onInventoryClick = (e, id = '') => {
		e.preventDefault();
		e.stopPropagation();
		setModalSection(SUPPORTED_MODAL_VIEWS.INVENTORY);
	}

	const renderAddOrder = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddOrderClick}>
			<i className="bi-plus" />
			Add order
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<Table
				withFilter
				height="63vh"
				elementsPerPage={300}
				cta={renderAddOrder}
				searchPlaceholder="Search orders"
				headers={DEFAULT_TABLE_HEADER}
				data={options.map((payload, idx) => ({
					id: payload?.id,
					query: [
						payload?.name,
					].join(' '),
					name: payload?.name,
					serial: payload?.serial,
					category: SUPPORTED_CATEGORIES[payload?.category] || 'N/A',
					type: payload?.type || 'N/A',
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
					qty: (
						<a className="d-inline p-3" onClick={(e) => onInventoryClick(e, payload?.id)}>
							{payload?.qty}
						</a>
					),
					unitPrice: (
						<span>
							${(payload?.unitPrice || '').toFixed(2)} CAD
						</span>
					),
					orderId: payload?.orderId,
					lastUpdate: payload?.lastUpdate || 'N/A',
					status: (
						<>
							{payload?.status === SUPPORTED_STATUSES.INSTALLED && (
								<span className="badge bg-soft-success text-success">
									Installed
								</span>
							)}
							{payload?.status === SUPPORTED_STATUSES.PENDING && (
								<span className="badge bg-soft-info text-info">
									Pending
								</span>
							)}
							{payload?.status === SUPPORTED_STATUSES.PROCESSING && (
								<span className="badge bg-soft-warning text-warning">
									Processing
								</span>
							)}
							{payload?.status === SUPPORTED_STATUSES.NA && (
								<span className="badge bg-soft-dark text-dark">
									N/A
								</span>
							)}
						</>
					),
					techs: parseTech(payload),
					notes: payload?.notes
				}))}
				onRowClick={onEditOrderClick}
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.SUMMARY && (
				<Modal onCloseRequest={toggleModal} title="Order inventory summary" size="md" withFooter>
					<OrderSummary />
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.CREATE && (
				<Modal onCloseRequest={toggleModal} title="Create new order" size="md" withFooter>
					<OrderCreate />
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.INVENTORY && (
				<Modal onCloseRequest={toggleModal} title="Inventory Summary" size="md" withFooter>
					<OrderInventory />
				</Modal>
			)}
		</div>
	);
};

export default Orders;

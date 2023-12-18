import React from 'react';

import {
	SUPPORTED_STATUSES, 
	SUPPORTED_CATEGORIES,
	DEFAULT_TABLE_HEADER, 
} from '@constants/orders';
import mockOrder from '@mocks/orders';
import formatMessage from '@utils/formatMessage';
import { SUPPORTED_PHONE_TYPES } from '@constants/calls';
import { buildDate, parseTime, hasPrimary } from '@utils';
import { SUPPORTED_PAYMENT_STATUSES } from '@constants/payments';
import { Modal, NavPill, Table, Layout, Card, Counter } from '@components';

import OrderCreate from '../../../jobs/info/Orders/OrderCreate';
import OrderSummary from '../../../jobs/info/Orders/OrderSummary';
import OrderInventory from '../../../jobs/info/Orders/OrderInventory';

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

const SUPPORTED_SCREEN_SECTIONS = {
	ALL: 'ALL',
	OPEN: 'OPEN',
	CLOSE: 'CLOSE',
	FUFILLED: 'FUFILLED',
};

const NAV_TAB_OPTIONS = [           
	{
		key: SUPPORTED_SCREEN_SECTIONS.ALL,
		value: 'All orders',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.OPEN,
		value: 'Open orders',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.CLOSE,
		value: 'Cancel orders',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.FUFILLED,
		value: 'Fufilled orders',
	},
];

const activeKeys = [
	'lastUpdate',
	// 'jobId',
	'name',
	'serial',
	// 'suggestedSerial',
	// 'tags',
	'type',
	'inStock',
	'qty',
	'unitPrice',
	'orderId',
	'supplier',
	// 'fulfilledETA',
	'status',
	'techs',
	'fulfilledLocation',
	'timeLeft',
	'fulfilledDate',
	'receivedDate',
	// 'notes'
];

const OrderOverview = ({ orderId = '', setOrderId }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ modalSection, setModalSection ] = React.useState('');
	const [ activeSection, setActiveSection ] = React.useState('');

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
			<div className="row">
				<div className="col-sm-3 col-lg-3 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total orders
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={24} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 5.0%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Open orders
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={12} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 1.2%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Cancel orders
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={56} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-danger text-danger p-1">
										<i className="bi-graph-down" /> 2.8%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Fufilled orders
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={28} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-secondary text-secondary p-1">
										0.0%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
			<NavPill
				options={NAV_TAB_OPTIONS}
				handleTabClick={setActiveSection}
			/>
			<Table
				withFilter
				height="63vh"
				cta={renderAddOrder}
				elementsPerPage={300}
				defaultActiveKeys={activeKeys}
				headers={DEFAULT_TABLE_HEADER}
				searchPlaceholder="Search orders"
				data={options.map((payload, idx) => ({
					...payload,
					query: [
						payload?.name,
					].join(' '),
					tags: SUPPORTED_CATEGORIES[payload?.tags] || 'N/A',
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
						<a className="d-inline" onClick={(e) => onInventoryClick(e, payload?.id)}>
							{payload?.qty}
						</a>
					),
					unitPrice: (
						<span>
							${(payload?.unitPrice || '').toFixed(2)} CAD
						</span>
					),
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
				}))}
				onRowClick={onEditOrderClick}
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.SUMMARY && (
				<Modal onCloseRequest={toggleModal} title="Order inventory summary" size="md">
					<OrderSummary />
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.CREATE && (
				<Modal onCloseRequest={toggleModal} title="Create new order" size="md">
					<OrderCreate />
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.INVENTORY && (
				<Modal onCloseRequest={toggleModal} title="Inventory Summary" size="md">
					<OrderInventory />
				</Modal>
			)}
		</div>
	);
};

export default OrderOverview;

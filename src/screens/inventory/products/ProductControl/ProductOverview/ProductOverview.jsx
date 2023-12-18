import React from 'react';

import mockInventory from '@mocks/inventory';
import formatMessage from '@utils/formatMessage';
import { SUPPORTED_PHONE_TYPES } from '@constants/calls';
import { buildDate, parseTime, hasPrimary } from '@utils';
import { SUPPORTED_PAYMENT_STATUSES } from '@constants/payments';
import { Modal, Table, Layout, Card, Counter } from '@components';

import ProductAdd from './ProductAdd';
import ProductInventory from './ProductInventory';

const SUPPORTED_MODAL_VIEWS = {
	ADD: 'ADD',
	COMPARE: 'COMPARE',
	INVENTORY: 'INVENTORY',
}

const DEFAULT_PRODUCT_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
	{
		key: 'img_src',
		label: ''
	},
	{
		key: 'product_name',
		label: 'Name'
	},
	{
		key: 'product_category',
		label: 'Category'
	},
	{
		key: 'type',
		label: 'Type'
	},
	{
		key: 'model',
		label: 'Product #'
	},
	{
		key: 'sku',
		label: 'SKU #'
	},
	{
		key: 'product_location',
		label: 'Location'
	},
	{
		key: 'tags',
		label: 'Tags'
	},
	// {
	// 	key: 'description',
	// 	label: 'Description'
	// },
	{
		key: 'quantity',
		label: 'Quantity'
	},
	{
		key: 'unit_cost',
		label: 'Unit Cost'
	},
	{
		key: 'unit_price',
		label: 'Unit Price'
	},
	// {
	// 	key: 'member_price',
	// 	label: 'Member Price'
	// },
];

const ProductOverview = ({ productId = '', setProductId }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ modalSection, setModalSection ] = React.useState('');

	const fetchProducts = () => {
		setLoading(true);
		setOptions(mockInventory.products.list);
		setLoading(false);
	}

	React.useEffect(() => fetchProducts(), []);

	const toggleModal = () => setModalSection('');

	const onProductClick = (e, { id }) => {
		e.preventDefault();
		setProductId(id);
	};

	const onAddProductClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.ADD);
	};

	const onCompareProductClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.COMPARE);
	};

	const onProductQtyClick = (e, id) => {
		e.preventDefault();
		e.stopPropagation();
		setModalSection(SUPPORTED_MODAL_VIEWS.INVENTORY);
	};

	const renderProductCTA = (
		<>
			<button type="button" className="btn btn-sm btn-outline-primary" onClick={onCompareProductClick}>
				<i className="bi bi-arrow-repeat" />
				&nbsp;
				Compare product
			</button>
			<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddProductClick}>
				<i className="bi-plus" />
				Add product
			</button>
		</>
	);

	return (
		<>
			<div className="row">
				<div className="col-sm-2 col-lg-2 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								All products
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={8} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-2 col-lg-2 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total Qty
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={12} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-2 col-lg-2 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total Volume 
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={4500} />
										&nbsp;
										<small className="text-lowercase">
											sq. ft.
										</small>
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-2 col-lg-2 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total Weight
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={1485} />
										&nbsp;
										<small className="text-lowercase">
											Kg
										</small>
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-2 col-lg-2 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Inventory Cost
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										$<Counter number={15000} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-2 col-lg-2 mb-3 mb-lg-5">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Inventory Value
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										$<Counter number={27000} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
			<Table
				withFilter
				height="63vh"
				data={options.map((payload) => ({
					...payload,
					query: [
						payload?.model,
						payload?.product_name,
						payload?.product_category,
					].join(' '),
					quantity: (
						<a className="d-inline p-3" onClick={(e) => onProductQtyClick(e, payload?.id)}>
							{payload?.quantity}
						</a>
					),
					img_src: (
						<img className="avatar" src={payload?.img_src} alt="Image Description" />
					),
					tags: (
						payload.tags ? (
							payload.tags.map(({ id, color, value }) => (
								<>
									<span className="badge bg-soft-secondary text-secondary p-1">
										{value}
									</span>
									&nbsp;
								</>
							))
						) : null
					)
				}))}
				elementsPerPage={300}
				cta={renderProductCTA}
				onRowClick={onProductClick}
				headers={DEFAULT_PRODUCT_TABLE_HEADER}
				searchPlaceholder="Search product catalog"
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.ADD && (
				<Modal onCloseRequest={toggleModal} title="Add product" size="md">
					<ProductAdd />
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.COMPARE && (
				<Modal onCloseRequest={toggleModal} title="Compare products" size="md">
					Compare products
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.INVENTORY && (
				<Modal onCloseRequest={toggleModal} title="Inventory Summary" size="md">
					<ProductInventory />
				</Modal>
			)}
		</>
	);
};

export default ProductOverview;

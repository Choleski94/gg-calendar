import React from 'react';

import formatMessage from '@utils/formatMessage';
import { SUPPORTED_PHONE_TYPES } from '@constants/calls';
import { buildDate, parseTime, hasPrimary } from '@utils';
import { SUPPORTED_PAYMENT_STATUSES } from '@constants/payments';
import { Modal, Table, Layout, Card, Counter } from '@components';
import mockInventoryProductVariants from '@mocks/inventory/products/variants';

import VariantAdd from './VariantAdd';

const DEFAULT_PRODUCT_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
	{
		key: 'img_src',
		label: ''
	},
	// {
	// 	key: 'product_name',
	// 	label: 'Name'
	// },
	// {
	// 	key: 'product_category',
	// 	label: 'Category'
	// },
	// {
	// 	key: 'type',
	// 	label: 'Type'
	// },
	{
		key: 'product_name',
		label: 'Name'
	},
	{
		key: 'is_oem',
		label: 'OEM'
	},
	{
		key: 'priority_id',
		label: 'Order'
	},
	{
		key: 'condition_status',
		label: 'Condition'
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
		key: 'qty',
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
	{
		key: 'availability',
		label: 'Availability'
	},
	{
		key: 'note',
		label: 'Note'
	},
];

const Variants = ({ variantId = '', setVariantId }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ activeSection, setActiveSection ] = React.useState('');

	const fetchVariants = () => {
		setLoading(true);
		setOptions(mockInventoryProductVariants.list);
		setLoading(false);
	}

	React.useEffect(() => fetchVariants(), []);

	const onSectionClick = (e, currentSection = '') => {
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const toggleAddUser = () => setShowModal(!showModal);

	const onAddVariantClick = (e) => {
		e.preventDefault();
		toggleAddUser();
	};

	const onCompareVariantClick = (e) => {
		e.preventDefault();
		// setVariantId(id);
	};

	const onVariantClick = (e, { id }) => {
		e.preventDefault();
		setVariantId(id);
	};

	const renderVariantCTA = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddVariantClick}>
			<i className="bi-plus" />
			Add variant
		</button>
	);

	return (
		<>
			<Table
				withFilter
				height="63vh"
				defaultIdx={0}
				data={options.map((payload) => ({
					...payload,
					query: [
						payload?.model,
						payload?.product_name,
						payload?.product_category,
					].join(' '),
					img_src: (
						<img className="avatar" src={payload?.img_src} alt="Image Description" />
					),
					is_oem: (
						payload?.is_oem ? (
							<i className="bi-check fs-2 text-success" />
						) : (
							<i className="bi-x fs-2 text-danger" />
						)
					),
					condition_status: (
						<>
							{payload.condition_status === 'NEW' && (
								<span className="badge bg-soft-success text-success">
									New
								</span>
							)}
							{payload.condition_status === 'REFURBISHED' && (
								<span className="badge bg-soft-dark text-dark">
									Refurbished
								</span>
							)}
							{payload.condition_status === 'DAMAGED' && (
								<span className="badge bg-soft-danger text-danger">
									Damaged
								</span>
							)}
						</>
					),
					qty: (
						<div className="quantity-counter">
							<div className="js-quantity-counter row align-items-center">
								<div className="col">
									<input
										className="js-result form-control form-control-quantity-counter"
										type="text"
										defaultValue={payload?.qty}
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
					),
					unit_cost: (
						<input
							type="number"
							name="category"
							placeholder="eg. New"
							className="form-control"
							defaultValue={payload?.unit_cost}
						/>
					),
					unit_price: (
						<input
							type="number"
							name="category"
							placeholder="eg. New"
							className="form-control"
							defaultValue={payload?.unit_price}
						/>
					),
					availability: (
						<div className="form-check form-switch">
							<input className="form-check-input" type="checkbox" defaultChecked />
							<label className="form-check-label" htmlFor="stocksCheckbox1" />
						</div>
					),
					// tags: (
					// 	payload.tags ? (
					// 		payload.tags.map(({ id, color, value }) => (
					// 			<>
					// 				<span className="badge bg-soft-secondary text-secondary p-1">
					// 					{value}
					// 				</span>
					// 				&nbsp;
					// 			</>
					// 		))
					// 	) : null
					// )
				}))}
				elementsPerPage={300}
				cta={renderVariantCTA}
				onRowClick={onVariantClick}
				searchPlaceholder="Search variants"
				headers={DEFAULT_PRODUCT_TABLE_HEADER}
			/>

			{showModal && (
				<Modal onCloseRequest={toggleAddUser} size="md" title="Add variant">
					<VariantAdd />
				</Modal>
			)}

			{/* showModal && (
				<Modal onCloseRequest={toggleAddUser} size="md">
					Todo add variant form
				</Modal>
			) */}
		</>
	);
};

export default Variants;

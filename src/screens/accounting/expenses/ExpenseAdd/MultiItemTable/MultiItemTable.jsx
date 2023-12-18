import React from 'react';

import formatMessage from '@utils/formatMessage';

const DEFAULT_ITEM_FIELDS = {
	quantity: '', price: '',
	name: '', description: '', 
};

const evalItemTotal = (item) => (Number(item['quantity']) * Number(item['price'])).toFixed(2)

const MultiItemTable = ({ items = [], setItems = () => null, addItemLabel = 'Add new item' }) => {

	React.useEffect(() => {
		if (!items || !items.length) {
			setItems([DEFAULT_ITEM_FIELDS]);	// Initialize with one empty input
		}
	}, []);

	const handleAddInput = () => {
		setItems([ ...items, DEFAULT_ITEM_FIELDS ]); 	// Add a new empty input when the "Add new item" link is clicked
	};

	const handleInputChange = (index, e) => {
		// Get input & safely set empty key.
		const currentItem = { ...DEFAULT_ITEM_FIELDS, ...items[index] };
		const itemData = {
			...currentItem,
			[e.target.name]: e.target.value
		};

		// Update items.
		const updatedInputs = [ ...items ];
		updatedInputs[index] = itemData;
		setItems(updatedInputs);
	};

	const handleDeleteInput = (index) => {
		const updatedInputs = [ ...items ];
		updatedInputs.splice(index, 1); 		// Remove item at the specified index
		setItems(updatedInputs);
	};

	return (
		<div className="table-responsive">
			<table className="table table-borderless table-nowrap table-align-middle">
				<thead className="thead-light">
					<tr>
						<th style={{ width: '658.953px'}}>
							Item
						</th>
						<th style={{ width: '106.141px'}}>
							Quantity
						</th>
						<th style={{ width: '130.438px'}}>
							Price
						</th>
						<th className="table-text-end" style={{ width: '77.047px'}}>
							Total
						</th>
						<th
							style={{ width: '40px' }}
							scope="col" rowSpan={1} colSpan={1}
							className="table-column-pe-0 sorting_disabled"
						/>
					</tr>
				</thead>
				<tbody>
					{/*
					<tr>
						<td>
							<h5>Diagnostic test</h5>
							<p>
								A test used to help figure out what condition an equipment has
								based on their signs and symptoms.
							</p>
						</td>
						<td>1</td>
						<td>$125.00</td>
						<td className="table-text-end">$125.00</td>
						<td className="table-column-pe-0">
							<div className="text-danger">
								<i className="bi bi-trash" />
							</div>
						</td>
					</tr>
					*/}
					{items.map((input, index) => (
						<tr>
							<td className="align-top">
								<div className="mb-3">
									<input
										type="text"
										name="name"
										placeholder="Item name"
										className="form-control mb-3"
										value={items[index]['name']}
										onChange={(e) => handleInputChange(index, e)}
									/>
									<textarea
										defaultValue={""}
										name="description"
										placeholder="Description"
										className="form-control mb-3"
									/>
								</div>
							</td>
							<td className="align-top">
								<div className="mb-3">
									<input
										type="number"
										name="quantity"
										placeholder={0}
										className="form-control"
										value={items[index]['quantity']}
										onChange={(e) => handleInputChange(index, e)}
									/>
								</div>
							</td>
							<td className="align-top">
								<div className="mb-3">
									<input
										name="price"
										type="number"
										placeholder={0}
										className="form-control"
										value={items[index]['price']}
										onChange={(e) => handleInputChange(index, e)}
									/>
								</div>
							</td>
							<td className="table-text-end align-top">
								<span className="d-block pt-2">
									$
									{(items && items[index] && Object.keys(items[index]).length) ? (
										evalItemTotal(items[index])
									) : (
										'0.00'
									)}
								</span>
							</td>
							<td className="table-column-pe-0 align-top">
								<a onClick={() => handleDeleteInput(index)}>
									<div className="text-danger pt-2">
										<i className="bi bi-trash" />
									</div>
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<a
				onClick={handleAddInput}
				style={{
					borderStyle: 'dashed',
					borderWidth: '2px',
					borderColor: '#ccc',
					padding: '7px 5px'
				}}
				className="js-create-field form-link w-100 text-center border-dashed text-dark"
			>
				<i className="bi-plus" />
				{addItemLabel}
			</a>
		</div>
	);
};

export default MultiItemTable;

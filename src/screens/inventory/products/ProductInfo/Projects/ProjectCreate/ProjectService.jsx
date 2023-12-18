import React from 'react';

import api from '@api';
import { Table } from '@components';
import formatMessage from '@utils/formatMessage';

// export const DEFAULT_TABLE_HEADER = [
// 	{ key: 'service', label: 'Service' },
// 	{ key: 'qty', label: 'Quanitty' },
// 	{ key: 'rate', label: 'Rate' },
// 	{ key: 'amount', label: 'Amount' },
// 	{ key: 'action', label: '' },
// ];
// 
// const options = [
// 	{
// 		id: '123',
// 		title: '',
// 		description: '',
// 		qty: 0,
// 		rate: 0,
// 		amount: 0,
// 		action: '',
// 	}
// ];

const ProjectService = () => {
	// return (
	// 	<Table
	// 		height="63vh"
	// 		data={options}
	// 		elementsPerPage={300}
	// 		headers={DEFAULT_TABLE_HEADER}
	// 		// onRowClick={(e, payload) => setJobId(payload.id)}
	// 	/>
	// );

	const [ options, setOptions ] = React.useState([]);


	return (
		<div className="table-responsive">
			<table className="table table-borderless table-nowrap table-align-middle">
				<thead className="thead-light">
					<tr>
						<th scope="col" className="table-column-pe-0 sorting_disabled" rowspan="1" colspan="1" style={{ width: '250px' }}>
							Service
						</th>
						<th scope="col" className="table-column-pe-0 sorting_disabled" rowspan="1" colspan="1" style={{ width: '40px' }}>
							Quantity
						</th>
						<th scope="col" className="table-column-pe-0 sorting_disabled" rowspan="1" colspan="1" style={{ width: '40px' }}>
							Rate
						</th>
						<th scope="col" className="table-column-pe-0 sorting_disabled" rowspan="1" colspan="1" style={{ width: '40px' }}>
							Amount
						</th>
						<th>Techs</th>
						<th className="table-text-end">Date</th>
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
						<td>
							$125.00
						</td>
						<td>
							T1. Duncan
						</td>
						<td className="table-text-end">
							22, July 2023
						</td>
						<td className="table-column-pe-0">
							<div className="mt-3 mb-3">
								<a className="text-danger btn-sm">
									<i className="bi bi-trash" />
								</a>
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
						<td>
							$202.50
						</td>
						<td>
							T3. Mike
						</td>
						<td className="table-text-end">
							22, July 2023
						</td>
						<td className="table-column-pe-0">
							<div className="mt-3 mb-3">
								<a className="text-danger btn-sm">
									<i className="bi bi-trash" />
								</a>
							</div>
						</td>
					</tr>
					<tr>
						<td className="align-top">
							<div className="mb-3">
								<input
									type="text"
									className="form-control mb-3"
									placeholder="Service name"
									aria-label="Service name"
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
						<td />
						<td />
						<td className="table-column-pe-0 align-top">
							<div className="mt-2 mb-3">
								<a className="btn-sm">
									<i className="bi bi-save-fill" />
								</a>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ProjectService;

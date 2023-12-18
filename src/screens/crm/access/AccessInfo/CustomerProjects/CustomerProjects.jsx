import React from 'react';

import api from '@api';
import { Modal } from '@components';
import formatMessage from '@utils/formatMessage';

import CustomerProjectEdit from './CustomerProjectEdit';

const SUPPORTED_EQUIPMENTS = {
	GAS: 'Gas',
	FRIDGE: 'Fridge',
	TLWASHER: 'Top load washer',
	FLWASHER: 'Front load washer',
	FLDRYER: 'Top load dryer',
	TPDRYER: 'Front load dryer',
};

const SUPPORTED_STATUSES = {
	NA: 'NA',
	PENDING: 'PENDING',
	COMPLETE: 'COMPLETE',
	PROCESSING: 'PROCESSING',
};

const dummyData = [
	{
		id: '123',
		notes: 'Has broken switch',
		brand: 'Samsung',
		equipment: 'FRIDGE',
		model: 'SMG123-456 AX/0',
		serial: '62AAXHHVX',
		status: 'COMPLETE',
		jobs: [
			{
				id: '534', 
				techs: [
					{
						id: 123,
						firstName: 'T1. Marek',
						lastName: '',
					}
				],
				lastUpdate: 'Jan 17, 2020, 8:12'
			}
		]
	},
	{
		id: '123',
		brand: 'Maytag',
		equipment: 'FLDRYER',
		model: 'MT 7263 0293',
		serial: 'a28727330',
		status: 'PROCESSING',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'T1. Mike',
						lastName: '',
					}
				],
				lastUpdate: 'Jan 3, 2020, 10:08'
			},
			{
				id: '443',
				techs: [
					{
						id: 123,
						firstName: 'T4. Lent',
						lastName: '',
					}
				],
				lastUpdate: 'Jan 3, 2020, 10:08'
			},
			{
				id: '87',
				techs: [
					{
						id: 123,
						firstName: 'T4. Billy',
						lastName: '',
					}
				],
				lastUpdate: 'Jan 3, 2020, 10:08'
			},
		]
	},
	{
		id: '123',
		brand: 'Whirlpool',
		equipment: 'TLWASHER',
		model: 'WP 9965-137 WX',
		serial: '653458123',
		status: 'COMPLETE',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'T4. Billy',
						lastName: '',
					}
				],
				lastUpdate: 'May 20, 2020, 15:23'
			},
			{
				id: '443',
				techs: [
					{
						id: 123,
						firstName: 'T1. Mike',
						lastName: '',
					}
				],
				lastUpdate: 'May 20, 2020, 15:23'
			},
			{
				id: '877',
				techs: [
					{
						id: 123,
						firstName: 'T1. Mike',
						lastName: '',
					}
				],
				lastUpdate: 'May 20, 2020, 15:23'
			},
		]
	},
	{
		id: '123',
		brand: 'Kenmore',
		equipment: 'FRIDGE',
		model: 'KM F648B3-56A',
		serial: '502581723',
		status: 'COMPLETE',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Apr 16, 2020, 22:11'
			},
			{
				id: '443',
				techs: [
					{
						id: 123,
						firstName: 'F. Loic',
						lastName: '',
					}
				],
				lastUpdate: 'Apr 16, 2020, 22:11'
			},
			{
				id: '877',
				techs: [
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Apr 16, 2020, 22:11'
			},
		]
	},
	{
		id: '123',
		brand: 'KitchenAid',
		equipment: 'FRIDGE',
		model: 'KA 6253-882-A0',
		serial: '152341316',
		status: 'PENDING',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'T3. Razi',
						lastName: '',
					},
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Aug 17, 2020, 6:48'
			},
			{
				id: '877',
				techs: [
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Aug 17, 2020, 6:48'
			},
		]
	},
	{
		id: '123',
		brand: 'LG',
		equipment: 'TPDRYER',
		model: 'LG 63232/123',
		serial: '211331333',
		status: 'NA',
		jobs: [
			{
				id: '534',
				techs: [
					{
						id: 123,
						firstName: 'I. Aaron',
						lastName: '',
					}
				],
				lastUpdate: 'Jun 27, 2020, 12:45'
			},
			{
				id: '877',
				techs: [
					{
						id: 123,
						firstName: 'T5. Duncan',
						lastName: '',
					}
				],
				lastUpdate: 'Jun 27, 2020, 12:45'
			},
		]
	},
];

export const CustomerProjectsCTA = ({ onClick }) => (
	<a href="#add-equipment" className="btn btn-outline-primary" onClick={onClick}>
		<i className="bi bi-box-seam-fill me-1" /> Add equipments
	</a>
);

const parseTech = (payload = {}) => {
	let res = 'N/A';

	if (payload?.jobs && payload?.jobs.length) {
		const allTechs = payload.jobs[0].techs;
		if (allTechs && allTechs.length) {
			const techNames = allTechs.map(({ firstName, lastName }) => `${firstName} ${lastName}`)
			res = techNames.slice(0, 3).join(', ');
		}
	}

	return res;
}

const CustomerProjects = () => {

	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ activeEqpt, setActiveEqpt ] = React.useState(null);

	const fetchCustomerProjects = async () => {
		setLoading(true);
		setOptions(dummyData);
		setLoading(false);
	};

	React.useEffect(() => {
		fetchCustomerProjects();
	}, []);

	const showEdit = React.useMemo(() => (
		Boolean(activeEqpt)
	), [ activeEqpt]);

	const handleProjectClick = (eqptId = '') => {
		setActiveEqpt(eqptId);
	};

	const toggleModal = () => setActiveEqpt(null);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			{showEdit && (
				<Modal onCloseRequest={toggleModal} title="Edit equipment" withFooter>
					<CustomerProjectEdit />
				</Modal>
			)}
			<div className="card">
				<div className="card-header card-header-content-md-between">
					<div className="mb-2 mb-md-0">
						<form>
							<div className="input-group input-group-merge input-group-flush">
								<div className="input-group-prepend input-group-text">
									<i className="bi-search" />
								</div>
								<input
									id="datatableSearch"
									type="search"
									className="form-control"
									placeholder="Search equipments"
									aria-label="Search equipments"
								/>
							</div>
						</form>
					</div>
				</div>
				<div className="table-responsive datatable-custom brand-relative">
					<div id="datatable_wrapper" className="dataTables_wrapper no-footer">
						<div className="dt-buttons">
							<button
								className="dt-button buttons-copy buttons-html5 d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>Copy</span>
							</button>
							<button
								className="dt-button buttons-excel buttons-html5 d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>Excel</span>
							</button>{" "}
							<button
								className="dt-button buttons-csv buttons-html5 d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>CSV</span>
							</button>{" "}
							<button
								className="dt-button buttons-pdf buttons-html5 d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>PDF</span>
							</button>{" "}
							<button
								className="dt-button buttons-print d-none"
								tabIndex={0}
								aria-controls="datatable"
								type="button"
							>
								<span>Print</span>
							</button>{" "}
						</div>
						<div id="datatable_filter" className="dataTables_filter">
							<label>
								Search:
								<input type="search" aria-controls="datatable" />
							</label>
						</div>
						<table
							role="grid"
							id="datatable"
							aria-describedby="datatable_info"
							className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer"
						>
							<thead className="thead-light">
								<tr role="row">
									<th rowSpan={1} colSpan={1} style={{ width: "45.0156px" }} />
									<th rowSpan={1} colSpan={1} style={{ width: "279.656px" }}>
										Brand
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "175.938px" }}>
										Project
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "151.344px" }}>
										Model
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "200.625px" }}>
										Serial #
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Status
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Tech(s)
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Last Service
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Notes
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }} />
								</tr>
							</thead>
							<tbody>
								{options.map((payload) => (
									<tr role="row" className="odd" onClick={(e) => handleProjectClick(payload?.id)}>
										<td className="table-column-pe-0" />
										<td>
											{payload?.brand}
										</td>
										<td>
											{SUPPORTED_EQUIPMENTS[payload?.equipment]}
										</td>
										<td>
											<span className="text-uppercase">
												{payload?.model}
											</span>
										</td>
										<td>
											<span className="text-uppercase">
												{payload?.serial}
											</span>
										</td>
										<td>
											{payload?.status === SUPPORTED_STATUSES.COMPLETE && (
												<span className="badge bg-soft-success text-success">
													<span className="legend-indicator bg-success" />
													Complete
												</span>
											)}
											{payload?.status === SUPPORTED_STATUSES.PENDING && (
												<span className="badge bg-soft-info text-info">
													<span className="legend-indicator bg-info" />
													Pending
												</span>
											)}
											{payload?.status === SUPPORTED_STATUSES.PROCESSING && (
												<span className="badge bg-soft-warning text-warning">
													<span className="legend-indicator bg-warning" />
													Processing
												</span>
											)}
											{payload?.status === SUPPORTED_STATUSES.NA && (
												<span className="badge bg-soft-dark text-dark">
													<span className="legend-indicator bg-dark" />
													N/A
												</span>
											)}
										</td>
										<td>
											{parseTech(payload)}
										</td>
										<td>
											{payload?.jobs && payload?.jobs.length ? (
												payload?.jobs[0].lastUpdate
											) : 'N/A'}
										</td>
										<td>
											{payload?.notes}
										</td>
										<td>
											<a
												className="btn btn-white btn-sm"
												data-bs-toggle="modal"
												data-bs-target="#accountEditCardModal"
											>
												<i className="bi-pencil-fill me-1" /> Edit
											</a>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div
							role="status"
							aria-live="polite"
							id="datatable_info"
							className="dataTables_info"
						>
							Showing 1 to 15 of 24 entries
						</div>
					</div>
				</div>
				<div className="card-footer">
					<div className="row justify-content-center justify-content-sm-between align-items-sm-center">
						<div className="col-sm mb-2 mb-sm-0">
							<div className="d-flex justify-content-center justify-content-sm-start align-items-center">
								<span className="me-2">Showing:</span>
								<div className="tom-select-custom">
									<select
										id="datatableEntries"
										className="js-select form-select form-select-borderless w-auto tomselected ts-hidden-accessible"
										autoComplete="off"
										tabIndex={-1}
									>
										<option value={10}>10</option>
										<option value={20}>20</option>
										<option value={15}>15</option>
									</select>
									<div className="ts-wrapper js-select form-select form-select-borderless w-auto single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
										<div className="ts-control">
											<div data-value={15} className="item" data-ts-item="true">
												15
											</div>
										</div>
										<div className="tom-select-custom">
											<div
												className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
												style={{ display: "none" }}
											>
												<div
													role="listbox"
													tabIndex={-1}
													className="ts-dropdown-content"
													id="datatableEntries-ts-dropdown"
												/>
											</div>
										</div>
									</div>
								</div>
								<span className="text-secondary me-2">of</span>
								<span id="datatableWithPaginationInfoTotalQty">24</span>
							</div>
						</div>
						<div className="col-sm-auto">
							<div className="d-flex justify-content-center justify-content-sm-end">
								<nav id="datatablePagination" aria-label="Activity pagination">
									<div
										className="dataTables_paginate paging_simple_numbers"
										id="datatable_paginate"
									>
										<ul
											id="datatable_pagination"
											className="pagination datatable-custom-pagination"
										>
											<li className="paginate_item page-item disabled">
												<a
													className="paginate_button previous page-link"
													aria-controls="datatable"
													data-dt-idx={0}
													tabIndex={0}
													id="datatable_previous"
												>
													<span aria-hidden="true">Prev</span>
												</a>
											</li>
											<li className="paginate_item page-item active">
												<a
													className="paginate_button page-link"
													aria-controls="datatable"
													data-dt-idx={1}
													tabIndex={0}
												>
													1
												</a>
											</li>
											<li className="paginate_item page-item">
												<a
													className="paginate_button page-link"
													aria-controls="datatable"
													data-dt-idx={2}
													tabIndex={0}
												>
													2
												</a>
											</li>
											<li className="paginate_item page-item">
												<a
													className="paginate_button next page-link"
													aria-controls="datatable"
													data-dt-idx={3}
													tabIndex={0}
													id="datatable_next"
												>
													<span aria-hidden="true">Next</span>
												</a>
											</li>
										</ul>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerProjects;

import React from 'react';

import api from '@api';
import { Modal } from '@components';
import formatMessage from '@utils/formatMessage';

const dummyData = [
	{
		id: '123',
		isPrimary: true,
		isBlacklist: false,
		position: 'Landlord',
		firstName: 'Jason',
		lastName: 'Richard',
		phone: '450-428-5500',
		email: 'jj_cool@gmail.com',
		contact: {
			unit: '',
			address: '8520 bloomfield',
			country: 'Canada',
			city: 'Laval',
			state: 'QC',
			zip: 'H7N1K2'
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				author: {
					id: '123',
					firstName: 'T1.',
					lastName: 'Duncan',
				},
				value: 'Has a baby',
				date_created: 1685627246,
			}
		],
		jobs: ['534']
	},
	{
		id: '123',
		isPrimary: false,
		isBlacklist: false,
		position: 'Building Manager',
		firstName: 'Alex',
		lastName: 'Thompson',
		phone: '514-948-5500',
		email: 'alex@yahoo.co.uk',
		contact: {
			unit: '1',
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3'
		},
		notes: [],
		jobs: ['534', '434', '877']
	},
	{
		id: '123',
		isPrimary: false,
		isBlacklist: false,
		position: 'Tenant',
		firstName: 'Amanda',
		lastName: 'Harvey',
		phone: '438-827-5500',
		email: 'amanda.harvey@gmail.com',
		contact: {
			unit: '2',
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3'
		},
		notes: [
			{
				id: '123',
				type_id: 'SERVICE',
				author: {
					id: '123',
					firstName: 'T1.',
					lastName: 'Duncan',
				},
				value: 'Has sensitive floor',
				date_created: 1685627246,
			}
		],
		jobs: ['534', '877']
	},
	{
		id: '123',
		isPrimary: false,
		isBlacklist: true,
		position: 'Tenant',
		firstName: 'Jean',
		lastName: 'Pierre',
		phone: '438-810-5500',
		email: 'jp.millan@videotron.ca',
		contact: {
			unit: '3',
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3'
		},
		notes: [],
		jobs: ['534', '434', '877']
	},
	{
		id: '123',
		isPrimary: false,
		isBlacklist: false,
		position: 'Tenant',
		firstName: 'Peter',
		lastName: 'Li',
		phone: '514-121-1316',
		email: 'peter-li@hotmail.ca',
		contact: {
			unit: '4',
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
		},
		notes: [],
		jobs: []
	},
	{
		id: '123',
		isPrimary: false,
		isBlacklist: false,
		position: 'Tenant',
		firstName: 'Liu',
		lastName: 'Yen',
		phone: '514-271-1316',
		email: 'liu.liu@yahoo.ca',
		contact: {
			unit: '5',
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
		},
		notes: [],
		jobs: ['534', '877']
	},
	{
		id: '123',
		isPrimary: false,
		isBlacklist: false,
		position: 'Tenant',
		firstName: 'Dinelson',
		lastName: 'San',
		phone: '514-271-1316',
		email: 'liu.liu@yahoo.ca',
		contact: {
			unit: '7',
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
		},
		notes: [],
		jobs: ['534', '877']
	},
	{
		id: '123',
		isPrimary: false,
		isBlacklist: false,
		position: 'Tenant',
		firstName: 'Simon',
		lastName: 'Wan',
		phone: '514-271-1316',
		email: 'liu.liu@yahoo.ca',
		contact: {
			unit: '8',
			address: '357 6e Av',
			country: 'Canada',
			city: 'Montreal',
			state: 'QC',
			zip: 'H3N2J3',
		},
		notes: [],
		jobs: ['534', '877']
	},
];

const CUSTOMER_SECTIONS = {
	ADD: 'ADD',
	VIEW: 'VIEW',
}

export const CustomerServiceLocationsCTA = ({ onClick }) => (
	<a href="#add-service-location" className="btn btn-primary" onClick={onClick}>
		<i className="bi bi-pin-map-fill me-1" /> Add service location
	</a>
);

const CustomerServiceLocations = ({ hasActiveCta = false, toggleCta = () => null }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);

	const fetchCustomerLocations = async () => {
		setLoading(true);
		setOptions(dummyData);
		setLoading(false);
	};

	React.useEffect(() => {
		fetchCustomerLocations();
	}, []);

	const handleCustomerClick = (invoiceId = '') => {
		setShowModal(true);
	};

	const toggleModal = () => {
		setShowModal(false);
		if (hasActiveCta) {
			toggleCta();
		}
	};

	const activeSection = React.useMemo(() => {
		let res = CUSTOMER_SECTIONS.VIEW;

		if (hasActiveCta) {
			res = CUSTOMER_SECTIONS.ADD;
			setShowModal(true);
		}

		return res;
	}, [ hasActiveCta ]);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			{showModal && (
				<Modal onCloseRequest={toggleModal}>
					{activeSection === CUSTOMER_SECTIONS.VIEW && (
						'ServiceLocationView'
					)}
					{activeSection === CUSTOMER_SECTIONS.ADD && (
						'ServiceLocationCreate'
					)}
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
									placeholder="Search service locations"
									aria-label="Search service locations"
								/>
							</div>
						</form>
					</div>
				</div>
				<div className="table-responsive datatable-custom position-relative">
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
									<th rowSpan={1} colSpan={1} style={{ width: "45px" }} />
									<th rowSpan={1} colSpan={1} style={{ width: "279.656px" }}>
										Name
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "175.938px" }}>
										Phone
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "151.344px" }}>
										Email
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "200.625px" }}>
										Address
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Unit
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										City, State/Prov
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Zip/Post Code
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Qty jobs
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }}>
										Notes
									</th>
									<th rowSpan={1} colSpan={1} style={{ width: "113.938px" }} />
								</tr>
							</thead>
							<tbody>
								{options.map((payload) => (
									<tr role="row" className="odd" onClick={(e) => console.log(payload?.id)}>
										<td className="table-column-pe-0" />
										<td className="table-column-ps-0">
											<span className="d-flex align-items-center" href="#">
												<div className="ms-3">
													<span className="d-block h5 text-inherit mb-0">
														{payload?.firstName} {payload?.lastName}
														{payload?.isPrimary && (
															<>
																&nbsp;
																<i className="bi-patch-check-fill text-primary" />
															</>
														)}
														{payload?.isBlacklist && (
															<>
																&nbsp;
																<i className="bi-patch-exclamation-fill text-danger" />
															</>
														)}
													</span>
													{payload?.position && (
														<span className="d-block fs-5 text-body">
															{payload?.position}
														</span>
													)}
												</div>
											</span>
										</td>
										<td>
											{payload?.phone}
										</td>
										<td>
											{payload?.email}
										</td>
										<td>
											{payload?.contact?.address}
										</td>
										<td>
											{payload?.contact?.unit}
										</td>
										<td>
											{payload?.contact?.city}, {payload?.contact?.state}
										</td>
										<td>
											{payload?.contact?.zip}
										</td>
										<td>
											{(payload?.jobs || []).length || 0}
										</td>
										<td>
											{(payload?.notes && payload?.notes.length ? payload?.notes[0].value : '')}
										</td>
										<td>
											<button
												type="button"
												className="btn btn-white btn-sm"
												data-bs-toggle="modal"
												data-bs-target="#editUserModal"
											>
												<i className="bi-pencil-fill me-1" /> Edit
											</button>
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

export default CustomerServiceLocations;

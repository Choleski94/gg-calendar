import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import utils from '@utils';
import config from '@config';
import { withPrivateRouter } from '@utils/hocs';
import formatMessage from '@utils/formatMessage';
import { Modal, Layout, RatingStars } from '@components';

import ReviewStats from './ReviewStats';

const DEFAULT_STARS_COUNT = {
	'0': 0,
	'1': 0,
	'2': 0,
	'3': 0,
	'4': 0,
	'5': 0,
};

const options = [
	{
		job: {
			id: '541232',
			status: 'PUBLISHED',
			date_created: 'Aug 17, 2020, 5:48',
			equipments: [
				{
					type: 'GAS',
				},
			],
		},
		score: 5,
		customer: {
			language: 'en',
			firstName: 'Bob',
			lastName: 'Evian',
			email: 'bobby@gmail.com',
			phone: '',
		},
		techs: [
			{
				id: 't123',
				language: 'en',
				firstName: 'Julian',
				lastName: 'Guzman',
			},
		],
	},
	{
		job: {
			id: '916211',
			status: 'DRAFT',
			date_created: 'Aug 17, 2020, 5:48',
			equipments: [
				{
					type: 'FRIDGE',
				},
			],
		},
		score: 4,
		customer: {
			language: 'es',
			firstName: 'Alfred',
			lastName: 'Henandez',
			email: 'alfred.hernandez@yahoo.ca',
			phone: '',
		},
		techs: [
			{
				id: 't123',
				language: 'en',
				firstName: 'Peter',
				lastName: 'Guzman',
			},
		],
	},
	{
		job: {
			id: '723654',
			status: 'PUBLISHED',
			date_created: 'Aug 17, 2020, 5:48',
			equipments: [
				{
					type: 'FRIDGE',
				},
			],
		},
		score: 3,
		customer: {
			language: 'en',
			firstName: 'Amanda',
			lastName: 'Harvey',
			email: 'amanda.harvey@gmail.com',
			phone: '',
		},
		techs: [
			{
				id: 't123',
				language: 'en',
				firstName: 'Julian',
				lastName: 'Guzman',
			},
		],
	},
	{
		job: {
			id: '623870',
			status: 'DRAFT',
			date_created: 'Aug 17, 2020, 5:48',
			equipments: [
				{
					type: 'GAS',
				},
			],
		},
		score: 4,
		customer: {
			language: 'en',
			firstName: 'Yi',
			lastName: 'Nguyen',
			email: 'nguyen.yi@hotmail.com',
			phone: '',
		},
		techs: [
			{
				id: 't123',
				language: 'en',
				firstName: 'Alfredo',
				lastName: 'Ricardo',
			},
		],
	},
	{
		job: {
			id: '262624',
			status: 'DRAFT',
			date_created: 'Aug 17, 2020, 5:48',
			equipments: [
				{
					type: 'GAS',
				},
			],
		},
		score: 5,
		customer: {
			language: 'en',
			firstName: 'Philips',
			lastName: 'Williams',
			email: 'philips-willo@hotmail.com',
			phone: '',
		},
		techs: [
			{
				id: 't123',
				language: 'en',
				firstName: 'Alfredo',
				lastName: 'Ricardo',
			},
		],
	},
	{
		job: {
			id: '366654',
			status: 'DRAFT',
			date_created: 'Aug 17, 2020, 5:48',
			equipments: [
				{
					type: 'GAS',
				},
			],
		},
		score: 4,
		customer: {
			language: 'en',
			firstName: 'James',
			lastName: 'Richard',
			email: 'james-richard@videotron.com',
			phone: '',
		},
		techs: [
			{
				id: 't123',
				language: 'en',
				firstName: 'Alfredo',
				lastName: 'Ricardo',
			},
		],
	},
];

const ReviewsPage = () => {
	const [data, setData] = React.useState({});
	const [reviewId, setReviewId] = React.useState('');

	const [showModal, setShowModal] = React.useState(false);

	const toggleCreateUser = () => setShowModal(!showModal);

	const onCreateReviewClick = (e) => {
		e.preventDefault();
		toggleCreateUser();
	};

	const onReviewClick = (e, currentReviewId) => {
		e.preventDefault();
		setReviewId(currentReviewId);
		// Fetch selected review data.
		// Set data
		setData({
			id: currentReviewId,
			name: 'Follow Up',
		});
	};

	const hasValidReview = React.useMemo(() => (
		Boolean(Object.keys(data).length)
	), [data]);

	const reviewStats = React.useMemo(() => {
		const totalCount = (options || []).length;

		const countObj = options.reduce((agg, { score }) => {
			const currentKey = String(score);
			return Object.assign(agg, {
				[currentKey] : (
					agg[currentKey] ? agg[currentKey] + 1 : 1
				),
			});
		}, DEFAULT_STARS_COUNT);

		const percentObj = Object.keys(countObj || DEFAULT_STARS_COUNT).reduce((agg, currentKey) => {
			const currentPercentage = (countObj[currentKey] * 100) / totalCount;
			return Object.assign(agg, {
				[currentKey] : (
					currentPercentage ? 
					Number(currentPercentage.toFixed(2)) : 
					currentPercentage
				),
			});
		}, {});

		const totalStars = Object.keys(countObj || DEFAULT_STARS_COUNT).reduce((agg, currentKey) => {
			agg += Number(currentKey) * countObj[currentKey];
			return agg;
		}, 0);

		const aggregatedCountPercent = Object.keys(countObj || DEFAULT_STARS_COUNT).reduce((agg, currentKey) => (
			Object.assign(agg, {
				[currentKey]: {
					count: countObj[currentKey],
					percent: percentObj[currentKey],
				}
			})
		), {})

		return {
			totalCount,
			...aggregatedCountPercent,
		};
	}, [options]);

	return (
		<Layout>
			{/* Page Header */}
			<div className="page-header">
				<div className="row align-items-end">
					<div className="col-sm mb-2 mb-sm-0">
						<h1 className="page-header-title">
							Manage Reviews
						</h1>
					</div>
				</div>
			</div>
			{/* End Page Header */}
			{/* Page Metrics */}
			<div className="row">
				<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
					<div className="card h-100">
						<div className="card-body">
							<h6 className="card-subtitle mb-2">Total reviews</h6>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="js-counter display-4 text-dark" data-value={24}>
										24
									</span>
									<span className="text-body fs-5 ms-1">from 22</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 5.0%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
					<div className="card h-100">
						<div className="card-body">
							<h6 className="card-subtitle mb-2">Active reviews</h6>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="js-counter display-4 text-dark" data-value={12}>
										12
									</span>
									<span className="text-body fs-5 ms-1">from 11</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 1.2%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
					<div className="card h-100">
						<div className="card-body">
							<h6 className="card-subtitle mb-2">New/returning</h6>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="js-counter display-4 text-dark" data-value={56}>
										56
									</span>
									<span className="display-4 text-dark">%</span>
									<span className="text-body fs-5 ms-1">from 48.7</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-danger text-danger p-1">
										<i className="bi-graph-down" /> 2.8%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
					<div className="card h-100">
						<div className="card-body">
							<h6 className="card-subtitle mb-2">Active reviews</h6>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="js-counter display-4 text-dark" data-value={28}>
										28
									</span>
									<span className="display-4 text-dark">%</span>
									<span className="text-body fs-5 ms-1">from 28.6%</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-secondary text-secondary p-1">
										0.0%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="card mb-3 mb-lg-5">
				<div className="card-body">
					<ReviewStats options={options} />
				</div>
			</div>
			<div className="card">
				<div className="card-header card-header-content-md-between">
					<div className="mb-2 mb-md-0">
						<form>
							<div className="input-group input-group-merge input-group-flush">
								<div className="input-group-prepend input-group-text">
									<i className="bi-search" />
								</div>
								<input
									type="search"
									id="datatableSearch"
									className="form-control"
									aria-label="Search reviews"
									placeholder="Search reviews"
								/>
							</div>
						</form>
					</div>
					<div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
						<div className="dropdown">
							<button
								type="button"
								id="usersExportDropdown"
								className="btn btn-white btn-sm dropdown-toggle w-100"
							>
								<i className="bi-download me-2" /> Export
							</button>
							<div
								className="dropdown-menu dropdown-menu-sm-end"
								aria-labelledby="usersExportDropdown"
							>
								<span className="dropdown-header">Options</span>
								<a
									id="export-copy"
									className="dropdown-item"
								>
									<img
										className="avatar avatar-xss avatar-4x3 me-2"
										src="/assets/svg/illustrations/copy-icon.svg"
										alt="Image Description"
									/>
									Copy
								</a>
								<a
									id="export-print"
									className="dropdown-item"
								>
									<img
										className="avatar avatar-xss avatar-4x3 me-2"
										src="/assets/svg/illustrations/print-icon.svg"
										alt="Image Description"
									/>
									Print
								</a>
								<div className="dropdown-divider" />
								<span className="dropdown-header">Download options</span>
								<a
									id="export-excel"
									className="dropdown-item"
								>
									<img
										className="avatar avatar-xss avatar-4x3 me-2"
										src="/assets/svg/brands/excel-icon.svg"
										alt="Image Description"
									/>
									Excel
								</a>
								<a
									id="export-csv"
									className="dropdown-item"
								>
									<img
										className="avatar avatar-xss avatar-4x3 me-2"
										src="/assets/svg/components/placeholder-csv-format.svg"
										alt="Image Description"
									/>
									.CSV
								</a>
								<a
									id="export-pdf"
									className="dropdown-item"
								>
									<img
										className="avatar avatar-xss avatar-4x3 me-2"
										src="/assets/svg/brands/pdf-icon.svg"
										alt="Image Description"
									/>
									PDF
								</a>
							</div>
						</div>
						<div className="tom-select-custom tom-select-custom-end">
							<select
								className="js-select js-datatable-filter form-select form-select-sm tomselected ts-hidden-accessible"
								id="tomselect-1"
								tabIndex={-1}
							>
								<option value="Published">Published</option>
								<option value="Pending">Pending</option>
								<option value="null" selected>
									All
								</option>
							</select>
							<div className="ts-wrapper js-select js-datatable-filter form-select form-select-sm single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
								<div className="ts-control">
									<div data-value="null" className="item" data-ts-item="true">
										All
									</div>
								</div>
								<div className="tom-select-custom tom-select-custom-end">
									<div
										className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
										style={{ display: "none" }}
									>
										<div
											role="listbox"
											tabIndex={-1}
											className="ts-dropdown-content"
											id="tomselect-1-ts-dropdown"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="table-responsive datatable-custom">
					<div id="datatable_wrapper" className="dataTables_wrapper no-footer">
						<div className="dt-buttons" />
						<div id="datatable_filter" className="dataTables_filter">
							<label>
								Search:
								<input type="search" aria-controls="datatable" />
							</label>
						</div>
						<table id="datatable" role="grid" className="table table-borderless table-thead-bordered table-nowrap card-table dataTable no-footer">
							<thead className="thead-light">
								<tr role="row">
									<th rowSpan={1} colSpan={1} style={{ width: "45px" }} />
									<th
										rowSpan={1} colSpan={1}
										style={{ width: "268.453px" }}
									>
										Job Id
									</th>
									<th
										rowSpan={1} colSpan={1}
										style={{ width: "247.031px" }}
									>
										Reviewer
									</th>
									<th
										rowSpan={1} colSpan={1}
										style={{ width: "387.281px" }}
									>
										Review
									</th>
									<th
										rowSpan={1} colSpan={1}
										style={{ width: "387.281px" }}
									>
										Tech(s)
									</th>
									<th
										rowSpan={1} colSpan={1}
										style={{ width: "387.281px" }}
									>
										Equipment(s)
									</th>
									<th
										rowSpan={1} colSpan={1}
										style={{ width: "194.328px" }}
									>
										Job Date
									</th>
									<th
										rowSpan={1} colSpan={1}
										style={{ width: "106.172px" }}
									>
										Status
									</th>
									<th
										rowSpan={1} colSpan={1}
										style={{ width: "81.203px" }}
									>
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{options.map((payload) => (
									<tr role="row" className="odd">
										<td className="table-column-pe-0" />
										<td>
											<a
												className="d-flex align-items-center"
												href="user-profile.html"
											>
												<div className="flex-grow-1 mt-3">
													#{payload?.job?.id}
												</div>
											</a>
										</td>
										<td>
											<div className="flex-grow-1">
												<span className="card-title h5 text-inherit">
													{payload?.customer?.firstName} {payload?.customer?.lastName} 
												</span>
												<span className="d-block fs-6 text-body">
													{payload?.customer?.email}
												</span>
											</div>
										</td>
										<td>
											<div className="flex-grow-1 mt-2">
												<RatingStars score={payload?.score} />
											</div>
										</td>
										<td>
											{payload?.techs && payload?.techs?.length ? (
												payload?.techs?.map(({ firstName, lastName }) => (
													<a
														href="user-profile.html"
														className="d-flex align-items-center"
													>
														<div className="flex-grow-2">
															{firstName} {lastName}
														</div>
													</a>
												))
											) : (
												'N/A'
											)}
										</td>
										<td>
											{payload?.job?.equipments && payload?.job?.equipments?.length ? (
												payload?.job?.equipments?.map((currentEqpt) => (
													<div className="flex-grow-2">
														{(currentEqpt.type === 'FRIDGE') && (
															<>
																<span className="legend-indicator bg-info" />
																Fridge
															</>
														)}
														{currentEqpt.type === 'GAS' && (
															<>
																<span className="legend-indicator bg-danger" />
																Gas
															</>
														)}
													</div>
												))
											) : (
												'N/A'
											)}
										</td>
										<td>
											<div className="flex-grow-2">
												{payload?.job?.date_created ? (
													payload?.job?.date_created
												) : (
													'N/A'
												)}
											</div>
										</td>
										<td>
											{payload?.job?.status ? (
												<>
													{(payload?.job?.status === 'PUBLISHED') && (
														<span className="badge bg-soft-success text-success">
															Published
														</span>
													)}
													{(payload?.job?.status === 'DRAFT') && (
														<span className="badge bg-soft-warning text-warning">
															Draft
														</span>
													)}
												</>
											) : (
												'N/A'
											)}
										</td>
										<td>
											<div className="hs-unfold">
												<button
													type="button"
													id="settingsDropdown1"
													className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
												>
													<i className="bi-three-dots-vertical" />
												</button>
												<div
													className="dropdown-menu dropdown-menu-end mt-1"
													aria-labelledby="settingsDropdown1"
												>
													<span className="dropdown-header">Settings</span>
													<a
														className="dropdown-item"
														href="ecommerce-manage-reviews.html#"
													>
														<i className="bi-pencil-fill dropdown-item-icon" />
														Edit
													</a>
													<a
														className="dropdown-item"
														href="ecommerce-manage-reviews.html#"
													>
														<i className="bi-upload dropdown-item-icon" /> {/* */}
														Publish
													</a>
													<div className="dropdown-divider" />
													<span className="dropdown-header">Feedback</span>
													<a
														className="dropdown-item"
														href="ecommerce-manage-reviews.html#"
													>
														<i className="bi-reply dropdown-item-icon" /> Reply
													</a>
												</div>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div
							className="dataTables_info"
							id="datatable_info"
							role="status"
							aria-live="polite"
						>
							Showing 1 to 5 of 7 entries
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
										data-hs-tom-select-options='{ "searchInDropdown": false, "hideSearch": true }'
										tabIndex={-1}
									>
										<option value={5}>5</option>
										<option value={12}>12</option>
										<option value={7} selected>
											7
										</option>
									</select>
									<div className="ts-wrapper js-select form-select form-select-borderless w-auto single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
										<div className="ts-control">
											<div data-value={7} className="item" data-ts-item="true">
												7
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
								<span id="datatableWithPaginationInfoTotalQty">7</span>
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
			{/* End Page Review Table */}
		</Layout>
	);
}

export default withPrivateRouter(ReviewsPage);

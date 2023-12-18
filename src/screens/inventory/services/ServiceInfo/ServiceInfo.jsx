import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Modal, Layout, Breadcrumb, GetSupport } from '@components';

const readOnly = false;

const SERVICE_INFO_BREADCRUMB_OPTIONS = [
	{
		path: '/inventory',
		value: 'Inventory'
	},
	{
		path: '/inventory/services',
		value: 'Services'
	},
	{
		path: '/inventory/services/102-10-A',
		value: '#102-10-A'
	},
];

const SUPPORTED_SECTIONS = {
	FILES: 'FILES',
	NOTES: 'NOTES',
	INVOICE: 'INVOICE',
	ACTIVITY: 'ACTIVITY',
	PROJECTS: 'PROJECTS',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SECTIONS.PROJECTS,
		value: 'Projects',
	},
	{
		key: SUPPORTED_SECTIONS.FILES,
		value: 'Files',
	},
	{
		key: SUPPORTED_SECTIONS.ACTIVITY,
		value: 'Activity',
	},
	{
		key: SUPPORTED_SECTIONS.NOTES,
		value: 'Notes',
	},
	{
		key: SUPPORTED_SECTIONS.INVOICE,
		value: 'Invoice',
	},
];

const DEFAULT_CTA_STATES = Object.keys(SUPPORTED_SECTIONS).reduce((agg, ctaKey) => (
	Object.assign(agg, { [ctaKey]: false })
), {});

const ServiceInfo = ({ jobId = '' }) => {
	const [ showModal, setShowModal ] = React.useState(false);
	const [ ctas, setCtas ] = React.useState(DEFAULT_CTA_STATES);
	const [ activeSection, setActiveSection] = React.useState(SUPPORTED_SECTIONS.PROJECTS);

	const onSectionClick = (e, currentSection = '') => {
		e.preventDefault();
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const toggleAddUser = () => setShowModal(!showModal);

	const onAddServiceClick = (e) => {
		e.preventDefault();
		toggleAddUser();
	};

	const toggleCta = (currentCta = '') => {
		setCtas({
			...ctas,
			[currentCta]: !ctas[currentCta]
		});
	};

	const onCtaClick = (e, currentCta = '') => {
		e.preventDefault();
		toggleCta(currentCta);
	};

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-lg mb-3 mb-lg-0 mb-4">
									<Breadcrumb options={SERVICE_INFO_BREADCRUMB_OPTIONS} />
									<h1 className="page-header-title">
										Service #102-10-A
									</h1>
								</div>
								<div className="col-lg-auto">
									<GetSupport />
									<button type="button" className="btn btn-sm btn-outline-danger" onClick={onAddServiceClick}>
										<i className="bi bi-trash" />
										&nbsp;
										Delete service
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>

			<div className="row mt-15 justify-content-lg-center">
				<div className="col-lg-8">
					<div className="card mb-3 mb-lg-5">
						<div className="card-header">
							<h4 className="card-header-title">Product information</h4>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-lg-11">
									<div className="mb-4">
										<label className="form-label">
											Name
										</label>
										<input type="text" className="form-control mb-3" placeholder="Service name" aria-label="Service name" disabled={readOnly} />
									</div>
								</div>
								<div className="col-lg-1">
									<div className="mb-4">
										<label className="form-label">
											Availability
										</label>
										<div className="form-check form-switch">
											<input className="form-check-input" type="checkbox" defaultChecked />
											<label className="form-check-label" htmlFor="stocksCheckbox1" />
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="mb-4">
										<label className="form-label">
											Category
										</label>
										<div className="tom-select-custom">
											<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
												<div className="ts-control">
													<div className="item">
														Maintenance
													</div>
												</div>
												<div className="tom-select-custom" />
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="mb-4">
										<label className="form-label">
											Code
										</label>
										&nbsp;
										<span className="form-label-secondary">
											(Optional)
										</span>
										<input type="text" className="form-control mb-3" placeholder="SRV-A30W" aria-label="SRV-A30W" disabled={readOnly} />
									</div>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="row">
									<div className="col-lg-6">
										<div className="mb-4">
											<label htmlFor="weightLabel" className="form-label">
												Price
											</label>
											<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
												<div className="input-group-prepend input-group-text">
													$
												</div>
												<input
													type="text"
													name="weightName"
													aria-label={125.00}
													placeholder={125.00}
													defaultValue="125.00"
													className="form-control"
												/>
												<div className="input-group-append">
													<div className="tom-select-custom tom-select-custom-end">
														<select tabIndex={-1} className="js-select form-select tomselected ts-hidden-accessible">
															<option value="usd">USD</option>
															<option value="cad" selected>
																CAD
															</option>
														</select>
														<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
															<div className="ts-control">
																<div data-value="cad" className="item" data-ts-item>
																	CAD
																</div>
															</div>
															<div className="tom-select-custom" />
														</div>
													</div>
												</div>
											</div>
											<small className="form-text">
												Used to calculate shipping rates at checkout and label prices during
												fulfillment.
											</small>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="mb-4">
											<label className="form-label">
												Task time
											</label>
											&nbsp;
											<span className="form-label-secondary">
												(Optional)
											</span>
											<div className="input-group">
												<input
													type="text"
													aria-label={1}
													placeholder={1}
													defaultValue="1"
													name="weightName"
													className="form-control"
												/>
												<div className="input-group-append">
													<div className="tom-select-custom tom-select-custom-end">
														<select tabIndex={-1} className="js-select form-select tomselected ts-hidden-accessible">
															<option value="usd">Min</option>
															<option value="cad" selected>
																Hour
															</option>
														</select>
														<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
															<div className="ts-control">
																<div data-value="cad" className="item" data-ts-item>
																	Hour
																</div>
															</div>
															<div className="tom-select-custom" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/*
									<div className="col-lg-12">
										<div className="mb-4">
											<label htmlFor="weightLabel" className="form-label">
												Cost
											</label>
											&nbsp;
											<span className="form-label-secondary">
												(Optional)
											</span>
											<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
												<div className="input-group-prepend input-group-text">
													$
												</div>
												<input
													type="text"
													name="weightName"
													aria-label={125.00}
													placeholder={125.00}
													defaultValue="125.00"
													className="form-control"
												/>
												<div className="input-group-append">
													<div className="tom-select-custom tom-select-custom-end">
														<select tabIndex={-1} className="js-select form-select tomselected ts-hidden-accessible">
															<option value="usd">USD</option>
															<option value="cad" selected>
																CAD
															</option>
														</select>
														<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
															<div className="ts-control">
																<div data-value="cad" className="item" data-ts-item>
																	CAD
																</div>
															</div>
															<div className="tom-select-custom" />
														</div>
													</div>
												</div>
											</div>
											<small className="form-text">
												Used to calculate internal operational costs.
											</small>
										</div>
									</div>
									*/}
								</div>
							</div>
							<label className="form-label">
								Description
								&nbsp;
								<span className="form-label-secondary">(Optional)</span>
							</label>
							<div className="quill-custom">
								<div className="ql-toolbar ql-snow">
									<span className="ql-formats">
										<button type="button" className="ql-bold">
											<svg viewBox="0 0 18 18">
												<path
													className="ql-stroke"
													d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
												/>
												<path
													className="ql-stroke"
													d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
												/>
											</svg>
										</button>
										<button type="button" className="ql-italic">
											<svg viewBox="0 0 18 18">
												<line
													className="ql-stroke"
													x1={7}
													x2={13}
													y1={4}
													y2={4}
												/>
												<line
													className="ql-stroke"
													x1={5}
													x2={11}
													y1={14}
													y2={14}
												/>
												<line
													className="ql-stroke"
													x1={8}
													x2={10}
													y1={14}
													y2={4}
												/>
											</svg>
										</button>
										<button type="button" className="ql-underline">
											<svg viewBox="0 0 18 18">
												<path
													className="ql-stroke"
													d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
												/>
												<rect
													className="ql-fill"
													height={1}
													rx="0.5"
													ry="0.5"
													width={12}
													x={3}
													y={15}
												/>
											</svg>
										</button>
										<button type="button" className="ql-strike">
											<svg viewBox="0 0 18 18">
												<line
													className="ql-stroke ql-thin"
													x1="15.5"
													x2="2.5"
													y1="8.5"
													y2="9.5"
												/>
												<path
													className="ql-fill"
													d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"
												/>
												<path
													className="ql-fill"
													d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"
												/>
											</svg>
										</button>
										<button type="button" className="ql-link">
											<svg viewBox="0 0 18 18">
												<line
													className="ql-stroke"
													x1={7}
													x2={11}
													y1={7}
													y2={11}
												/>
												<path
													className="ql-even ql-stroke"
													d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
												/>
												<path
													className="ql-even ql-stroke"
													d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
												/>
											</svg>
										</button>
										<button type="button" className="ql-image">
											<svg viewBox="0 0 18 18">
												<rect
													className="ql-stroke"
													height={10}
													width={12}
													x={3}
													y={4}
												/>
												<circle className="ql-fill" cx={6} cy={7} r={1} />
												<polyline
													className="ql-even ql-fill"
													points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
												/>
											</svg>
										</button>
										<button type="button" className="ql-blockquote">
											<svg viewBox="0 0 18 18">
												<rect
													className="ql-fill ql-stroke"
													height={3}
													width={3}
													x={4}
													y={5}
												/>
												<rect
													className="ql-fill ql-stroke"
													height={3}
													width={3}
													x={11}
													y={5}
												/>
												<path
													className="ql-even ql-fill ql-stroke"
													d="M7,8c0,4.031-3,5-3,5"
												/>
												<path
													className="ql-even ql-fill ql-stroke"
													d="M14,8c0,4.031-3,5-3,5"
												/>
											</svg>
										</button>
										<button type="button" className="ql-code">
											<svg viewBox="0 0 18 18">
												<polyline
													className="ql-even ql-stroke"
													points="5 7 3 9 5 11"
												/>
												<polyline
													className="ql-even ql-stroke"
													points="13 7 15 9 13 11"
												/>
												<line
													className="ql-stroke"
													x1={10}
													x2={8}
													y1={5}
													y2={13}
												/>
											</svg>
										</button>
										<button type="button" className="ql-list" value="bullet">
											<svg viewBox="0 0 18 18">
												<line
													className="ql-stroke"
													x1={6}
													x2={15}
													y1={4}
													y2={4}
												/>
												<line
													className="ql-stroke"
													x1={6}
													x2={15}
													y1={9}
													y2={9}
												/>
												<line
													className="ql-stroke"
													x1={6}
													x2={15}
													y1={14}
													y2={14}
												/>
												<line
													className="ql-stroke"
													x1={3}
													x2={3}
													y1={4}
													y2={4}
												/>
												<line
													className="ql-stroke"
													x1={3}
													x2={3}
													y1={9}
													y2={9}
												/>
												<line
													className="ql-stroke"
													x1={3}
													x2={3}
													y1={14}
													y2={14}
												/>
											</svg>
										</button>
									</span>
								</div>
								<div
									className="js-quill ql-container ql-snow hs-quill-initialized"
									style={{ height: "15rem" }}
								>
									<div
										className="ql-editor"
										data-gramm="false"
										contentEditable="true"
										data-placeholder="Type your description..."
									>
										<p>
											Train hard. Stay dry. This soccer jacket is made of soft,
											sweat-wicking fabric that keeps you moving on the practice
											field. Stretch panels at the elbows and sides give you a
											full range of motion as you work.
										</p>
										<p>
											<br />
										</p>
										<h3>Specifications</h3>
										<ul>
											<li>
												Regular fit is wider at the body, with a straight
												silhouette
											</li>
											<li>Ribbed stand-up collar</li>
											<li>Long sleeves with ribbed cuffs</li>
											<li>100% polyester doubleknit</li>
											<li>
												Front zip pockets; Full zip; Ribbing details; Ribbed hem
											</li>
										</ul>
									</div>
									<div
										className="ql-clipboard"
										contentEditable="true"
										tabIndex={-1}
									/>
									<div className="ql-tooltip ql-hidden">
										<a
											className="ql-preview"
											rel="noopener noreferrer"
											target="_blank"
											href="about:blank"
										/>
										<input
											type="text"
											data-formula="e=mc^2"
											data-link="https://quilljs.com"
											data-video="Embed URL"
										/>
										<a className="ql-action" />
										<a className="ql-remove" />
									</div>
								</div>
							</div>
						</div>
					</div>



					<div className="js-add-field card mb-3 mb-lg-5">
						<div className="card-header card-header-content-sm-between">
							<h4 className="card-header-title mb-2 mb-sm-0">
								Variants
							</h4>
							<div className="d-sm-flex align-items-center gap-2">
								<a
									className="js-create-field btn btn-ghost-secondary btn-sm"
								>
									<i className="bi-plus" /> Add variant
								</a>
							</div>
						</div>
						<div className="table-responsive datatable-custom">
							<div className="dataTables_wrapper no-footer">
								<div className="dataTables_length" id="datatable_length" />
								<div id="datatable_filter" className="dataTables_filter">
									<label>
										Search:
										<input
											type="search"
											className
											placeholder
											aria-controls="datatable"
										/>
									</label>
								</div>
								<table
									role="grid"
									id="datatable"
									aria-describedby="datatable_info"
									className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer"
								>
									<thead className="thead-light">
										<tr role="row">
											<th
												className="sorting"
												tabIndex={0}
												aria-controls="datatable"
												rowSpan={1}
												colSpan={1}
												aria-label="Code: activate to sort column ascending"
											>
												Code
											</th>
											<th
												className="table-column-ps-0 sorting"
												tabIndex={0}
												aria-controls="datatable"
												rowSpan={1}
												colSpan={1}
												aria-label="Price: activate to sort column ascending"
											>
												Price
											</th>
											<th
												className="table-column-ps-0 sorting"
												tabIndex={0}
												aria-controls="datatable"
												rowSpan={1}
												colSpan={1}
												aria-label="Availability: activate to sort column ascending"
											>
												Availability
											</th>
											<th />
										</tr>
									</thead>
									<tbody>
										<tr role="row" className="odd">
											<th>
												<input
													type="text"
													className="form-control"
													defaultValue="SRV-A30W-01"
													style={{ minWidth: "6rem" }}
												/>
											</th>
											<th className="table-column-ps-0">
												<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
													<div className="input-group-prepend input-group-text">$</div>
													<input
														type="text"
														name="weightName"
														aria-label={125}
														placeholder={125}
														className="form-control"
														defaultValue={125.0}
													/>
													<div className="input-group-append">
														<div className="tom-select-custom tom-select-custom-end">
															<select
																tabIndex={-1}
																className="js-select form-select tomselected ts-hidden-accessible"
															>
																<option value="usd">USD</option>
																<option value="cad">CAD</option>
															</select>
															<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
																<div className="ts-control">
																	<div data-value="cad" className="item" data-ts-item="true">
																		CAD
																	</div>
																</div>
																<div className="tom-select-custom" />
															</div>
														</div>
													</div>
												</div>
											</th>
											<th className="table-column-ps-0">
												<div className="form-check form-switch">
													<input className="form-check-input" type="checkbox" defaultChecked />
													<label className="form-check-label" htmlFor="stocksCheckbox1" />
												</div>
											</th>
											<th className="table-column-ps-0">
												<div
													className="btn-group float-end"
													role="group"
													aria-label="Edit group"
												>
													<a className="btn btn-white" href="#">
														<i className="bi-trash" /> Delete
													</a>
												</div>
											</th>
										</tr>
										<tr role="row" className="even">
											<th>
												<input
													type="text"
													className="form-control"
													defaultValue="SRV-A30W-02"
													style={{ minWidth: "3rem" }}
												/>
											</th>
											<th className="table-column-ps-0">
												<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
													<div className="input-group-prepend input-group-text">$</div>
													<input
														type="text"
														name="weightName"
														aria-label={125}
														placeholder={125}
														className="form-control"
														defaultValue={125.0}
													/>
													<div className="input-group-append">
														<div className="tom-select-custom tom-select-custom-end">
															<select
																tabIndex={-1}
																className="js-select form-select tomselected ts-hidden-accessible"
															>
																<option value="usd">USD</option>
																<option value="cad">CAD</option>
															</select>
															<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
																<div className="ts-control">
																	<div data-value="cad" className="item" data-ts-item="true">
																		CAD
																	</div>
																</div>
																<div className="tom-select-custom" />
															</div>
														</div>
													</div>
												</div>
											</th>
											<th className="table-column-ps-0">
												<div className="form-check form-switch">
													<input className="form-check-input" type="checkbox" defaultChecked />
													<label className="form-check-label" htmlFor="stocksCheckbox1" />
												</div>
											</th>
											<th className="table-column-ps-0">
												<div
													className="btn-group float-end"
													role="group"
													aria-label="Edit group"
												>
													<a className="btn btn-white" href="#">
														<i className="bi-trash" /> Delete
													</a>
												</div>
											</th>
										</tr>
										<tr role="row" className="odd">
											<th>
												<input
													type="text"
													className="form-control"
													defaultValue="SRV-A30W-03"
													style={{ minWidth: "6rem" }}
												/>
											</th>
											<th className="table-column-ps-0">
												<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
													<div className="input-group-prepend input-group-text">$</div>
													<input
														type="text"
														name="weightName"
														aria-label={125}
														placeholder={125}
														className="form-control"
														defaultValue={125.0}
													/>
													<div className="input-group-append">
														<div className="tom-select-custom tom-select-custom-end">
															<select
																tabIndex={-1}
																className="js-select form-select tomselected ts-hidden-accessible"
															>
																<option value="usd">USD</option>
																<option value="cad">CAD</option>
															</select>
															<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
																<div className="ts-control">
																	<div data-value="cad" className="item" data-ts-item="true">
																		CAD
																	</div>
																</div>
																<div className="tom-select-custom" />
															</div>
														</div>
													</div>
												</div>
											</th>
											<th className="table-column-ps-0">
												<div className="form-check form-switch">
													<input className="form-check-input" type="checkbox" defaultChecked />
													<label className="form-check-label" htmlFor="stocksCheckbox1" />
												</div>
											</th>
											<th className="table-column-ps-0">
												<div
													className="btn-group float-end"
													role="group"
													aria-label="Edit group"
												>
													<a className="btn btn-white" href="#">
														<i className="bi-trash" /> Delete
													</a>
												</div>
											</th>
										</tr>
										<tr role="row" className="even">
											<th>
												<input
													type="text"
													className="form-control"
													defaultValue="SRV-A30W-04"
													style={{ minWidth: "6rem" }}
												/>
											</th>
											<th className="table-column-ps-0">
												<div className="input-group input-group-merge" style={{ minWidth: "7rem" }}>
													<div className="input-group-prepend input-group-text">$</div>
													<input
														type="text"
														name="weightName"
														aria-label={125}
														placeholder={125}
														className="form-control"
														defaultValue={125.0}
													/>
													<div className="input-group-append">
														<div className="tom-select-custom tom-select-custom-end">
															<select
																tabIndex={-1}
																className="js-select form-select tomselected ts-hidden-accessible"
															>
																<option value="usd">USD</option>
																<option value="cad">CAD</option>
															</select>
															<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
																<div className="ts-control">
																	<div data-value="cad" className="item" data-ts-item="true">
																		CAD
																	</div>
																</div>
																<div className="tom-select-custom" />
															</div>
														</div>
													</div>
												</div>
											</th>
											<th className="table-column-ps-0">
												<div className="form-check form-switch">
													<input className="form-check-input" type="checkbox" defaultChecked />
													<label className="form-check-label" htmlFor="stocksCheckbox1" />
												</div>
											</th>
											<th className="table-column-ps-0">
												<div
													className="btn-group float-end"
													role="group"
													aria-label="Edit group"
												>
													<a className="btn btn-white" href="#">
														<i className="bi-trash" /> Delete
													</a>
												</div>
											</th>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ServiceInfo;

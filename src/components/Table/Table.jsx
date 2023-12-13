import React from 'react';

import { isEven } from '@utils';
import { Card, Input } from '@components';
import useClickOutside from '@utils/hooks/useClickOutside';

import { 
	TableWrapper, 
	TableContainer, 
	TableComponent,
	TableQuickView,
	TableQuickViewHeader, 
	TableQuickViewSection, 
	TableQuickViewContainer, 
} from './Table.styled';
import { genId } from './utils';
import Pagination from './Pagination';
import useSortableData from './Table.controller';

const DEFAULT_PAGINATION = {
	endPage: 25,
	startPage: 0,
	currentPage: 1,
	resetPage: false,
	elementsPerPage: 25,
};

const filterCardStyle = {
	margin: '0',
	minWidth: '22rem',
	position: 'absolute',
	inset: '0px 0px auto auto',
	transform: 'translate(0px, 40px)',
};

const getTableClassName = (hasRowClick = false ) => [
	'table',
	(hasRowClick ? 'table-hover' : ''),
	'table-lg table-borderless',
	'table-thead-bordered table-nowrap',
	'table-align-middle card-table',
	'dataTable no-footer'
].join(' ');

const getClassNamesFor = (name, sortConfig) => {
	if (!sortConfig) return;
	return sortConfig.key === name ? sortConfig.direction : undefined;
};

const getClassName = (activeName) => {
	let res = 'fa fa-sort';
	if (activeName && activeName.length) {
		res = ((activeName === 'descending') ? ('fa fa-sort-down') : ('fa fa-sort-up'));
	}
	return res;
};

const getFilterClassName = (showFilter = false) => [
	'dropdown-menu',
	'dropdown-menu-sm-end',
	'dropdown-card',
	'card-dropdown-filter-centered',
	(showFilter ? 'show' : ''),
].join(' ');

const Table = ({ 
	data = [], 
	cta = null,
	title = '',
	height = '',
	headers = [],
	loading = false,
	component = null,
	filterTitle = '',
	defaultIdx = null,
	onRowClick = null, 
	withFilter = false,
	withExport = false,
	fullHeight = false,
	withoutBorder= false,
	withoutHover = false,
	withoutHeader = false,
	defaultActiveKeys = [],
	quickViewHeader = null,
	hidePagination = false, 
	searchPlaceholder = '',
	noDataMessage = 'No data to show',
	loadingDataMessage = 'Loading data.',
	elementsPerPage = DEFAULT_PAGINATION.elementsPerPage, 
}) => {
	const [ toggle, setToggle ] = React.useState('');
	// const [ options, setOptions ] = React.useState([]);
	const [ query, setQuery ] = React.useState({ search: '' });
	const [ showFilter, setShowFilter ] = React.useState(false);
	const [ activeKeys, setActiveKeys ] = React.useState(defaultActiveKeys);
	const [ pagination, setPagination ] = React.useState({ ...DEFAULT_PAGINATION, elementsPerPage });

	const filterRef = useClickOutside(() => setShowFilter(false))

	const { sortConfig, items = [], requestSort } = useSortableData(data);

	const headerKeys = React.useMemo(() => {
		let res = [];

		if (headers && headers.length) {
			res = headers.map(({ key }) => key);
		}

		return res;
	}, [ headers ]);

	React.useEffect(() => {
		if (!defaultActiveKeys?.length) {
			setActiveKeys(headerKeys);
		} else {
			setActiveKeys(defaultActiveKeys);
		}
	}, []);

	const toggleShowFilter = () => setShowFilter(!showFilter);

	const onShowFilterClick = (e) => {
		e.preventDefault();
		toggleShowFilter();
	};

	const onChange = (e) => setQuery({
		...query, 
		[e.target.name]: e.target.value
	})

	const resetPagination = () => setPagination(DEFAULT_PAGINATION);

	React.useEffect(() => {
		// console.log('New change............')
		// if (options && options.length) {
			// setOptions(options);
			if (pagination.currentPage > 1) resetPagination();
		// } 
	}, [ ...data ]);

	const indexOfLastOptions = pagination.currentPage * pagination.elementsPerPage;
	const indexOfFirstOptions = indexOfLastOptions - pagination.elementsPerPage;

	const setActivePage = (pageNumber = 0) => {
		if (pageNumber !== pagination.currentPage) {
			setPagination({
				...pagination,
				resetPage: false,
				currentPage: pageNumber,
				endPage: indexOfLastOptions,
				startPage: indexOfFirstOptions,
			});
		}
	};

	const toggleQuickView = (e, id, item) => {
		e.preventDefault();
		e.stopPropagation()
		setToggle(toggle.includes(id) ? '' : id);
		if (onRowClick) {
			onRowClick(e, item);
		}
	};

	const onFilter = (e, key) => {
		e.preventDefault();
		requestSort(key);
	};

	const activeItems = items.filter((payload) => (
		// Check if we have a valid query.
		(payload?.query && payload?.query?.length && query?.search && query?.search?.length) ? (
			payload?.query.toLowerCase().includes(
				query?.search.toLowerCase()
			)
		) : true
	)).slice(indexOfFirstOptions, indexOfLastOptions);

	const onCheckboxChange = (e, currentCheckbox) => {
		const cloneActiveKeys = [ ...activeKeys ];

		// Check if the currentCheckbox is already in the array
		const index = cloneActiveKeys.indexOf(currentCheckbox);

		if (index !== -1) {
			// Remove the currentCheckbox from the array using filter
			const updatedKeys = cloneActiveKeys.filter((key) => key !== currentCheckbox);
			setActiveKeys(updatedKeys);
		} else {
			// Add the currentCheckbox to the array
			const updatedKeys = [...cloneActiveKeys, currentCheckbox];
			setActiveKeys(updatedKeys);
		}
	};

	const onCheckboxClearClick = () => {
		setActiveKeys(headerKeys);
	};

	const showHeader = React.useMemo(() => Boolean(
		searchPlaceholder && searchPlaceholder.length || 
		withExport || withFilter || 
		title && title.length || 
		cta
	), []);

	const hasActiveItems = React.useMemo(() => (
		Boolean(activeItems && activeItems?.length)
	), [ activeItems ]);

	return (
		<Card withoutBorder={withoutBorder} withoutHover={withoutHover} centered={!hasActiveItems} fullHeight={fullHeight}>
			{showHeader && (
				<Card.Header>
					{title && (
						<Card.Title>
							{title}
						</Card.Title>
					)}

					{searchPlaceholder && (
						<div className="mb-2 mb-md-0">
							<form>
								<div className="input-group input-group-merge input-group-flush">
									<div className="input-group-prepend input-group-text">
										<i className="bi-search" />
									</div>
									<Input
										name="search"
										type="search"
										onChange={onChange}
										value={query.search}
										className="form-control"
										aria-label={searchPlaceholder}
										placeholder={searchPlaceholder}
									/>
								</div>
							</form>
						</div>
					)}

					<Card.CTA>
						{withExport && (
							<div className="dropdown">
								<button type="button" className="btn btn-white btn-sm dropdown-toggle w-100">
									<i className="bi-download me-2" /> Export
								</button>
								<div
									className="dropdown-menu dropdown-menu-sm-end"
									aria-labelledby="usersExportDropdown"
								>
									<span className="dropdown-header">Options</span>
									<a id="export-copy" className="dropdown-item">
										<img
											className="avatar avatar-xss avatar-4x3 me-2"
											src="/assets/svg/illustrations/copy-icon.svg"
											alt="Image Description"
										/>
										Copy
									</a>
									<a id="export-print" className="dropdown-item">
										<img
											className="avatar avatar-xss avatar-4x3 me-2"
											src="/assets/svg/illustrations/print-icon.svg"
											alt="Image Description"
										/>
										Print
									</a>
									<div className="dropdown-divider" />
									<span className="dropdown-header">
										Download options
									</span>
									<a id="export-excel" className="dropdown-item">
										<img
											className="avatar avatar-xss avatar-4x3 me-2"
											src="/assets/svg/brands/excel-icon.svg"
											alt="Image Description"
										/>
										Excel
									</a>
									<a id="export-csv" className="dropdown-item">
										<img
											className="avatar avatar-xss avatar-4x3 me-2"
											src="/assets/svg/components/placeholder-csv-format.svg"
											alt="Image Description"
										/>
										.CSV
									</a>
									<a id="export-pdf" className="dropdown-item">
										<img
											className="avatar avatar-xss avatar-4x3 me-2"
											src="/assets/svg/brands/pdf-icon.svg"
											alt="Image Description"
										/>
										PDF
									</a>
								</div>
							</div>
						)}

						{withFilter  && (
							<div className="dropdown">
								<button
									type="button"
									aria-expanded="false"
									onClick={toggleShowFilter}
									className="btn btn-white btn-sm w-100"
								>
									<i className="bi-filter me-1" />
									Filter
									&nbsp;
									<span className="badge bg-soft-dark text-dark rounded-circle ms-1">
										{(activeKeys || []).length}
									</span>
								</button>
								<div ref={filterRef} className={getFilterClassName(showFilter)} style={filterCardStyle}>
									<Card>
										{filterTitle && (
											<div className="card-header card-header-content-between">
												<h5 className="card-header-title">
													Filter customers
												</h5>
												<button
													type="button"
													onClick={toggleShowFilter}
													className="btn btn-ghost-secondary btn-icon btn-sm ms-2"
												>
													<i className="bi-x-lg" />
												</button>
											</div>
										)}
										<Card.Body>
											<div className="row mb-4 gx-2">
												<div className="col">
													<div className="d-grid">
														Customize header
													</div>
												</div>
											</div>
											<div className="d-grid gap-3">
												{headers.map(({ key, label }) => (
													<label key={`checked-${key}`} className="row form-check form-switch">
														<span className="col-8 col-sm-9 ms-0">
															<span className="me-2">
																{label}
															</span>
														</span>
														<span className="col-4 col-sm-3 text-end">
															<input
																onChange={(e) => onCheckboxChange(e, key)}
																checked={activeKeys.includes(key)}
																className="form-check-input"
																type="checkbox"
																defaultChecked
															/>
														</span>
													</label>
												))}
											</div>
											<div className="row mt-4 gx-2">
												<div className="col">
													<div className="d-grid">
														<button type="button" className="btn btn-white" onClick={onCheckboxClearClick}>
															Clear all filters
														</button>
													</div>
												</div>
											</div>
										</Card.Body>
									</Card>
								</div>
							</div>
						)}
						{cta}
					</Card.CTA>
				</Card.Header>
			)}

			{activeItems && activeItems?.length ? (
				<div className="table-responsive datatable-custom position-relative">
					<div id="datatable_wrapper" className="dataTables_wrapper no-footer">
						<table role="grid" className={getTableClassName(Boolean(onRowClick))}>
							{headers && headers.length && !withoutHeader ? (
								<thead className="thead-light">
									<tr role="row">
										{headers.filter(({ key }) => activeKeys.includes(key)).map(({ key, label }, colIdx = 0) => (
											<th
												key={`header-${key}`} rowSpan="1" colspan="1" onClick={(e) => onFilter(e, key)}
												className={[
													// (colIdx > 0 ? 'sorting' : ''), 
													(colIdx > 0 ? 'table-column-ps-0' : '')
												].join(' ')}
											>
												{label}
												{label && label.length && withFilter && (
													<i className={getClassName(getClassNamesFor(key, sortConfig))} />
												)}
											</th>
										))}
									</tr>
								</thead>
							) : null}
							<tbody>
								{loading ? (
									<tr className="odd">
										<td valign="top" colspan="12" className="dataTables_empty">
											<div className="text-center p-4">
												<div
													role="status"
													className="spinner-border mt-3 mb-5"
													style={{ width: "3rem", height: "3rem" }}
												>
													<span className="visually-hidden">
														Loading...
													</span>
												</div>
												<p className="mb-0">
													{loadingDataMessage}
												</p>
											</div>
										</td>
									</tr>
								) : (
									activeItems.map((item = {}, jobIdx = 0) => {
										const activeId = item.key || genId();
										return (
											<tr role="row" className={`${isEven(jobIdx) ? 'even' : 'odd'} ${(jobIdx === defaultIdx) ? ('active') : ('')}`} 
											onClick={e => toggleQuickView(e, activeId, item)}>
												{headerKeys.filter((currentKey) => activeKeys.includes(currentKey)).map((key = '', colIdx = 0) => (
													<td key={`td-${key}-${activeId}`} className={`${colIdx > 0 ? 'table-column-ps-0' : ''}`}>
														{item[key]}
													</td>
												))}
											</tr>
										);
									})
								)}
							</tbody>
						</table>
						<div
							role="status"
							aria-live="polite"
							className="dataTables_info"
						>
							Showing 1 to 15 of {(data || []).length} entries
						</div>
					</div>
				</div>
			) : (
				<Card.Body fullHeight>
					{loading ? (
						<>
							<div
								role="status"
								className="spinner-border mt-3 mb-5"
								style={{ width: "3rem", height: "3rem" }}
							>
								<span className="visually-hidden">
									Loading...
								</span>
							</div>
							<p className="mb-0">
								{loadingDataMessage}
							</p>
						</>
					) : (
						<>
							<img 
								alt="Image Description" 
								className="avatar avatar-xxl mb-3" 
								src="/assets/svg/illustrations/oc-error.svg" 
							/>
							<Card.Text>
								{noDataMessage}
							</Card.Text>
						</>
					)}
				</Card.Body>
			)}

			{!hidePagination && items && items.length > pagination.elementsPerPage ? (
				<Card.Footer>
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
				</Card.Footer>
			) : null}
		</Card>
	);

	// return (
	// 	<React.Fragment>
	// 		<TableWrapper>
	// 			<TableContainer height={height} hasQuickView={component ? toggle : false}>
	// 				<TableComponent className="data-table">
	// 					{headers && headers.length ? (
	// 						<thead>
	// 							<tr className="data-item data-head">
	// 								{headers.map(({ key, label }) => (
	// 									<th
	// 										key={`header-${key}`}
	// 										className="data-col"
	// 										button onClick={(e) => onFilter(e, key)}
	// 									>
	// 										{label}
	// 										{label && label.length && withFilter && (
	// 											<button>
	// 												<i className={getClassName(getClassNamesFor(key, sortConfig))} />
	// 											</button>
	// 										)}
	// 									</th>
	// 								))}
	// 							</tr>
	// 						</thead>
	// 					) : null}
	// 					{activeItems?.length ? (
	// 						<tbody>
	// 							{activeItems.map((item, trIdx) => {
	// 								const activeId = item.key || genId();
	// 								return (
	// 									<tr
	// 										className="data-item"
	// 										key={`tr-${activeId}}`}
	// 										onClick={e => toggleQuickView(e, activeId, item)}
	// 									>
	// 										{headerKeys.map((key) => (
	// 											<td key={`td-${key}-${activeId}`} className="data-col">
	// 												{item[key]}
	// 											</td>
	// 										))}
	// 									</tr>
	// 							       );
	// 							})}
	// 						</tbody>
	// 					) : null}
	// 				</TableComponent>
	// 			</TableContainer>
	// 			<TableQuickView hasQuickView={component ? toggle : false}>
	// 				<TableQuickViewContainer>
	// 					<TableQuickViewHeader>
	// 						{quickViewHeader || 'Properties'}
	// 						<span 
	// 							onClick={() => setToggle('')}
	// 							className="table__quick__view_x" 
	// 						>
	// 							X Close
	// 						</span>
	// 					</TableQuickViewHeader>
	// 					<TableQuickViewSection>
	// 						{component}
	// 					</TableQuickViewSection>
	// 				</TableQuickViewContainer>
	// 			</TableQuickView>
	// 		</TableWrapper>
	// 		{!hidePagination && items && items.length > pagination.elementsPerPage ? (
	// 			<Pagination 
	// 				options={items}
	// 				setCurrentPage={setActivePage}
	// 				resetPage={pagination.resetPage}
	// 				currentPage={pagination.currentPage}
	// 				elementsPerPage={pagination.elementsPerPage}
	// 			/>
	// 		) : (null)}
	// 	</React.Fragment>
	// );

	// return (
	// 	<React.Fragment>
	// 		<TableWrapper>
	// 			<TableContainer height={height} hasQuickView={component ? toggle : false}>
	// 				<TableComponent className="data-table">
	// 					{headers && headers.length ? (
	// 						<thead>
	// 							<tr className="data-item data-head">
	// 								{headers.map(({ key, label }) => (
	// 									<th
	// 										key={`header-${key}`}
	// 										className="data-col"
	// 										button onClick={(e) => onFilter(e, key)}
	// 									>
	// 										{label}
	// 										{label && label.length && withFilter && (
	// 											<button>
	// 												<i className={getClassName(getClassNamesFor(key, sortConfig))} />
	// 											</button>
	// 										)}
	// 									</th>
	// 								))}
	// 							</tr>
	// 						</thead>
	// 					) : null}
	// 					{activeItems?.length ? (
	// 						<tbody>
	// 							{activeItems.map((item, trIdx) => {
	// 								const activeId = item.key || genId();
	// 								return (
	// 									<tr
	// 										className="data-item"
	// 										key={`tr-${activeId}}`}
	// 										onClick={e => toggleQuickView(e, activeId, item)}
	// 									>
	// 										{headerKeys.map((key) => (
	// 											<td key={`td-${key}-${activeId}`} className="data-col">
	// 												{item[key]}
	// 											</td>
	// 										))}
	// 									</tr>
	// 							       );
	// 							})}
	// 						</tbody>
	// 					) : null}
	// 				</TableComponent>
	// 			</TableContainer>
	// 			<TableQuickView hasQuickView={component ? toggle : false}>
	// 				<TableQuickViewContainer>
	// 					<TableQuickViewHeader>
	// 						{quickViewHeader || 'Properties'}
	// 						<span 
	// 							onClick={() => setToggle('')}
	// 							className="table__quick__view_x" 
	// 						>
	// 							X Close
	// 						</span>
	// 					</TableQuickViewHeader>
	// 					<TableQuickViewSection>
	// 						{component}
	// 					</TableQuickViewSection>
	// 				</TableQuickViewContainer>
	// 			</TableQuickView>
	// 		</TableWrapper>
	// 		{!hidePagination && items && items.length > pagination.elementsPerPage ? (
	// 			<Pagination 
	// 				options={items}
	// 				setCurrentPage={setActivePage}
	// 				resetPage={pagination.resetPage}
	// 				currentPage={pagination.currentPage}
	// 				elementsPerPage={pagination.elementsPerPage}
	// 			/>
	// 		) : (null)}
	// 	</React.Fragment>
	// );
};

export default Table;

import React from 'react';

import mockCompany from '@mocks/companies';
import formatMessage from '@utils/formatMessage';
import { Modal, Table, Layout } from '@components';

import AddCompanyForm from './forms/AddCompanyForm';

const DEFAULT_CUSTOMER_TABLE_HEADER = [
	{
		key: 'job_id',
		label: 'JOB#'
	},
	{
		key: 'job_date',
		label: 'Job Date'
	},
	{
		key: 'job_deposit',
		label: 'Job Deposit'
	},
	{
		key: 'job_location',
		label: 'Job Location'
	},
	{
		key: 'customer',
		label: 'Company'
	},
	{
		key: 'tech',
		label: 'Tech'
	},
	{
		key: 'status',
		label: 'Status'
	},
	{
		key: 'action',
		label: 'Action'
	}
];

const CompanyOverview = ({ companyId = '', setCompanyId }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ activeSection, setActiveSection ] = React.useState('');

	const fetchCompanies = () => {
		setLoading(true);
		setOptions(mockCompany.list);
		setLoading(false);
	}

	React.useEffect(() => {
		fetchCompanies();
	}, []);

	const onSectionClick = (e, currentSection = '') => {
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const onAddCompanyClick = (e) => {
		e.preventDefault();
		toggleAddCompany();
	};

	const toggleAddCompany = () => setShowModal(!showModal);

	const onCompanyClick = (e, { id }) => setCompanyId(id);

	const renderAddCompany = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddCompanyClick}>
			<i className="bi-plus" />
			Add company
		</button>
	);

	return (
		<>
			<div className="row">
				<div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
					<div className="card h-100">
						<div className="card-body">
							<h6 className="card-subtitle mb-2">Total companies</h6>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span
										className="js-counter display-4 text-dark"
										data-value={24}
									>
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
							<h6 className="card-subtitle mb-2">Active companies</h6>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span
										className="js-counter display-4 text-dark"
										data-value={12}
									>
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
									<span
										className="js-counter display-4 text-dark"
										data-value={56}
									>
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
							<h6 className="card-subtitle mb-2">Active companies</h6>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span
										className="js-counter display-4 text-dark"
										data-value={28}
									>
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

			<Table
				withFilter
				height="63vh"
				data={options.map((payload) => ({
					...payload,
					query: [
						payload?.id,
						payload?.customer,
						payload?.job_location,
					].join(' ')
				}))}
				elementsPerPage={300}
				cta={renderAddCompany}
				onRowClick={onCompanyClick}
				searchPlaceholder="Search company"
				headers={DEFAULT_CUSTOMER_TABLE_HEADER}
			/>

			<div className="card">
				<div className="table-responsive datatable-custom position-relative">
					<div
						id="datatable_wrapper"
						className="dataTables_wrapper no-footer"
					>
						<table
							role="grid"
							id="datatable"
							aria-describedby="datatable_info"
							className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer"
						>
							<thead className="thead-light"></thead>
							<tbody></tbody>
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
			</div>

			{showModal && (
				<Modal onCloseRequest={toggleAddCompany}>
					<AddCompanyForm />
				</Modal>
			)}
		</>
	);
};

export default CompanyOverview;

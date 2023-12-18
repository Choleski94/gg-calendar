import React from 'react';
import { useNavigate } from 'react-router-dom';

import { request } from '@utils/request';
import formatMessage from '@utils/formatMessage';
import { trimString, formatOptionValueType } from '@utils';
import { Table, Modal, Card, Forms, Counter } from '@components';
import { ENTITY_CUSTOMER, DEFAULT_TABLE_HEADER } from '@constants/customers';

import { parseOptions } from './CustomerOverview.controller';

const pagination = {};
const parseSelectOptionValues = () => null;

const CustomerOverview = () => {
	const navigate = useNavigate();

	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ customerOptions, setCustomerOptions ] = React.useState([]);

	const options = {
		page: pagination.current || 1, 
		items: pagination.pageSize || 10
	}

	const fetchCustomers = () => {
		setLoading(true);

		request.list({ entity: ENTITY_CUSTOMER, options }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setCustomerOptions(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	React.useEffect(() => {
		fetchCustomers();
	}, []);

	const handleSubmit = (payload) => {

		setLoading(true);

		request.create({ entity: ENTITY_CUSTOMER, jsonData: payload }).then((data) => {
			setLoading(false);
			if (data.success === true) {
				setShowModal(false);
				fetchCustomers();
			}
		}).catch((error) => {
			setLoading(false);
		});
	}

	const onModalClose = () => {
		setShowModal(false);
	};

	const onAddCustomerClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	const onViewCustomerClick = (e, { id }) => {
		e.preventDefault();
		return navigate(`/crm/customers/${id}`);
	};

	const renderAddCustomer = (
		<button 
			type="button" 
			onClick={onAddCustomerClick}
			className="btn btn-sm btn-outline-primary" 
		>
			<i className="bi-plus" />
			Add new customer
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<div className="row">
				<div className="col-sm-4 col-lg-4">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total employees
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={18} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 5.0%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-4 col-lg-4">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active employees
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={11} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 1.2%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-4 col-lg-4">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Innactive employees
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={16} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-danger text-danger p-1">
										<i className="bi-graph-down" /> 2.8%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
			<div className="d-grid gap-3 gap-lg-5">
				<Table
					withFilter
					fullHeight
					loading={loading}
					elementsPerPage={100}
					cta={renderAddCustomer}
					headers={DEFAULT_TABLE_HEADER}
					onRowClick={onViewCustomerClick}
					noDataMessage="No customer found"
					searchPlaceholder="Search customer"
					data={parseOptions(customerOptions)}
				/>
				{showModal ? (
					<Modal title="Add a new customer" size="lg" centered onCloseRequest={onModalClose}>
						<Forms.Contact 
							withNote
							data={data}
							handleSubmit={handleSubmit}
						/>
					</Modal>
				) : null}
			</div>
		</div>
	);
};

export default CustomerOverview;

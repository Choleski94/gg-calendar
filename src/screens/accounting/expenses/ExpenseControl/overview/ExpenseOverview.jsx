import React from 'react';
import { useNavigate } from 'react-router-dom';

import api from '@api';
import { request } from '@utils/request';
import formatMessage from '@utils/formatMessage';
import { Table, NavPill, Card, Counter } from '@components';
import { ENTITY_INVOICE, DEFAULT_TABLE_HEADER } from '@constants/invoices';

import ExpenseMetrics from './ExpenseMetrics';

const pagination = {};

const parseOptions = (data = []) => data.map((payload) => ({
	// Supported header data.
	balance: 0,
	id: payload?._id,
	date: payload?.date,
	total: payload?.total,
	status: payload?.status,
	number: payload?.number,
	due_date: payload?.expiredDate,
	client: payload?.client?.company,
	payment_status: payload?.paymentStatus,
	// Supported search query field(s).
	query: [
		payload?.status,
		payload?.paymentStatus,
		payload?.client?.company,
	].join(' '),
}));

const ExpensesOverview = () => {
	const navigate = useNavigate();

	const [ loading, setLoading ] = React.useState(false);
	const [ expenseOptions, setExpenseOptions ] = React.useState([]);

	const options = {
		page: pagination.current || 1, 
		items: pagination.pageSize || 10
	};

	const fetchIncomeExpenses = async () => {
		setLoading(true);

		request.list({ entity: ENTITY_INVOICE, options }).then((data) => {
			setLoading(false);
			if (data.success === true) {
				setExpenseOptions(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	};

	React.useEffect(() => {
		fetchIncomeExpenses();
	}, []);

	const onViewExpenseClick = (e, { id }) => {
		e.preventDefault();
		return navigate(`/accounting/expenses/${id}`);
	};

	const onCreateExpenseClick = (e) => {
		e.preventDefault();
		return navigate('/accounting/expenses/add');
	};

	const renderNewExpense = (
		<button 
			type="button" 
			onClick={onCreateExpenseClick}
			className="btn btn-sm btn-outline-primary" 
		>
			<i className="bi-plus" />
			Add new expense
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<ExpenseMetrics 
				options={expenseOptions}
			/>
			<Table
				withFilter
				fullHeight
				loading={loading}
				elementsPerPage={100}
				cta={renderNewExpense}
				headers={DEFAULT_TABLE_HEADER}
				onRowClick={onViewExpenseClick}
				searchPlaceholder="Search expense"
				data={parseOptions(expenseOptions)}
			/>
		</div>
	);
};

export default ExpensesOverview;

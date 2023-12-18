import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';

import ExpenseAdd from './ExpenseAdd';
import ExpenseInfo from './ExpenseInfo';
import ExpenseControl from './ExpenseControl';

const ExpensesScreen = () => {
	const navigate = useNavigate();

	const { id = '' } = useParams();

	const setExpenseId = (id = '') => (
		navigate(`/accounting/expenses/${id}`)
	);

	const expenseId = React.useMemo(() => (
		(id || '').toLowerCase()
	), [ id ]);

	return (
		expenseId && expenseId.length ? (
			(expenseId === 'add') ? (
				<ExpenseAdd />
			) : (
				<ExpenseInfo 
					id={expenseId} 
				/>
			)
		) : (
			<ExpenseControl 
				setExpenseId={setExpenseId}
			/>
		)
	);
};

export default withPrivateRouter(ExpensesScreen);

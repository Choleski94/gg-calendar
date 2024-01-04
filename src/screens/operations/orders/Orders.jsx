import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';

import OrderEdit from './edit';
import OrderControl from './control';

const OrdersScreen = () => {
	const navigate = useNavigate();

	const { id: orderId = '' } = useParams();

	const setOrderId = (id = '') => navigate(`/operations/orders/${id}`);

	return (
		orderId && orderId.length ? (
			<OrderEdit 
				orderId={orderId} 
				setOrderId={setOrderId} 
			/>
		) : (
			<OrderControl
				orderId={orderId}
				setOrderId={setOrderId} 
			/>
		)
	);
};

export default withPrivateRouter(OrdersScreen);

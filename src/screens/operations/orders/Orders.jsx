import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import OrderInfo from './OrderInfo';
import OrderControl from './OrderControl';

const OrdersScreen = () => {
	const navigate = useNavigate();

	const { id: orderId = '' } = useParams();

	const setOrderId = (id = '') => navigate(`/operations/orders/${id}`);

	return (
		orderId && orderId.length ? (
			<OrderInfo 
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

export default OrdersScreen;

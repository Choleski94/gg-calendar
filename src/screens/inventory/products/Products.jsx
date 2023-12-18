import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';

import ProductInfo from './ProductInfo';
import ProductControl from './ProductControl';

const ProductsScreen = () => {
	const navigate = useNavigate();

	const { id: productId = '' } = useParams();

	const setProductId = (id = '') => navigate(`/inventory/products/${id}`);

	return (
		productId && productId.length ? (
			<ProductInfo 
				productId={productId} 
				setProductId={setProductId} 
			/>
		) : (
			<ProductControl
				productId={productId}
				setProductId={setProductId} 
			/>
		)
	);
};

export default withPrivateRouter(ProductsScreen);

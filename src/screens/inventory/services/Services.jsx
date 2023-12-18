import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ServiceInfo from './ServiceInfo';
import ServiceControl from './ServiceControl';

const ServicesScreen = () => {
	const navigate = useNavigate();

	const { id: serviceId = '' } = useParams();

	const setServiceId = (id = '') => navigate(`/inventory/services/${id}`);

	return (
		serviceId && serviceId.length ? (
			<ServiceInfo 
				serviceId={serviceId} 
				setServiceId={setServiceId} 
			/>
		) : (
			<ServiceControl 
				serviceId={serviceId}
				setServiceId={setServiceId} 
			/>
		)
	);
};

export default ServicesScreen;

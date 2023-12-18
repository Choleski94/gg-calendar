import React from 'react';

import { Table, Modal } from '@components';
import formatMessage from '@utils/formatMessage';

import ServiceCreate from './ServiceCreate';

const SUPPORTED_STATUSES = {
	ACTIVE: 'ACTIVE',
	INACTIVE: 'INACTIVE',
}

const DEFAULT_SERVICES_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
        {
		key: 'service_name',
		label: 'Name'
	},
	{
		key: 'service_category',
		label: 'Category'
	},
	{
		key: 'description',
		label: 'Description'
	},
	{
		key: 'status',
		label: 'Status'
	},
	{
		key: 'price',
		label: 'Price'
	},
];

const ServiceOverview = ({ options = [] }) => {
	const [ showModal, setShowModal ] = React.useState(false);

	const toggleCreateService = () => setShowModal(!showModal);

	const onEditServiceClick = (e) => {
		e.preventDefault();
		toggleCreateService();
	}

	const onCreateServiceClick = (e) => {
		e.preventDefault();
		toggleCreateService();
	}

	const renderCreateWorkforce = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onCreateServiceClick}>
			<i className="bi-plus" />
			Create service
		</button>
	);

	return (
		<>
			<Table
				withFilter
				height="63vh"
				elementsPerPage={300}
				cta={renderCreateWorkforce}
				data={options.map((payload) => ({
					...payload,
					query: [
						payload?.service_name,
					].join(' '),
					status: (
						<>
							{payload?.status === SUPPORTED_STATUSES.ACTIVE && (
								<span className="badge bg-soft-success text-success">
									Availaible
								</span>
							)}
							{payload?.status === SUPPORTED_STATUSES.INACTIVE && (
								<span className="badge bg-soft-danger text-danger">
									Unavailable
								</span>
							)}
						</>
					)
				}))}
				headers={DEFAULT_SERVICES_TABLE_HEADER}
				searchPlaceholder="Search inventory services"
				onRowClick={(e, payload) => onEditServiceClick(e, payload.id)}
			/>

			{showModal && (
				<Modal onCloseRequest={toggleCreateService} title="Add new service" size="md" withFooter>
					<ServiceCreate />
				</Modal>
			)}
		</>
	);
};

export default ServiceOverview;

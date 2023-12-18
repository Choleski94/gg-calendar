import React from 'react';

import { hasPrimary } from '@utils';
import { Modal, Table } from '@components';
import formatMessage from '@utils/formatMessage';
import { SUPPORTED_PHONE_TYPES } from '@constants/calls';
import mockCompanyLocations from '@mocks/companies/locations';
import { SUPPORTED_CUSTOMER_STATUSES } from '@constants/customers';

import CompanyOfficeEdit from './CompanyOfficeEdit';

const parseContactType = (contactType = []) => {
	let res = null;

	if (contactType && contactType.length) {
		const [ currentContactType ] = contactType;
		res = currentContactType?.value;
	}

	return res;
}

const DEFAULT_CUSTOMER_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
	{ key: 'name', label: 'Name' },
	{ key: 'phone', label: 'Phone' },
	{ key: 'email', label: 'Email' },
	{ key: 'address', label: 'Address' },
	{ key: 'unit', label: 'Unit' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
	{ key: 'status', label: 'Status' },
];

const SUPPORTED_LOCATION_STATUSES = {
	ACTIVE: 'ACTIVE',
	INACTIVE: 'INACTIVE',
}

const BaseCompanyOffices = ({ options = [], loading = false }) => {
	const [ showModal, setShowModal ] = React.useState(false);

	const toggleAddOffice = () => setShowModal(!showModal);

	const onAddOfficeClick = (e) => {
		e.preventDefault();
		toggleAddOffice();
	};

	const onOfficeClick = (e, { id }) => {
		e.preventDefault();
		toggleAddOffice();
	};

	const renderAddOffice = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddOfficeClick}>
			<i className="bi-plus" />
			Add location
		</button>
	);

	return (
		<>
			<Table
				withFilter
				height="63vh"
				queryKey="query"
				elementsPerPage={300}
				cta={renderAddOffice}
				searchPlaceholder="Search locations"
				headers={DEFAULT_CUSTOMER_TABLE_HEADER}
				data={options.map((payload, idx) => ({
					'id': payload?.id,
					'query': [
						payload?.name,
						(payload?.phones && payload?.phones.length ? (
							payload?.phones.map(({ value }) => value)
						) : ''),
						(payload?.emails && payload?.emails.length ? (
							payload?.emails.map(({ value }) => value)
						) : ''),
						payload?.contact?.address,
						payload?.contact?.zip,
					].join(' '),
					'name': (
						<span className="d-flex align-items-center">
							<div>
								<span className="d-block h5 text-inherit mb-0">
									{payload?.name}
									{payload?.is_primary && (
										<>
											&nbsp;
											<i className="bi-patch-check-fill text-primary" />
										</>
									)}
								</span>
								{payload?.position && (
									<span className="d-block fs-5 text-body">
										{payload?.position}
									</span>
								)}
							</div>
						</span>
					),
					'phone': (
						payload?.phones && payload?.phones.length ? (
							payload?.phones.map(({ id, is_primary, phone_num, contact_type, extension }) => (
								<div key={id}>
									{phone_num}
									{extension && extension.length && (
										<>
											, ext. {extension}
										</>
									)}
									&nbsp;
									{contact_type && contact_type.length && (
										<small className="font-italic">
											({parseContactType(contact_type)})
										</small>
									)}
									&nbsp;
									{hasPrimary(is_primary, payload?.phones.length) && (
										<small className="font-italic">
											&nbsp;
											<i className="bi-patch-check-fill text-success" />
										</small>
									)}
								</div>
							))
						) : 'N/A'
					),
					'email': (
						payload?.emails && payload?.emails.length ? (
							payload?.emails.map(({ id, is_primary, address }) => (
								<div key={id}>
									{address}
									{hasPrimary(is_primary, payload?.emails.length) && (
										<>
											&nbsp;
											<i className="bi-patch-check-fill text-success" />
										</>
									)}
								</div>
							))
						) : 'N/A'
					),
					'address': (
						[payload?.line_1, payload?.line_2].map((value) => (
							<div>
								{value}
							</div>
						))
					),
					'unit': (
						<small className="text-uppercase">
							{payload?.unit_num}
						</small>
					),
					'city': (
						<small>
							{[payload?.city.name, payload?.state_code].join(', ')}
						</small>
					),
					'zip': (
						<small>
							{payload?.zip_code}
						</small>
					),
					'jobQty': (
						<small>
							{(payload?.jobs || []).length || 'N/A'}
						</small>
					),
					'status': (
						<small>
							{payload.is_active ? (
								<span className="badge bg-soft-success text-success p-2">
									Active
								</span>
							) : (
								<span className="badge bg-soft-danger text-danger p-2">
									Inactive
								</span>
							)}
						</small>
					),
				}))}
				onRowClick={onOfficeClick}
			/>

			{showModal && (
				<Modal onCloseRequest={toggleAddOffice} title="Add company location" size="md" withFooter>
					<CompanyOfficeEdit />
				</Modal>
			)}
		</>
	);
};

export default BaseCompanyOffices;

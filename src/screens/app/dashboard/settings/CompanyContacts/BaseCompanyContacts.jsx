
import React from 'react';

import { Modal, Table } from '@components';
import formatMessage from '@utils/formatMessage';
import { SUPPORTED_PHONE_TYPES } from '@constants/calls';
import { buildDate, parseTime, hasPrimary } from '@utils';

import CompanyContactAdd from './CompanyContactAdd';

const DEFAULT_ORG_LOCATION_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
	{ key: 'name', label: 'Name' },
	{ key: 'phone', label: 'Phone' },
	{ key: 'email', label: 'Email' },
	{ key: 'address', label: 'Address' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
];

const BaseCompanyContacts = ({ options = [], loading = false }) => {
	const [ showModal, setShowModal ] = React.useState(false);

	const toggleAddUser = () => setShowModal(!showModal);

	const onAddCompanyContactClick = (e) => {
		e.preventDefault();
		toggleAddUser();
	};

	const onEditCompanyContactClick = (e, id = '') => {
		e.preventDefault();
		console.log(id);
	};

	const renderAddCompanyContact = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddCompanyContactClick}>
			<i className="bi-plus" />
			Add contact
		</button>
	);

	return (
		<>
			<Table
				withFilter
				height="63vh"
				loading={loading}
				elementsPerPage={300}
				cta={renderAddCompanyContact}
				searchPlaceholder="Search company contact"
				headers={DEFAULT_ORG_LOCATION_TABLE_HEADER}
				data={options.map((payload, idx) => ({
					'id': payload?.id,
					'query': [
						payload?.firstName,
						payload?.lastName,
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
							<span className="d-block h5 text-inherit mb-0">
								{payload?.firstName} {payload?.lastName}
								{payload?.isPrimary && (
									<>
										&nbsp;
										<i className="bi-patch-check-fill text-primary" />
									</>
								)}
								{payload?.isBlacklist && (
									<>
										&nbsp;
										<i className="bi-patch-exclamation-fill text-danger" />
									</>
								)}
							</span>
						</span>
					),
					'phone': (
						payload?.phones && payload?.phones.length ? (
							payload?.phones.map(({ isPrimary, type, extension, value }) => (
								<div>
									{value}
									{extension && extension.length && (
										<>
											, ext. {extension}
										</>
									)}
									&nbsp;
									{type === SUPPORTED_PHONE_TYPES.HOME && (
										<small className="font-italic">
											(Home)
										</small>
									)}
									{type === SUPPORTED_PHONE_TYPES.MOBILE && (
										<small className="font-italic">
											(Mobile)
										</small>
									)}
									{type === SUPPORTED_PHONE_TYPES.OFFICE && (
										<small className="font-italic">
											(Office)
										</small>
									)}
									&nbsp;
									{hasPrimary(isPrimary, payload?.phones.length) && (
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
							payload?.emails.map(({ isPrimary, value }) => (
								<div>
									{value}
									{hasPrimary(isPrimary, payload?.emails.length) && (
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
						<small>
							{payload?.contact?.address}
						</small>
					),
					'unit': (
						<small className="text-uppercase">
							{payload?.contact?.unit}
						</small>
					),
					'city': (
						<small>
							{payload?.contact?.city}, {payload?.contact?.state}
						</small>
					),
					'zip': (
						<small>
							{payload?.contact?.zip}
						</small>
					),
				}))}
				onRowClick={onEditCompanyContactClick}
			/>

			{showModal && (
				<Modal onCloseRequest={toggleAddUser} title="Add employee" size="md">
					<CompanyContactAdd />
				</Modal>
			)}
		</>
	);
};

export default BaseCompanyContacts;

import React from 'react';

import api from '@api';
import Table from '@components/Table';
import Modal from '@components/Modal';
import { parseLocaleLang } from '@utils';
import mockCustomer from '@mocks/customers';
import formatMessage from '@utils/formatMessage';
import { LANGUAGE_CODES } from '@constants/locales';
import { SUPPORTED_PHONE_TYPES } from '@constants/calls';
import { buildDate, parseTime, hasPrimary } from '@utils'; 
import { SUPPORTED_PAYMENT_STATUSES } from '@constants/payments';

const DEFAULT_CUSTOMER_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
	{ key: 'name', label: 'Name' },
	{ key: 'phone', label: 'Phone' },
	{ key: 'email', label: 'Email' },
	{ key: 'language', label: 'Languages' },
	{ key: 'address', label: 'Address' },
	{ key: 'unit', label: 'Unit' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
	{ key: 'paymentStatus', label: 'Payment status' },
	// { key: 'jobQty', label: 'Job Qty' },
	{ key: 'lastJob', label: 'Last job' },
];

const CUSTOMER_SECTIONS = {
	ADD: 'ADD',
	VIEW: 'VIEW',
}

export const ServiceLocationsCTA = ({ onClick }) => (
	<a className="btn btn-primary" href="#add-service-location" onClick={onClick}>
		<i className="bi bi-pin-map-fill me-1" /> Add service location
	</a>
);

const ServiceLocations = ({ hasActiveCta = false, toggleCta = () => null }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);

	const fetchCustomerLocations = async () => {
		setLoading(true);
		setOptions(mockCustomer.list);
		setLoading(false);
	};

	React.useEffect(() => {
		fetchCustomerLocations();
	}, []);

	const handleCustomerClick = (invoiceId = '') => {
		setShowModal(true);
	};

	const toggleModal = () => {
		setShowModal(false);
		if (hasActiveCta) {
			toggleCta();
		}
	};

	const activeSection = React.useMemo(() => {
		let res = CUSTOMER_SECTIONS.VIEW;

		if (hasActiveCta) {
			res = CUSTOMER_SECTIONS.ADD;
			setShowModal(true);
		}

		return res;
	}, [ hasActiveCta ]);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			{showModal && (
				<Modal onCloseRequest={toggleModal}>
					{activeSection === CUSTOMER_SECTIONS.VIEW && (
						'ServiceLocationView'
					)}
					{activeSection === CUSTOMER_SECTIONS.ADD && (
						'ServiceLocationCreate'
					)}
				</Modal>
			)}

			<Table
				height="63vh"
				elementsPerPage={300}
				searchPlaceholder="Search service location"
				headers={DEFAULT_CUSTOMER_TABLE_HEADER}
				data={options.map((payload, idx) => ({
					'id': payload?.id,
					'name': (
						<span className="d-flex align-items-center">
							<div>
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
					'language': (
						payload?.languages && payload?.languages.length ? (
							payload?.languages.map(({ isPrimary, locale }) => (
								<div>
									{LANGUAGE_CODES[parseLocaleLang(locale)]}
									{hasPrimary(isPrimary, payload?.languages.length) && (
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
					'jobQty': (
						<small>
							{(payload?.jobs || []).length || 'N/A'}
						</small>
					),
					'paymentStatus': (
						payload.jobs && payload.jobs.length ? (
							<small>
								{/* payload?.jobs[0].payment?.status === SUPPORTED_PAYMENT_STATUSES.PAID && (
									<span className="badge bg-soft-success text-success p-2">
										Paid
									</span>
								) */}
								{payload?.jobs[0].payment?.status === SUPPORTED_PAYMENT_STATUSES.UNPAID && (
									<span className="badge bg-soft-danger text-danger p-2">
										Unpaid
									</span>
								)}
								{payload?.jobs[0].payment?.status === SUPPORTED_PAYMENT_STATUSES.OVERDUE && (
									<span className="badge bg-soft-danger text-danger p-2">
										Overdue
									</span>
								)}
								{payload?.jobs[0].payment?.status === SUPPORTED_PAYMENT_STATUSES.PARTIALLY_PAID && (
									<span className="badge bg-soft-warning text-warning p-2">
										Partially Paid
									</span>
								)}
							</small>
						) : null
					),
					'lastJob': (
						payload.jobs && payload.jobs.length ? (
							<small>
								{buildDate(payload.jobs[0].dateCreated)}
								<br/>
								<small className="text-muted">
									{parseTime(payload.jobs[0].dateCreated)}
								</small>
							</small>
						) : null
					),
				}))}
			/>
		</div>
	);
};

export default ServiceLocations;

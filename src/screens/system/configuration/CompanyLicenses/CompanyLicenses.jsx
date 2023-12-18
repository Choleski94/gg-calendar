import React from 'react';

import formatMessage from '@utils/formatMessage';
import { SUPPORTED_PHONE_TYPES } from '@constants/calls';
import { hasPrimary, buildDate, parseTime } from '@utils';
import mockCompanyLicenses from '@mocks/companies/licenses';
import { Modal, Table, Card, Layout, Counter } from '@components';
import { SUPPORTED_CUSTOMER_STATUSES } from '@constants/customers';

const DEFAULT_CUSTOMER_TABLE_HEADER = [
	{ key: 'doc_authority', label: 'Authority' },
	{ key: 'doc_type', label: 'Type' },
	{ key: 'doc_id', label: 'Number' },
	{ key: 'doc_description', label: 'Description' },
	{ key: 'countryState', label: 'Country' },
	{ key: 'status', label: 'status' },
	{ key: 'date_issued', label: 'Issued date' },
];

const SUPPORTED_LOCATION_STATUSES = {
	ACTIVE: 'ACTIVE',
	INACTIVE: 'INACTIVE',
}

const CompanyLicences = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ activeSection, setActiveSection ] = React.useState('');

	const fetchLicences = () => {
		setLoading(true);
		setOptions(mockCompanyLicenses.list);
		setLoading(false);
	}

	React.useEffect(() => fetchLicences(), []);

	const onSectionClick = (e, currentSection = '') => {
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const toggleAddUser = () => setShowModal(!showModal);

	const onAddLicenseClick = (e) => {
		e.preventDefault();
		toggleAddUser();
	};

	const onLicenseClick = (e, { id }) => {
		e.preventDefault();
		setLicenseId(id);
	};

	const renderAddLicense = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddLicenseClick}>
			<i className="bi-plus" />
			Add licences
		</button>
	);

	return (
		<>
			<div className="row">
				<div className="col-sm-6 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total licences
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={24} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 5.0%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-6 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active licences
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={12} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 1.2%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-6 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Renewed
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={12} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-danger text-danger p-1">
										<i className="bi-graph-down" /> 2.8%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-6 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Expired
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={2} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-secondary text-secondary p-1">
										0.0%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>
			<Table
				withFilter
				height="63vh"
				queryKey="query"
				elementsPerPage={300}
				cta={renderAddLicense}
				searchPlaceholder="Search licences"
				headers={DEFAULT_CUSTOMER_TABLE_HEADER}
				data={options.map((payload, idx) => ({
					...payload,
					'id': payload?.id,
					'query': [
						payload?.name,
						(payload?.phones && payload?.phones.length ? (
							payload?.phones.map(({ value }) => value)
						) : ''),
						(payload?.emails && payload?.emails.length ? (
							payload?.emails.map(({ value }) => value)
						) : ''),
						payload?.doc_authority,
						payload?.zip,
					].join(' '),
					'name': (
						<span className="d-flex align-items-center">
							<div>
								<span className="d-block h5 text-inherit mb-0">
									{payload?.name}
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
											(License)
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
					'doc_authority': (
						<small>
							{payload?.doc_authority}
						</small>
					),
					'doc_description': (
						<small>
							{payload?.doc_description}
						</small>
					),
					'doc_id': (
						<small className="text-uppercase">
							{payload?.doc_id}
						</small>
					),
					'countryState': (
						<small>
							{payload?.country}, {payload?.state}
						</small>
					),
					'issuedDate': (
						<small>
							{payload?.zip}
						</small>
					),
					'status': (
						payload.status ? (
							<small>
								{payload?.status === SUPPORTED_LOCATION_STATUSES.ACTIVE && (
									<span className="badge bg-soft-success text-success p-2">
										Active
									</span>
								)}
								{payload?.status === SUPPORTED_LOCATION_STATUSES.INACTIVE && (
									<span className="badge bg-soft-danger text-danger p-2">
										Inactive
									</span>
								)}
							</small>
						) : null
					),
					'date_issued': (
						payload.date_issued ? (
							<small>
								{buildDate(payload.date_issued)}
								<br/>
								<small className="text-muted">
									{parseTime(payload.date_issued)}
								</small>
							</small>
						) : null
					),
				}))}
				onRowClick={onLicenseClick}
			/>

			{showModal && (
				<Modal onCloseRequest={toggleAddUser} size="md">
					Todo add office licences form
				</Modal>
			)}
		</>
	);
};

export default CompanyLicences;

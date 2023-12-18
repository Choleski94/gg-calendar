import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Card, Table, Modal } from '@components';
import { SUPPORTED_CATEGORIES } from '@constants/calendar';

import SupplierAdd from './SupplierAdd';

const DEFAULT_TABLE_HEADER = [
	{ key: 'name', label: 'Name' },
	{ key: 'email', label: 'Contact' },
	{ key: 'phone', label: 'Phone' },
	{ key: 'note', label: 'Notes' },
];

const SUPPORTED_MODAL_VIEWS = {
	SUMMARY: 'SUMMARY',
	CREATE: 'CREATE',
}

const renderPhone = (options = []) => (
	options && options.length ? (
		options.map((payload) => (
			<div key={`phone-${payload?.id}`}>
				{payload?.type === 'MOBILE' ? (
					<i className="bi bi-phone-fill" />
				) : (
					<i className="bi bi-telephone-fill" />
				)}
				&nbsp;
				{payload?.value}
				&nbsp;
				<small className="font-italic">
					{payload?.type === 'MOBILE' ? (
						'(mobile)'
					) : (
						'(Home)'
					)}
				</small>
				&nbsp;
				{payload?.isPrimary && (
					<small className="font-italic">
						<i className="bi-patch-check-fill text-success" />
					</small>
				)}
			</div>
		))
	) : null
);

const renderLang = (options = []) => (
	options && options.length ? (
		options.map((payload) => (
			<div key={`lang-${payload?.id}`}>
				{payload?.code === 'en' && 'English'}
				{payload?.code === 'fr' && 'Français'}
				&nbsp;
				{payload?.isPrimary && (
					<small className="font-italic">
						<i className="bi-patch-check-fill text-success" />
					</small>
				)}
			</div>
		))
	) : null
);

const renderEmail = (options = []) => (
	options[0].value // TODO
);


const Suppliers = ({ jobId = '' }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ modalSection, setModalSection ] = React.useState('');

	const fetchProjects = async () => {
		setLoading(true);
		// setOptions(mockProject.list);
		setLoading(false);
	}

	React.useEffect(() => {
		fetchProjects();
	}, []);

	const toggleModal = () => setModalSection('');

	const onSupplierClick = (e, { id }) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.SUMMARY);
	}

	const onAddSupplierClick = (e) => {
		e.preventDefault();
		setModalSection(SUPPORTED_MODAL_VIEWS.CREATE);
	}

	const renderBook = (
		<button type="button" className="btn btn-sm btn-outline-primary" onClick={onAddSupplierClick}>
			<i className="bi bi-person-plus"/>
			&nbsp;
			Add supplier
		</button>
	);

	return (
		<>
			<Table
				height="63vh"
				cta={renderBook}
				title="Suppliers"
				elementsPerPage={300}
				onRowClick={onSupplierClick}
				headers={DEFAULT_TABLE_HEADER}
				data={options.map((payload) => ({
					id: payload?.id,
					name: (
						<Link className="d-flex align-items-center" to="/crm/customers/456">
							<div className="ms-3">
								<span className="d-block h5 text-inherit mb-0">
									{payload?.firstName} {payload?.lastName}
								</span>
								<span className="d-block fs-5 text-body">
									{payload?.position}
								</span>
							</div>
						</Link>
					),
					phone: renderPhone(payload.phones),
					email: renderEmail(payload.emails),
					language: renderLang(payload.languages),
				}))}
			/>

			{modalSection === SUPPORTED_MODAL_VIEWS.SUMMARY && (
				<Modal onCloseRequest={toggleModal} title="View supplier" size="md">
					<table className="table">
						<tbody>
							<tr>
								<td>Name:</td>
								<td className="table-column-ps-0">
									<a
										className="d-flex align-items-center"
										href="/crm/customers/456"
									>
										<div className="ms-3">
											<span className="d-block h5 text-inherit mb-0">
												Albert Li
												&nbsp;
												<i className="bi-patch-check-fill text-primary" />
											</span>
											<span className="d-block fs-5 text-body">
												Tenant
											</span>
										</div>
									</a>
								</td>
							</tr>
							<tr>
								<td>Phone(s):</td>
								<td>
									<div>
										<i className="bi bi-phone-fill" />
										&nbsp; 450-428-5500 &nbsp;
										<small className="font-italic">(Mobile)</small>
									</div>
								</td>
							</tr>
							<tr>
								<td>Email(s):</td>
								<td>
									<div>
										j.richard@gmail.com &nbsp;
										<small className="font-italic">
											<i className="bi-patch-check-fill text-success" />
										</small>
									</div>
									<div>jason.richard@icloud.com</div>
								</td>
							</tr>
							<tr>
								<td>Address:</td>
								<td>8520 bloomfield</td>
							</tr>
							<tr>
								<td>Unit:</td>
								<td>A</td>
							</tr>
							<tr>
								<td>City, State/Prov:</td>
								<td>Laval, QC</td>
							</tr>
							<tr>
								<td>Zip/Post Code:</td>
								<td>H7N 1K2</td>
							</tr>
						</tbody>
					</table>
				</Modal>
			)}

			{modalSection === SUPPORTED_MODAL_VIEWS.CREATE && (
				<Modal onCloseRequest={toggleModal} title="Add new supplier" size="md" withFooter>
					<SupplierAdd />
				</Modal>
			)}
		</>
	);
};

export default Suppliers;

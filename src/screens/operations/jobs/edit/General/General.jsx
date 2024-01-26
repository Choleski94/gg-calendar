import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Modal, Card, Forms } from '@components';
import SearchCustomerModule from '@modules/SearchCustomerModule';

const infoDummy = {
	firstName: 'Sara',
	city: 'Breannabury',
	lastName: 'Williams',
	birthday: '01/11/2023',
	address: '280 Suzanne Throughway',
	state: 'QC',
	gender: 'FEMALE',
	languages: ['EN'],
	zip: 'H3N 2J3',
	country: 'CA',
	city: 'Montréal',
	email: 'sara.williams@gmail.com',
	phone: '+1 (438) 409-0206',
	buzzer: 6253,
};

const General = ({ id  = '' }) => {
	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ serviceData, setServiceData ] = React.useState({});
	const [ showService, setShowService ] = React.useState(false);

	const fetchGeneralInfo = (id = '') => {
		if (id !== 'create') {
			setData(infoDummy);
		}
	}

	React.useEffect(() => {
		fetchGeneralInfo(id);
	}, []);

	React.useEffect(() => {
		fetchGeneralInfo(id);
	}, [ id ]);

	const handleSubmit = (payload) => {
		setLoading(true);

		request.create({ entity: ENTITY_EMPLOYEE, jsonData: payload }).then((data) => {
			setLoading(false);
			if (data.success === true) {
				setShowModal(false);
				fetchEmployeeMembers();
			}
		}).catch(() => {
			setLoading(false);
		});

	}

	const setCustomerData = (e, payload = {}) => {
		setShowModal(false);
		// setClientId(payload?.data?._id);
		// console.log('RESULT:::', payload?.data);
		setData(payload?.data);
	}

	const onModalClose = () => setShowModal(false);

	const onSearchClick = () => setShowModal(true);

	const onAddServiceClick = () => setShowService(true);

	const onRemoveServiceClick = () => {
		setShowService(false);
	}

	return (
		<>
			<div className={showService ? 'col-6' : 'col-12'}>
				<Card>
					<Card.Header>
						<Card.Title>
							Billing Information
						</Card.Title>
						<Card.CTA>
							{!showService ? (
								<a className="text-muted" onClick={onAddServiceClick}>
									<i className="bi bi-plus" />
									&nbsp;
									Add service
								</a>
							) : null}
						</Card.CTA>
					</Card.Header>
					<Card.Body>
						<Forms.Contact 
							withNote
							data={data}
							handleSubmit={handleSubmit}
							// layout="HORIZONTAL"
						/>
					</Card.Body>
					{showModal ? (
						<Modal title="Search customer" size="lg" centered onCloseRequest={onModalClose}>
							<SearchCustomerModule
								setCustomerData={setCustomerData}
							/>
						</Modal>
					) : null}
				</Card>
			</div>
			{showService ? (
				<div className="col-6">
					<Card>
						<Card.Header>
							<Card.Title>
								Service Information
							</Card.Title>
							<Card.CTA>
								{showService ? (
									<a className="text-muted" onClick={onRemoveServiceClick}>
										<i className="bi bi-x" />
										&nbsp;
										Remove service
									</a>
								) : null}
							</Card.CTA>
						</Card.Header>
						<Card.Body>
							<Forms.Contact 
								withNote
								data={serviceData}
								handleSubmit={handleSubmit}
								// layout="HORIZONTAL"
							/>
						</Card.Body>
						{showModal ? (
							<Modal title="Search customer" size="lg" centered onCloseRequest={onModalClose}>
								<SearchCustomerModule
									setCustomerData={setCustomerData}
								/>
							</Modal>
						) : null}
					</Card>
				</div>
			) : null}
		</>
	);
};

export default General;

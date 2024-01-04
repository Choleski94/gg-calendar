import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Modal, Card, Forms } from '@components';
import SearchCustomerModule from '@modules/SearchCustomerModule';

const infoDummy = {
	birthday: '01/11/2023',
	firstName: 'Sara',
	lastName: 'Williams',
	address: '280 Suzanne Throughway',
	city: 'Breannabury',
	state: 'QC',
	zip: 'H3N 2J3',
	country: 'Canada',
	email: 'sara.williams@gmail.com',
	phone: '+1 (438) 409-0206',
	buzzer: 6253,
};

const General = ({ id  = '' }) => {
	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);

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

	return (
		<Card>
			<Card.Header>
				<Card.Title>
					General Information
				</Card.Title>
				<Card.CTA>
					<a className="text-muted" onClick={onSearchClick}>
						<i className="bi bi-search" />
					</a>
				</Card.CTA>
			</Card.Header>
			<Card.Body>
				<Forms.Contact 
					withNote
					data={data}
					handleSubmit={handleSubmit}
					layout="HORIZONTAL"
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
	);
};

export default General;

import React from 'react';

import api from '@api';
import { Modal } from '@components';
import formatMessage from '@utils/formatMessage';
import SearchCustomerModule from '@modules/SearchCustomerModule';

const payToDummy = {
	firstName: 'Flash Repair',
	lastName: 'Inc.',
	address: '9300 Rue Charles-de-LaTour',
	city: 'Montréal',
	state: 'QC',
	zip: 'H4N 1M2',
	country: 'Canada',
	emails: 'support@flashgo.ca',
	phones: '+1 (514) 571-7049',
};

const BillingContact = ({ type, setClientId }) => {
	const [ payTo, setPayTo ] = React.useState({});
	const [ billingTo, setBillingTo ] = React.useState({});
	const [ showModal, setShowModal ] = React.useState(false);

	const clearBilling = () => {
		setPayTo({});
		setBillingTo({});
	}

	const fetchOrgBillingInfo = () => {
		setPayTo(payToDummy);
	}

	React.useEffect(() => {
		clearBilling();
		fetchOrgBillingInfo();
	}, []);

	const onEditBillTo = (e) => {
		e.preventDefault();
	}

	const onBillingToClick = (e) => {
		setShowModal(true);
	}

	const onModalClose = () => {
		setShowModal(false);
	}

	const hasBillingTo = React.useMemo(() => (
		Object.keys(billingTo || {}).length
	), [ billingTo ]);

	const setCustomerData = (e, payload = {}) => {
		setShowModal(false);
		setClientId(payload?.data?._id);
		setBillingTo({
			firstName: payload?.data?.firstName,
			lastName: payload?.data?.lastName,
			emails: payload?.emails,
			phones: payload?.phones,
			address: payload?.data?.address,
			country: payload?.data?.country,
			state: payload?.data?.state,
			city: payload?.data?.city,
			zip: (payload?.data?.zip || '').toUpperCase(),
		});
	}
 
	return (
		<div className="row justify-content-md-between mb-3">
			<div className="col-md-3">
				<h4>
					{type === 'INVOICE' ? 'Billing' : 'Estimate'}
					&nbsp;
					to:
					&nbsp;
					<a className="text-muted" onClick={onBillingToClick}>
						<i className="bi bi-pencil"/>
					</a>
				</h4>
				{hasBillingTo ? (
					<address>
						{billingTo?.firstName} {billingTo?.lastName}
						<br />
						{billingTo?.address},
						<br />
						{billingTo?.city}, {billingTo?.state} {billingTo?.zip}, {billingTo?.country}
						<br />
						<br />
						{billingTo?.emails}
						<br />
						{billingTo?.phones}
					</address>
				) : null}
			</div>
			<div className="col-md-6" />
			<div className="col-md-3">
				<h4>
					Pay to:
				</h4>
				<address>
					{payTo?.firstName} {payTo?.lastName}
					<br />
					{payTo?.address},
					<br />
					{payTo?.city}, {payTo?.state} {payTo?.zip}, {payTo?.country}
					<br />
					<br />
					{payTo?.emails}
					<br />
					{payTo?.phones}
				</address>
			</div>
			{showModal ? (
				<Modal title="Search customer" size="lg" centered onCloseRequest={onModalClose}>
					<SearchCustomerModule
						setCustomerData={setCustomerData}
					/>
				</Modal>
			) : null}
		</div>
	);
};

export default BillingContact;

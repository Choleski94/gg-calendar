import React from 'react';

import api from '@api';
import config from '@config';
import formatMessage from '@utils/formatMessage';
import { Modal, NavTab, Layout, GetSupport } from '@components';

import CustomerFiles, { CustomerFilesCTA } from './CustomerFiles';
import CustomerPayment, { CustomerPaymentCTA } from './CustomerPayment';
import CustomerInvoices, { CustomerInvoicesCTA } from './CustomerInvoices';
import CustomerProjects, { CustomerProjectsCTA } from './CustomerProjects';
import CustomerServiceLocations, { CustomerServiceLocationsCTA } from './CustomerServiceLocations';

const SUPPORTED_SECTIONS = {
	INFO: 'INFO',
	PAYMENT: 'PAYMENT',
	INVOICE: 'INVOICE',
	LOCATION: 'LOCATION',
	DOCUMENT: 'DOCUMENT',
	PROJECTS: 'PROJECTS',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SECTIONS.INFO,
		value: 'Overview',
	},
	{
		key: SUPPORTED_SECTIONS.PAYMENT,
		value: 'Payment',
	},
	{
		key: SUPPORTED_SECTIONS.LOCATION,
		value: 'Service Locations',
	},
	{
		key: SUPPORTED_SECTIONS.PROJECTS,
		value: 'Projects',
	},
	{
		key: SUPPORTED_SECTIONS.DOCUMENT,
		value: 'Files',
	},
	{
		key: SUPPORTED_SECTIONS.INVOICE,
		value: 'Invoices',
	},
];

const hasActiveSectionTabClassName = (activeSection = '', currentSection = '') => [
	'nav-link',
	(currentSection === activeSection ? 'active' : ''),
].join(' '); 

const DEFAULT_CTA_STATES = Object.keys(SUPPORTED_SECTIONS).reduce((agg, ctaKey) => (
	Object.assign(agg, { [ctaKey]: false })
), {});

const AccessInfo = ({ id: customerId = '' }) => {
	const [ showModal, setShowModal ] = React.useState(false);
	const [ ctas, setCtas ] = React.useState(DEFAULT_CTA_STATES);
	const [ activeSection, setActiveSection] = React.useState(SUPPORTED_SECTIONS.INFO);

	const onSectionClick = (e, currentSection = '') => {
		e.preventDefault();
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const toggleAddUser = () => setShowModal(!showModal);

	const onAddCustomerClick = (e) => {
		e.preventDefault();
		toggleAddUser();
	};

	const toggleCta = (currentCta = '') => {
		setCtas({
			...ctas,
			[currentCta]: !ctas[currentCta]
		});
	};

	const onCtaClick = (e, currentCta = '') => {
		e.preventDefault();
		toggleCta(currentCta);
	};

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-lg mb-3 mb-lg-0">
									<Layout.Title>
										Amanda Harvey
										&nbsp;
										<i className="bi-patch-check-fill text-primary" />
									</Layout.Title>
								</div>
								<div className="col-lg-auto">
									<GetSupport />
									{activeSection === SUPPORTED_SECTIONS.INFO && (
										'Customer info'
									)}
									{activeSection === SUPPORTED_SECTIONS.PAYMENT && (
										<CustomerPaymentCTA 
											onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.PAYMENT)} 
										/>
									)}
									{activeSection === SUPPORTED_SECTIONS.INVOICE && (
										<CustomerInvoicesCTA 
											onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.INVOICE)} 
										/>
									)}
									{activeSection === SUPPORTED_SECTIONS.LOCATION && (
										<CustomerServiceLocationsCTA 
											onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.LOCATION)} 
										/>
									)}
									{activeSection === SUPPORTED_SECTIONS.DOCUMENT && (
										<CustomerFilesCTA 
											onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.DOCUMENT)} 
										/>
									)}
									{activeSection === SUPPORTED_SECTIONS.PROJECTS && (
										<CustomerProjectsCTA 
											onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.PROJECTS)} 
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
				<NavTab 
					withPageHeader
					id="accountTab" 
					options={NAV_TAB_OPTIONS}
					handleTabClick={setActiveSection}
				/>
			</Layout.StickyHeader>
			<div className="row mt-15">
				{activeSection === SUPPORTED_SECTIONS.INFO && (
					'Customer info'
				)}
				{activeSection === SUPPORTED_SECTIONS.PAYMENT && (
					<CustomerPayment 
						hasActiveCta={ctas.PAYMENT} 
						toggleCta={() => toggleCta(SUPPORTED_SECTIONS.PAYMENT)} 
					/>
				)}
				{activeSection === SUPPORTED_SECTIONS.INVOICE && (
					<CustomerInvoices 
						hasActiveCta={ctas.INVOICE} 
						toggleCta={() => toggleCta(SUPPORTED_SECTIONS.INVOICE)} 
					/>
				)}
				{activeSection === SUPPORTED_SECTIONS.LOCATION && (
					<CustomerServiceLocations 
						hasActiveCta={ctas.LOCATION} 
						toggleCta={() => toggleCta(SUPPORTED_SECTIONS.LOCATION)} 
					/>
				)}
				{activeSection === SUPPORTED_SECTIONS.DOCUMENT && (
					<CustomerFiles 
						hasActiveCta={ctas.DOCUMENT} 
						toggleCta={() => toggleCta(SUPPORTED_SECTIONS.DOCUMENT)} 
					/>
				)}
				{activeSection === SUPPORTED_SECTIONS.PROJECTS && (
					<CustomerProjects 
						hasActiveCta={ctas.PROJECTS} 
						toggleCta={() => toggleCta(SUPPORTED_SECTIONS.PROJECTS)} 
					/>
				)}
			</div>
		</Layout>
	);
};

export default AccessInfo;

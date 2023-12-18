import React from 'react';

import api from '@api';
import config from '@config';
import formatMessage from '@utils/formatMessage';
import { Modal, NavTab, Layout, Breadcrumb, GetSupport } from '@components';

import Overview from './Overview';
import Jobs, { JobsCTA } from './Jobs';
import Files, { FilesCTA } from './Files';
import Projects, { ProjectsCTA } from './Projects';
import Payments, { PaymentsCTA } from './Payments';
import Invoices, { InvoicesCTA } from './Invoices';
import ServiceLocations, { ServiceLocationsCTA } from './ServiceLocations';

const INVOICE_INFO_BREADCRUMB_OPTIONS = [
	{
		path: '/accounting',
		value: 'CRM'
	},
	{
		path: '/accounting/invoices',
		value: 'Invoices'
	},
	{
		path: '/accounting/invoices/102-10-A',
		value: '#102-10-A'
	},
];

const SUPPORTED_SECTIONS = {
	INFO: 'INFO',
	JOBS: 'JOBS',
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
		key: SUPPORTED_SECTIONS.JOBS,
		value: 'Jobs',
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

const DEFAULT_CTA_STATES = Object.keys(SUPPORTED_SECTIONS).reduce((agg, ctaKey) => (
	Object.assign(agg, { [ctaKey]: false })
), {});

const InvoiceInfo = ({ id = '' }) => {
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

	const onAddInvoiceClick = (e) => {
		e.preventDefault();
		toggleAddUser();
	};

	const toggleCta = (currentCta = '') => setCtas({
		...ctas, [currentCta]: !ctas[currentCta]
	});

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
							<div className="col-lg mb-3 mb-lg-0">
								<Breadcrumb options={INVOICE_INFO_BREADCRUMB_OPTIONS} />
								<h1 className="page-header-title">
									Amanda Harvey
									&nbsp;
									<i className="bi-patch-check-fill text-primary" />
								</h1>
							</div>
							<div className="col-lg-auto">
								<GetSupport />
								{activeSection === SUPPORTED_SECTIONS.INFO && (
									<button type="button" className="btn btn-sm btn-outline-danger">
										<i className="bi bi-trash" />
										&nbsp;
										Deactivate customer
									</button>
								)}

								{activeSection === SUPPORTED_SECTIONS.PAYMENT && (
									<PaymentsCTA 
										onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.PAYMENT)} 
									/>
								)}

								{activeSection === SUPPORTED_SECTIONS.JOBS && (
									<JobsCTA 
										onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.JOBS)} 
									/>
								)}

								{activeSection === SUPPORTED_SECTIONS.LOCATION && (
									<ServiceLocationsCTA 
										onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.LOCATION)} 
									/>
								)}

								{activeSection === SUPPORTED_SECTIONS.INVOICE && (
									<InvoicesCTA 
										onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.INVOICE)} 
									/>
								)}

								{activeSection === SUPPORTED_SECTIONS.DOCUMENT && (
									<FilesCTA 
										onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.DOCUMENT)} 
									/>
								)}

								{activeSection === SUPPORTED_SECTIONS.PROJECTS && (
									<ProjectsCTA 
										onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.PROJECTS)} 
									/>
								)}
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
				<div className="col-md-12">
					{activeSection === SUPPORTED_SECTIONS.INFO && (
						<Overview
							hasActiveCta={ctas.PAYMENT} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.PAYMENT)} 
						/>
					)}
					{activeSection === SUPPORTED_SECTIONS.PAYMENT && (
						<Payments 
							hasActiveCta={ctas.PAYMENT} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.PAYMENT)} 
						/>
					)}
					{activeSection === SUPPORTED_SECTIONS.INVOICE && (
						<Invoices 
							hasActiveCta={ctas.INVOICE} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.INVOICE)} 
						/>
					)}
					{activeSection === SUPPORTED_SECTIONS.JOBS && (
						<Jobs 
							hasActiveCta={ctas.JOBS} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.JOBS)} 
						/>
					)}
					{activeSection === SUPPORTED_SECTIONS.LOCATION && (
						<ServiceLocations 
							hasActiveCta={ctas.LOCATION} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.LOCATION)} 
						/>
					)}
					{activeSection === SUPPORTED_SECTIONS.DOCUMENT && (
						<Files 
							hasActiveCta={ctas.DOCUMENT} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.DOCUMENT)} 
						/>
					)}
					{activeSection === SUPPORTED_SECTIONS.PROJECTS && (
						<Projects 
							hasActiveCta={ctas.PROJECTS} 
							toggleCta={() => toggleCta(SUPPORTED_SECTIONS.PROJECTS)} 
						/>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default InvoiceInfo;

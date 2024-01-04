import React from 'react';

import api from '@api';
import config from '@config';
import formatMessage from '@utils/formatMessage';
import { Modal, Layout, Breadcrumb, GetSupport } from '@components';

import Overview from './Overview';

const PRODUCTS_INFO_BREADCRUMB_OPTIONS = [
	{
		path: '/operations',
		value: 'Operations'
	},
	{
		path: '/operations/orders',
		value: 'Orders'
	},
	{
		path: '/operations/orders/102-10-A',
		value: '102-10-A'
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

const hasActiveSectionTabClassName = (activeSection = '', currentSection = '') => [
	'nav-link',
	(currentSection === activeSection ? 'active' : ''),
].join(' '); 

const DEFAULT_CTA_STATES = Object.keys(SUPPORTED_SECTIONS).reduce((agg, ctaKey) => (
	Object.assign(agg, { [ctaKey]: false })
), {});

const OrderInfo = ({ orderId = '', setOrderId }) => {
	const [ showModal, setShowModal ] = React.useState(false);
	const [ ctas, setCtas ] = React.useState(DEFAULT_CTA_STATES);
	const [ activeSection, setActiveSection] = React.useState(SUPPORTED_SECTIONS.INFO);

	React.useEffect(() => {
		if (!orderId || !orderId.length) {
			setOrderId('');
		}
	}, [ orderId ]);

	const onSectionClick = (e, currentSection = '') => {
		e.preventDefault();
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const toggleAddUser = () => setShowModal(!showModal);

	const onAddOrderClick = (e) => {
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
			<div className="d-flex mb-3">
				<div className="flex-grow-1">
					<div className="row">
						<div className="row align-items-end">
							<div className="col-lg mb-3 mb-lg-0">
								<Breadcrumb options={PRODUCTS_INFO_BREADCRUMB_OPTIONS} />
								<h1 className="page-header-title">
									Order #123
								</h1>
							</div>
							<div className="col-lg-auto">
								<GetSupport />
								{activeSection === SUPPORTED_SECTIONS.INFO && (
									<button type="button" className="btn btn-sm btn-outline-danger">
										<i className="bi bi-trash" />
										&nbsp;
										Delete order
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
			</div>
			<div className="row">
				<div className="col-md-12">
					<Overview
						hasActiveCta={ctas.PAYMENT} 
						toggleCta={() => toggleCta(SUPPORTED_SECTIONS.PAYMENT)} 
					/>
				</div>
			</div>
		</Layout>
	);
};

export default OrderInfo;

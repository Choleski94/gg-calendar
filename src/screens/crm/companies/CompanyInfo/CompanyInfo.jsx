import React from 'react';

import formatMessage from '@utils/formatMessage';
import { Modal, NavTab, Layout, GetSupport } from '@components';

import Jobs, { JobsCTA } from './Jobs';
import Files, { FilesCTA } from './Files';
import Projects, { ProjectsCTA } from './Projects';
import CompanyPayment, { CompanyPaymentCTA } from './CompanyPayment';
import CompanyInvoices, { CompanyInvoicesCTA } from './CompanyInvoices';
import ServiceLocations, { ServiceLocationsCTA } from './ServiceLocations';

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

const CompanyInfo = ({ companyId = '', setCompanyId }) => {
	const [ showModal, setShowModal ] = React.useState(false);
	const [ ctas, setCtas ] = React.useState(DEFAULT_CTA_STATES);
	const [ activeSection, setActiveSection] = React.useState(SUPPORTED_SECTIONS.INFO);

	React.useEffect(() => {
		if (!companyId || !companyId.length) {
			setCompanyId('');
		}
	}, [ companyId ]);

	const onSectionClick = (e, currentSection = '') => {
		e.preventDefault();
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	};

	const toggleAddUser = () => setShowModal(!showModal);

	const onAddCompanyClick = (e) => {
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
									<h1 className="page-header-title">
										Amanda Harvey
										&nbsp;
										<i className="bi-patch-check-fill text-primary" />
									</h1>
								</div>
								<div className="col-lg-auto">
									<GetSupport />
									{activeSection === SUPPORTED_SECTIONS.INFO && (
										'Company info'
									)}
									{activeSection === SUPPORTED_SECTIONS.PAYMENT && (
										<CompanyPaymentCTA 
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
										<CompanyInvoicesCTA 
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
				<NavTab 
					withPageHeader
					id="accountTab" 
					options={NAV_TAB_OPTIONS}
					handleTabClick={setActiveSection}
				/>
			</Layout.StickyHeader>

			<div className="row mt-15">
				{activeSection === SUPPORTED_SECTIONS.INFO && (
					'Company info'
				)}
				{activeSection === SUPPORTED_SECTIONS.PAYMENT && (
					<CompanyPayment 
						hasActiveCta={ctas.PAYMENT} 
						toggleCta={() => toggleCta(SUPPORTED_SECTIONS.PAYMENT)} 
					/>
				)}
				{activeSection === SUPPORTED_SECTIONS.INVOICE && (
					<CompanyInvoices 
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
		</Layout>
	);
};

export default CompanyInfo;


import React from 'react';

import { Layout, NavPill, Breadcrumb, GetSupport } from '@components';

import CompanyOverview from './CompanyOverview';
import CompanySettings from './CompanySettings';
import CompanyStatistics from './CompanyStatistics';

const COMPANIES_BREADCRUMB_OPTIONS = [
	{
		path: '/crm',
		value: 'CRM'
	},
	{
		path: '/crm/companies',
		value: 'Companies'
	},
];

const SUPPORTED_SCREEN_SECTIONS = {
	OVERVIEW: 'OVERVIEW',
	SETTINGS: 'SETTINGS',
	STATISTICS: 'STATISTICS',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SCREEN_SECTIONS.OVERVIEW,
		value: 'Overview',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.STATISTICS,
		value: 'Statistics',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.SETTINGS,
		value: 'Settings',
	},
];

const CompanyControl = ({ customrId, setCompanyId }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.OVERVIEW);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-sm mb-2 mb-sm-0">
									<Breadcrumb options={COMPANIES_BREADCRUMB_OPTIONS} />
									<h1 className="page-header-title">
										{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
											'Manage Companies'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
											'Company statistics'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
											'Company Permissions'
										)}
									</h1>
								</div>
								<div className="col-sm-auto">
									<GetSupport />
									<NavPill
										options={NAV_TAB_OPTIONS}
										handleTabClick={setActiveSection}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
					<CompanyOverview setCompanyId={setCompanyId} />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
					<CompanyStatistics />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
					<CompanySettings />
				)}
			</div>
		</Layout>
	);
};

export default CompanyControl;


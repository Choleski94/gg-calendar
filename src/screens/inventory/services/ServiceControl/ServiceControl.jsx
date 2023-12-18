
import React from 'react';

import { Layout, NavPill, Breadcrumb, GetSupport } from '@components';

import ServiceOverview from './overview';
import ServiceSettings from './settings';
import ServiceStatistics from './statistics';

const INVENTORY_SERVICES_BREADCRUMB_OPTIONS = [
	{
		path: '/inventory',
		value: 'Inventory'
	},
	{
		path: '/inventory/services',
		value: 'Services'
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

const ServiceControl = ({ serviceId, setServiceId }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.OVERVIEW);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-sm mb-2 mb-sm-0">
									<Breadcrumb options={INVENTORY_SERVICES_BREADCRUMB_OPTIONS} />
									<h1 className="page-header-title">
										{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
											'Service Catalog'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
											'Service Statistics'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
											'Service Permissions'
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
					<ServiceOverview setServiceId={setServiceId} />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
					<ServiceStatistics />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
					<ServiceSettings />
				)}
			</div>
		</Layout>
	);
};

export default ServiceControl;

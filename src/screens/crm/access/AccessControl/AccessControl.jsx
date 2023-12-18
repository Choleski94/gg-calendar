import React from 'react';

import { Layout, NavPill, Breadcrumb, GetSupport } from '@components';

import AccessOverview from './AccessOverview';
import AccessSettings from './AccessSettings';
import AccessStatistics from './AccessStatistics';

const ACCESS_BREADCRUMB_OPTIONS = [
	{
		path: '/crm',
		value: 'CRM'
	},
	{
		path: '/crm/access',
		value: 'Access'
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

const AccessControl = ({ accessId, setAccessId }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.OVERVIEW)

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-sm mb-2 mb-sm-0">
									<Breadcrumb options={ACCESS_BREADCRUMB_OPTIONS} />
									<h1 className="page-header-title">
										{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
											'Manage Access'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
											'Access statistics'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
											'Access Permissions'
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
					<AccessOverview setAccessId={setAccessId} />
				)}

				{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
					<AccessStatistics />
				)}

				{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
					<AccessSettings />
				)}
			</div>
		</Layout>
	);
};

export default AccessControl;

import React from 'react';

import { Layout, NavPill, Breadcrumb, GetSupport } from '@components';

import AccessOverview from './overview';
import AccessSettings from './settings';
import AccessStatistics from './statistics';

const CUSTOMERS_BREADCRUMB_OPTIONS = [
	{
		path: '/system',
		value: 'System'
	},
	{
		path: '/system/access',
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

const EmplyeesScreen = ({ setRoleId }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.OVERVIEW);
	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-sm mb-2 mb-sm-0">
									<Breadcrumb options={CUSTOMERS_BREADCRUMB_OPTIONS} />
									<Layout.Title>
										{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
											'Manage Accesss'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
											'Access statistics'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
											'Access Permissions'
										)}
									</Layout.Title>
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
					<AccessOverview 
						setRoleId={setRoleId} 
					/>
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

export default EmplyeesScreen;


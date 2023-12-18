import React from 'react';

import { withPrivateRouter } from '@utils/hocs';
import { Layout, NavPill, Breadcrumb, GetSupport } from '@components';

import {
	NAV_TAB_OPTIONS,
	SUPPORTED_SCREEN_SECTIONS, 
	CUSTOMERS_BREADCRUMB_OPTIONS, 
} from './Customers.controller';
import CustomerOverview from './overview';
import CustomerSettings from './settings';
import CustomerStatistics from './statistics';

const CustomersScreen = ({ customrId, setCustomerId }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.OVERVIEW);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-end">
					<div className="col-sm mt-4 mb-2 mb-sm-0">
						<Breadcrumb 
							options={CUSTOMERS_BREADCRUMB_OPTIONS}
						/>
						<Layout.Title>
							{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
								'Manage Customers'
							)}
							{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
								'Customer statistics'
							)}
							{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
								'Customer Permissions'
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
			</Layout.StickyHeader>
			<div className="mt-15">
				{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
					<CustomerOverview setCustomerId={setCustomerId} />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
					<CustomerStatistics />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
					<CustomerSettings />
				)}
			</div>
		</Layout>
	);
};

export default withPrivateRouter(CustomersScreen);

import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Layout, NavPill, GetSupport } from '@components';

import GeneralConfiguration from './general';
import BillingConfiguration from './billing';
import PluginsConfiguration from './plugins';

const SUPPORTED_SECTIONS = {
	GENERAL: 'GENERAL',
	PLUGINS: 'PLUGINS',
	BILLING: 'BILLING',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SECTIONS.GENERAL,
		value: 'General',
	},
	{
		key: SUPPORTED_SECTIONS.PLUGINS,
		value: 'Plugins',
	},
	{
		key: SUPPORTED_SECTIONS.BILLING,
		value: 'Billing',
	},
];

const SystemConfiguration = () => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SECTIONS.GENERAL);
	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-center">
					<div className="col-sm mt-4 mb-2 mb-sm-0">
						<Layout.Title>
							Organization Configuration
						</Layout.Title>
						<p className="page-header-text">
							Presenting your most recent organization configuration
						</p>
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
				<div className="row justify-content-lg-center">
					<div className="col-lg-9">
						{activeSection === SUPPORTED_SECTIONS.GENERAL && (
							<GeneralConfiguration />
						)}
						{activeSection === SUPPORTED_SECTIONS.PLUGINS && (
							<PluginsConfiguration />
						)}
						{activeSection === SUPPORTED_SECTIONS.BILLING && (
							<BillingConfiguration />
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default SystemConfiguration;

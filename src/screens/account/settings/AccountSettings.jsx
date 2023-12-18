import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Layout, NavPill, GetSupport } from '@components';

import Password from './password';
import Information from './information';
import Notifications from './notifications';
import { SUPPORTED_SECTIONS, NAV_TAB_OPTIONS } from './AccountSettings.controller';

const AccountSettings = () => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SECTIONS.INFORMATION);
	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-center">
					<div className="col-sm mt-4 mb-2 mb-sm-0">
						<Layout.Title>
							Account Settings
						</Layout.Title>
						<p className="page-header-text">
							Presenting your most recent news and information
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
					<div className="col-lg-9 mt-8">
						{activeSection === SUPPORTED_SECTIONS.INFORMATION && (
							<Information />
						)}
						{activeSection === SUPPORTED_SECTIONS.PASSWORD && (
							<Password />
						)}
						{activeSection === SUPPORTED_SECTIONS.NOTIFICATIONS && (
							<Notifications />
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default AccountSettings;


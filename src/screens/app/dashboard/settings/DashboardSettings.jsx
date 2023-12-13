import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Layout, VerticalNavTab } from '@components';

import CompanyOffices from './CompanyOffices';
import CompanyLicenses from './CompanyLicenses';
import CompanyContacts from './CompanyContacts';
import CompanyInformation from './CompanyInformation';

const SUPPORTED_SECTIONS = {
	API: 'API',
	OFFICE: 'OFFICE',
	LICENSES: 'LICENSES',
	INFORMATION: 'INFORMATION',
	PREFERENCES: 'PREFERENCES',
	NOTIFICATIONS: 'NOTIFICATIONS',
};

const SECTION_NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SECTIONS.INFORMATION,
		icon: 'bi-building',
		value: 'General settings',
	},
	{
		key: SUPPORTED_SECTIONS.OFFICE,
		icon: 'bi-pin-map',
		value: 'Office Locations'
	},
	{
		key: SUPPORTED_SECTIONS.LICENSES,
		icon: 'bi-award',
		value: 'Certificates & Licenses',
	},
	{
		key: SUPPORTED_SECTIONS.API,
		icon: 'bi-gear',
		value: 'API',
	},
	{
		key: SUPPORTED_SECTIONS.NOTIFICATIONS,
		icon: 'bi-bell',
		value: 'Notifications',
	},
];

const DashboardSettings = () => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SECTIONS.INFORMATION);
	return (
		<div className="row">
			<div className="col-lg-2">
				<div className="navbar-expand-lg navbar-vertical mb-3 mb-lg-5">
					<div className="d-grid">
						<button type="button" className="navbar-toggler btn btn-white mb-3">
							<span className="d-flex justify-content-between align-items-center">
								<span className="text-dark">
									Menu
								</span>
								<span className="navbar-toggler-default">
									<i className="bi-list" />
								</span>
								<span className="navbar-toggler-toggled">
									<i className="bi-x" />
								</span>
							</span>
						</button>
					</div>
					<div className="collapse navbar-collapse">
						<VerticalNavTab 
							id="accountVerticalNavBar"
							options={SECTION_NAV_TAB_OPTIONS}
							handleTabClick={setActiveSection}
						/>
					</div>
				</div>
			</div>
			<div className="col-lg-10">
				<div className="d-grid gap-3 gap-lg-5">
					{activeSection === SUPPORTED_SECTIONS.INFORMATION && (
						<CompanyInformation />
					)}
					{activeSection === SUPPORTED_SECTIONS.OFFICE && (
						<CompanyOffices 
						/>
					)}
					{activeSection === SUPPORTED_SECTIONS.LICENSES && (
						<CompanyLicenses />
					)}
					{activeSection === SUPPORTED_SECTIONS.API && (
						'Api'
					)}
					{activeSection === SUPPORTED_SECTIONS.NOTIFICATIONS && (
						'Notifications'
					)}
				</div>
			</div>
		</div>
	);
}

export default DashboardSettings;

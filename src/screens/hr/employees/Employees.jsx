import React from 'react';

import { withPrivateRouter } from '@utils/hocs';
import { Layout, NavPill, Breadcrumb, GetSupport } from '@components';

import { 
	NAV_TAB_OPTIONS,
	SUPPORTED_SCREEN_SECTIONS, 
	CUSTOMERS_BREADCRUMB_OPTIONS, 
} from './Employees.controller';
import WorkforceOverview from './overview';
import WorkforceSettings from './settings';
import WorkforceStatistics from './statistics';

const EmployeesScreen = ({ setEmployeeId }) => {
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
											'Manage Workforce'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
											'Workforce statistics'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
											'Workforce Permissions'
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
					<WorkforceOverview setEmployeeId={setEmployeeId} />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
					<WorkforceStatistics />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
					<WorkforceSettings />
				)}
			</div>
		</Layout>
	);
};

export default withPrivateRouter(EmployeesScreen);

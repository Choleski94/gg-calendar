
import React from 'react';
import { useSelector } from 'react-redux';

import { withPrivateRouter } from '@utils/hocs';
import { selectUser } from '@store/selectors/user';
import { Layout, NavPill, GetSupport } from '@components';

import DashboardOverview from './overview';
import DashboardSettings from './settings';
import DashboardStatistics from './statistics';
import { getGreeting, NAV_TAB_OPTIONS, SUPPORTED_SCREEN_SECTIONS } from './dashboard.controller';

const DashboardScreen = () => {
	const userData = useSelector(selectUser);

	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.OVERVIEW);

	const userName = React.useMemo(() => (
		userData?.name || ''
	), [ userData ] );

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-center">
					<div className="col-sm mt-4 mb-2 mb-sm-0">
						<Layout.Title>
							Good {getGreeting()},
							&nbsp;
							<span className="text-capitalize">
								{userName}
							</span>
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
				{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
					<DashboardOverview />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
					<DashboardStatistics />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
					<DashboardSettings />
				)}
			</div>
		</Layout>
	);
};

export default withPrivateRouter(DashboardScreen);

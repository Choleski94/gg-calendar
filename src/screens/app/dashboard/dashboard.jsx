
import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '@store/user/selectors';
import { Layout, NavPill, GetSupport } from '@components';
import withPrivateRouter from '@utils/hocs/withPrivateRouter';

import DashboardOverview from './overview';
import DashboardSettings from './settings';
import DashboardStatistics from './statistics';

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

const getGreeting = () => {
	let res = '';

	const currentHour = new Date().getHours();

	if (currentHour >= 5 && currentHour < 12) {
		res = 'morning';
	} else if (currentHour >= 12 && currentHour < 18) {
		res = 'afternoon';
	} else {
		res = 'evening';
	}

	return res;
}

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

export const SUPPORTED_SCREEN_SECTIONS = {
	OVERVIEW: 'OVERVIEW',
	SETTINGS: 'SETTINGS',
	STATISTICS: 'STATISTICS',
};

export const NAV_TAB_OPTIONS = [
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

export const getGreeting = () => {
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

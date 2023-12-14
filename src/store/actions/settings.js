import * as actionTypes from '../types';

const localeSet = ({ lang, country }) => ({
        type: actionTypes.LOCALE_SET,
        lang, country,
});

export const setLocale = localeObj => localeSet(localeObj);

const dispatchSettingsData = (datas) => {
	const settingsCategory = {};

	datas.map((data) => {
		settingsCategory[data.settingCategory] = {
			...settingsCategory[data.settingCategory],
			[data.settingKey]: data.settingValue,
		};
	});

	return settingsCategory;
};


import { createSelector } from 'reselect';

export const selectSettings = (state) => state.settings;

export const selectCurrentSettings = createSelector(
	[ selectSettings ], (settings) => settings
);

export const selectLocaleSettings = createSelector(
	[selectCurrentSettings], (settings) => settings.locale
);

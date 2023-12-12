
import React from 'react';

import formatMessage from '@utils/formatMessage';

export const languageOptions = [
	{ label: 'English', value: 'en-US' }, 
	{ label: 'Français', value: 'fr-FR' },
	{ label: 'Español', value: 'es-ES' },
];

export const genderOptions = [
	{ label: 'Male', value: 'MALE' },
	{ label: 'Female', value: 'FEMALE' },
	{ label: 'Other', value: 'OTHER' },
];

export const phoneOptions = [
	{ label: 'Mobile', value: 'MOBILE' },
	{ label: 'Home', value: 'HOME' },
	{ label: 'Work', value: 'WORK' },
];

export const emailOptions = [
	{ label: 'Personal', value: 'PERSONAL' },
	{ label: 'Work', value: 'WORK' },
];

export const departmentOptions = [
	{ label: 'Office', value: 'OFFICE' }, 
	{ label: 'Techs', value: 'TECHS' }
];

export const positionOptions = [
	{ label: 'Sales Agent', value: 'SALES_AGENT' }, 
	{ label: 'Recovery', value: 'RECOVERY' },
	{ label: 'Mitigation', value: 'MITIGATION' },
];

export default {
	phoneOptions,
	emailOptions,
	genderOptions,
	languageOptions,
	positionOptions,
	departmentOptions,
};

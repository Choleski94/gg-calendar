// import React from 'react';

// import formatMessage from '@utils/formatMessage';

const useContactOptions = () => {

	const languageOptions = [
		{ label: 'English', value: 'en-US' }, 
		{ label: 'Français', value: 'fr-FR' },
		{ label: 'Español', value: 'es-ES' },
	];

	const genderOptions = [
		{ label: 'Male', value: 'MALE' },
		{ label: 'Female', value: 'FEMALE' },
		{ label: 'Other', value: 'OTHER' },
	];

	const phoneOptions = [
		{ label: 'Mobile', value: 'MOBILE' },
		{ label: 'Home', value: 'HOME' },
		{ label: 'Work', value: 'WORK' },
	];

	const emailOptions = [
		{ label: 'Personal', value: 'PERSONAL' },
		{ label: 'Work', value: 'WORK' },
	];

	const departmentOptions = [
		{ label: 'Office', value: 'OFFICE' }, 
		{ label: 'Techs', value: 'TECHS' }
	];

	const positionOptions = [
		{ label: 'Sales Agent', value: 'SALES_AGENT' }, 
		{ label: 'Recovery', value: 'RECOVERY' },
		{ label: 'Mitigation', value: 'MITIGATION' },
	];

	return {
		phoneOptions,
		emailOptions,
		genderOptions,
		languageOptions,
		positionOptions,
		departmentOptions,
	};
};

export default useContactOptions;

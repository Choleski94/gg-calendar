// import React from 'react';

// import formatMessage from '@utils/formatMessage';

const useTemplateOptions = () => {

	const languageOptions = [
		{ label: 'English', value: 'en-US' }, 
		{ label: 'Français', value: 'fr-FR' },
		{ label: 'Español', value: 'es-ES' },
	];

	const typeOptions = [
		{ label: 'Email', value: 'EMAIL' },
		{ label: 'Sms', value: 'SMS' },
	];

	const categoryOptions = [
		{ label: 'Marketing', value: 'MARKETING' },
		{ label: 'Invoice', value: 'INVOICE' },
		{ label: 'Review', value: 'REVIEW' },
	];

	return {
		typeOptions,
		categoryOptions,
		languageOptions,
	};
};

export default useTemplateOptions;

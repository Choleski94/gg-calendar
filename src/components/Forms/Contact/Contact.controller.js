import moment from 'moment-timezone';

import { trimString, formatOptionValueType } from '@utils';

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

export const SUPPORTED_INPUT_FORM_NAMES = [
	'firstName', 'lastName', 'birthday', 
	'zip', 'address', 'unit', 'buzzer', 'notes'
];

/*
 * Utility helper function to clear options
 *
 * @param {Object.<string, any>} payload - Data object.
 * @param {Array.<string>} - elts element required to clear.
 *
 * @returns {Object.<string, any>} - Return cleared data object.
 */
export const getClearOptions = (payload = {}, elts = []) => {
	const clonedPayload = { ...payload };

	elts.forEach((currentKey) => {
		clonedPayload[currentKey] = [];
	});

	return clonedPayload;
}

export const parseBirthday = (dateTimeString) => (
	moment(new Date(dateTimeString)).format('YYYY-MM-DD')
);

export const initPayload = (data = {}) => ({
	photo: data?.photo,
	zip: data?.zip,
	unit: data?.unit,
	color: data?.color,
	buzzer: data?.buzzer,
	address: data?.address,
	lastName: data.lastName,
	birthday: data?.birthday,
	firstName: data?.firstName,
	city: data?.city,
	email: data?.email,
	phone: data?.phone,
	state: data?.state,
	gender: data?.gender,
	country: data?.country,
	position: data?.position,
	department: data?.department,
	languages: data?.languages,
	...SUPPORTED_INPUT_FORM_NAMES.reduce((agg, currentKey) => {
		const value = data[currentKey];

		// Check if the value is non-empty before adding it to the aggregated object
		if (value !== undefined && value !== null && value !== '') {
			agg[currentKey] = value;
		}

		return agg;
	}, {})
});


export const initForm = (payload = {}, withMultiEmail = false, withMultiPhone = false) => ({
	photo: payload?.photo,
	zip: trimString(payload?.zip),
	unit: trimString(payload?.unit),
	color: trimString(payload?.color),
	buzzer: trimString(payload?.buzzer),
	address: trimString(payload?.address),
	lastName: trimString(payload.lastName),
	birthday: trimString(payload?.birthday),
	firstName: trimString(payload?.firstName),
	city: payload?.city,
	state: payload?.state,
	gender: payload?.gender,
	country: payload?.country,
	position: payload?.position,
	languages: payload?.languages,
	department: payload?.department,
	email: withMultiEmail ? formatOptionValueType(payload?.email) : payload?.email,
	phone: withMultiPhone ? formatOptionValueType(payload?.phone) : payload?.phone,
});


export default {
	phoneOptions,
	emailOptions,
	genderOptions,
	languageOptions,
	positionOptions,
	departmentOptions,
};

import moment from 'moment-timezone';

import { trimString, formatOptionValueType } from '@utils';

export const typeOptions = [
	{
		label: 'University',
		value: 'UNI'
	},
	{
		label: 'Trust',
		value: 'TRUST'
	},
	{
		label: 'Syndicate',
		value: 'SYND'
	},
	{
		label: 'Special Purpose Company',
		value: 'SPC'
	},
	{
		label: 'Public Limited Company',
		value: 'PLC'
	},
	{
		label: 'Organization',
		value: 'ORG'
	},
	{
		label: 'Non-Profit Organization',
		value: 'NPO'
	},
	{
		label: 'Non-Governmental Organization',
		value: 'NGO'
	},
	{
		label: 'Limited Partnership',
		value: 'LP'
	},
	{
		label: 'Limited Life Company',
		value: 'LLC-2'
	},
	{
		label: 'Limited Liability Partnership',
		value: 'LLP'
	},
	{
		label: 'Limited Liability Partnership',
		value: 'LL-1'
	},
	{
		label: 'Limited Liability Company',
		value: 'LLC'
	},
	{
		label: 'Limited',
		value: 'LTD'
	},
	{
		label: 'Institute',
		value: 'INST'
	},
	{
		label: 'Incorporated',
		value: 'INC'
	},
	{
		label: 'Government Agency',
		value: 'GOV'
	},
	{
		label: 'Foundation',
		value: 'FDN'
	},
	{
		label: 'Educational Institution',
		value: 'EDU'
	},
	{
		label: 'Corporation',
		value: 'CORP'
	},
	{
		label: 'Cooperative',
		value: 'CO-OP'
	},
	{
		label: 'Company',
		value: 'CO'
	},
	{
		label: 'Club or Social Organization',
		value: 'CLUB'
	},
	{
		label: 'Charity',
		value: 'CHAR'
	},
	{
		label: 'Association',
		value: 'ASSOC'
	},
	{
		label: 'Other',
		value: 'OTHER'
	},
];

export const sectorOptions = [
	{
		label: 'Transportation and Logistics',
		value: 'TRANSPORTATION_LOGISTICS'
	},
	{
		label: 'Retail and Consumer Goods',
		value: 'RETAIL_CONSUMER_GOODS'
	},
	{
		label: 'Repair Appliances',
		value: 'REPAIR_APPLIANCES'
	},
	{
		label: 'Manufacturing',
		value: 'MANUFACTURING'
	},
	{
		label: 'Information Technology and Telecommunications',
		value: 'INFORMATION_TECHNOLOGY_TELECOMMUNICATIONS'
	},
	{
		label: 'Health Care and Life Sciences',
		value: 'HEALTH_CARE_LIFE_SCIENCES'
	},
	{
		label: 'Financial Services',
		value: 'FINANCIAL_SERVICES'
	},
	{
		label: 'Engineering',
		value: 'ENGINEERING'
	},
	{
		label: 'Creative Industries',
		value: 'CREATIVE_INDUSTRIES'
	},
	{
		label: 'Construction',
		value: 'CONSTRUCTION'
	},
	{
		label: 'Agriculture and Agri-food',
		value: 'AGRICULTURE_AGRI_FOOD'
	},
	{
		label: 'Other',
		value: 'OTHER'
	},
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

export const SUPPORTED_INPUT_FORM_NAMES = [
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
};

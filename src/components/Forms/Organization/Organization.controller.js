import { trimString, formatOptionValueType } from '@utils';

export const SUPPORTED_INPUT_FORM_NAMES = [
	'name', 'slogan', 
	'orgNum', 'www', 
	'email', 'phone', 
	'pstNum', 'pstPercent', 
	'gstNum', 'gstPercent', 
	'zip', 'address', 'unit', 'buzzer'
];

export const initPayload = (data = {}) => ({
	photo: data?.photo,
	name: data.name,
	slogan: data?.slogan,
	orgNum: data?.orgNum,
	www: data?.www,
	email: data?.email,
	phone: data?.phone,
	pstNum: data?.pstNum,
	pstPercent: data?.pstPercent,
	gstNum: data?.gstNum,
	gstPercent: data?.gstPercent,
	zip: data?.zip,
	unit: data?.unit,
	state: data?.state,
	buzzer: data?.buzzer,
	address: data?.address,
	country: data?.country,
	...SUPPORTED_INPUT_FORM_NAMES.reduce((agg, currentKey) => {
		const value = data[currentKey];

		// Check if the value is non-empty before adding it to the aggregated object
		if (value !== undefined && value !== null && value !== '') {
			agg[currentKey] = value;
		}

		return agg;
	}, {})
});

export const initForm = (payload = {}) => ({
	photo: payload?.photo,
	name: 		trimString(payload.name),
	slogan: 	trimString(payload?.slogan),
	orgNum: 	trimString(payload?.orgNum),
	www: 		trimString(payload?.www),
	email: 		trimString(payload?.email),
	phone: 		trimString(payload?.phone),
	pstNum: 	trimString(payload?.pstNum),
	pstPercent: 	trimString(payload?.pstPercent),
	gstNum: 	trimString(payload?.gstNum),
	gstPercent: 	trimString(payload?.gstPercent),
	zip: payload?.zip,
	unit: payload?.unit,
	state: payload?.state,
	buzzer: payload?.buzzer,
	address: payload?.address,
	country: payload?.country,
});


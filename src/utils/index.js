import { format as formatD } from 'date-fns';
import chroma from 'chroma-js';

import { 
	JOB_TYPES, 
	DEFAULT_NA, 
	TECH_COLORS, 
	DAY_STRINGS, 
	MARKER_TYPES, 
	JOB_STATUSES, 
	MONTH_STRINGS,
	TIMEZONE_DELTA,
	EQUIPMENT_TYPES, 
	EQUIPMENT_CATEGORIES, 
	DEFAULT_NO_TECH_COLOR, 
	ONE_DAY_MINUS_ONE_MILLI_SECOND,
} from '../constants';

export const isBoolean = val => !!val === val;

export const isEven = (n = 0) => n % 2 == 0;

export const humanBoolean = (f) => f ? 'Yes' : 'No';

export const hasObjectKey = (data = {}) => Boolean(
	Object.keys(data || {}).length
);

export const parseLocaleLang = (locale = '') => {
	const parsedLocale = (locale || '').toUpperCase();
	const [ lang ] = parsedLocale.split('-');

	return lang;
};

export const hasPrimary = (isPrimary = false, totalElts = 0) => isPrimary && totalElts > 1;

export const onlyUnique = (item, index, arr) => arr.findIndex(val => val === item) === index;

export const sortAlphabeticallyByKey = (key) => (a, b) => a[key].localeCompare(b[key]);

export const sumArray = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

export const is2dArray = (array = []) => (array[0] === undefined) ? false : (array[0].constructor === Array);

export const shareAtLeastOneElement = (arr1, arr2) => arr1.map(elem => arr2.includes(elem)).includes(true);

export const onlyUniqueByKey = (key) => (item, index, arr) => arr.findIndex(obj => obj[key] === item[key]) === index;

export const onlyDuplicateByKey = (key) => (item, index, arr) => arr.findIndex(obj => obj[key] === item[key]) !== index;

export const convertToEpoch = (dateString) => {
	// Parse the input date string using date-fns
	const parsedDate = new Date(dateString);

	// Convert the parsed date to epoch time
	const epochTime = parsedDate.getTime();

	return epochTime;
}

export const formatDate = (dateString, dateFormat = 'yyyy-MM-dd') => {
	// Parse the input date string into a Date object using the 'M/d/yyyy' format
	const date = new Date(dateString);
	return formatD(date, dateFormat);
};

export const plusDay = (startDate, qtyDay) => {
	var t0 = new Date(startDate);
	var t1 = new Date(t0);
	t1.setDate(t0.getDate() + qtyDay);
	t1.toLocaleDateString();
	return formatDate(t1);
};

export const getTodayDateString = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
}

export const getTodayDateRange = () => {
	const now = getTodayDateString();

	const start_ts = Date.parse(now) + TIMEZONE_DELTA;
	const end_ts = Date.parse(now) + TIMEZONE_DELTA + ONE_DAY_MINUS_ONE_MILLI_SECOND;

	const [startDate, endDate] = [new Date(0), new Date(0)]; // create a new date instance with the Unix epoch (January 1, 1970 00:00:00 UTC)

	startDate.setTime(start_ts);
	endDate.setTime(end_ts);

	return [ startDate, endDate ];
};

export const parseTechCapacity = (requiredCap, currentCap) => {
	const res = DEFAULT_NA;
	const delta = requiredCap - currentCap;
	return Number.isInteger(delta) ? delta : DEFAULT_NA;
};

export const getTimePeriod = (timeString) => {
	const date = new Date(`2000-01-01T${timeString}:00`);
	const hours = date.getHours();
	const period = hours >= 12 ? 'PM' : 'AM';
	return period;
};

/*
 * Get job category code by status name.
 */
export const getJobSubStatus = (slug) => {
	let [color, value] = ['#e8e8e8', null ];

	switch(slug) {
		case JOB_TYPES.T:
			break;
		case JOB_TYPES.NEW:
			break;
		case JOB_TYPES.CLOSED:
			break;
		case JOB_TYPES.REPAIR:
			break;
		case JOB_TYPES.COMPLETED:
			break;
		case JOB_TYPES.CANCELLED:
			break;
		case JOB_TYPES.T_FOLLOW_UP:
			break;
		case JOB_TYPES.REPAIR_PARTS:
			break;
		case JOB_TYPES.VERIFIED_PAID:
			break;
		case JOB_TYPES.W_RELIABLE:
			break;
		case JOB_TYPES.REVIEW_SENT:
			break;
		case JOB_TYPES.RECALL:
			break;
		case JOB_TYPES.RECALL_COMPLETE:
			break;
		case JOB_TYPES.NO_REVIEW:
			break;
		case JOB_TYPES.W_BACKORDER:
			break;
		case JOB_TYPES.URGENT:
			break;
		case JOB_TYPES.PAYMENT_OWED:
			color = '#dc3545';
			value = 'fa-money';
			break;
		case JOB_TYPES.RECALL:
			break;
		case JOB_TYPES.COMPLETE_NO_REVIEW:
			break;
		case JOB_TYPES.NEW_PARTS_NEEDED:
			break;
		case JOB_TYPES.REPAIR:
			break;
		case JOB_TYPES.INSTALL:
			break;
		case JOB_TYPES.BLACKLIST:
			break;
		case JOB_TYPES.CASH:
			break;
		case JOB_TYPES.INSTALL_PARTS:
			break;
		case JOB_TYPES.W_MARCONE:
			break;
		case JOB_TYPES.W_OTHER:
			break;
		case JOB_TYPES.PAYMENT_OWED_NET30:
			color = '#dc3545';
			value = 'fa-money';
			break;
		case JOB_TYPES.FOLLOW_UP:
			break;
		case JOB_TYPES.NET_30_PAST_DUE:
			break;
		case JOB_TYPES.MAINTENANCE:
			break;
		case JOB_TYPES.RECALL:
			break;
		case JOB_TYPES.OFFICE:
			color = '#39ff14';
			value = 'fa-flag';
			break;
		// Techs
		case JOB_TYPES.MIKE:
			color = '#1546e8';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.MATT:
			color = '#000000';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.RAZI:
			color = '#8a0ec4';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.ERIC:
			color = '#823415';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.LENT:
			color = '#126625';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.LOIC:
			color = '#718f50';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.MAREK:
			color = '#545353';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.KIHAN:
			color = '#c24242';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.PETER:
			color = '#d400d4';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.BILLY:
			color = '#cc8214';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.DUNCAN:
			color = '#999409';
			value = 'fa-wrench';
			break;
		case JOB_TYPES.JULIAN:
			color = '#d6af00';
			value = 'fa-wrench';
			break;
		// Recall
		case JOB_TYPES.RECALL_MATT:
			color = '#000000';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_MAREK:
			color = '#545353';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_MIKE:
			color = '#1546e8';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_LOIC:
			color = '#718f50';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_SAM:
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_SAM_AARON:
			color = '#356a9f';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_AARON:
			color = '#356a9f';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_BILLY:
			color = '#cc8214';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_KIHAN:
			color = '#c24242';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_RAZI:
			color = '#8a0ec4';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_ERIC:
			color = '#823415';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_LENT:
			color = '#126625';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_DUNCAN:
			color = '#999409';
			value = 'fa-refresh';
			break;
		case JOB_TYPES.RECALL_PETER:
			color = '#d400d4';
			value = 'fa-refresh';
		// TODO: Add RECALL_BILLY
		// TODO: Add RECALL_JULLIAN
		default:
	}

	return { color, value, slug };
};

/*
 * Get equipment color.
 */
export const getEquipmentProps = (eqptType) => {
	let [color, categoryType] = ['', ''];

	switch(eqptType) {
		case EQUIPMENT_TYPES.VACUUM: 
		case EQUIPMENT_TYPES.CENTRAL_VACUUM_SYSTEM: 
		case EQUIPMENT_TYPES.BROYEUR_GARBAGE_DISPOSAL: 
			// should be rainbow
			color = '#dd5fdd';
			categoryType = EQUIPMENT_CATEGORIES.SPECIAL;
			break;
		case EQUIPMENT_TYPES.CUISINIERE_INDUCTION_INDUCTION_RANGE: 
		case EQUIPMENT_TYPES.PLAQUE_DE_CUISSON_A_INDUCTION_INDUCTION_COOKTOP: 
			// Red color
			color = '#dc3545';
			categoryType = EQUIPMENT_CATEGORIES.INDUCTION;
			break;
		case EQUIPMENT_TYPES.FOYER_FIREPLACE: 
		case EQUIPMENT_TYPES.FRITEUSE_DEEP_FRYER: 
		case EQUIPMENT_TYPES.SECHEUSE_A_GAZ_GAS_DRYER: 
		case EQUIPMENT_TYPES.CUISINIERE_A_GAZ_GAS_RANGE: 
		case EQUIPMENT_TYPES.FRITEUSE_A_GAZ_GAS_DEEP_FRYER: 
		case EQUIPMENT_TYPES.PLAQUE_DE_CUISSON_A_GAZ_GAS_COOKTOP: 
		case EQUIPMENT_TYPES.LAUNDRY_CENTER_SECHEUSE_A_GAZ_GAS_DRYER: 
		case EQUIPMENT_TYPES.BRULEUR_A_GAZ_POUR_MARMITE_GAS_STOCK_POT_BURNER: 
			// Yellow color
			color = '#e5fe00';
			categoryType = EQUIPMENT_CATEGORIES.GAS;
			break;
		case EQUIPMENT_TYPES.FRIDGE: 
		case EQUIPMENT_TYPES.ICE_MACHINE: 
		case EQUIPMENT_TYPES.DISPLAY_FRIDGE: 
		case EQUIPMENT_TYPES.CONGELATEUR_FREEZER: 
		case EQUIPMENT_TYPES.REFRIGERATEUR_REFRIGERATOR: 
		case EQUIPMENT_TYPES.REFRIGERATEUR_A_VIN_WINE_FRIDGE: 
		case EQUIPMENT_TYPES.UNDERCOUNTER_ICE_MAKER_MACHINE_A_GLACONS_SOUS_COMPTOIR: 
			// Blue color
			color = '#0070f3';
			categoryType = EQUIPMENT_CATEGORIES.FRIDGE;
			break;
		case EQUIPMENT_TYPES.OVEN: 
		case EQUIPMENT_TYPES.SECHEUSE_DRYER: 
		case EQUIPMENT_TYPES.CUISINIERE_RANGE: 
		case EQUIPMENT_TYPES.LAVEUSE_WASHER_FL: 
		case EQUIPMENT_TYPES.LAVEUSE_WASHER_TL: 
		case EQUIPMENT_TYPES.INDUSTRIAL_WASHER: 
		case EQUIPMENT_TYPES.WASHERDRYER_COMBO: 
		case EQUIPMENT_TYPES.LAVEUSE_FL_STACKED: 
		case EQUIPMENT_TYPES.MICRO_ONDE_MICROWAVE: 
		case EQUIPMENT_TYPES.SECHEUSE_DRYER_STACKED: 
		case EQUIPMENT_TYPES.FOUR_ENCASTRE_WALL_OVEN: 
		case EQUIPMENT_TYPES.SECHEUSE_DRYER_VENTLESS: 
		case EQUIPMENT_TYPES.HOTTE_DE_CUISINE_HOODFAN: 
		case EQUIPMENT_TYPES.LAVE_VAISSELLE_DISHWASHER: 
		case EQUIPMENT_TYPES.LAVEUSE_WASHER_FL_STACKED: 
		case EQUIPMENT_TYPES.LAVEUSE_WASHER_TL_STACKED: 
		case EQUIPMENT_TYPES.PLAQUE_DE_CUISSON_COOKTOP: 
		case EQUIPMENT_TYPES.LAUNDRY_CENTER_LAVEUSE_WASHER: 
		case EQUIPMENT_TYPES.LAUNDRY_CENTER_SECHEUSE_DRYER: 
		case EQUIPMENT_TYPES.SECHEUSE_DRYER_VENTLESS_STACKED: 
		case EQUIPMENT_TYPES.LAVEUSE_LAUNDRY_CENTER_WASHER_FL: 
		case EQUIPMENT_TYPES.LAVEUSE_PORTABLE_PORTABLE_WASHER: 
		case EQUIPMENT_TYPES.LAVE_VAISSELLE_DISHWASHER_PORTABLE: 
		case EQUIPMENT_TYPES.DOUBLE_WALL_OVEN_DOUBLE_FOUR_ENCASTER: 
		case EQUIPMENT_TYPES.LAVE_VAISSELLE_A_DEUX_TIROIRS_DOUBLE_DRAWER_DISHWASHER: 
		case EQUIPMENT_TYPES.SYSTEME_DE_VENTILATION_A_ASPIRATION_DESCENDANTE_DOWNDRAFT_SYSTEM: 
			// Green color 
			color = '#28a745';
			categoryType = EQUIPMENT_CATEGORIES.ELSE;
			break;

		default:
			color = '#28a745';
	}

	return { color, categoryType };
};

export const getReultsWrapperClassName = (showDetail) => `results-wrapper ${showDetail ? 'show-detail' : ''}`;

export const getControlsMoreClassName = (currentJobId, activeJobId) => `controls-more ${currentJobId === activeJobId ? 'show' : ''}`;

// Set job markers.
export const parseTechJobMarker = ({ lng, lat, currentJob }) => {
	const [ primaryJobTech = {} ] = currentJob?.techs_assigned || [];
	const { start_date = '', equipment = [] } = currentJob || {};
	return {
		start_date,
		type: MARKER_TYPES.JOB,
		value: currentJob?.techWorkIdx + 1,
		lng, lat, id: String(currentJob?.id),
		hoverValue: '$ ' + (currentJob?.total || '').toString(),
		color: TECH_COLORS[String(primaryJobTech?.id)] || DEFAULT_NO_TECH_COLOR,
		options: {
			subStatus: getJobSubStatus(currentJob?.sub_status),
			techIds: currentJob?.techs_assigned.map(({ id }) => id),
			timePeriod: getTimePeriod(currentJob?.time_frame_promised_start),
			equipment: equipment.map(({ type }) => ({
				id: currentJob?.customer_name + currentJob?.created_at,
				...getEquipmentProps((type || '').trim())
			})),
		}
	}
};

export const colourStyles = {
	control: (styles) => ({ ...styles, backgroundColor: 'white' }),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		const color = chroma(data.color || DEFAULT_NO_TECH_COLOR);
		return {
			...styles,
			color: '#fff',
			backgroundColor: data.color,
			// backgroundColor: isDisabled ? undefined : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : undefined,
			// color: isDisabled ? '#ccc' : isSelected ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black' : data.color,
			// cursor: isDisabled ? 'not-allowed' : 'default', ':active': {
			// 	...styles[':active'], backgroundColor: !isDisabled ? isSelected ? data.color : color.alpha(0.3).css() : undefined,
			// },
		};
	},
	multiValue: (styles, { data }) => {
		const color = chroma(data.color || DEFAULT_NO_TECH_COLOR);
		return {
			...styles,
			backgroundColor: color.alpha(0.1).css(),
		};
	},
	multiValueLabel: (styles, { data }) => ({
		...styles,
		color: data.color,
	}),
	multiValueRemove: (styles, { data }) => ({
		...styles,
		color: data.color,
		':hover': {
			backgroundColor: data.color,
			color: 'white',
		},
	}),
};

/*
 * Set image asset url.
 */
export const setImgUrl = (filePath = '') => (
	`https://servicefusion.s3.amazonaws.com/images/estimates/${filePath}`
);

/*
 * Get equipment custom field(s).
 */
export const getEquipmentCustomField = (equipment, customField) => {
	const res = equipment.find(({ name }) => name === customField);
	return res?.value || DEFAULT_NA;
}

/*
 * Get get tech color.
 */
export const getTechColor = (options, primaryTechId) => {
	const res = options.find(({ value }) => primaryTechId === value);
	return res?.color || DEFAULT_NO_TECH_COLOR;
}

/*
 * Get tax table 
 */
export const getFormattedTax = (tax = '') => {
	const [taxOne, taxTwo] = tax.split('+ ');
	return [taxOne + '+', taxTwo];
};

// add a leading 0 to a number if it is only one digit
export const addLeadingZero = (num = 0) => {
	num = num.toString();
	while (num.length < 2) num = '0' + num;
	return num;
}

export const buildDate = (timeStamp = 0) => {
	const [dayStrings, monthStrings] = [DAY_STRINGS, MONTH_STRINGS];

	const date = new Date(timeStamp * 1000);

	const day = dayStrings[date.getDay()];
	const dayNumber = addLeadingZero(date.getDate());
	const month = monthStrings[date.getMonth()];
	const year = date.getFullYear();
	const time = `${addLeadingZero(date.getHours())}:${addLeadingZero(date.getMinutes())}:00`;
	const timezone = date.getTimezoneOffset() === 0 ? 'GMT' : 'BST';

	return `${day}, ${dayNumber} ${month} ${year}`;
}

export const parseDuration = (totalSeconds = 0) => {
	const hours = Math.floor(totalSeconds/ 60);
	const seconds = totalSeconds - (hours * 60);
	return `${addLeadingZero(hours)}:${addLeadingZero(seconds)}`;
}

export const parseTime = (epoch = 0) => {
	const date = new Date(epoch * 1000);
	let hours = date.getHours();

	const minutes = date.getMinutes();

	let ampm = 'am';

	if (hours > 12) {
		hours -= 12;
		ampm = 'pm';
	}

	if (hours === 0) {
		hours = 12;
	}

	const formattedHours = addLeadingZero(hours);
	const formattedMinutes = addLeadingZero(minutes);

	return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

/*
 * Filter array of object
 * 
 * @param  {Array} payload - Set ob object.
 * @param {Array<string>} - Set of key(s).
 * @param {string} - Target query value.
 */
export const filterData = (payload = [], filterKeys = [], query = '') => (
	payload.filter((data, index, self) => {
		const values = filterKeys.map((key) => (
			key.split('.').reduce((obj, propertyName) => (
				obj && obj[propertyName]
			), data)
		));
		const stringValue = values.join('').toLowerCase();
		return stringValue.includes(query.toLowerCase()) && self.findIndex((item) => item === data) === index;
	})
);

export const deleteObject = (obj = {}, objElts = [], key = 'id') => {
	var elts = [ ...objElts ];

	const index = elts.findIndex(item => item[key] === obj[key]);

	if (index >= 0) {
		elts.splice(index, 1);
	}

	return elts;
}

export const updateOrPushObject = (obj = {}, objElts = [], key = 'id') => {
	var elts = [ ...objElts ];

	const index = elts.findIndex(item => item[key] === obj[key]);

	if (index === -1) {
		elts.push(obj);
	} else {
		elts[index] = obj;
	}

	return elts;
}

export const formatOptionValueType = (options = []) => options.map(({ value, option }) => ({
	value, type: option
}))

export const trimString = (str = '') => String(str || '').trim();

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

export const getYear = () => {
	const d = new Date();
	return d.getFullYear();
}

export default {
	isEven,
	plusDay,
	getYear,
	sumArray,
	is2dArray,
	setImgUrl,
	isBoolean,
	buildDate,
	parseTime,
	hasPrimary,
	onlyUnique,
	formatDate,
	filterData,
	trimString,
	hasObjectKey,
	deleteObject,
	colourStyles,
	getTechColor,
	humanBoolean,
	getTimePeriod,
	parseDuration,
	convertToEpoch,
	addLeadingZero,
	getClearOptions,
	parseLocaleLang,
	getFormattedTax,
	getJobSubStatus,
	onlyUniqueByKey,
	getEquipmentProps,
	getTodayDateRange,
	parseTechCapacity,
	onlyDuplicateByKey,
	getTodayDateString,
	parseTechJobMarker,
	updateOrPushObject,
	formatOptionValueType,
	shareAtLeastOneElement,
	sortAlphabeticallyByKey,
	getEquipmentCustomField,
	getControlsMoreClassName,
	getReultsWrapperClassName,
}

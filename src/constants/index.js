'use strict';

import auth from './auth';
import jobs from './jobs';
import layouts from './layouts';
import accounts from './accounts';


export const ENTITIES = {
	QUOTE: 'quote',
	OFFER: 'offer',
	CLIENT: 'client',
	INVOICE: 'invoice',
	PAYMENT_INVOICE: 'payment/invoice',
};

/* OLD STUFF */
export const CALL_TECH_TITLE = 'FLASH';

export const ACCESS_TOKEN_NAME = 'x-auth-token';

export const ONE_DAY_MINUS_ONE_MILLI_SECOND = 86399999;

export const FOUR_HOUR = 14400000;

export const TIMEZONE_DELTA = FOUR_HOUR;

export const DEFAULT_TIME_FORMAT = 'fr-FR';

export const DEFAULT_NA = 'N/A';

export const DEFAULT_COUNTRY = 'CA';

export const BASE_DEFAULT_GRAY = '#e6e6e6';

export const DEFAULT_NO_TECH_COLOR = '#39ff14';

export const CALL_DIRECTION_IN = 'in';

export const CALL_DIRECTION_OUT = 'out';

export const CALL_STATUS_NO_ANSWER = 'no-answer';

export const CALL_DIRECTION_OPTIONS = [
	{ value: CALL_DIRECTION_IN, label: CALL_DIRECTION_IN },
	{ value: CALL_DIRECTION_OUT, label: CALL_DIRECTION_OUT },
];

export const CALL_SALES_LEAD_OPTIONS = [
	{ value: 'Yes', label: 'Yes' },
	{ value: 'No', label: 'No' },
];

export const CALL_STATUS_OPTIONS = [
	{ value: 'completed', label: 'Completed' },
	{ value: 'no-answer', label: 'No Answer' },
	{ value: 'failed', label: 'Failed' },
];

export const DEFAULT_LOCATION = {
	lat: 45.5308,
	lng: -73.6591
};

export const ACTION_MENU_OPTIONS = {
	EDIT: 'EDIT', 
	ASSIGN: 'ASSIGN', 
	SCHEDULE: 'SCHEDULE',
	DISPATCH: 'DISPATCH',
};

export const EQUIPMENT_CUSTOM_FIELDS = {
	REPAIR: 'REPAIR',
	PROBLEM: 'Problem',
	DIAGNOSTIC: 'DIAGNOSTIC',
};

export const TIME_PERIODS = {
	AM: 'AM',
	PM: 'PM',
};

export const MARKER_TYPES = {
	JOB: 'JOB',
	TECH: 'TECH',
	PART: 'PART',
	SEARCH: 'SEARCH',
	OFFICE: 'OFFICE',
};

export const MARKER_OPTIONS = [
	{
		value: MARKER_TYPES.JOB,
		label: 'Jobs',
	},
	{
		value: MARKER_TYPES.OFFICE,
		label: 'Office',
	},
	{
		value: MARKER_TYPES.PART,
		label: 'Stores',
	},
	{
		value: MARKER_TYPES.TECH,
		label: 'Techs home',
	},
];

export const CARACTERISTIC_TAGS = {
	TIME: 'TIME',
	PART: 'PART',
	EQUIPMENT: 'EQUIPMENT',
};

export const CARACTERISTIC_TAG_OPTIONS = [
	{
		value: CARACTERISTIC_TAGS.TIME,
		label: 'Time',
	},
	{
		value: CARACTERISTIC_TAGS.PART,
		label: 'Parts',
	},
	{
		value: CARACTERISTIC_TAGS.EQUIPMENT,
		label: 'Equipment',
	},
];

export const TASK_TYPES = {
	JOBS: 'jobs', 
	ESTIMATES: 'estimates', 
};

export const TASK_COLORS = {
	ALL: BASE_DEFAULT_GRAY, 
	JOBS: '#dc104e', 
	ESTIMATES: '#1e2b0e', 
};

export const TASK_OPTIONS = [
	{
		color: TASK_COLORS.JOBS,
		value: TASK_TYPES.JOBS,
		label: 'Jobs'
	},
	{
		color: TASK_COLORS.ESTIMATES,
		value: TASK_TYPES.ESTIMATES,
		label: 'Estimates'
	},
];

export const EQUIPMENT_CATEGORIES = {
	FRIDGE: 'Fridge',
	GAS: 'Gas',
	INDUCTION: 'Induction',
	ELSE: 'Everything else',
	SPECIAL: 'Special',
};

export const EQUIPMENT_OPTIONS = [
	{
		value: EQUIPMENT_CATEGORIES.GAS,
		label: EQUIPMENT_CATEGORIES.GAS,
	},
	{
		value: EQUIPMENT_CATEGORIES.FRIDGE,
		label: EQUIPMENT_CATEGORIES.FRIDGE,
	},
	{
		value: EQUIPMENT_CATEGORIES.SPECIAL,
		label: EQUIPMENT_CATEGORIES.SPECIAL,
	},
	{
		value: EQUIPMENT_CATEGORIES.INDUCTION,
		label: EQUIPMENT_CATEGORIES.INDUCTION,
	},
	{
		value: EQUIPMENT_CATEGORIES.ELSE,
		label: EQUIPMENT_CATEGORIES.ELSE,
	},
];

export const OPTION_MISSING_REASON = 'Missing reason';

export const OPTION_MISSING_OUTCOME = 'Missing outcome';


export const JOB_CATEGORIES = {
	OPEN: 'OPEN',
	CLOSED: 'CLOSED',
	OPEN_ACTIVE: 'OPEN_ACTIVE',
};

export const JOB_TYPES = {
	'NEW': 'New',
	'REPAIR_PARTS': 'Repair--> Parts',
	'VERIFIED_PAID': 'VERIFIED & PAID',
	'CANCELLED': 'Cancelled/ Annulé',
	'CLOSED': 'Closed',
	'T_FOLLOW_UP': 'T? - Follow up',
	'W_RELIABLE': 'W - Reliable',
	'OFFICE': 'Office',
	'REVIEW_SENT': 'Review Sent',
	'RECALL': 'Recall',
	'RECALL_COMPLETE': 'Recall Complete',
	'COMPLETED': 'Completed',
	'NO_REVIEW': 'NO REVIEW',
	'T': 'T',
	'W_BACKORDER': 'W BackOrder',
	'MAREK': 'Marek',
	'MIKE': 'Mike',
	'JULIAN': 'Julian',
	'URGENT': 'URGENT',
	'PAYMENT_OWED': 'Payment Owed',
	'RECALL': 'Recall.',
	'REPAIR': 'Repair',
	'COMPLETE_NO_REVIEW': 'Complete NO REVIEW',
	'NEW_PARTS_NEEDED': 'New-->Parts Needed',
	'REPAIR': 'Repair',
	'MATT': 'Matt',
	'INSTALL': 'INSTALL',
	'BLACKLIST': 'BLACKLIST',
	'RAZI': 'Razi',
	'CASH': 'CASH',
	'INSTALL_PARTS': 'INSTALL (PARTS)',
	'W_MARCONE': 'W - Marcone',
	'W_OTHER': 'W - Other',
	'PAYMENT_OWED_NET30': 'Payment Owed (NET30)',
	'FOLLOW_UP': '*Follow Up*',
	'NET_30_PAST_DUE': 'Net 30 Past Due',
	'ERIC': 'Eric',
	'BILLY': 'Billy',
	'LENT': 'Lent',
	'RECALL': "Recall (msg'd)",
	'KIHAN': 'Kihan',
	'PETER': 'Peter',
	'MAINTENANCE': 'Maintenance',
	'LOIC': 'Loic',
	'DUNCAN': 'Duncan',
	'RECALL_MATT': 'Recall Matt',
	'RECALL_MAREK': 'Recall Marek',
	'RECALL_MIKE': 'Recall Mike',
	'RECALL_LOIC': 'Recall Loic',
	'RECALL_SAM': 'Recall Sam',
	'RECALL_SAM_AARON': 'Recall Sam/Aaron',
	'RECALL_AARON': 'Recall Aaron',
	'RECALL_BILLY': 'Recall Billy',
	'RECALL_KIHAN': 'Recall Kihan',
	'RECALL_RAZI': 'Recall Razi',
	'RECALL_ERIC': 'Recall Eric',
	'RECALL_LENT': 'Recall Lent',
	'RECALL_DUNCAN': 'Recall Duncan',
	'RECALL_PETER': 'Recall Peter',
};

export const JOB_STATUSES = Object.values(JOB_TYPES);

export const TECH_COLORS = {
	'980249725': '#d400d4',
	'980249733': '#d6af00',
	'980249742': '#3486d9',
	'980249744': '#545353',
	'980249746': '#e0923e',
	'980249748': '#1546e8',
	'980262079': '#9e856a',
	'980264541': '#e4e7eb',
	'980268363': '#33b4d4',
	'980269606': '#2d70e3',
	'980270975': '#c29523',
	'980285509': '#874287',
	'980292271': '#db7100',
	'980296068': '#000000',
	'980313640': '#75461a',
	'980314507': '#ff00ff',
	'980315068': '#1ad92d',
	'980317006': '#a35c26',
	'980317012': '#d19302',
	'980317905': '#612aa8',
	'980317910': '#523e28',
	'980318185': '#356a9f',
	'980329072': '#b03c67',
	'980336963': '#8a0ec4',
	'980338443': '#823415',
	'980338444': '#ff0000',
	'980369329': '#356a9f',
	'980374401': '#4f1616',
	'980386030': '#359f5f',
	'980389953': '#f5da0e',
	'980398198': '#356a9f',
	'980398206': '#356a9f',
	'980409251': '#126625',
	'980418227': '#cc8214',
	'980432620': '#c24242',
	'980434436': '#632a2a',
	'980438738': '#356a9f',
	'980452730': '#999409',
	'980454870': '#718f50',
	'980455002': '#72ade8',
	'980468170': '#356a9f',
	'980479413': '#356a9f',
	'980486095': '#24a6e7'
};

export const TECHS_LOCATIONS = {
	'980249744': {
		lat: 45.4161109,
		lng: -73.626286	
	},
	'980468170': {
		lat: 45.4557529,
		lng: -73.575286	
	},
	'980409251': {
		lat: 45.4451169,
		lng: -73.6976514
	},
	'980296068': {
		lat: 45.4736545,
		lng: -73.6481229
	},
	'980336963': {
		lat: 45.4376939,
		lng: -73.8447617
	},
	'980432620': {
		lat: 45.5046232,
		lng: -73.6613024
	},
	'980249748': {
		lat: 45.5194283,
		lng: -73.7265281
	},
	'980452730': {
		lat: 45.5604535,
		lng: -73.690397	
	},
	'980338443': {
		lat: 45.4889739,
		lng: -73.438429	
	},
	'980249733': {
		lat: 45.5254068,
		lng: -73.6089988
	},
	'980454870': {
		lat: 45.5201704,
		lng: -73.5654021
	},
	'980249725': {
		lat: 45.6068137,
		lng: -73.5254151
	},
	'980418227': {
		lat: 45.5142122,
		lng: -73.7311405
	},
	// Missing Ali home
	'980486095': DEFAULT_LOCATION,
};

export const PART_LOCATIONS = [
	{
		name: 'Reliable Parts',
		lat: 45.6041008,
		lng: -73.604468,
	},
	{
		name: 'Distinictive parts',
		lat: 45.5766567,
		lng: -73.7489113,
	},
	{
		name: 'Reliable parts laval',
		lat: 45.559266,
		lng: -73.7689407,
	}
];

export const OFFICE_LOCATIONS = [
	{
		name: 'Réparation Flash Repair',
		...DEFAULT_LOCATION,
	},
];

export const DAY_STRINGS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const MONTH_STRINGS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const EQUIPMENT_TYPES = {
	BROYEUR_GARBAGE_DISPOSAL: 'Broyeur / Garbage Disposal',
	BRULEUR_A_GAZ_POUR_MARMITE_GAS_STOCK_POT_BURNER: 'Brûleur à gaz pour marmite / Gas stock pot burner',
	CENTRAL_VACUUM_SYSTEM: 'Central vacuum System',
	CONGELATEUR_FREEZER: 'Congélateur / Freezer ',
	CUISINIERE_INDUCTION_INDUCTION_RANGE: 'Cuisiniere induction / Induction Range',
	CUISINIERE_RANGE: 'Cuisinière / Range',
	CUISINIERE_A_GAZ_GAS_RANGE: 'Cuisinière à Gaz / Gas Range',
	DISPLAY_FRIDGE: 'Display Fridge ',
	DOUBLE_WALL_OVEN_DOUBLE_FOUR_ENCASTER: 'Double wall oven // Double four encaster ',
	FOUR_ENCASTRE_WALL_OVEN: 'Four Encastré / Wall Oven',
	FOYER_FIREPLACE: 'Foyer / Fireplace',
	FRIDGE: 'Fridge',
	FRITEUSE_DEEP_FRYER: 'Friteuse / Deep Fryer',
	FRITEUSE_A_GAZ_GAS_DEEP_FRYER: 'Friteuse à gaz / Gas Deep Fryer',
	HOTTE_DE_CUISINE_HOODFAN: 'Hotte de Cuisine / Hoodfan',
	ICE_MACHINE: 'Ice Machine ',
	INDUSTRIAL_WASHER: 'Industrial Washer ',
	LAUNDRY_CENTER_LAVEUSE_WASHER: 'Laundry Center - Laveuse / Washer',
	LAUNDRY_CENTER_SECHEUSE_DRYER: 'Laundry Center - Secheuse / Dryer',
	LAUNDRY_CENTER_SECHEUSE_A_GAZ_GAS_DRYER: 'Laundry Center - Secheuse à Gaz / Gas Dryer',
	LAVE_VAISSELLE_DISHWASHER: 'Lave-vaisselle / Dishwasher',
	LAVE_VAISSELLE_DISHWASHER_PORTABLE: 'Lave-vaisselle / Dishwasher Portable',
	LAVE_VAISSELLE_A_DEUX_TIROIRS_DOUBLE_DRAWER_DISHWASHER: 'Lave-vaisselle a deux tiroirs / Double drawer dishwasher',
	LAVEUSE_LAUNDRY_CENTER_WASHER_FL: 'Laveuse / laundry center Washer FL',
	LAVEUSE_WASHER_FL: 'Laveuse / Washer FL',
	LAVEUSE_WASHER_FL_STACKED: 'Laveuse / Washer FL Stacked',
	LAVEUSE_WASHER_TL: 'Laveuse / Washer TL',
	LAVEUSE_WASHER_TL_STACKED: 'Laveuse / Washer TL Stacked',
	LAVEUSE_FL_STACKED: 'Laveuse FL stacked',
	LAVEUSE_PORTABLE_PORTABLE_WASHER: 'Laveuse Portable / Portable Washer',
	MICRO_ONDE_MICROWAVE: 'Micro-onde / Microwave',
	OVEN: 'Oven',
	PLAQUE_DE_CUISSON_COOKTOP: 'Plaque de cuisson / Cooktop',
	PLAQUE_DE_CUISSON_A_INDUCTION_INDUCTION_COOKTOP: 'Plaque de cuisson a induction / Induction Cooktop',
	PLAQUE_DE_CUISSON_A_GAZ_GAS_COOKTOP: 'Plaque de Cuisson à Gaz / Gas Cooktop',
	REFRIGERATEUR_REFRIGERATOR: 'Réfrigérateur / Refrigerator',
	REFRIGERATEUR_A_VIN_WINE_FRIDGE: 'Réfrigérateur à vin / Wine Fridge',
	SYSTEME_DE_VENTILATION_A_ASPIRATION_DESCENDANTE_DOWNDRAFT_SYSTEM: 'Système de ventilation à aspiration descendante / Downdraft System',
	SECHEUSE_DRYER: 'Sécheuse / Dryer',
	SECHEUSE_DRYER_STACKED: 'Sécheuse / Dryer Stacked',
	SECHEUSE_DRYER_VENTLESS: 'Sécheuse / Dryer Ventless',
	SECHEUSE_DRYER_VENTLESS_STACKED: 'Sécheuse / Dryer Ventless Stacked',
	SECHEUSE_A_GAZ_GAS_DRYER: 'Sécheuse à Gaz / Gas Dryer',
	UNDERCOUNTER_ICE_MAKER_MACHINE_A_GLACONS_SOUS_COMPTOIR: 'Undercounter Ice Maker / Machine à glaçons sous-comptoir',
	VACUUM: 'Vacuum',
	WASHERDRYER_COMBO: 'Washer/Dryer Combo'
}

const constants = {
	...auth,
	...jobs,
	...layouts,
	...accounts,
	ENTITIES,
	ACCESS_TOKEN_NAME,
}

export default constants;

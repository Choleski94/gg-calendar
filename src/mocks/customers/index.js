'use strict';

import list from './list';

export const invoiceToDummy = {
	firstname: 'Sara',
	lastname: 'Williams',
	address: '280 Suzanne Throughway',
	city: 'Breannabury',
	state: 'QC',
	zip: 'H3N 2J3',
	country: 'Canada',
	email: 'sara.williams@gmail.com',
	phone: '+1 (438) 409-0206',
};

export const payToDummy = {
	firstname: 'Flash Repair',
	lastname: 'Inc.',
	address: '9300 Rue Charles-de-LaTour',
	city: 'Montréal',
	state: 'QC',
	zip: 'H4N 1M2',
	country: 'Canada',
	email: 'support@flashgo.ca',
	phone: '+1 (514) 571-7049',
};

export default {
	list,
	payToDummy,
	invoiceToDummy,
}

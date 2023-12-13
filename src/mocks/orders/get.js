'use strict';

const orderGet = [
	{
		id: '123',
		jobId: 'AC-161',
		qty: 1,
		unitPrice: 125.00,
		inStock: true,
		orderId: null,
		notes: '',
		supplier: 'Parts Warehouse I',
		name: 'Diagnostic test',
		tags: 'FRIDGE',
		type: 'Service',
		serial: '',
		suggestedSerial: 'T324-43AS',
		status: 'INSTALLED',
		techs: {
			id: 123,
			firstName: 'T1. Marek',
			lastName: '',
		},
		timeLeft: '3 days',
		fulfilledETA: '3 days',
		fulfilledLocation: 'T2',
		lastUpdate: 'Jan 17, 2020, 8:12',
		fulfilledDate: 'Jan 17, 2020, 8:12',
		receivedDate: 'Jan 17, 2020, 8:12'
	},
	{
		id: '123',
		jobId: 'AC-415',
		qty: 1,
		unitPrice: 65.99,
		inStock: true,
		orderId: null,
		notes: 'Use #SMG123-456 water pump instead',
		supplier: 'Flash Parts',
		name: 'Water Pump',
		tags: 'FRIDGE',
		type: 'Part',
		serial: '62AAXHHVX',
		suggestedSerial: 'ODB-163223',
		status: 'INSTALLED',
		techs: {
			id: 123,
			firstName: 'T1. Marek',
			lastName: '',
		},
		timeLeft: '3 days',
		fulfilledETA: '3 days',
		fulfilledLocation: 'Car',
		lastUpdate: 'Jan 17, 2020, 8:12',
		fulfilledDate: 'Jan 17, 2020, 8:12',
		receivedDate: 'Jan 17, 2020, 8:12'
	},
	{
		id: '123',
		jobId: 'AC-131',
		qty: 1,
		unitPrice: 5.99,
		inStock: false,
		orderId: '845-9229302-926351',
		supplier: 'Flash Parts',
		supplier: 'Parts Warehouse II',
		tags: 'FLDRYER',
		type: 'Part',
		serial: 'a28727330',
		suggestedSerial: 'LA-89233-ODO',
		status: 'PROCESSING',
		techs: {
			id: 123,
			firstName: 'T1. Mike',
			lastName: '',
		},
		timeLeft: '3 days',
		fulfilledETA: '3 days',
		fulfilledLocation: 'Car',
		lastUpdate: 'Jan 3, 2020, 10:08',
		fulfilledDate: 'Jan 17, 2020, 8:12',
		receivedDate: 'Jan 17, 2020, 8:12'
	},
	{
		id: '123',
		jobId: 'AC-112',
		qty: 1,
		unitPrice: 25.00,
		inStock: true,
		orderId: null,
		supplier: 'Relaible Parts',
		name: 'Heater',
		tags: 'TLWASHER',
		type: 'Part',
		serial: '653458123',
		suggestedSerial: 'SM-SPHAW-123O',
		status: 'INSTALLED',
		techs: {
			id: 123,
			firstName: 'T4. Billy',
			lastName: '',
		},
		timeLeft: '3 days',
		fulfilledETA: '3 days',
		fulfilledLocation: 'B5',
		lastUpdate: 'May 20, 2020, 15:23',
		fulfilledDate: 'Jan 17, 2020, 8:12',
		receivedDate: 'Jan 17, 2020, 8:12'
	},
	{
		id: '123',
		jobId: 'AC-101',
		qty: 1,
		unitPrice: 175.00,
		inStock: true,
		orderId: null,
		supplier: 'Flash Parts',
		name: 'Radiator',
		tags: 'FRIDGE',
		type: 'Part',
		serial: '502581723',
		suggestedSerial: 'CAN-1239283',
		status: 'INSTALLED',
		techs: {
			id: 123,
			firstName: 'T5. Duncan',
			lastName: '',
		},
		timeLeft: '3 days',
		fulfilledETA: '3 days',
		fulfilledLocation: 'Q3',
		lastUpdate: 'Apr 16, 2020, 22:11',
		fulfilledDate: 'Jan 17, 2020, 8:12',
		receivedDate: 'Jan 17, 2020, 8:12'
	},
	{
		id: '123',
		jobId: 'AC-789',
		qty: 1,
		unitPrice: 75.99,
		inStock: false,
		orderId: '669-1256802-2190233',
		supplier: 'Flash Parts',
		name: 'Logic board',
		tags: 'FRIDGE',
		type: 'Part',
		serial: '152341316',
		suggestedSerial: '',
		status: 'PENDING',
		techs: {
			id: 123,
			firstName: 'T3. Razi',
			lastName: '',
		},
		timeLeft: '3 days',
		fulfilledETA: '3 days',
		fulfilledLocation: 'A1',
		lastUpdate: 'Aug 17, 2020, 6:48',
		fulfilledDate: 'Jan 17, 2020, 8:12',
		receivedDate: 'Jan 17, 2020, 8:12'
	},
	{
		id: '123',
		jobId: 'AC-456',
		qty: 1,
		unitPrice: 6.99,
		inStock: false,
		orderId: '701-9923802-8100257',
		supplier: 'We Parts',
		name: 'Switch',
		tags: 'TPDRYER',
		type: 'Part',
		serial: '211331333',
		suggestedSerial: 'LIV-TIEV-KIEV-123',
		status: 'NA',
		techs: {
			id: 123,
			firstName: 'I. Aaron',
			lastName: '',
		},
		timeLeft: '3 days',
		fulfilledETA: '3 days',
		fulfilledLocation: 'C1',
		lastUpdate: 'Jun 27, 2020, 12:45',
		fulfilledDate: 'Jan 17, 2020, 8:12',
		receivedDate: 'Jan 17, 2020, 8:12'
	},
	{
		id: '123',
		jobId: 'AC-123',
		qty: 1,
		unitPrice: 165.99,
		inStock: true,
		orderId: null,
		notes: '',
		supplier: 'Flash Parts',
		name: 'Drain Cleaning Machine',
		tags: 'POWER_TOOL',
		type: 'Equipment',
		serial: '62AAXHHVX',
		suggestedSerial: '1232187421',
		status: 'INSTALLED',
		techs: {
			id: 123,
			firstName: 'T1. Marek',
			lastName: '',
		},
		timeLeft: '3 days',
		fulfilledETA: '3 days',
		fulfilledLocation: 'Q3',
		lastUpdate: 'Jan 17, 2020, 8:12',
		fulfilledDate: 'Jan 17, 2020, 8:12',
		receivedDate: 'Jan 17, 2020, 8:12'
	},
];

export default orderGet;

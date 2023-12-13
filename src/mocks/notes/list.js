'use strict';

const noteList = [
	{
		id: '123',
		type: 'SERVICE', 			// SERVICE, DIAGNOSTIC
		status: 'SERVICE',			// PUBLISHED, DRAFT
		reference: '1001-5955-1',
		author: {
			id: '123',
			firstName: 'T1.',
			lastName: 'Marek',
		},
		value: 'Replaced faulty motor and tested. Machine is now spinning correctly.',
		date_created: 'Jan 17, 2020, 8:12', // 1685627246, (TODO: Replace with epoch)
	},
	{
		id: '123',
		type: 'DIAGNOSTIC', 			// SERVICE, DIAGNOSTIC
		status: 'SCHEDULED',			// PUBLISHED, DRAFT
		reference: '1001-5955-1',
		author: {
			id: '123',
			firstName: 'T1.',
			lastName: 'Mike',
		},
		value: 'Diagnostic tests conducted, identified faulty heating element. Parts ordered and awaiting delivery.',
		date_created: 'Jan 3, 2020, 10:08', // 1685627246, (TODO: Replace with epoch)
	},
	{
		id: '123',
		type: 'SERVICE', 			// SERVICE, DIAGNOSTIC
		status: 'SCHEDULED',			// PUBLISHED, DRAFT
		reference: '1001-5955-1',
		author: {
			id: '123',
			firstName: 'T4.',
			lastName: 'Billy',
		},
		value: 'Removed clog from the drainage system, currently testing for proper water flow.',
		date_created: 'May 20, 2020, 15:23', // 1685627246, (TODO: Replace with epoch)
	},
];

export default noteList;


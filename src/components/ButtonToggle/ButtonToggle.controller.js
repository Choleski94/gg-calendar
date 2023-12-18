'use strict';

export const setButtonToggleClassName = (isPrimary) => [
	'btn',
	(isPrimary ? 'btn-white' : 'btn-success'),
	'btn-sm btn-xs'
].join(' ');

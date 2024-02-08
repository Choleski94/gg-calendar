export const setDatetimeWrapper = (isActive = false) => ([
	'datetime-wrapper',
	(isActive ? 'datetime-inactive' : '')
].join(' '));

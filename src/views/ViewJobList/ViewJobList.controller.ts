'use strict';

export const SUPPORTED_PHONE_TYPES = {
	HOME: 'HOME',
	MOBILE: 'MOBILE',
	OFFICE: 'OFFICE',
};

export const hasPrimary = (isPrimary = false, totalElts = 0) => isPrimary && totalElts > 1;


'use strict';

export const setCardClassName = ({ withoutBorder = false, withoutHover = false, centered = false, fullHeight = false }) => [
	'card',
	(withoutBorder ? '' : 'card-border'),
	(centered ? 'card-centered' : ''),
	(withoutHover ? '' : 'card-hover-shadow'),
	(fullHeight ? 'h-100' : ''),
].join(' ');

export const setCardFooterClassName = ({ withoutPadding = false }) => [
	'card-footer',
	(withoutPadding ? 'p-0' : ''),
].join(' ');

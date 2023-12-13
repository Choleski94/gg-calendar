'use strict';

export const setVerticalNavTabItem = (currentTab = '') => [
	'#',
	'nav-item',
	(currentTab || '').toLowerCase()
].join('');

export const setVerticalNavTabLink = (currentTab = '') => [
	'#',
	(currentTab || '').toLowerCase()
].join('');

export const setVerticalNavTabLinkClassName = (activeTab = '', currentTab = '') => [
	'nav-link',
	(activeTab === currentTab ? ' active' : '')
].join('');

export const setVerticalNavTabIconClassName = (iconSlug = '') => (
	iconSlug + ' nav-icon'
);


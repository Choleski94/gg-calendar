'use strict';

export const setNavPillItem = (currentTab = '') => [
	'#',
	'nav-item',
	(currentTab || '').toLowerCase()
].join('');

export const setNavPillLink = (currentTab = '') => [
	'#',
	(currentTab || '').toLowerCase()
].join('');

export const setNavPillLinkClassName = (activeTab = '', currentTab = '') => [
	'nav-link',
	(activeTab === currentTab ? ' active' : '')
].join('');

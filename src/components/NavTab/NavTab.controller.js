'use strict';

export const setNavTabItem = (currentTab = '') => [
	'#',
	'nav-item',
	(currentTab || '').toLowerCase()
].join('');

export const setNavTabLink = (currentTab = '') => [
	'#',
	(currentTab || '').toLowerCase()
].join('');

export const setNavTabLinkClassName = (activeTab = '', currentTab = '') => [
	'nav-link',
	(activeTab === currentTab ? ' active' : '')
].join('');

export const setNavTabClassName = (withoutPageHeader) => [
	'nav nav-tabs',
	(withoutPageHeader ? '' : 'page-header-tabs'),
].join(' ');

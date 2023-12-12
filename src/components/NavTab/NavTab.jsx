import React from 'react';

import {
	setNavTabItem,
	setNavTabLink,
	setNavTabLinkClassName 
} from './NavTab.controller';

const setNavTabClassName = (withoutPageHeader) => [
	'nav nav-tabs',
	(withoutPageHeader ? '' : 'page-header-tabs'),
].join(' ');

const NavTab = ({ id = '', options = [], withPageHeader = false, defaultValue = null, handleTabClick = () => null }) => {
	const [ activeTab, setActiveTab ] = React.useState(null);

	React.useEffect(() => {
		const [ { key } ] = options;
		setActiveTab(defaultValue || key);
	}, []);

	const onNavTabClick = (e, currentTab = '') => {
		e.preventDefault();
		if (activeTab !== currentTab) {
			setActiveTab(currentTab);
			handleTabClick(currentTab);
		}
	};


	return (
		<ul id={id} role="tablist" className={setNavTabClassName(!withPageHeader)}>
			{options.map(({ key = '', value = '' }, idx) => (
				<li key={setNavTabItem(key)} className="nav-item">
					<a 
						key={setNavTabLink(key)}
						href={setNavTabLink(key)}
						onClick={(e) => onNavTabClick(e, key)}
						className={setNavTabLinkClassName(key, activeTab)} 
					>
						{value}
					</a>
				</li>
			))}
		</ul>
	);
};

export default NavTab;

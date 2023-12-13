import React from 'react';

import {
	setNavPillItem,
	setNavPillLink,
	setNavPillLinkClassName 
} from './NavPill.controller';

const setNavTabClassName = (fullWidth) => [
	'nav nav-segment',
	(fullWidth ? 'nav-fill' : ''),
].join(' ');

const NavPill = ({ id = '', options = [], fullWidth = false, defaultValue = null, handleTabClick = () => null }) => {
	const [ activeTab, setActiveTab ] = React.useState(null);

	React.useEffect(() => {
		const [ { key } ] = options;
		setActiveTab(defaultValue || key);
	}, []);

	const onNavPillClick = (e, currentTab = '') => {
		e.preventDefault();
		if (activeTab !== currentTab) {
			setActiveTab(currentTab);
			handleTabClick(currentTab);
		}
	};

	return (
		<ul className={setNavTabClassName(fullWidth)} id={id} role="tablist">
			{options.map(({ key = '', value = '' }, idx) => (
				<li key={setNavPillItem(key)} className="nav-item" role="presentation">
					<a 
						key={setNavPillLink(key)}
						href={setNavPillLink(key)}
						role="tab" aria-selected="true"
						onClick={(e) => onNavPillClick(e, key)}
						className={setNavPillLinkClassName(key, activeTab)} 
					>
						{value}
					</a>
				</li>
			))}
		</ul>
	);
};

export default NavPill;

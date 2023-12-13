import React from 'react';

import {
	setVerticalNavTabItem,
	setVerticalNavTabLink,
	setVerticalNavTabLinkClassName,
	setVerticalNavTabIconClassName
} from './VerticalNavTab.controller';

const VerticalNavTab = ({ id = '', options = [], defaultValue = null, handleTabClick = () => null }) => {
	const [ activeTab, setActiveTab ] = React.useState(null);

	React.useEffect(() => {
		const [ { key } ] = options;
		setActiveTab(defaultValue || key);
	}, []);

	const onVerticalNavTabClick = (e, currentTab = '') => {
		e.preventDefault();
		if (activeTab !== currentTab) {
			setActiveTab(currentTab);
			handleTabClick(currentTab);
		}
	};

	return (
		<ul id={id} className="js-sticky-block card card-navbar-nav nav nav-tabs nav-lg nav-vertical">
			{options.map(({ key = '', value = '', icon = '' }, idx) => (
				<li key={setVerticalNavTabItem(key)} className="nav-item">
					<a 
						key={setVerticalNavTabLink(key)}
						href={setVerticalNavTabLink(key)}
						onClick={(e) => onVerticalNavTabClick(e, key)}
						className={setVerticalNavTabLinkClassName(key, activeTab)} 
					>
						{icon && icon.length && (
							<i className={setVerticalNavTabIconClassName(icon)} />
						)}
						{value}
					</a>
				</li>
			))}
		</ul>
	);
};

export default VerticalNavTab;

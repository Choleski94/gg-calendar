import React from 'react';
import { Link } from 'react-router-dom';

import { shareAtLeastOneElement } from '@utils';
import formatMessage from '@utils/formatMessage';

export const UserDropdownStyle = {
	width: '16rem', opacity: '1', right: 0,
	transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
};

export const getUserWrapperDropdownClassName = (isActive = false) => [
	'navbar-dropdown-account-wrapper',
	(isActive ? 'show' : '')
].join(' ');

export const getUserDropdownClassName = (isActive = false) => [
	'dropdown-menu',
	'dropdown-menu-end',
	'navbar-dropdown-menu',
	'navbar-dropdown',
	'menu-borderless',
	'navbar-dropdown-account',
	(isActive ? 'show' : '')
].join(' ');

export const setMainClassName = (hideMenu = false, hasSmallScreen = false) => {
	let res = [];

	const base = 'has-navbar-vertical-aside navbar-vertical-aside-show-xl';
	const primaryScreenClassNames = hasSmallScreen ? 'navbar-vertical-aside-closed-mode' : '';
	const secondaryClassNames = hasSmallScreen ? '' : 'navbar-vertical-aside-mini-mode';
	
	const scenarioA = [
		base, primaryScreenClassNames, secondaryClassNames,
	];

	const scenarioB = [ base ];

	if (hasSmallScreen) {
		// NOTE: On mobile by default menu is hidden thus logic reverse.
		if (hideMenu) {
			res = scenarioB;
		} else {
			res = scenarioA;
		}
	} else {
		if (hideMenu) {
			res = scenarioA;
		} else {
			res = scenarioB;
		}
	}

	return res.join(' ');
};

export const setAsideClassName = (hasSmallScreen) => [
	'js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical',
	'navbar-vertical-fixed navbar-expand-xl navbar-bordered ',
	'navbar-dark ', 'bg-dark', // 'bg-white',
	(hasSmallScreen ? 'navbar-vertical-aside-initialized' : '')
].join(' ');

export const hasLink = (data) => Boolean(
	(data?.link || '').length
);
 
export const hasSubMenu = (data) => Boolean(
	Object.keys(data?.subMenu || {}).length
);

export const setAsideLinkClassName = (activePrimaryItem, currentPrimaryItem) => [
	'nav-link dropdown-toggle',
	(activePrimaryItem !== currentPrimaryItem ? 'collapsed': ''),
].join(' ');

export const setAsideSubMenuClassName = (activePrimaryItem, currentPrimaryItem) => [
	'nav-collapse collapse',
	(activePrimaryItem !== currentPrimaryItem ? '': 'show'),
].join(' ');

export const setAsidePrimaryAriaExpanded = (activePrimaryItem, currentPrimaryItem) => Boolean(
	activePrimaryItem === currentPrimaryItem
);

export const setBadgeClassName = (typeSlug = '') => `badge bg-${typeSlug} rounded-pill ms-1`;

export const setAsideNavLinkClassName = (activeMenuItems = [], currentItem = '') => [
	'nav-link', 
	(shareAtLeastOneElement(activeMenuItems, currentItem.split('-').pop()) ? 'active' : ''),
].join(' ');

export const setMenuToggleClassName = (activeToggle = '', currentToggle = '') => [
	'dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless',
	(activeToggle === currentToggle ? 'show' : '') 
].join(' ');

export const renderMenu = (payload = [], activeMenuItems, onAsideNavbarMenuItemClick) => payload.map((primaryItem) => (
	<div key={primaryItem.slug} className="nav-item">
		{(!hasLink(primaryItem)) ? (
			<>
				<span className="dropdown-header mt-2">
					{formatMessage(primaryItem.slug)}
				</span>
				<small className="bi-three-dots nav-subtitle-replacer" />
			</>
		) : (
			(!hasSubMenu(primaryItem)) ? (
				<Link 
					data-placement="left" to={primaryItem.link} 
					className={setAsideNavLinkClassName(activeMenuItems, primaryItem.link)}
					onClick={(e) => onAsideNavbarMenuItemClick(e, primaryItem.slug, 0, hasSubMenu(primaryItem))}
				>
					{primaryItem.icon && (
						<i className={`${primaryItem.icon} nav-icon`} />
					)}
					<span className="nav-link-title">
						{formatMessage(primaryItem.slug)}
						{primaryItem.badge && (
							<>
								&nbsp;
								<span className={setBadgeClassName(primaryItem.badge.type)}>
									{primaryItem.badge.value}
								</span>
							</>
						)}
					</span>
				</Link>
			) : (
				<>
					<Link
						role="button" to={primaryItem.link}
						className={setAsideLinkClassName(activeMenuItems[0], primaryItem.slug)}
						aria-expanded={setAsidePrimaryAriaExpanded(activeMenuItems[0], primaryItem.slug)}
						onClick={(e) => onAsideNavbarMenuItemClick(e, primaryItem.slug, 0, hasSubMenu(primaryItem))}
					>
						{primaryItem.icon && (
							<i className={`${primaryItem.icon} nav-icon`} />
						)}
						<span className="nav-link-title">
							{formatMessage(primaryItem.slug)}
							{primaryItem.badge && (
								<>
									&nbsp;
									<span className={setBadgeClassName(primaryItem.badge.type)}>
										{primaryItem.badge.value}
									</span>
								</>
							)}
						</span>
					</Link>
					{/* THIS IS WHERE SHIT HAPPENS */}
					<div className={setAsideSubMenuClassName(activeMenuItems[0], primaryItem.slug)}>
						{primaryItem.subMenu.map((secondaryItem) => (
							(!hasSubMenu(secondaryItem)) ? (
								<Link key={secondaryItem.slug} to={secondaryItem.link} className={setAsideNavLinkClassName(activeMenuItems, secondaryItem.slug)}>
									{formatMessage(secondaryItem.slug)}
									{secondaryItem.badge && (
										<>
											&nbsp;
											<span className={setBadgeClassName(secondaryItem.badge.type)}>
												{secondaryItem.badge.value}
											</span>
										</>
									)}
								</Link>
							) : (
								<div key={secondaryItem.slug} className="nav-item">
									<a 
										role="button"
										href={secondaryItem.link}
										// className="nav-link dropdown-toggle collapsed"
										className={setAsideLinkClassName(activeMenuItems[1], secondaryItem.slug)}
										aria-expanded={setAsidePrimaryAriaExpanded(activeMenuItems[1], secondaryItem.slug)}
										onClick={(e) => onAsideNavbarMenuItemClick(e, secondaryItem.slug, 1, hasSubMenu(secondaryItem))}
									>
										{formatMessage(secondaryItem.slug)}
										{secondaryItem.badge && (
											<>
												&nbsp;
												<span className={setBadgeClassName(secondaryItem.badge.type)}>
													{secondaryItem.badge.value}
												</span>
											</>
										)}
									</a>
									<div
										onClick={(e) => onAsideNavbarMenuItemClick(e, secondaryItem.slug, 1)}
										className={setAsideSubMenuClassName(activeMenuItems[1], secondaryItem.slug, hasSubMenu(secondaryItem))}
									>
										{secondaryItem.subMenu.map((tertiaryItem) => (
											<Link
												className={setAsideNavLinkClassName(activeMenuItems, tertiaryItem.slug)}
												to={tertiaryItem.link}
												key={tertiaryItem.slug}
											>
												{formatMessage(tertiaryItem.slug)}
												{tertiaryItem.badge && (
													<>
														&nbsp;
														<span className={setBadgeClassName(tertiaryItem.badge.type)}>
															{tertiaryItem.badge.value}
														</span>
													</>
												)}
											</Link>
										))}
									</div>
								</div>
							)
						))}
					</div>
				</>
			)
		)}
	</div>
));

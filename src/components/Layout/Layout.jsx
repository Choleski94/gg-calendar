import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import constants from '@constants';

import { Modal } from '@components';
import { FALLBACK_LOCALES } from '@locales';
import { logout } from '@store/actions/auth';
import { getYear, onlyUnique } from '@utils';
import InvitePeople from '@modules/InvitePeople';
import formatMessage from '@utils/formatMessage';
import { selectUser } from '@store/selectors/user';
import { setLocale } from '@store/actions/settings';
import errorHandler from '@utils/request/errorHandler';
import { useWindowSize, useClickOutside } from '@utils/hooks';
import { selectLocaleSettings } from '@store/selectors/settings';
import OrganizationInfoSettings from '@modules/OrganizationInfoSettings';

import {
	hasSubMenu,
	renderMenu,
	setMainClassName,
	setAsideClassName,
	UserDropdownStyle,
	setMenuToggleClassName,
	getUserDropdownClassName,
	getUserWrapperDropdownClassName,
} from './Layout.helpers';
import Search from './Search';
import Footer from './Footer';

const SUPPORTED_MENU_TOGGLE = {
	CREATE: 'CREATE',
	PROFILE: 'PROFILE',
	LANGUAGES: 'LANGUAGES',
};

const SUPPORTED_MODAL_SECTIONS = {
	INVITE_PEOPLE: 'INVITE_PEOPLE',
	CREATE_WORKSPACE: 'CREATE_WORKSPACE',
};

const getAcronym = (name = '') => (
	(name || '').toUpperCase().split(' ').map((w) => w.slice(0, 1)).join('')
);

const Layout = ({ type = '', withoutFooter = false, withOffCanvas = false, children }) => {
	const myRef = React.useRef();

	const dispatch = useDispatch();

	const { width } = useWindowSize();
	const { pathname } = useLocation();

	const { lang } = useSelector(selectLocaleSettings);
	const { firstName, lastName, organizations } = useSelector(selectUser);

	const [ showMenu, setShowMenu ]  = React.useState(false);
	const [ menuToggle, setMenuToggle ] = React.useState('');
	const [ modalSection, setModalSection ]  = React.useState('');
	const [ activeMenuItems, setActiveMenuItems ] = React.useState([]); // e.g. ['about', 'our team']

	// const userRef = useClickOutside((louis) => {
	// 	// setMenuToggle('')
	// });

	const hasSmallScreen = React.useMemo(() => width < 1200, [ width ]);	// TODO: Migrate 1200px as constant.

	const menuData = constants.SUPPORTED_ACCOUNTS_MENUS[constants.SUPPORTED_ACCOUNTS.ADMIN];

	const onSignOutClick = (e) => {
		e.preventDefault();
		dispatch(logout());
	}

	const onMenuToggleClick = (e, currentMenu = '') => {
		e.preventDefault();
		if (currentMenu !== menuToggle) {
			setMenuToggle(currentMenu);
		} else {
			setMenuToggle('');
		}
	};

	const onModalToggleClick = (e, currentModal = '') => {
		e.preventDefault();
		setMenuToggle('');

		if (currentModal !== modalSection) {
			setModalSection(currentModal);
		} else {
			setMenuToggle('');
		}
	};

	const onModalClose = (e) => setModalSection('');

	const onAsideMenuClick = (e) => {
		e.preventDefault();
		setShowMenu(!showMenu);
	};

	const handleClickOutsideAsideNavbar = (e) => {
		if (!myRef.current.contains(e.target)) {
			// TODO:
		}
	};

	const handleLocaleChange = (e, lang = '') => {
		e.preventDefault();
		setMenuToggle('');

		dispatch(setLocale({
			lang, country: FALLBACK_LOCALES[lang],
		}));
	};

	React.useEffect(() => {
		// Get paths.
		const pathnameElts = (pathname || '')
			.toLowerCase()
			.split('/')
			.filter(onlyUnique)
			.filter((x) => x && x.length); 

		// Get path
		const activePathname = (
			'/' + pathnameElts.splice(0, 2).join('/')
		);

		// console.log('set active:::', activeMenuItems, activePathname, !activeMenuItems.includes(activePathname));

		if (!activeMenuItems.includes(activePathname)) {
			setActiveMenuItems([ activePathname ]);
		}
	}, [ pathname ]);

	const onAsideNavbarMenuItemClick = (e, itemSlug, orderIdx, hasSubMenu) => {
		// Check if such item has a `subMenu`.
		if (hasSubMenu || activeMenuItems.includes(itemSlug)) {
			e.preventDefault();
		}

		// Evalaute menu order active item.
		const activeMenuOrderItem = activeMenuItems[orderIdx] || '';

		// Toggle active menu items.
		let cloneMenuItems = [ ...activeMenuItems ]; // Prevent memory pointer.
		
		if (activeMenuOrderItem !== itemSlug) {
			cloneMenuItems[orderIdx] = itemSlug;
			setActiveMenuItems(cloneMenuItems);
		} else {
			cloneMenuItems[orderIdx] = null;
			setActiveMenuItems(cloneMenuItems);
		}
	};

	const [ activeOrganization, additionalOrganizations ] = React.useMemo(() => {
		// TODO: Filter active organization.
		const [ activeOrg ] = (organizations || []).slice(0, 1);
		// TODO: Get remaining organziations.
		const [ additionalOrg ] = (organizations || []).slice(1, -1);
		return [ activeOrg, additionalOrg ];
	}, [ organizations ]);

	const hasActiveOrganization = React.useMemo(() => Boolean(
		Object.keys(activeOrganization || {}).length
	), []);

	return (
		<>
			{(type !== 'auth') ? (
				<div className={setMainClassName(showMenu, hasSmallScreen)}>
					<header id="header" className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white">
						<div className="navbar-nav-wrap">
							{/* Logo */}
							<Link className="navbar-brand" to="/" aria-label="Tigado">
								<img className="navbar-brand-logo" alt="Logo" src="/assets/svg/logos/logo.svg" />
							</Link>
							{/* End Logo */}
							<div className="navbar-nav-wrap-content-start">
								<button type="button" onClick={onAsideMenuClick} style={{ opacity: 1 }}
									className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler"
								>
									<i className="bi-arrow-bar-left navbar-toggler-short-align" aria-label="Collapse" />
									<i className="bi-arrow-bar-right navbar-toggler-full-align" aria-label="Expand" />
								</button>
							</div>

							<Search placeholder={`Search in ${activeOrganization?.id?.name || 'Tigado'}`} />

							<div className="navbar-nav-wrap-content-end">
								<ul className="navbar-nav">
									<li className="nav-item d-none d-sm-inline-block">
										<div className="dropdown dropdown">
											<button
												type="button" aria-expanded="false"
												className="btn btn-ghost-secondary btn-icon rounded-circle"
												onClick={(e) => onMenuToggleClick(e, SUPPORTED_MENU_TOGGLE.CREATE)}
											>
												<i className="bi bi-plus-circle" />
											</button>
											<div className={setMenuToggleClassName(menuToggle, SUPPORTED_MENU_TOGGLE.CREATE)} style={{ opacity: 1, right: 0 }}>
												<span className="dropdown-header">
													Create
												</span>
												<a className="dropdown-item" onClick={(e) => onModalToggleClick(e, SUPPORTED_MODAL_SECTIONS.INVITE_PEOPLE)}>
													<i className="bi-person dropdown-item-icon" />
													<span className="text-truncate" title="Contact support">
														Invite people
													</span>
												</a>
												<div className="dropdown-divider" />
												<a className="dropdown-item" onClick={(e) => onModalToggleClick(e, SUPPORTED_MODAL_SECTIONS.CREATE_WORKSPACE)}>
													<i className="bi-building dropdown-item-icon" />
													<span className="text-truncate" title="Resources & tutorials">
														Create an organization 
													</span>
												</a>
											</div>
										</div>
									</li>

									<li className="nav-item d-none d-sm-inline-block">
										<div className="dropdown dropdown">
											<button
												type="button" aria-expanded="false"
												className="btn btn-ghost-secondary btn-icon rounded-circle"
												onClick={(e) => onMenuToggleClick(e, SUPPORTED_MENU_TOGGLE.LANGUAGES)}
											>
												{lang === 'en' && (
													<img
														className="avatar avatar-xss avatar-circle"
														src="/assets/vendor/flag-icon-css/flags/1x1/us.svg"
														alt="United States Flag"
													/>
												)}
												{lang === 'fr' && (
													<img
														className="avatar avatar-xss avatar-circle"
														src="/assets/vendor/flag-icon-css/flags/1x1/fr.svg"
														alt="Flag"
													/>
												)}
											</button>
											<div className={setMenuToggleClassName(menuToggle, SUPPORTED_MENU_TOGGLE.LANGUAGES)} style={{ opacity: 1, right: 0 }}>
												<span className="dropdown-header">Select language</span>
												<a className="dropdown-item" data-name="english" href="#" onClick={(e) => handleLocaleChange(e, 'en')}>
													<img
														className="avatar avatar-xss avatar-circle me-2"
														src="/assets/vendor/flag-icon-css/flags/1x1/us.svg"
														alt="English Flag"
													/>
													<span className="text-truncate" title="English">
														English
													</span>
												</a>
												<a className="dropdown-item" data-name="french" onClick={(e) => handleLocaleChange(e, 'fr')}>
													<img
														className="avatar avatar-xss avatar-circle me-2"
														src="/assets/vendor/flag-icon-css/flags/1x1/fr.svg"
														alt="Français Flag"
													/>
													<span className="text-truncate" title="Français">
														Français
													</span>
												</a>
											</div>
										</div>
									</li>

									<li className="nav-item">
										<div className="dropdown">
											<a
												onClick={(e) => onMenuToggleClick(e, SUPPORTED_MENU_TOGGLE.PROFILE)}
												className={getUserWrapperDropdownClassName(menuToggle === SUPPORTED_MENU_TOGGLE.PROFILE)}
											>
												{hasActiveOrganization ? (
													<div className="d-flex align-items-center">
														<div className="flex-shrink-0">
															<div className="avatar avatar-sm avatar-warning avatar-circle">
																<span className="avatar-initials">
																	{getAcronym(activeOrganization?.id?.name)}
																</span>
															</div>
														</div>
														<div className="flex-grow-1 p-2 pt-0 pb-0">
															<h6 className="mb-0">
																{firstName} {lastName}
															</h6>
															<span className="card-text h6">
																{activeOrganization?.id?.name}
															</span>
														</div>
													</div>
												) : (
													<div className="avatar avatar-sm avatar-circle">
														<img
															className="avatar-img"
															alt="Image Description"
															src="/assets/img/160x160/img1.jpg"
														/>
														<span className="avatar-status avatar-sm-status avatar-status-success" />
													</div>
												)}
											</a>
											<div
												// ref={userRef} 
												style={UserDropdownStyle} aria-labelledby="accountNavbarDropdown"
												className={getUserDropdownClassName(menuToggle === SUPPORTED_MENU_TOGGLE.PROFILE)}
											>
												{additionalOrganizations && additionalOrganizations?.length ? (
													<>
														{additionalOrganizations.map((org) => (
															<>
																<a key={org?.id} className="dropdown-item" href="#">
																	<div className="d-flex align-items-center">
																		<div className="flex-shrink-0">
																			<div className="avatar avatar-sm avatar-warning avatar-circle">
																				<span className="avatar-initials">
																					{getAcronym(org?.id?.name)}
																				</span>
																			</div>
																		</div>
																		<div className="flex-grow-1 p-2 pt-0 pb-0">
																			<h6 className="mb-0">
																				{org?.id?.name}
																			</h6>
																			<span className="card-text">
																				{org?.role}
																			</span>
																		</div>
																	</div>
																</a>
																<div className="dropdown-divider" />
															</>
														))}
														<div className="dropdown-divider" />
													</>
												) : null}
												{menuData?.account.map(({ slug, link, icon }) => (
													<Link key={slug} className="dropdown-item" to={link}>
														{icon ? (
															<>
																<i className={icon} />
																&nbsp;
															</>
														) : null}
														{formatMessage(slug)}
													</Link>
												))}
												<div className="dropdown-divider" />
												<a className="dropdown-item" target="_blank" href="https://tigado.ca/upgrade">
													<i className="bi-lightning-charge" />
													&nbsp;
													Upgrade Tigado
												</a>
												<a className="dropdown-item" href="/signout" onClick={onSignOutClick}>
													{formatMessage('nav.account.sign-out.text')} Tigado
												</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</header>
					<aside ref={myRef} className={setAsideClassName(hasSmallScreen)}>
						<div className="navbar-vertical-container">
							<div className="navbar-vertical-footer-offset">
								<Link className="navbar-brand" to="/" aria-label="Tigado">
									<img
										className="navbar-brand-logo"
										src="/assets/svg/logos/logo-white.svg"
										alt="Logo"
										data-hs-theme-appearance="default"
									/>
									<img
										className="navbar-brand-logo-mini"
										src="/assets/svg/logos/logo-short-white.svg"
										alt="Logo"
										data-hs-theme-appearance="default"
									/>
								</Link>
								<button type="button" onClick={onAsideMenuClick} style={{ opacity: 1 }}
									className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler" 
								>
									<i className="bi-arrow-bar-left navbar-toggler-short-align">
										{/*
										<div className="tooltip d-none d-md-block" role="tooltip">
											<div className="arrow" />
											<div className="tooltip-inner" />
										</div>
										*/}
									</i>
									<i className="bi-arrow-bar-right navbar-toggler-full-align">
										{/*
										<div className="tooltip d-none d-md-block" role="tooltip">
											<div className="arrow" />
											<div className="tooltip-inner" />
										</div>
										*/}
									</i>
								</button>
								<div className="navbar-vertical-content">
									<div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
										{renderMenu(menuData?.nav, activeMenuItems, onAsideNavbarMenuItemClick)}
										{/* renderMenu(menuData?.organization, activeMenuItems, onAsideNavbarMenuItemClick) */}
									</div>
								</div>
							</div>
						</div>
					</aside>

					{withOffCanvas ? (
						<main id="content" role="main" className="main splitted-content-main">
							{children}
						</main>
					) : (
						<main id="content" role="main" className="main footer-offset">
							<div className="content container-fluid">
								{children}
							</div>
						</main>
					)}

					{(showMenu && hasSmallScreen) && (
						<div className="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-mobile-overlay" style={{ opacity: 1 }} onClick={onAsideMenuClick} />

					)}

					{!withoutFooter && (
						<Footer />
					)}

					{modalSection === SUPPORTED_MODAL_SECTIONS.INVITE_PEOPLE ? (
						<Modal title="Invite people" size="lg" centered onCloseRequest={onModalClose}>
							<InvitePeople />
						</Modal>
					) : null}

					{modalSection === SUPPORTED_MODAL_SECTIONS.CREATE_WORKSPACE ? (
						<Modal title="Create business" size="lg" centered onCloseRequest={onModalClose}>
							<OrganizationInfoSettings />
						</Modal>
					) : null}
				</div>
			) : (
				children
			)}
		</>
	);
};

Layout.Header = ({ children }) => (
	<div className="page-header">
		{children}
	</div>
);

Layout.StickyHeader = ({ children, noPaddingLeft = false }) => (
	<nav className={`navbar navbar-expand-lg navbar-light bg-light navbar-fixed ${noPaddingLeft ? 'pl-0' : 'p-3'}`} style={{ marginTop: "60px", borderBottom: "1px solid rgba(231, 234, 243, 0.7)", zIndex: 1 }}>
		<div className="page-header w-100" style={{ padding: 0, margin: 0 }}>
			<div className="d-flex mb-3">
				<div className="flex-grow-1">
					{children}
				</div>
			</div>
		</div>
	</nav>
);

Layout.Title = ({ children }) => (
	<h1 className="page-header-title">
		{children}
	</h1>
);

Layout.SplittedContent = ({ children }) => (
	<div className="splitted-content-fluid">
		{children}
	</div>
);

Layout.OffCanvas = ({ children }) => (
	<div className="offcanvas offcanvas-start splitted-content-small splitted-content-bordered d-flex flex-column">
		<div className="offcanvas-body">
			{children}
		</div>
	</div>
);

export default Layout;

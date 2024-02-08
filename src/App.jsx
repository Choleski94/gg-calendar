import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { selectTheme } from '@store/selectors/app';
import { withShortcutsListener } from '@utils/hocs';
import { getLocale, constructLocale } from '@locales';
import { THEME_KEYS, THEME_CLASSNAMES } from '@constants/themes';

import View from './components/View';
import Footer from './components/Footer';
import Search from './components/Search';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';
import Category from './components/Category';
import CreateCTA from './components/CreateCTA';
import Shortcuts from './components/Shortcuts';
import Datepicker from './components/Datepicker';
import CollapseView from './components/CollapseView';
import Notifications from './components/Notifications';

const App = () => {

	const theme = useSelector(selectTheme);

	const themeClassName = React.useMemo(() => (
		THEME_CLASSNAMES[theme || THEME_KEYS.DARK]
	), [ theme ]);

	console.log('DATA:::', theme, themeClassName);

	return (
		<div className={themeClassName} style={{ cursor: 'default' }}>
			<Header />
			<main className="main">
				{/* hide-sidebar */}
				<Sidebar />
				{/* calendar views */}
				<View />
			</main>

			{/* overlays / used for popup content */}
			{/* see readme @overlays */}
			<aside style={{ display: "none" }} className="change-view--overlay toggle-options" />
			<aside className="resize-overlay hide-resize-overlay" style={{ backgroundColor: "transparent" }} />
			<aside className="sidebar-sub-menu__overlay hide-sidebar-sub-menu" />
			<aside className="category__deletion-overlay hide-category-deletion" />
			<aside className="form-overlay hide-form-overlay" />
			<aside className="entry__options--overlay entry__options--hidden" />
			<aside className="datepicker-overlay hide-datepicker-overlay" />
			<aside className="sb__info-popup-overlay hide-sb-info-popup" />
			<aside className="go-to-date-overlay hide-gotodate" />
			<aside className="category__form-overlay hide-ctg-form" />
			<aside className="shortcuts-modal-overlay hide-shortcuts" />
			{/* end overlays */}

			{/* datepicker for header & form */}
			<Datepicker />

			{/* MAIN APP FORM */}
			<aside
				className="entries__form hide-form"
				style={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					margin: "auto",
					maxWidth: "450px",
				}}
			>
				<aside className="form-modal-overlay hide-form-overlay" />
				<div className="entries__form--header">
					<div className="form-header--dragarea" />
					<div className="form--header__icon-close" data-tooltip="close form">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height={20}
							width={20}
							fill="var(--white2)"
						>
							<path d="M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z" />
						</svg>
					</div>
				</div>
				<form className="entry-form">
					<div className="entries__form--body">
						{/* row 1: title */}
						<div className="form--body__title form-body-single">
							<input
								type="text"
								placeholder="Add title"
								className="form--body__title-input"
								maxLength={50}
								spellCheck="false"
								required
							/>
						</div>
						<div className="form--body__description form-body-single">
							<textarea
								placeholder="Add description"
								className="form--body__description-input"
								maxLength={200}
								spellCheck="false"
								defaultValue={""}
							/>
						</div>
						{/* row 2: start date & time */}
						<div className="form--body__start form-body-double">
							<div className="form--body__start-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height={24}
									width={24}
									fill="var(--white3)"
									className="form--body-svg__start"
								>
									<path d="m15.3 16.7 1.4-1.4-3.7-3.7V7h-2v5.4ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z" />
								</svg>
							</div>
							<div className="form--body__start-inputs">
								<span
									className="form--body-start__date"
									data-form-date-type="start"
								></span>
								<div className="form-br" />
								<span
									className="form--body-start__time"
									data-form-time-type="start"
								>
									1:30am
								</span>
							</div>
						</div>
						{/* row 3: end date & time */}
						<div className="form--body__end form-body-double">
							<div className="form--body__end-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height={24}
									width={24}
									fill="var(--white3)"
									className="form--body-svg__end"
								>
									<path d="m15.3 16.7 1.4-1.4-3.7-3.7V7h-2v5.4ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z" />
								</svg>
							</div>
							<div className="form--body__end-inputs">
								<span
									className="form--body-end__date"
									data-form-date-type="end"
								></span>
								<div className="form-br" />
								<span
									className="form--body-end__time"
									data-form-time-type="end"
								>
									3:30am
								</span>
							</div>
						</div>
						{/* row 4: category */}
						<div className="form--body__category form-body-double">
							<div className="form--body__category-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="var(--white3)"
								>
									<path d="M0 0h24v24H0z" fill="none" />
									<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
								</svg>
							</div>
							<div className="form--body__category-inputs">
								<aside
									className="close-options-floating__btn"
									style={{
										zIndex: -1,
										userSelect: "none",
										pointerEvents: "none",
										opacity: 0,
										boxShadow: "none",
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height={20}
										width={20}
										fill="var(--white3)"
									>
										<path d="M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z" />
									</svg>
								</aside>
								<div className="form--body__category-modal--wrapper">
									<div className="form--body__category-modal--wrapper-selection">
										<span className="form--body__category-modal--wrapper__color" />
										<span className="form--body__category-modal--wrapper__title"></span>
									</div>
									<span className="form--body__category-modal hide-form-category-modal"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="entries__form--footer">
						<button
							className="form--footer__button-cancel"
							type="reset"
							role="button"
							aria-label="button"
						>
							reset
						</button>
						<button
							className="form--footer__button-save"
							type="submit"
							role="button"
							aria-label="button"
						>
							save
						</button>
					</div>
					{/* footer */}
				</form>
			</aside>

			{/* options for header select element (pick view) */}

			{/* floating toggle form button visible when sidebar is closed */}
			<CreateCTA />

			{/* create new category form */}
			<Category />

			{/* "eye" icon that appears in day/week view */}
			<CollapseView />

			{/* search for date popup */}
			<Search />

			{/* SETTINGS */}
			<Settings />

			{/* click calendar entry to view details */}
			<aside className="entry__options entry__options--hidden">
				<div className="entry__options--content">
					<div className="entry__options--header">
						<div className="entry__options-datetime">
							<div className="entry__options-date" />
							<div className="entry__options-time" />
						</div>
						<div className="entry__options--header-icons">
							<button
								className="entry__options-icon eoi__edit"
								data-tooltip="edit event (e)"
								role="button"
								aria-label="button"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="20px"
									viewBox="0 0 24 24"
									width="20px"
									fill="var(--white2)"
								>
									<path d="M0 0h24v24H0z" fill="none" />
									<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
								</svg>
							</button>
							<button
								className="entry__options-icon eoi__delete"
								data-tooltip="delete event"
								role="button"
								aria-label="button"
							>
								<svg
									focusable="false"
									width={20}
									height={20}
									viewBox="0 0 24 24"
									fill="var(--white2)"
								>
									<path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z" />
									<path d="M9 8h2v9H9zm4 0h2v9h-2z" />
								</svg>
							</button>
							<button
								className="entry__options-icon eoi__close"
								data-tooltip="close (esc)"
								role="button"
								aria-label="button"
							>
								<svg
									focusable="false"
									width={20}
									height={20}
									viewBox="0 0 24 24"
									fill="var(--white2)"
								>
									<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
								</svg>
							</button>
						</div>
					</div>
					{/* end header */}
					<div className="entry__options--body">
						<div className="entry-option-desc">
							<div className="eob-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height={20}
									width={20}
									fill="var(--white2)"
								>
									<path d="M6 12v-1.5h8V12Zm0 3v-1.5h6V15Zm-1.5 3q-.625 0-1.062-.448Q3 17.104 3 16.5v-11q0-.604.438-1.052Q3.875 4 4.5 4H6V2h1.5v2h5V2H14v2h1.5q.625 0 1.062.448Q17 4.896 17 5.5v11q0 .604-.438 1.052Q16.125 18 15.5 18Zm0-1.5h11V9h-11v7.5Z" />
								</svg>
							</div>
							<div className="eob-title" />
						</div>
						<div className="entry-option-desc">
							<div className="eob-icon" />
							<div className="eob-description" />
						</div>
						<div className="entry-option-desc">
							<div className="eob-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height={20}
									width={20}
									className="eob-category--icon"
									fill="var(--primarylight1)"
								>
									<path d="M10 18q-1.646 0-3.104-.625-1.458-.625-2.552-1.719t-1.719-2.552Q2 11.646 2 10q0-1.667.625-3.115.625-1.447 1.719-2.541Q5.438 3.25 6.896 2.625T10 2q1.667 0 3.115.625 1.447.625 2.541 1.719 1.094 1.094 1.719 2.541Q18 8.333 18 10q0 1.646-.625 3.104-.625 1.458-1.719 2.552t-2.541 1.719Q11.667 18 10 18Z" />
								</svg>
							</div>
							<div className="eob-category" />
						</div>
					</div>
				</div>
			</aside>

			{/* privacy, terms, about sections */}
			<Footer />

			{/* modal display keyboard shortcuts */}
			<Shortcuts />

			{/* popup that appears after event edit/creation */}
			<Notifications />
		</div>
	);
};

export default withShortcutsListener(App);

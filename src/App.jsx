import React from "react";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getLocale, constructLocale } from "@locales";

const App = () => {
	return (
		<>
			{/* app header -- fixed */}
			<header className="header">
				<div className="h__container">
					<div className="h-col-1">
						<button
							className="menu"
							data-tooltip="Main menu"
							aria-label="button"
							role="button"
						>
							<svg
								focusable="false"
								style={{ pointerEvents: "none" }}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24px"
								height="24px"
								fill="var(--white2)"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
							</svg>
						</button>
						<div className="logo" data-current-day-of-month={4}>
							<svg
								height={36}
								viewBox="0 0 36 36"
								width={36}
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fillRule="evenodd">
									<path d="m0 0h36v36h-36z" />
									<g fillRule="nonzero" transform="translate(3.75 3.75)">
										<path
											d="m21.75 6.75-6.75-.75-8.25.75-.75 7.5.75 7.5 7.5.9375 7.5-.9375.75-7.6875z"
											fill="#fff"
										/>
										<path
											d="m21.75 28.5 6.75-6.75-3.375-1.5-3.375 1.5-1.5 3.375z"
											fill="#ea4335"
										/>
										<path
											d="m5.25 25.125 1.5 3.375h15v-6.75h-15z"
											fill="#34a853"
										/>
										<path
											d="m2.25 0c-1.243125 0-2.25 1.006875-2.25 2.25v19.5l3.375 1.5 3.375-1.5v-15h15l1.5-3.375-1.5-3.375z"
											fill="#4285f4"
										/>
										<path
											d="m0 21.75v4.5c0 1.243125 1.006875 2.25 2.25 2.25h4.5v-6.75z"
											fill="#188038"
										/>
										<path
											d="m21.75 6.75v15h6.75v-15l-3.375-1.5z"
											fill="#fbbc04"
										/>
										<path
											d="m28.5 6.75v-4.5c0-1.243125-1.006875-2.25-2.25-2.25h-4.5v6.75z"
											fill="#1967d2"
										/>
									</g>
								</g>
							</svg>
						</div>
						<h3 className="header-title">Calendar</h3>
						<button
							className="btn-root btn-today"
							style={{ cursor: "pointer" }}
							aria-label="button"
							role="button"
						>
							Today
						</button>
					</div>
					<div className="group-right">
						<div className="h-col-2">
							<div className="prev-next">
								<button className="prev" aria-label="button" role="button">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 0 24 24"
										width="24px"
										fill="var(--white2)"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
									</svg>
								</button>
								<button className="next" aria-label="button" role="button">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="24px"
										viewBox="0 0 24 24"
										width="24px"
										fill="var(--white2)"
									>
										<path d="M0 0h24v24H0z" fill="none" />
										<path d="M8.59 16.59L10 18l6-6-6-6L8.59 7.41 13.17 12z" />
									</svg>
								</button>
							</div>
							<div className="datetime-wrapper">
								<button
									className="datetime-content"
									aria-label="button"
									role="button"
								>
									<div className="datetime-content--title">January 2023</div>
								</button>
							</div>
						</div>
						<div className="h-col-3">
							<button
								className="h-search"
								data-tooltip="search"
								aria-label="button"
								role="button"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height={24}
									width={24}
									fill="var(--white3)"
								>
									<path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
								</svg>
							</button>
							<button
								className="settings"
								data-tooltip="settings"
								aria-label="button"
								role="button"
							>
								<svg
									width={24}
									height={24}
									viewBox="0 0 24 24"
									focusable="false"
									fill="var(--white3)"
								>
									<path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
									<circle cx={12} cy={12} r="3.5" />
								</svg>
							</button>
							<div className="select-wrapper">
								<button
									name="select__modal"
									id="s-modals"
									className="select__modal"
									aria-label="button"
									role="button"
								>
									Month
								</button>
							</div>
						</div>
						{/* end col-3 */}
					</div>
				</div>
			</header>
			<main className="main">
				{/* hide-sidebar */}
				<aside className="sidebar sidebar-transition hide-sidebar">
					{/* sidebar header */}
					<div className="sidebar-content--header">
						<button
							className="sb-toggle-form-btn"
							aria-label="button"
							role="button"
						>
							<span className="stfb">
								<svg width={36} height={36} viewBox="0 0 36 36">
									<path fill="#34A853" d="M16 16v14h4V20z" />
									<path fill="#4285F4" d="M30 16H20l-4 4h14z" />
									<path fill="#FBBC05" d="M6 16v4h10l4-4z" />
									<path fill="#EA4335" d="M20 16V6h-4v14z" />
									<path fill="none" d="M0 0h36v36H0z" />
								</svg>
							</span>
							<span className="sb-toggle-form-btn__content">Create</span>
						</button>
						{/* <div class="sb-icon-toggles"></div> */}
						<button className="sb-data-btn" aria-label="button" role="button">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height={24}
								width={24}
								fill="var(--white2)"
							>
								<path d="M6 14q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14Zm6 0q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm6 0q-.825 0-1.413-.588Q16 12.825 16 12t.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12q0 .825-.587 1.412Q18.825 14 18 14Z" />
							</svg>
						</button>
					</div>
					{/* sidebar content (datepicker/categories) */}
					<div className="sidebar-content__wrapper">
						{/* datepicker */}
						<div className="datepicker-sidebar">
							<div className="sb-datepicker__content">
								<div className="sbdatepicker__header">
									<button
										className="sbdatepicker-title"
										aria-label="button"
										role="button"
									>
										October 2022
									</button>
									<div className="sbdatepicker-nav">
										<button
											className="sbdatepicker-nav--prev"
											aria-label="button"
											role="button"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="24px"
												viewBox="0 0 24 24"
												width="24px"
												fill="var(--white3)"
												style={{ userSelect: "none", pointerEvents: "none" }}
											>
												<path d="M0 0h24v24H0z" fill="none" />
												<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
											</svg>
										</button>
										<button
											className="sbdatepicker-nav--next"
											aria-label="button"
											role="button"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="24px"
												viewBox="0 0 24 24"
												width="24px"
												fill="var(--white3)"
												style={{ userSelect: "none", pointerEvents: "none" }}
											>
												<path d="M0 0h24v24H0z" fill="none" />
												<path d="M8.59 16.59L10 18l6-6-6-6L8.59 7.41 13.17 12z" />
											</svg>
										</button>
									</div>
								</div>
								<div className="sbdatepicker__body">
									{/* create a 7x7 table */}
									<div className="sbdatepicker__body--header">
										<div className="sbdatepicker__body--header-cell">S</div>
										<div className="sbdatepicker__body--header-cell">M</div>
										<div className="sbdatepicker__body--header-cell">T</div>
										<div className="sbdatepicker__body--header-cell">W</div>
										<div className="sbdatepicker__body--header-cell">T</div>
										<div className="sbdatepicker__body--header-cell">F</div>
										<div className="sbdatepicker__body--header-cell">S</div>
									</div>
									<div className="sbdatepicker__body--dates" />
								</div>
								<aside className="sb-datepicker-change-date hide-sbdpcd">
									<aside className="sb-close-change-date">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="18px"
											viewBox="0 0 24 24"
											width="18px"
											fill="var(--white3)"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
										</svg>
									</aside>
									<div className="sb-yearpicker">
										<div className="sb-yearpicker-prev">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="18px"
												viewBox="0 0 24 24"
												width="18px"
												fill="var(--white4)"
											>
												<path d="M0 0h24v24H0z" fill="none" />
												<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
											</svg>
										</div>
										<div className="sb-yearpicker-title">2023</div>
										<div className="sb-yearpicker-next">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="18px"
												viewBox="0 0 24 24"
												width="18px"
												fill="var(--white4)"
											>
												<path d="M0 0h24v24H0z" fill="none" />
												<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
											</svg>
										</div>
									</div>
									<div className="sb-monthpicker">
										<div className="sb-monthpicker__month" data-sbdp-month={0}>
											January
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={1}>
											February
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={2}>
											March
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={3}>
											April
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={4}>
											May
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={5}>
											June
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={6}>
											July
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={7}>
											August
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={8}>
											September
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={9}>
											October
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={10}>
											November
										</div>
										<div className="sb-monthpicker__month" data-sbdp-month={11}>
											December
										</div>
									</div>
								</aside>
							</div>
						</div>
						{/* category modal */}
						<div className="sb__categories">
							<div
								className="sb__categories--header"
								style={{ backgroundColor: "var(--black1)" }}
							>
								<div className="sbch-col__one">
									<div className="sbch-title">My Calendars</div>
									<div className="sbch-caret sbch-caret--open">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height={24}
											width={24}
											fill="var(--white2)"
										>
											<path d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z" />
										</svg>
									</div>
								</div>
								<div className="sbch-plus">
									<svg
										xmlns="http://www.w3.sorg/2000/svg"
										height={24}
										width={24}
										fill="var(--white2)"
										style={{ pointerEvents: "none" }}
									>
										<path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" />
									</svg>
								</div>
							</div>
							<div className="sb__categories--body">
								{/* renders via ./sidebarCategories.js */}
								<div className="sb__categories--body-form" />
							</div>
						</div>
						{/* sidebar footer (github/personal links) */}
						<div className="sb__info">
							<div className="sb__info-links">
								{/* data-tooltip="github.com/chaseottofy"  */}
								<a
									href="https://github.com/chaseottofy"
									rel="noreferrer"
									target="_blank"
									title="github.com/chaseottofy"
									name="github.com/chaseottofy"
									className="sb-link sbl-github"
									role="link"
									aria-label="vist github.com/chaseottofy"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="var(--white2)"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
								</a>
								<button
									className="sb-link sbl-email"
									data-tooltip="ottofy@zohomail.com"
									role="button"
									aria-label="email me at ottofy@zohomail.com"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height={24}
										width={24}
										fill="var(--white2)"
									>
										<path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7L4 8v10h16V8Zm0-2 8-5H4ZM4 8V6v12Z" />
									</svg>
								</button>
								<button
									className="sb-link sbl-portfolio"
									data-tooltip="portfolio in progress"
									role="button"
									aria-label="portfolio in progress"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height={24}
										width={24}
										fill="var(--white2)"
									>
										<path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h10.5v-3.5H4V18Zm12.5 0H20V9h-3.5ZM4 12.5h10.5V9H4Z" />
									</svg>
								</button>
							</div>
							<div className="sb__terms-privacy-project">
								<div className="sb__project-notes">
									<span>Notes</span>
								</div>
								<div className="sbt-divide"></div>
								<div className="sb__privacy">
									<span>Privacy</span>
								</div>
								<div className="sbt-divide"></div>
								<div className="sb__terms">
									<span>Terms</span>
								</div>
							</div>
						</div>
					</div>
				</aside>
				{/* calendar views */}
				<div className="container__calendars cc-tran">
					{/* yearview */}
					<div className="yearview hide-view">
						<div className="calendar__yearview" />
					</div>
					{/* monthview */}
					<div className="monthview hide-view">
						<div className="monthview__top">
							<div className="monthview__top-weekname">SUN</div>
							<div className="monthview__top-weekname">MON</div>
							<div className="monthview__top-weekname">TUE</div>
							<div className="monthview__top-weekname">WED</div>
							<div className="monthview__top-weekname">THU</div>
							<div className="monthview__top-weekname">FRI</div>
							<div className="monthview__top-weekname">SAT</div>
						</div>
						<div className="monthview--calendar" />
					</div>
					{/* weekview */}
					<div className="weekview hide-view">
						<div className="weekview__top">
							<div />
							<div className="weekview--header">
								<div className="weekview--header-day">
									<span className="weekview--header-day__title">SUN</span>
									<button className="weekview--header-day__number">1</button>
								</div>
								<div className="weekview--header-day">
									<span className="weekview--header-day__title">MON</span>
									<button className="weekview--header-day__number">2</button>
								</div>
								<div className="weekview--header-day">
									<span className="weekview--header-day__title">TUE</span>
									<button className="weekview--header-day__number">3</button>
								</div>
								<div className="weekview--header-day">
									<span className="weekview--header-day__title">WED</span>
									<button className="weekview--header-day__number">4</button>
								</div>
								<div className="weekview--header-day">
									<span className="weekview--header-day__title">THU</span>
									<button className="weekview--header-day__number">5</button>
								</div>
								<div className="weekview--header-day">
									<span className="weekview--header-day__title">FRI</span>
									<button className="weekview--header-day__number">6</button>
								</div>
								<div className="weekview--header-day">
									<span className="weekview--header-day__title">SAT</span>
									<button className="weekview--header-day__number">7</button>
								</div>
							</div>
							<div className="wv-gmt" />
							<div className="weekview--allday-module">
								<div
									className="allday--col"
									data-allday-column={0}
									data-wv-top="true"
								/>
								<div
									className="allday--col"
									data-allday-column={1}
									data-wv-top="true"
								/>
								<div
									className="allday--col"
									data-allday-column={2}
									data-wv-top="true"
								/>
								<div
									className="allday--col"
									data-allday-column={3}
									data-wv-top="true"
								/>
								<div
									className="allday--col"
									data-allday-column={4}
									data-wv-top="true"
								/>
								<div
									className="allday--col"
									data-allday-column={5}
									data-wv-top="true"
								/>
								<div
									className="allday--col"
									data-allday-column={6}
									data-wv-top="true"
								/>
							</div>
						</div>
						<div className="weekview__grid">
							<div className="weekview--sidebar" />
							<div className="weekview--calendar">
								<div
									className="week--col"
									data-column-index={0}
									data-wv-top="false"
								/>
								<div
									className="week--col"
									data-column-index={1}
									data-wv-top="false"
								/>
								<div
									className="week--col"
									data-column-index={2}
									data-wv-top="false"
								/>
								<div
									className="week--col"
									data-column-index={3}
									data-wv-top="false"
								/>
								<div
									className="week--col"
									data-column-index={4}
									data-wv-top="false"
								/>
								<div
									className="week--col"
									data-column-index={5}
									data-wv-top="false"
								/>
								<div
									className="week--col"
									data-column-index={6}
									data-wv-top="false"
								/>
							</div>
							<div />
							<div className="weekview--footer" />
						</div>
					</div>
					{/* dayview */}
					<div className="dayview hide-view">
						<div className="calendar__dayview">
							{/* row 1 */}
							<div className="dayview--header">
								<div className="dayview--header-day">
									<div className="dayview--header-day__title">SUN</div>
									<div className="dayview--header-day__number">1</div>
								</div>
								<div className="dv-info-day-wrapper">
									<div className="dayview--header-day__info" />
								</div>
							</div>
							{/* row 2 */}
							<div className="dv-ontop-row2">
								<div className="dv-gmt">gmt-one</div>
								<div className="dayview--ontop-container" data-dv-top="true" />
							</div>
							{/* row 3 */}
							<div className="dayview__grid">
								<div className="dayview__grid--wrapper">
									<div className="dayview--side-grid__wrapper">
										<div className="dayview--side-grid" />
									</div>
									<div className="dayview--main-grid" data-dv-top="false" />
								</div>
								<div className="dayview--footer" />
							</div>
						</div>
					</div>
					{/* listview */}
					<div className="listview hide-view">
						<div className="listview__body"></div>
					</div>
					{/* stats view */}
				</div>
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
			<aside className="datepicker hide-datepicker" style={{ top: "12px" }}>
				<div className="datepicker__header">
					<button
						className="datepicker-title"
						role="button"
						aria-label="button"
					>
						October 2022
					</button>
					<div className="datepicker-nav">
						<button
							className="datepicker-nav--prev"
							role="button"
							aria-label="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="var(--white3)"
								style={{ userSelect: "none", pointerEvents: "none" }}
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
							</svg>
						</button>
						<button
							className="datepicker-nav--next"
							role="button"
							aria-label="button"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="var(--white3)"
								style={{ userSelect: "none", pointerEvents: "none" }}
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M8.59 16.59L10 18l6-6-6-6L8.59 7.41 13.17 12z" />
							</svg>
						</button>
					</div>
				</div>
				<div className="datepicker__body">
					<div className="datepicker__body--header">
						<div className="datepicker__body--header-cell">S</div>
						<div className="datepicker__body--header-cell">M</div>
						<div className="datepicker__body--header-cell">T</div>
						<div className="datepicker__body--header-cell">W</div>
						<div className="datepicker__body--header-cell">T</div>
						<div className="datepicker__body--header-cell">F</div>
						<div className="datepicker__body--header-cell">S</div>
					</div>
					<div className="datepicker__body--dates" />
				</div>
				<aside className="datepicker-change-date hide-dpcd">
					<aside className="close-change-date">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="18px"
							viewBox="0 0 24 24"
							width="18px"
							fill="var(--white3)"
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
						</svg>
					</aside>
					<div className="yearpicker">
						<button className="yearpicker-prev" type="text">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="18px"
								viewBox="0 0 24 24"
								width="18px"
								fill="var(--white4)"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
							</svg>
						</button>
						<div className="yearpicker-title">2023</div>
						<button className="yearpicker-next">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="18px"
								viewBox="0 0 24 24"
								width="18px"
								fill="var(--white4)"
							>
								<path d="M0 0h24v24H0z" fill="none" />
								<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
							</svg>
						</button>
					</div>
					<div className="monthpicker">
						<div className="monthpicker__month" data-dp-month={0}>
							January
						</div>
						<div className="monthpicker__month" data-dp-month={1}>
							February
						</div>
						<div className="monthpicker__month" data-dp-month={2}>
							March
						</div>
						<div className="monthpicker__month" data-dp-month={3}>
							April
						</div>
						<div className="monthpicker__month" data-dp-month={4}>
							May
						</div>
						<div className="monthpicker__month" data-dp-month={5}>
							June
						</div>
						<div className="monthpicker__month" data-dp-month={6}>
							July
						</div>
						<div className="monthpicker__month" data-dp-month={7}>
							August
						</div>
						<div className="monthpicker__month" data-dp-month={8}>
							September
						</div>
						<div className="monthpicker__month" data-dp-month={9}>
							October
						</div>
						<div className="monthpicker__month" data-dp-month={10}>
							November
						</div>
						<div className="monthpicker__month" data-dp-month={11}>
							December
						</div>
					</div>
				</aside>
			</aside>

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
			<aside className="change-view--wrapper toggle-options">
				<div className="change-view--options">
					<div className="change-view--option">
						<div
							className="view-option"
							data-view-option="day"
							data-view-key="D"
						>
							Day
						</div>
						<div
							className="view-option"
							data-view-option="week"
							data-view-key="W"
						>
							Week
						</div>
						<div
							className="view-option"
							data-view-option="month"
							data-view-key="M"
						>
							Month
						</div>
						<div
							className="view-option"
							data-view-option="year"
							data-view-key="Y"
						>
							Year
						</div>
						<div
							className="view-option"
							data-view-option="list"
							data-view-key="L"
						>
							List
						</div>
					</div>
				</div>
			</aside>

			{/* floating toggle form button visible when sidebar is closed */}
			<aside className="toggle-form">
				<span className="toggle-form-btn" role="button" aria-label="open form">
					<svg width={36} height={36} viewBox="0 0 36 36">
						<path fill="#34A853" d="M16 16v14h4V20z" />
						<path fill="#4285F4" d="M30 16H20l-4 4h14z" />
						<path fill="#FBBC05" d="M6 16v4h10l4-4z" />
						<path fill="#EA4335" d="M20 16V6h-4v14z" />
						<path fill="none" d="M0 0h36v36H0z" />
					</svg>
				</span>
			</aside>

			{/* create new category form */}
			<aside className="category__form hide-ctg-form">
				<div className="category__form--body">
					<div className="ctg-input--err hide-ctg-err" />
					<input
						type="text"
						className="category__form-input"
						placeholder="Category Name"
						maxLength={20}
						minLength={1}
						required
					/>
					<div className="color__picker">
						<div className="color-picker__header">
							<div className="color-picker__title">color</div>
						</div>
						<div className="color-picker__options" />
					</div>
				</div>
				<div className="category__form--footer">
					<button
						className="btn-root category__form--cancel"
						role="button"
						aria-label="button"
					>
						Cancel
					</button>
					<button
						className="btn-root category__form--submit"
						role="button"
						aria-label="button"
					>
						Save
					</button>
				</div>
			</aside>

			{/* "eye" icon that appears in day/week view */}
			<aside className="collapse-view hide-cbt">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="18px"
					viewBox="0 0 24 24"
					width="18px"
					fill="var(--white3)"
					className="cv-svg-off"
				>
					<path
						d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
						fill="none"
					/>
					<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="18px"
					viewBox="0 0 24 24"
					width="18px"
					fill="var(--white3)"
					className="cv-svg-on hide-cbt"
				>
					<path d="M0 0h24v24H0z" fill="none" />
					<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
				</svg>
			</aside>

			{/* search for date popup */}
			<aside className="go-to-date hide-gotodate">
				<div className="go-to__header">
					<span className="go-to-title">Go to date</span>
					<div className="go-to-subtitle">
						<span className="gts-format">month day year</span>
						<span className="gts-mid">or</span>
						<span className="gts-format">MM/DD/YYYY</span>
					</div>
				</div>
				<div className="go-to__body">
					<input
						type="text"
						className="go-to-input"
						spellCheck="false"
						required
					/>
					<div className="go-to-err" style={{ display: "none" }}>
						Invalid Date
					</div>
				</div>
				<div className="go-to__footer">
					<div className="cancel-go-to">Cancel</div>
					<div className="submit-go-to">Go</div>
				</div>
			</aside>

			{/* SETTINGS */}
			<aside className="sidebar-sub-menu hide-sidebar-sub-menu">
				<div className="sub-menu__header">
					<div className="sub-menu--title">Settings &amp; Data</div>
					<div className="sub-menu--icons">
						<div
							className="toggle-animations-icon__sm"
							data-tooltip="Animations Enabled"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								enableBackground="new 0 0 24 24"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="var(--primary2)"
								className="tai-on"
							>
								<rect fill="none" height={24} width={24} />
								<path d="M2.88,7.88l1.54,1.54C4.15,10.23,4,11.1,4,12c0,4.41,3.59,8,8,8s8-3.59,8-8s-3.59-8-8-8c-0.9,0-1.77,0.15-2.58,0.42 L7.89,2.89C9.15,2.32,10.54,2,12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12C2,10.53,2.32,9.14,2.88,7.88z M7,5.5 C7,6.33,6.33,7,5.5,7S4,6.33,4,5.5S4.67,4,5.5,4S7,4.67,7,5.5z" />
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								enableBackground="new 0 0 24 24"
								height="24px"
								viewBox="0 0 24 24"
								width="24px"
								fill="var(--red1)"
								className="tai-off hide-tai"
							>
								<g>
									<rect fill="none" height={24} width={24} />
									<path d="M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12c0-1.19,0.22-2.32,0.6-3.38L4.48,9.3C4.17,10.14,4,11.05,4,12c0,4.41,3.59,8,8,8 s8-3.59,8-8s-3.59-8-8-8c-0.95,0-1.85,0.17-2.69,0.48L8.63,2.59C9.69,2.22,10.82,2,12,2C17.52,2,22,6.48,22,12z M5.5,4 C4.67,4,4,4.67,4,5.5S4.67,7,5.5,7S7,6.33,7,5.5S6.33,4,5.5,4z M11,16V8H9v8H11z M15,16V8h-2v8H15z" />
								</g>
							</svg>
						</div>
						<div
							className="keyboard-disabled-sm"
							data-tooltip="Keyboard Shortcuts Disabled"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height={24}
								width={24}
								fill="var(--red1)"
							>
								<path d="M4 19q-.825 0-1.412-.587Q2 17.825 2 17V7q0-.825.588-1.412Q3.175 5 4 5h16q.825 0 1.413.588Q22 6.175 22 7v10q0 .825-.587 1.413Q20.825 19 20 19Zm0-2h16V7H4v10Zm4-1h8v-2H8Zm-3-3h2v-2H5Zm3 0h2v-2H8Zm3 0h2v-2h-2Zm3 0h2v-2h-2Zm3 0h2v-2h-2ZM5 10h2V8H5Zm3 0h2V8H8Zm3 0h2V8h-2Zm3 0h2V8h-2Zm3 0h2V8h-2ZM4 17V7v10Z" />
							</svg>
						</div>
						<div className="close-sub-menu">
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
				</div>
				<div className="sub-menu__body">
					<div className="sub-menu-content">
						{/* row one */}
						<div className="sub-menu--item">
							<div className="sub-menu--item__title">
								Calendar Data (JSON)
								<hr />
								<strong>(Download &amp; Upload)</strong>
							</div>
							{/* .sub-menu--item__description >strong */}
							<div className="sub-menu--item__description sbmid-row-one">
								Uploading data will overwrite existing data!
								<br />
								Please ensure you have a backup of your data before uploading.
								<br />
								Uploading unsupported data will not cause any overwrites.
							</div>
							<div className="sub-menu--item__actions">
								<div className="sm-download-json">
									<div className="sm-json-btn down-json">
										<div className="sm-download-json-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height={24}
												width={24}
												fill="var(--white3)"
											>
												<path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z" />
											</svg>
										</div>
										<div className="sm-download-json-title">download.json</div>
									</div>
									<div className="sm-json-btn upload-json">
										<div className="sm-upload-json-icon">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height={24}
												width={24}
												fill="var(--white3)"
											>
												<path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm5-4V7.85l-2.6 2.6L7 9l5-5 5 5-1.4 1.45-2.6-2.6V16Z" />
											</svg>
										</div>
										<div className="sm-upload-json-title">upload.json</div>
									</div>
								</div>
							</div>
						</div>
						{/* row two */}
						<div className="sub-menu--item smi-theme-actions">
							<div className="sub-menu--item__title">
								Configure Application Theme
							</div>
							<div className="sub-menu--item__description">
								light, dark, and high contrast themes.
							</div>
							<div className="sub-menu--item__actions theme-actions">
								<div className="theme-option theme-option-dark">
									<input
										className="theme-radio__input"
										name="themeoption"
										type="radio"
										defaultValue="dark"
										defaultChecked
									/>
									<span>Dark</span>
								</div>
								<div className="theme-option theme-option-light">
									<input
										className="theme-radio__input"
										name="themeoption"
										type="radio"
										defaultValue="light"
									/>
									<span>Light</span>
								</div>
								<div className="theme-option theme-option-contrast">
									<input
										className="theme-radio__input"
										name="themeoption"
										type="radio"
										defaultValue="contrast"
									/>
									<span>High Contrast</span>
								</div>
							</div>
						</div>
						{/* row three */}
						<div className="sub-menu--item smias">
							<div className="sub-menu--item__title">Keyboard Shortcuts</div>
							<div className="sub-menu--item__description">
								<span>30 individual keys in use for 23 different actions.</span>
								<br />
								<span>("Escape" key actions will always be enabled.)</span>
							</div>
							<div className="smia-shortcuts">
								<div className="toggle-kb-shortcuts-btn__smia">
									<span>Open Shortcuts Menu</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height={24}
										width={24}
										fill="var(--white2)"
									>
										<path d="M4 19q-.825 0-1.412-.587Q2 17.825 2 17V7q0-.825.588-1.412Q3.175 5 4 5h16q.825 0 1.413.588Q22 6.175 22 7v10q0 .825-.587 1.413Q20.825 19 20 19Zm0-2h16V7H4v10Zm4-1h8v-2H8Zm-3-3h2v-2H5Zm3 0h2v-2H8Zm3 0h2v-2h-2Zm3 0h2v-2h-2Zm3 0h2v-2h-2ZM5 10h2V8H5Zm3 0h2V8H8Zm3 0h2V8h-2Zm3 0h2V8h-2Zm3 0h2V8h-2ZM4 17V7v10Z" />
									</svg>
								</div>
								<div className="smia-set-shortcut-status">
									<span className="smia-set-status-title">toggle on/off</span>
									<div className="smia-disable-shortcuts__btn">
										<label>
											<input
												type="checkbox"
												className="smia-toggle-shortcuts-checkbox"
												defaultChecked
											/>
											<span className="smia-slider" />
										</label>
									</div>
								</div>
							</div>
						</div>
						{/* row four */}
						<div className="sub-menu--item">
							<div className="sub-menu--item__title smias">
								Transitions/Animations
							</div>
							<div className="sub-menu--item__description smi-last">
								<span>
									All transitions and animations can be toggled on/off.
								</span>
								<br />
								<span></span>
							</div>
							<div className="smia-ani">
								<span className="smdt-title">toggle on/off</span>
								<div className="smdt-toggle">
									<label>
										<input
											type="checkbox"
											className="smdt-toggle-checkbox"
											defaultChecked
										/>
										<span className="smdt-slider" />
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</aside>

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
			<aside className="sb__info-popup hide-sb-info-popup">
				<div className="sb__info-popup-header">
					<select name="popup-info" className="select-popup-info">
						<option value="notes">Project Notes</option>
						<option value="privacy">Privacy</option>
						<option value="terms">Terms</option>
					</select>
					<div className="close-sb-info">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height={24}
							width={24}
							fill="var(--white2)"
						>
							<path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
						</svg>
					</div>
				</div>
				<div className="sb__info-popup-body">
					<div className="sb__info-popup-body__content">
						<div className="sbip-title" />
						<div className="sbip-content" />
					</div>
				</div>
			</aside>

			{/* modal display keyboard shortcuts */}
			<aside className="shortcuts__modal hide-shortcuts">
				<div className="shortcuts-modal-header">
					<div className="shortcuts-modal-title">
						<span>Keyboard shortcuts</span>
						<div
							className="keyboard-disabled-sm-two"
							data-tooltip="Keyboard Shortcuts Disabled"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height={24}
								width={24}
								fill="var(--red1)"
							>
								<path d="M4 19q-.825 0-1.412-.587Q2 17.825 2 17V7q0-.825.588-1.412Q3.175 5 4 5h16q.825 0 1.413.588Q22 6.175 22 7v10q0 .825-.587 1.413Q20.825 19 20 19Zm0-2h16V7H4v10Zm4-1h8v-2H8Zm-3-3h2v-2H5Zm3 0h2v-2H8Zm3 0h2v-2h-2Zm3 0h2v-2h-2Zm3 0h2v-2h-2ZM5 10h2V8H5Zm3 0h2V8H8Zm3 0h2V8h-2Zm3 0h2V8h-2Zm3 0h2V8h-2ZM4 17V7v10Z" />
							</svg>
						</div>
					</div>
					<div className="close-shortcuts-modal">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height={24}
							width={24}
							fill="var(--white2)"
						>
							<path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
						</svg>
					</div>
				</div>
				<div className="shortcuts-modal__body">
					<div className="shortcuts-modal-content" />
				</div>
			</aside>

			{/* popup that appears after event edit/creation */}
			<aside className="toast" />
		</>
	);
};

export default App;

import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';

import routes from '@constants/routes';
import themes from '@components/themes';
import { OnBoarding } from '@components';
import { isAuthenticated } from '@store/selectors/user';
import { selectLocaleSettings } from '@store/selectors/settings';
import { getLocale, constructLocale, SUPPORTED_LOCALES } from '@locales';

const theme = 'light';

const Tigado = () => {
	const isAuth = useSelector(isAuthenticated);
	const locale = useSelector(selectLocaleSettings);

	const localeISO = constructLocale(locale);
	const localeMessage = getLocale(localeISO);

	return (
		<ThemeProvider theme={themes[theme]}>
			<IntlProvider key={localeISO} locale={localeISO} messages={localeMessage}>
				<Routes>
					{(routes.map(({ slug, element: Component, path }) => (
						<Route 
							key={slug} path={path} 
							element={<Component />} 
						/>
					)))}
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				{isAuth && (
					<OnBoarding />
				)}
			</IntlProvider>
		</ThemeProvider>
	);
}

export default Tigado;

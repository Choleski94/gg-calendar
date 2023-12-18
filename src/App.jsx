import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import routes from '@constants/routes';
import themes from '@components/themes';
import { OnBoarding } from '@components';
import { isAuthenticated } from '@store/selectors/user';
import { selectLocaleSettings } from '@store/selectors/settings';
import { getLocale, constructLocale, SUPPORTED_LOCALES } from '@locales';

const Tigado = () => {
	const locale = useSelector(selectLocaleSettings);
	const isAuth = useSelector(isAuthenticated);

	const theme = 'light';

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
				</Routes>
				{isAuth && (
					<OnBoarding />
				)}
			</IntlProvider>
		</ThemeProvider>
	);
}

export default Tigado;

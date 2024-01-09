import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';

import routes from '@constants/routes';
import themes from '@components/themes';
import { OnBoarding } from '@components';
import { getLocale, constructLocale } from '@locales';
import { selectLocaleSettings } from '@store/selectors/settings';

const theme = 'light';

const Tigado = () => {
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
				{/* <OnBoarding /> */}
			</IntlProvider>
		</ThemeProvider>
	);
}

export default Tigado;

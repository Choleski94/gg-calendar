import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import locales from '@locales';
import routes from '@constants/routes';
import themes from '@components/themes';
import { selectLocaleSettings } from '@store/selectors/settings';

const Tigado = () => {
	const { lang } = useSelector(selectLocaleSettings);
	const theme = 'light';

	return (
		<ThemeProvider theme={themes[theme]}>
			<IntlProvider locale={lang} messages={locales[lang]} key={lang}>
				<Routes>
					{(routes.map(({ slug, element: Component, path }) => (
						<Route 
							exact 
							key={slug} path={path} 
							element={<Component />} 
						/>
					)))}
				</Routes>
			</IntlProvider>
		</ThemeProvider>
	);
}

export default Tigado;

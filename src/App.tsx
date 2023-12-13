import React from 'react';
import { IntlProvider } from 'react-intl';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import locales from '@locales';
import routes from '@constants/routes';
import themes from '@components/themes';

const Tigado = () => {
	const lang = 'en-US';
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

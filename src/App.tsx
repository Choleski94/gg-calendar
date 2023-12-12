import React from 'react';
import { IntlProvider } from 'react-intl';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import themes from '@components/themes';

import locales from './locales';
import routes from './constants/routes';
import RenderRoutes from './components/routes/RenderRoutes';

const Tigado = () => {
	const lang = 'en-US';
	const theme = 'light';

	return (
		<ThemeProvider theme={themes[theme]}>
			<IntlProvider locale={lang} messages={locales[lang]} key={lang}>
				{/*
				<h1>
					Hello Tigado team
				</h1>
				*/}
				<Routes>
					{(routes.map(({ slug, element, path }) => (
						<Route key={slug} element={element} path={path} />
					)))}
				</Routes>
			</IntlProvider>
		</ThemeProvider>
	);
}

export default Tigado;

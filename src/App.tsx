import React from 'react';
import { IntlProvider } from 'react-intl';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import themes from '@components/themes';

import locales from './locales';
import routes from './constants/routes';
import RenderRoutes from './components/routes/RenderRoutes';

const renderHome = (
	<h1>Home</h1>
);

const renderUser = (
	<h1>User</h1>
);

const Tigado = () => {
	const lang = 'en-US';
	const theme = 'light';

	console.log('Constants:::', routes);

	return (
		<ThemeProvider theme={themes[theme]}>
			<IntlProvider locale={lang} messages={locales[lang]} key={lang}>
				{/*
				<h1>
					Hello Tigado team
				</h1>
				*/}
				<Routes>
					<Route path="/" element={renderHome} />
					<Route path="users/*" element={renderUser} />
				</Routes>
			</IntlProvider>
		</ThemeProvider>
	);
}

export default Tigado;

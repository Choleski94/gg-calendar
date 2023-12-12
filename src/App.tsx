import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Loader } from '@components';

const themes = {};

const theme = 'light';

const Tigado = () => {
	return (
		<ThemeProvider theme={themes[theme]}>
			{isLoading ? (
				<Loader />
			) : (
				<h1>
					Hello Tigado team
				</h1>
			)}
		</ThemeProvider>
	);
}

export default Tigado;

import { jwtDecode } from 'jwt-decode';
import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import App from '@app';
import { Loader } from '@components';
import rootReducer from '@store/rootReducer';
import { userLoggedIn } from '@store/actions/auth';
import setAuthorizationHeader from '@utils/setAuthorizationHeader';

const root = document.getElementById('root');

const store = configureStore({
	reducer: rootReducer,
	preloadedState: { user: {}, organizations: [], settings: {} },
	devTools: import.meta.env.PROD === false, // Enable Redux DevTools in development mode
});

if (localStorage.tigadoJWT) {
	const payload = jwtDecode(localStorage.tigadoJWT);

	const user = {
		token: localStorage.tigadoJWT,
		...payload,
	};

	setAuthorizationHeader(localStorage.tigadoJWT);
	store.dispatch(userLoggedIn(user));
}

if (root) {
	ReactDOM.createRoot(root).render(
		<BrowserRouter>
			<Provider store={store}>
				<Suspense fallback={<Loader />}>
					<App />
				</Suspense>
			</Provider>
		</BrowserRouter>
	);
}

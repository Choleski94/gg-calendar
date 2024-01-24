import { Suspense } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import App from '@app';
import { Loader } from '@components';
import { userLoggedIn } from '@store/actions/auth';
import rootReducer, { preloadedState } from '@store/rootReducer';
import setAuthorizationHeader from '@utils/setAuthorizationHeader';

const store = configureStore({
	preloadedState,
	reducer: rootReducer,
	devTools: import.meta.env.PROD === false, // Enable Redux DevTools in development mode
});

const root = document.getElementById('root');

if (localStorage.tigadoJWT) {
	const payload = jwtDecode(localStorage?.tigadoJWT);

	const user = {
		token: localStorage?.tigadoJWT,
		id: payload?.id,
		phone: payload?.phone,
		email: payload?.email,
		lastName: payload?.lastName,
		firstName: payload?.firstName,
		isOnboarded: payload?.isOnboarded,
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

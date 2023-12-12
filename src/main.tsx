import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@app';
import store from '@store';
import { Loader } from '@components';

const root = document.getElementById('root');

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

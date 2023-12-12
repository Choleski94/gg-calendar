import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

const RenderRoutes = (routes = []) => {
	const { location } = useHistory();
	return (
		<Switch>
			{(routes.map(({ slug, component, path }, idx) => (
				<Route key={slug} 
					element={component}
					// location={location}
					path={path} 
					// exact
				/>
			)))}
		</Switch>
	);
};

export default RenderRoutes;


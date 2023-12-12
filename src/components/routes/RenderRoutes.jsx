import React from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';

const RenderRoutes = ({ routes = [] }) => {
	return (
		<Routes>
			{(routes.map(({ slug, element, path }, idx) => (
				<Route key={slug} element={element} path={path} />
			)))}
		</Routes>
	);
};

export default RenderRoutes;


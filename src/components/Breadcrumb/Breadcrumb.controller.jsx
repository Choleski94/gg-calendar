import React from 'react';
import { Link } from 'react-router-dom';

export const renderBreadcrumbItem = ({ path = '', value = '', currentIdx, totalIdx }) => (
	((currentIdx === 0) || (currentIdx === totalIdx)) ? (
		<li className="breadcrumb-item text-muted active" aria-current="page">
			{value}
		</li>
	) : (
		<li className="breadcrumb-item">
			<Link className="breadcrumb-link" to={path}>
				{value}
			</Link>
		</li>
	)
);
 

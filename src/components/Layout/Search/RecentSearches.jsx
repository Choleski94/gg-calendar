import React from 'react';
import { useNavigate } from 'react-router-dom';

import formatMessage from '@utils/formatMessage';

const RecentSearches = () => {
	const navigate = useNavigate();

	return (
		<>
			<span className="dropdown-header">
				Recent searches
			</span>
			<div className="dropdown-item bg-transparent text-wrap">
				<a
					className="btn btn-soft-dark btn-xs rounded-pill"
					href="#"
				>
					Jobs
					&nbsp;
					<i className="bi-search ms-1" />
				</a>
				&nbsp;
				<a
					className="btn btn-soft-dark btn-xs rounded-pill"
					href="#"
				>
					Products
					&nbsp;
					<i className="bi-search ms-1" />
				</a>
			</div>
		</>
	);
}

export default RecentSearches;

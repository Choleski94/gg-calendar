import React from 'react';

import { Card, Input } from '@components';

import Customers from './Customers';
import Tutorials from './Tutorials';
import RecentSearches from './RecentSearches';

const searchResultsStyle = {
	top: '120%', 
	width: '100%', 
	animationDuration: '300ms'
}

const SearchResults = ({ placeholder }) => {
	return (
		<div
			id="searchResults" 
			style={searchResultsStyle}
			className="hs-form-search-menu-content dropdown-menu dropdown-menu-form-search navbar-dropdown-menu-borderless animated hs-form-search-menu-initialized slideInUp"
		>
			<Card>
				<div className="card-body-height">
					<div className="d-lg-none">
						<div className="input-group input-group-merge navbar-input-group mb-5">
							<div className="input-group-prepend input-group-text">
								<i className="bi-search" />
							</div>
							<input
								type="search"
								className="form-control"
								placeholder={placeholder}
							/>
							<a className="input-group-append input-group-text">
								<i className="bi-x-lg" />
							</a>
						</div>
					</div>
					<RecentSearches />
					<div className="dropdown-divider" />
					<Tutorials />
					<div className="dropdown-divider" />
					<Customers />
				</div>
			</Card>
		</div>
	);
}

export default SearchResults;

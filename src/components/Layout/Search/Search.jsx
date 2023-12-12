import React from 'react';

import { Input } from '@components';
import formatMessage from '@utils/formatMessage';

import SearchResults from './SearchResults';

const Search = ({ placeholder = 'Search in Tigado' }) => {
	const timer = React.useRef();

	const [ query, setQuery ] = React.useState('');
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);

	const fetchGlobal = () => {
		// Check if we have error(s).
		if (!query || !query.length) {
			return setOptions([]);
		}

		// Set loading state.
		setLoading(true);

		setLoading(false);
		setOptions([]);
	}
	/*
 	 * Perform a fetch call 1 sec when the client stop typing.  
 	 */
	React.useEffect(() => {
		timer.current = setTimeout(fetchGlobal, 1000);
	}, [ query ]);

	const onQueryClear = (e) => {
		e.preventDefault();
		setQuery('');
	}

	const onChange = (e) => {
		clearTimeout(timer.current);
		setQuery(e.target.value);
	};

	const showResults = React.useMemo(() => {
		return Boolean(query || '')
	}, [ query ]);


	return (
		<div className="dropdown ms-2">
			{/* Input Group */}
			<div className="d-none d-lg-block">
				<div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
					<div className="input-group-prepend input-group-text">
						<i className="bi-search" />
					</div>
					<Input
						id="query"
						type="text"
						name="query"
						value={query}
						onChange={onChange}
						placeholder={placeholder}
						className="js-form-search form-control focus"
					/>
					<a
						href="#search-clear"
						onClick={onQueryClear}
						className="input-group-append input-group-text"
					>
						<i
							className="bi-x-lg"
							id="clearSearchResultsIcon"
							style={{ display: "block", opacity: "1.01" }}
						/>
					</a>
				</div>
			</div>
			<button type="button" className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none">
				<i className="bi-search" />
			</button>
			{showResults ? (
				<SearchResults placeholder={placeholder} />
			) : null}
		</div>
	);
}

export default Search;

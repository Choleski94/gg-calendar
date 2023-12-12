
import React from 'react';

import { request } from '@utils/request';
import { Input, Table } from '@components';
import formatMessage from '@utils/formatMessage';
import { ENTITY_CUSTOMER, DEFAULT_TABLE_HEADER } from '@constants/customers';

import { parseOptions } from './SearchCustomerModule.helpers';

const SearchCustomerModule = ({ setCustomerData }) => {
	const timer = React.useRef();

	const [ query, setQuery ] = React.useState('');
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);

	/*
 	 * Perform a fetch call 1 sec when the client stop typing.  
 	 */
	React.useEffect(() => {
		timer.current = setTimeout(fetchCustomers, 1000);
	}, [ query ]);

	const fetchCustomers = () => {
		// Check if we have error(s).
		if (!query || !query.length) {
			return setOptions([]);
		}

		// Set loading state.
		setLoading(true);

		const searchQuery = {
			entity: ENTITY_CUSTOMER, 
			options: {
				q: query,
				fields: [
					'address', 'zip', 
					'firstName', 'lastName', 
					'phones.value', 'emails.value',
				]
			}
		};

		request.search(searchQuery).then((data) => {
			setLoading(false);
			if (data.success === true) {
				setOptions(data.result);
			} else {
				setOptions([]);
			}
		}).catch(() => {
			setLoading(false);
			setOptions([]);
		});
	};

	const onChange = (e) => {
		clearTimeout(timer.current);
		setQuery(e.target.value);
	};

	return (
		<>
			<div className="mb-4">
				<Input
					id="query"
					type="text"
					name="query"
					value={query}
					onChange={onChange}
					className="form-control form-control-lg"
					placeholder="Search customer by id, first name, last name, ..."
				/>
			</div>
			<Table
				fullHeight
				withoutHover
				withoutBorder
				withoutHeader
				loading={loading}
				elementsPerPage={10}
				onRowClick={setCustomerData}
				data={parseOptions(options)}
				headers={DEFAULT_TABLE_HEADER}
				noDataMessage="No customer found"
			/>
		</>
	);
};

export default SearchCustomerModule;

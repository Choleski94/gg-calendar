import React from 'react';
import { AutoComplete, Input, Empty } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { request } from '@utils/request';
import { erp } from '@store/erp/actions';
import { useErpContext } from '@store/context/erp';
import { selectSearchedItems } from '@store/erp/selectors';

const Search = ({ config }) => {
	let { entity, searchConfig } = config;

	const { displayLabels, searchFields, outputValue = '_id' } = searchConfig;

	const dispatch = useDispatch();

	const [ value, setValue ] = React.useState('');
	const [ options, setOptions ] = React.useState([]);

	const { erpContextAction } = useErpContext();
	const { panel, collapsedBox, readBox } = erpContextAction;

	const { result, isLoading, isSuccess } = useSelector(selectSearchedItems);

	const isTyping = React.useRef(false);

	let delayTimer = null;

	React.useEffect(() => {
		isLoading && setOptions([{ label: '... Searching' }]);
	}, [ isLoading ]);

	const onSearch = (searchText) => {
		isTyping.current = true;

		clearTimeout(delayTimer);

		delayTimer = setTimeout(function () {
			if (isTyping.current && searchText !== '') {
				dispatch(
					erp.search(entity, {
						question: searchText,
						fields: searchFields,
					})
				);
			}
			isTyping.current = false;
		}, 500);
	};

	const onSelect = (data) => {
		const currentItem = result.find((item) => {
			return item[outputValue] === data;
		});

		dispatch(erp.currentItem({ data: currentItem }));
		panel.open();
		collapsedBox.open();
		readBox.open();
	};

	const onChange = (data) => {
		const currentItem = options.find((item) => {
			return item.value === data;
		});
		const currentValue = currentItem ? currentItem.label : data;
		setValue(currentValue);
	};

	React.useEffect(() => {
		let optionResults = [];

		result.map((item) => {
			const labels = displayLabels.map((x) => item[x]).join(' ');
			optionResults.push({ label: labels, value: item[outputValue] });
		});

		setOptions(optionResults);
	}, [ result ]);

	return (
		<AutoComplete
		value={value}
		options={options}
		style={{
			width: '100%',
		}}
		onSelect={onSelect}
		onSearch={onSearch}
		onChange={onChange}
		notFoundContent={!isSuccess ? <Empty /> : ''}
		allowClear={true}
		placeholder="Your Search here"
		>
		<Input suffix={<SearchOutlined />} />
		</AutoComplete>
	);
}

export default Search;

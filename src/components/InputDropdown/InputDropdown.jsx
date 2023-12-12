import React from 'react';

import useClickOutside from '@utils/hooks/useClickOutside';

import Input from '../Input';

const setDropwdownClassName = (isActive = false) => [
	'ts-dropdown',
	'single',
	'plugin-change_listener',
	'plugin-hs_smart_position',
	(isActive ? 'd-block' : 'd-none')
].join(' ');

const setDropwdownItemClassName = (activeItem = '', currentItem = '') => [
	'option',
	(activeItem === currentItem ? 'active selected' : ''),
].join(' ');

const getOptionLabelByValue = (options = [], currentValue = '') => {
	const [ currentOption ] = options.filter(({ value }) => value === currentValue);
	return currentOption?.label;
};

const InputDropdown = ({
	onChange,
	name = '',
	value = '',
	label = '',
	error = null,
	options = [],
	type = 'text',
	required = '',
	placeholder = '',
	defaultOption = '',
}) => {
	const [ data, setData ] = React.useState(value || '');
	const [ activeOption, setActiveOption ] = React.useState(null);
	const [ showDropdown, setShowDropdown ] = React.useState(false);

	React.useEffect(() => {
		const [ firstOption ] = options;
		setActiveOption(defaultOption || firstOption.value);
	}, []);

        const handleClickOutside = () => setShowDropdown(false);

	const handleDropdownClick = () => setShowDropdown(!showDropdown);

	const handleDropdownItemClick = (e, currentItem = '') => {
		setActiveOption(currentItem);
        	setShowDropdown(false);
	}

        const dropdownRef = useClickOutside(handleClickOutside);

	const handleInputChange = (e) => setData(e.target.value);

	React.useEffect(() => {
		onChange(data, activeOption);
	}, [ data, activeOption ])

	return (
		<div className="input-group input-group-sm-vertical">
			<Input
				id={name}
				type={type}
				name={name}
				value={data}
				label={label}
				error={error}
				required={required}
				placeholder={placeholder}
				onChange={handleInputChange}
				className="js-input-mask form-control"
			/>
			<div className="tom-select-custom tom-select-custom-end">
				<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items dropdown-active">
					<div className="ts-control" onClick={handleDropdownClick} style={{ minWidth: '110px', zIndex: 0 }}>
						<div data-value="Mobile" className="item" data-ts-item>
							{getOptionLabelByValue(options, activeOption)}
						</div>
					</div>
					<div className="tom-select-custom">
						<div ref={dropdownRef} className={setDropwdownClassName(showDropdown)}>
							<div className="ts-dropdown-content" role="listbox" tabIndex={-1}>
								{options.map(({ value, label }, index) => (
									<div key={value} 
										data-selectable 
										onClick={(e) => handleDropdownItemClick(e, value)}
										className={setDropwdownItemClassName(activeOption, value)} 
									>
										{label}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InputDropdown;

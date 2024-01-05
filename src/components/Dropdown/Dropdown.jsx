import React from 'react';

import useClickOutside from '@utils/hooks/useClickOutside';

const setDropwdownClassName = (isActive = false) => [
	'ts-dropdown',
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

const Dropdown = ({
	options = [],
	defaultOption = '',
	handleChange = () => null,
}) => {
	const [ activeOption, setActiveOption ] = React.useState(null);
	const [ showDropdown, setShowDropdown ] = React.useState(false);

	React.useEffect(() => {
		if (!options || !options.length) return

		const [ firstOption ] = options;
		console.log(defaultOption || firstOption.value);
		setActiveOption(defaultOption || firstOption.value);
	}, []);

        const onClickOutside = () => setShowDropdown(false);

	const onDropdownClick = () => setShowDropdown(!showDropdown);

	const handleDropdownItemClick = (e, currentItem = '') => {
		setActiveOption(currentItem);
		handleChange(currentItem);
        	setShowDropdown(false);
	}

        const dropdownRef = useClickOutside(onClickOutside);

	return(
		<div className="input-group-append">
			<div className="tom-select-custom">
				<div className="ts-wrapper form-select">
					<div className="ts-control" onClick={onDropdownClick} style={{ minWidth: '115px', zIndex: 0 }}>
						<div className="item" data-ts-item>
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

export default Dropdown;

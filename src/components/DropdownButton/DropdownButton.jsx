import React from 'react';

import useClickOutside from '@utils/hooks/useClickOutside';

import {
	getOptionLabelByValue,
	setDropwdownClassName,
	setDropwdownItemClassName,
} from './DropdownButton.controller';

const setClassName = ({ withButton }) => [
	'input-group-append',
	(withButton ? 'input-group-append-last-sm-down-none' : '')
].join(' ')

const DropdownButton = ({
	options = [],
	btnContent = '',
	withButton = false,
	defaultOption = '',
	onClick = () => null,
	handleSelect = () => null,
}) => {
	const [ activeOption, setActiveOption ] = React.useState(null);
	const [ showDropdown, setShowDropdown ] = React.useState(false);

	React.useEffect(() => {
		if (defaultOption && defaultOption.length) {
			setActiveOption(defaultOption);
		}
	}, [ defaultOption ]);

        const onClickOutside = () => setShowDropdown(false);

	const onDropdownClick = () => setShowDropdown(!showDropdown);

	const handleDropdownItemClick = (e, currentItem = '') => {
		setActiveOption(currentItem);
		handleSelect(currentItem);
        	setShowDropdown(false);
	}

        const dropdownRef = useClickOutside(onClickOutside);

	return(
		<div className={setClassName({ withButton })}>
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
			{withButton ? (
				<a className="btn btn-primary d-none d-sm-inline-block" onClick={onClick}>
					{btnContent}
				</a>
			) : null}
		</div>
	);
};

export default DropdownButton;

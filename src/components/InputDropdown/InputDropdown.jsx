import React from 'react';

import { hasObjectKey } from '@utils';
import { validateEmail } from '@utils/validate';
import formatMessage from '@utils/formatMessage';
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
	options = [],
	placeholder = '',
	defaultOption = '',
	handleSubmit = () => null,
}) => {
	const [ query, setQuery ] = React.useState('');
	const [ errors, setErrors ] = React.useState(null);
	const [ activeOption, setActiveOption ] = React.useState(null);
	const [ showDropdown, setShowDropdown ] = React.useState(false);

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
		email: formatMessage('form.validation.email.error.text'),
	};

	const validate = (payload = {}) => {
		const errs = {};

		// Check for empty email.
		if (!payload?.query) {
			errs.query = errorMessages.empty;
		}

		// Verify input has valid email.
		if (payload?.query && !validateEmail(payload?.query)) {
			errs.query = errorMessages.email;
		}

		return errs;
	};

	React.useEffect(() => {
		if (!options || !options.length) return

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

	const handleInputChange = (e) => setQuery(e.target.value);

	const handleOnClick = (e) => {
		e.preventDefault();

		// Check if we have error(s).
		const errs = validate({ query });

		setErrors(errs);

		if (hasObjectKey(errs)) return null;

		handleSubmit({ query, option: activeOption });

		setQuery(''); // Clear query.
	}

	return(
		<>
			<div className="input-group mb-2 mb-sm-0">
				<Input
					id="query"
					type="text"
					name="query"
					value={query}
					placeholder={placeholder}
					onChange={handleInputChange}
					error={Boolean(errors?.query)}
				/>
				<div className="input-group-append input-group-append-last-sm-down-none">
					<div className="tom-select-custom tom-select-custom-end">
						<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
							<div className="ts-control" onClick={handleDropdownClick} style={{ minWidth: '110px', zIndex: 0 }}>
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
					<a className="btn btn-primary d-none d-sm-inline-block" onClick={handleOnClick}>
						<i className="bi bi-plus"/>
						Invite
					</a>
				</div>
			</div>
			{errors?.query && (
				<span className="d-block text-danger text-small">
					{errors?.query}
				</span>
			)}
		</>
	);
};

export default InputDropdown;

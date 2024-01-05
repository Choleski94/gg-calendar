import React from 'react';

import { hasObjectKey } from '@utils';
import { validateEmail } from '@utils/validate';
import formatMessage from '@utils/formatMessage';
import useClickOutside from '@utils/hooks/useClickOutside';

import Input from '../Input';
import DropdownButton from '../DropdownButton';

const InputDropdown = ({
	options = [],
	placeholder = '',
	defaultOption = '',
	handleSubmit = () => null,
}) => {
	const [ query, setQuery ] = React.useState('');
	const [ errors, setErrors ] = React.useState(null);
	const [ activeOption, setActiveOption ] = React.useState(null);

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

	const handleInputChange = (e) => setQuery(e.target.value);

	const handleDropdownItemClick = (currentItem = '') => {
		if (currentItem !== activeOption) {
			setActiveOption(currentItem);
		}
	};

	const handleOnClick = (e) => {
		e.preventDefault();

		// Check if we have error(s).
		const errs = validate({ query });

		setErrors(errs);

		if (hasObjectKey(errs)) return null;

		handleSubmit({ query, option: activeOption });

		setQuery(''); // Clear query.
	};

	const buttonCTA = (
		<>
			<i className="bi bi-plus"/>
			Invite
		</>	
	);

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
				<DropdownButton 
					withButton
					options={options}
					btnContent={buttonCTA}
					onClick={handleOnClick}
					defaultOption={defaultOption}
					handleSelect={handleDropdownItemClick}
				/>
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

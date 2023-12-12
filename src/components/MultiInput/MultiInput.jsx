import React from 'react';

import InputDropdown from '../InputDropdown';

const MultiInput = ({
	placeholder = '', addLabel = 'Add', value = [],
	name = '', label = null, secondaryLabel = null, 
	options = [], onOptionChange, defaultOption = '', 
}) => {
	const [ inputs, setInputs ] = React.useState(['']); // Initialize with one empty input
	const [ selectedOption, setSelectedOption ] = React.useState('Home');

	React.useEffect(() => {
		if (value && value.length) {
			setInputs(value)
		}
	}, [ value ]);

	const setInputOption = (payload) => {
		setInputs(payload);
		onOptionChange({ name, value: payload });
	}

	const handleAddInput = () => setInputOption([ ...inputs, {} ]);

	const handleInputChange = (index, value, option) => {
		const updatedInputs = [...inputs];
		updatedInputs[index] = { value, option };
		setInputOption(updatedInputs);
	};

	const handleDeleteInput = (index) => {
		const updatedInputs = [ ...inputs ];
		updatedInputs.splice(index, 1); // Remove the phone number at the specified index
		setInputOption(updatedInputs);
	};

	return (
		<>
			{inputs.map((input, index) => (
				<div key={index} className="input-group-add-field">
					{!index ? (
						<>
							{label && label.length && (
								<label className="form-label">
									{label}
								</label>
							)}
							&nbsp;
							{secondaryLabel && secondaryLabel && (
								<span className="form-label-secondary">
									{secondaryLabel}
								</span>
							)}
						</>
					) : null}
					<InputDropdown
						name={name}
						options={options}
						placeholder={placeholder}
						value={input?.value || ''}
						id={`phone_label_${name}`}
						defualtOption={defaultOption}
						className="js-input-mask form-control"
						onChange={(value, option) => handleInputChange(index, value, option)}
					/>
					{index ? (
						<a
							className="js-delete-field input-group-add-field-delete"
							data-hs-add-field-delete="0"
							onClick={() => handleDeleteInput(index)} // Add the onClick event to delete the input field
						>
							<i className="bi-x-lg" />
						</a>
					) : null}
				</div>
			))}
			<a
				className="js-create-field form-link"
				onClick={handleAddInput}
			>
				<i className="bi-plus" />
				&nbsp;
				{addLabel}
			</a>
		</>
	);
};

export default MultiInput;

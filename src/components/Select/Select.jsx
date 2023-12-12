import React from 'react';

import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const Select = ({
	value = '',
	options = [], 
	label = null,
	isMulti = false, 
	placeholder = '', 
	secondaryLabel = '',
	onChange = () => null,
	closeMenuOnSelect = false, 
	classNamePrefix = 'react-select',
	className = 'react-select-container',
}) => {
	const [ isValueChanged, setIsValueChanged ] = React.useState(false);

	const defaultValueOption = React.useMemo(() => {
		let res = null;

		if (isMulti) {
			if (value && value.length) {
				res = options.filter((optData) => (value || []).includes(optData.value));
			}
		} else {
			res = options.filter((optData) => optData.value === value);
		}

		return res;
	}, [ value ]);

	const handleChange = (payload) => {
		if (!isValueChanged) {
			setIsValueChanged(true);
		}

		onChange(payload);
	}

	return (
		<>
			{label && (
				<>
					<label className="form-label">
						{label}
					</label>
				</>
			)}
			{secondaryLabel && (
				<>
					&nbsp;
					<span className="form-label-secondary">
						{secondaryLabel}
					</span>
				</>
			)}
			<ReactSelect
				isMulti={isMulti}
				options={options}
				className={className}
				onChange={handleChange}
				placeholder={placeholder}
				components={animatedComponents}
				classNamePrefix={classNamePrefix}
				closeMenuOnSelect={closeMenuOnSelect}
				value={isValueChanged ? value : defaultValueOption}
			/>
		</>
	);
}

export default Select;

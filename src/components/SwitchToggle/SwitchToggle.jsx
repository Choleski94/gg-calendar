import React from 'react';

import { SwitchToggleWrapper } from './SwitchToggle.styled';

const SwitchToggle = ({ name, value = false, disabled = false, onChange, options = [] }) => {

	const [ checked, setChecked ] = React.useState(false);

	React.useEffect(() => {
		if (value !== checked) {
			setChecked(value);
		}
	}, [ value ]);

	const [ falseValue, trueValue ] = React.useMemo(() => [
		options.length >= 1 ? options[0] : false,
		options.length >= 1 ? options[1] : true
	], [ options ]);

	const onToggleChange = (e) => {
		const checkedValue = !checked;
		setChecked(checkedValue);

		// Hack to treat checkbox as text.
		const currentValue = (
			JSON.parse(checkedValue) ? trueValue : falseValue
		);

		e.target.value = currentValue;

		onChange(e);
	};

	return (
		<SwitchToggleWrapper className="row form-check form-switch mt-3">
			<span className="col-4 col-sm-3 text-end">
				<input 
					className="form-check-input"
					onChange={onToggleChange} 
					defaultChecked={checked} 
					disabled={disabled}
					checked={checked}
					type="checkbox" 
					name={name}
				/>
			</span>
		</SwitchToggleWrapper>
	);
};

export default SwitchToggle;

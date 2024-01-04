import React from 'react';

import { SwitchWrapper, SwitchSlider } from './SwitchToggle.styled';

const SwitchToggle = ({
	onChange, 
	name = '', 
	options = [],
	value = false, 
	disabled = false, 
}) => {
	const [ isChecked, setIsChecked ] = React.useState(false);

	React.useEffect(() => {
		if (value !== isChecked) {
			setIsChecked(value);
		}
	}, [ value ]);

	const [ falseValue, trueValue ] = React.useMemo(() => [
		options.length >= 1 ? options[0] : false,
		options.length >= 2 ? options[1] : true
	], [ options ]);

	const toggleSwitch = () => {
		if (disabled) return

		const checkedValue = !isChecked;

		// Hack to treat checkbox as text.
		const currentValue = (
			JSON.parse(checkedValue) ? trueValue : falseValue
		);

		setIsChecked(checkedValue);

		if (onChange) {
			onChange({ target: { name, value: currentValue } });
		}
	}

	return (
		<SwitchWrapper isChecked={isChecked} onClick={toggleSwitch}>
			<SwitchSlider 
				isChecked={isChecked} 
			/>
		</SwitchWrapper>
	);
};

export default SwitchToggle;

import React from 'react';

import { setButtonToggleClassName } from './ButtonToggle.controller';

const ButtonToggle = ({
	ariaLabel = '',
	primaryText = '',
	secondaryText = '',
	hasPrimary = () => null,
}) => {

	const [ isPrimary, setIsPrimary ] = React.useState(true);

	const handleButtonClick = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const newVal = !isPrimary;

		setIsPrimary(newVal);
		hasPrimary(newVal);
	};

	return (
		<div className="btn-group" role="group" aria-label={ariaLabel}>
			<button 
				type="button" onClick={handleButtonClick}
				className={setButtonToggleClassName(isPrimary)}
			>
				{isPrimary ? primaryText : secondaryText}
			</button>
		</div>
	);
};

export default ButtonToggle; 

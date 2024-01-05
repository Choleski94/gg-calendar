export const setDropwdownClassName = (isActive = false) => [
	'ts-dropdown',
	(isActive ? 'd-block' : 'd-none')
].join(' ');

export const setDropwdownItemClassName = (activeItem = '', currentItem = '') => [
	'option',
	'text-nowrap',
	(activeItem === currentItem ? 'active selected' : ''),
].join(' ');

export const getOptionLabelByValue = (options = [], currentValue = '') => {
	const [ currentOption ] = options.filter(({ value }) => value === currentValue);
	return currentOption?.label;
};


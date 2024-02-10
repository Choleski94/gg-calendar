export const setCategoryCaret = (isActive = false) => ([
	'sbch-caret',
	(isActive ? '' : 'sbch-caret--open'),
].join(' ').trim());

export const setCategoryOptionBtnStyle = (color = '') => ({
	backgroundColor: color,
	border: `2px solid ${color}`,
});

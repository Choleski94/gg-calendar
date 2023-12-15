export const setNextBtnclassName = (isActive) => (
	isActive ? 'btn btn-primary' : 'btn btn-white'
);

export const setStepItemClassName = (activeIdx = null, currentIdx = null) => [
	'step-item',
	(activeIdx === currentIdx ? ' active focus' : ''),
].join(' ');

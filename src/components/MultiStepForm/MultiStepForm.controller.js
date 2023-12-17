export const setNextBtnclassName = (isActive, maxStep) => (
	isActive ? 'btn btn-primary' : 'btn btn-white'
);

export const setStepItemClassName = (activeIdx = null, currentIdx = null) => [
	'step-item',
	(activeIdx === currentIdx ? ' active focus' : ''),
].join(' ');

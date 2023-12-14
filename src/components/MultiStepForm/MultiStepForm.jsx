import React from 'react';

const setStepItemClassName = (activeIdx = null, currentIdx = null) => [
	'step-item',
	(activeIdx === currentIdx ? ' active focus' : ''),
].join(' ');

const MultiStepForm = ({ id = '', options = [] }) => {
	const [ errors, setErrors ] = React.useState({});
	const [ activeStep, setActiveStep ] = React.useState(0);
	const [ validStep, setValidStep ] = React.useState(null);

	React.useEffect(() => setValidStep(
		new Array(options.length - 1).fill(false)
	), [ options ]);

	const maxOptions = React.useMemo(() => options.length - 1, [ options ]);

	const onProgressClick = (e, currentIdx) => {
		e.preventDefault();
		if (currentIdx != activeStep && validStep[currentIdx]) {
			setActiveStep(currentIdx);
		}
	};

	const onPrevClick = (e) => {
		e.preventDefault();
		if (activeStep > 0) {
			setActiveStep(activeStep - 1);
		}
	};

	const onNextClick = (e) => {
		e.preventDefault();
		if (activeStep !== maxOptions && validStep[activeStep]) {
			setActiveStep(activeStep + 1);
		}
	};

	const onFormSubmit = (idx = 0) => {
		console.log('Success....', idx);
	}
				
	const renderPrev = () => (activeStep !== 0 ? (
		<button
			type="button" onClick={onPrevClick}
			className="btn btn-ghost-secondary me-2"
		>
			<i className="bi-chevron-left" />
			&nbsp;
			Previous step
		</button>

	) : null);

	const renderNext = () => (
		<div className="ms-auto">
			<button
				type="button" 
				onClick={onNextClick}
				className="btn btn-primary"
			>
				Next
				&nbsp;
				<i className="bi-chevron-right" />
			</button>
		</div>
	);

	const renderOptions = options.map(({ Component }, currentIdx) => (
		(activeStep == currentIdx) ? (
			<Component 
				data={{}}
				withoutSubmit
				prevBtn={renderPrev}
				nextBtn={renderNext}
				onSuccess={() => onFormSubmit(currentIdx)}
			/>
		) : null
	));

	return (
		<form className="js-step-form">
			<ul id={id + '-progress'} className="js-step-progress step step-sm step-icon-sm step-inline step-item-between mb-3 mb-sm-7">
				{options.map(({ title }, currentIdx) => (
					<li key={title} className={setStepItemClassName(activeStep, currentIdx)}>
						<a className="step-content-wrapper" onClick={(e) => onProgressClick(e, currentIdx)}>
							<span className="step-icon step-icon-soft-dark">
								{currentIdx + 1}
							</span>
							<div className="step-content">
								<span className="step-title">
									{title}
								</span>
							</div>
						</a>
					</li>
				))}
			</ul>
			<div>
				{renderOptions}
			</div>
		</form>
	);
}

export default MultiStepForm;


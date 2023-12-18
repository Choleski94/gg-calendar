import React from 'react';

import { hasObjectKey } from '@utils';
import { setNextBtnclassName, setStepItemClassName } from './MultiStepForm.controller';

const setComponentData = (defaultData = {}, data = {}) => ({ ...defaultData, ...data });

const MultiStepForm = ({
	id = '', 
	options = [], 
	initialData = [], 
	textNext = 'Next', 
	onSuccess = () => null,
	textLastStep = 'Complete',
	textPrev = 'Previous step', 
	onOptionChange = () => null, 
}) => {
	const [ data, setData ] = React.useState([]);
	const [ errors, setErrors ] = React.useState({});
	const [ validStep, setValidStep ] = React.useState([]);
	const [ activeStep, setActiveStep ] = React.useState(0);
	const [ defaultData, setDefaultData ] = React.useState([]);

	React.useEffect(() => {
		setDefaultData(initialData);
	}, []);

	React.useEffect(() => {
		setDefaultData([ ...initialData ]);
	}, [ initialData ]);

	const totalOption = React.useMemo(() => {
		let res = 0;

		const optionQty = (options || []).length;

		if (optionQty) {
			res = optionQty - 1;
		}

		return res;
	}, [ options ]);

	React.useEffect(() => {
		setData(new Array(totalOption).fill({}));
		setValidStep(new Array(totalOption).fill(false));
	}, [ totalOption ]);

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

		if (!validStep[activeStep]) return;

		if (activeStep !== totalOption) {
			setActiveStep(activeStep + 1);
		}

		const resStatus = onOptionChange(activeStep, data[activeStep]);

		if (activeStep === totalOption) return onSuccess();
	};

	const onSetData = (payload, formIdx) => {
		const hasValidPayload = hasObjectKey(payload || {});

		if (hasValidPayload) {
			const cloneData = [ ...data ];
			cloneData[formIdx] = { ...payload };

			setData(cloneData);

			const cloneValidStep = [ ...validStep ];
			cloneValidStep[formIdx] = true;

			setValidStep(cloneValidStep);
		} else {
			const cloneData = [ ...data ];
			cloneData[formIdx] = {};

			setData(cloneData);

			const cloneValidStep = [ ...validStep ];
			cloneValidStep[formIdx] = false;

			setValidStep(cloneValidStep);
		}
	}

	return (
		<form className="js-step-form">
			<ul id="on-boarding" className="js-step-progress step step-sm step-icon-sm step-inline step-item-between mb-3 mb-sm-7">
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
				{options.map(({ id, Component }, currentIdx) => (
					(activeStep == currentIdx) ? (
						<Component
							key={id} 
							setData={(payload) => onSetData(payload, activeStep)}
							data={setComponentData(defaultData[currentIdx], data[currentIdx])}
						/>
					) : null
				))}
			</div>
			<div className="d-flex align-items-center">
				{(activeStep !== 0 ? (
					<button
						type="button" onClick={onPrevClick}
						className="btn btn-ghost-secondary me-2"
					>
						<i className="bi-chevron-left" />
						&nbsp;
						{textPrev}
					</button>
				) : null)}
				<div className="ms-auto">
					<button
						type="button"
						onClick={onNextClick}
						className={setNextBtnclassName(validStep[activeStep], totalOption)}
					>
						{(activeStep < totalOption) ? (
							textNext
						) : (
							textLastStep
						)}
						&nbsp;
						<i className="bi-chevron-right" />
					</button>
				</div>
			</div>
		</form>
	);
}

export default MultiStepForm;

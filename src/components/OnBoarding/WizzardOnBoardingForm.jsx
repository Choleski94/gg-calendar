import React from 'react';

import { Forms } from '@components';

const options = [
	{
		title: (
			<span className="h4">
				Personal Information
			</span>
		),
		Component: Forms.Contact,
	},
	{
		title: (
			<span className="h4">
				Business Information
			</span>
		),
		Component: Forms.Organization,
	},
	{
		title: (
			<span className="h4">
				Invite People
			</span>
		),
		Component: () => 'InvitePeople',
	},
];

const SUPPORTED_SECTIONS = {
	PERSONAL: 'PERSONAL',
	BUSINESS: 'BUSINESS',
	INVITE: 'INVITE',
};

const SECTION_INDICES = Object.keys(SUPPORTED_SECTIONS);

const setStepItemClassName = (activeIdx = null, currentIdx = null) => [
	'step-item',
	(activeIdx === currentIdx ? ' active focus' : ''),
].join(' ');

const WizzardOnBoardingForm = () => {
	const [ errors, setErrors ] = React.useState({});
	const [ data, setData ] = React.useState([{}, {}, {}]);
	const [ validStep, setValidStep ] = React.useState([]);
	const [ activeStep, setActiveStep ] = React.useState(0);

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

	const onSetData = (payload, formIdx) => {
		const cloneData = [ ...data ];
		cloneData[formIdx] = payload;

		setData(cloneData);
		
		const cloneValidStep = [ ...validStep ];
		cloneValidStep[formIdx] = true;

		setValidStep(cloneValidStep);
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
				{options.map(({ Component }, currentIdx) => (
					(activeStep == currentIdx) ? (
						<Component 
							withoutSubmit
							data={data[currentIdx]}
							onSuccess={() => onFormSubmit(currentIdx)}
							setData={(payload) => onSetData(payload, activeStep)}
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
						Previous step
					</button>
				) : null)}
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
			</div>
		</form>
	);
}

export default WizzardOnBoardingForm;



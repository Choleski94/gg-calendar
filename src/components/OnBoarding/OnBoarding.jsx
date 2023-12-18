import React from 'react';
import { useSelector } from 'react-redux';

import { hasObjectKey } from '@utils';
import { selectUser } from '@store/selectors/user';
import { Modal, Forms, MultiStepForm, Illustrations } from '@components';

import { setModalSize, setModalId } from './OnBoarding.controller';

const FORM_SECTIONS = {
	PERSONAL: 'PERSONAL', 
	BUSINESS: 'BUSINESS', 
	INVITE: 'INVITE'
};

const FORM_SECTION_KEYS = Object.keys(FORM_SECTIONS);

const options = [
	{
		key: FORM_SECTIONS.PERSONAL,
		title: (
			<span className="h4">
				Personal Information
			</span>
		),
		Component: ({ ...rest }) => (
			<Forms.Contact
				withPhoto
				withoutSubmit
				{...rest}
			/>
		),
	},
	{
		key: FORM_SECTIONS.BUSINESS,
		title: (
			<span className="h4">
				Business Information
			</span>
		),
		Component: ({ ...rest }) => (
			<Forms.Organization 
				withPhoto
				withoutSubmit
				{...rest}
			/>
		),
	},
	{
		key: FORM_SECTIONS.INVITE,
		title: (
			<span className="h4">
				Invite People
			</span>
		),
		Component: ({ ...rest }) => (
			<Forms.InvitePeople
				{...rest}
			/>
		),
	},
];

const formHandlers = {
	[FORM_SECTIONS.PERSONAL]: (payload = {}) => {
		// TODO:
		console.log('update user info', payload);
		return true;
	},
	[FORM_SECTIONS.BUSINESS]: (payload = {}) => {
		// TODO:
		console.log('update business info', payload);
		return true;
	},
	[FORM_SECTIONS.INVITE]: (payload = {}) => {
		// TODO:
		console.log('update invite info', payload);
		return true;
	},
}

const OnBoarding = () => {
	const [ optionsData, setOptionsData ] = React.useState([]);
	const [ isCompleted, setIsCompleted ] = React.useState(false);
	const [ showOnBoarding, setShowOnBoarding ] = React.useState(false);
	const [ startOnboarding, setStartOnboarding ] = React.useState(false);

	const user = useSelector(selectUser);

	const { id: userId, isOnboarded } = user;

	React.useEffect(() => {
		setShowOnBoarding(!isOnboarded)
	}, [ isOnboarded ]);

	// Populate option data.
	React.useEffect(() => {
		setOptionsData([ user, {}, {} ]);
	}, []);

	const updateOptionData = (stepIdx, payload) => {
		// Clone option data state.
		const cloneOptionData = [ ...optionsData ];
		cloneOptionData[stepIdx] = payload;

		// Check if we want to share location.
		if (stepIdx == 0 && !hasObjectKey(cloneOptionData[1])) {
			cloneOptionData[1].address = payload.address;
			cloneOptionData[1].country = payload.country;
			cloneOptionData[1].buzzer = payload.buzzer;
			cloneOptionData[1].state = payload.state;
			cloneOptionData[1].unit = payload.unit;
			cloneOptionData[1].city = payload.city;
			cloneOptionData[1].zip = payload.zip;
		}

		// Update options data.
		setOptionsData(cloneOptionData);
	};

	const toggleShowOnBoarding = () => {
		if (isCompleted) {
			setShowOnBoarding(!showOnBoarding);
		}
	};

	const onSuccess = () => {
		setIsCompleted(true);
	}

	const onStartOnBoarding = () => {
		setStartOnboarding(true);
	}

	const onOptionChange = (stepIndex, payload) => {
		updateOptionData(stepIndex, payload);

		const currentFormSection = FORM_SECTION_KEYS[stepIndex];
		const currentFormApiFn = formHandlers[currentFormSection];

		return currentFormApiFn(payload);
	}

	return (
		showOnBoarding ? (
			<Modal key={setModalId(startOnboarding, isCompleted)} id={setModalId(startOnboarding, isCompleted)} centered size={setModalSize(startOnboarding, isCompleted)} onCloseRequest={toggleShowOnBoarding}>
				{startOnboarding ? (
					(!isCompleted) ? (
						<MultiStepForm 
							options={options}
							onSuccess={onSuccess}
							id="createOrganization"
							initialData={optionsData}
							textLastStep="Send invite(s)"
							onOptionChange={onOptionChange}
						/>
					) : (
						<>
							<div className="text-center">
								<div className="w-75 w-sm-50 mx-auto mb-4">
									<Illustrations.HiFive />
								</div>
								<h4 className="h1">
									Welcome to Tigado
								</h4>
								<p className="mb-5">
									Congratulations! You've successfully onboarded
								</p>
							</div>
							<div className="text-center mt-3 d-block">
								<button type="button" className="text-center btn btn-outline-primary" onClick={onStartOnBoarding}>
									Get Started
								</button>
							</div>
						</>
					)
				) : (
					<>
						<div className="text-center">
							<div className="w-75 w-sm-50 mx-auto mb-4">
								<Illustrations.Collaboration />
							</div>
							<h4 className="h1">
								Welcome to Tigado
							</h4>
							<p className="mb-5">
								We're happy to see you in our community.
							</p>
						</div>
						<div className="text-center mt-3 d-block">
							<button type="button" className="text-center btn btn-outline-primary" onClick={onStartOnBoarding}>
								Get Started
							</button>
						</div>
					</>
				)}
			</Modal>
		) : null
	);
};

export default OnBoarding;

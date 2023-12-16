import React from 'react';
import { useSelector } from 'react-redux';

import { hasObjectKey } from '@utils';
import { selectUser } from '@store/selectors/user';
import { Modal, Forms, MultiStepForm } from '@components';

import { setModalSize, setModalId } from './OnBoarding.controller';

const options = [
	{
		key: 'personal-info',
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
		key: 'business-info',
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
		key: 'team-info',
		title: (
			<span className="h4">
				Invite People
			</span>
		),
		Component: () => 'InvitePeople',
	},
];

const FORM_SECTIONS = {
	PERSONAL: 'PERSONAL', 
	BUSINESS: 'BUSINESS', 
	INVITE: 'INVITE'
};

const FORM_SECTION_KEYS = Object.keys(FORM_SECTIONS);

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
	const [ showOnBoarding, setShowOnBoarding ] = React.useState(false);
	const [ startOnboarding, setStartOnboarding ] = React.useState(false);

	const user = useSelector(selectUser);

	const { id: userId, isOnboarded } = user;

	React.useEffect(() => {
		setShowOnBoarding(!isOnboarded)
	}, [ isOnboarded ]);

	// Populate option data.
	React.useEffect(() => {
		console.log('Set user data....', user);
		setOptionsData([ user, {}, {} ]);
	}, []);

	const updateOptionData = (stepIdx, payload) => {
		// Clone option data state.
		const cloneOptionData = [ ...optionsData ];
		cloneOptionData[stepIdx] = payload;

		// Check if we want to share location.
		if (stepIdx == 0 && !hasObjectKey(cloneOptionData[1])) {
			console.log('----------------->>>', payload);

			cloneOptionData[1].country = payload.country;
			cloneOptionData[1].state = payload.state;
			cloneOptionData[1].city = payload.city;
		}

		// Update options data.
		setOptionsData(cloneOptionData);
	};

	const toggleShowOnBoarding = () => {
		// TODO: Conditionally enable if user comple onboarding process.
		// setShowOnBoarding(!showOnBoarding);
	};

	const onStartOnBoarding = () => {
		setStartOnboarding(true);
	}

	const onOptionChange = (stepIndex, payload) => {
		updateOptionData(stepIndex, payload);

		const currentFormSection = SECTION_KEYS[stepIdx];
		const currentFormApiFn = formHandlers[currentFormSection];

		return currentFormApiFn(payload);
	}

	return (
		showOnBoarding ? (
			<Modal key={setModalId(startOnboarding)} id={setModalId(startOnboarding)} centered size={setModalSize(startOnboarding)} onCloseRequest={toggleShowOnBoarding}>
				{startOnboarding ? (
					<MultiStepForm 
						options={options}
						id="createOrganization"
						initialData={optionsData}
						onOptionChange={onOptionChange}
					/>
				) : (
					<>
						<div className="text-center">
							<div className="w-75 w-sm-50 mx-auto mb-4">
								<img
									className="img-fluid"
									alt="Image Description"
									data-hs-theme-appearance="default"
									src="/assets/svg/illustrations/oc-collaboration.svg"
								/>
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

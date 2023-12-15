import React from 'react';
import { useSelector } from 'react-redux';

import { Modal, Forms } from '@components';
import { selectUser } from '@store/selectors/user';
import WizzardOnBoardingForm from './WizzardOnBoardingForm';

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

const setModalSize = (isOnboarding = false) => isOnboarding ? 'xl' : 'md';

const setModalId = (isOnboarding = false) => isOnboarding ? 'onboarding' : 'onboarding-get-started';
 
const OnBoarding = () => {
	const [ showOnBoarding, setShowOnBoarding ] = React.useState(false);
	const [ initOnboarding, setInitOnboarding ] = React.useState(false);

	const userData = useSelector(selectUser);

	const { id: userId, isOnboarded } = userData;

	React.useEffect(() => {
		setShowOnBoarding(!isOnboarded)
	}, [ isOnboarded ]);

	const toggleShowOnBoarding = () => {
		// TODO: Conditionally enable if user comple onboarding process.
		// setShowOnBoarding(!showOnBoarding);
	};

	const onStartOnBoarding = () => setInitOnboarding(true);

	return (
		showOnBoarding ? (
			<Modal id={setModalId(initOnboarding)} centered size={setModalSize(initOnboarding)} onCloseRequest={toggleShowOnBoarding}>
				{initOnboarding ? (
					<WizzardOnBoardingForm />
					// <MultiStepForm 
					// 	defaultState={{}}
					// 	id="createOrganization"
					// 	options={multiStepOptions}
					// />
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

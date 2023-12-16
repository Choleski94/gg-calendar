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

const abedData = {
	address:'357 6e Av',
	birthday:'2023-12-08',
	buzzer:'438',
	city:'Laval',
	color:'',
	country:'CA',
	department:'',
	email:'admin@demo.com',
	firstName:'Choleski',
	gender:'MALE',
	languages:['en-US'],
	lastName:'Louis',
	phone:'4384090206',
	photo:'data:image/jpeg;base64,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',
	position:'',
	state:'QC',
	unit:'8',
	zip:'H7N4L7',
};
 
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

	// // If we have county, state, city selection in user personal section.
	// // initialize business country, state, city selection.
	// React.useEffect(() => {
	// 	console.log('----------------->>>', optionsData);

	// 	const [ userData, businessData ] = [ ...optionsData ];

	// 	const hasUserData = hasObjectKey(userData);
	// 	const hasBusinessData = hasObjectKey(businessData);

	// 	if (hasUserData && !hasBusinessData) {
	// 		businessData.country = userData.country;
	// 		businessData.state = userData.state;
	// 		businessData.city = userData.city;

	// 		setOptionsData([ userData, businessData, {} ]);
	// 	}
	// }, [ optionsData ]);

	const toggleShowOnBoarding = () => {
		// TODO: Conditionally enable if user comple onboarding process.
		// setShowOnBoarding(!showOnBoarding);
	};

	const onStartOnBoarding = () => {
		setStartOnboarding(true);
	}

	const onOptionChange = (options) => {
		setOptionsData(options);
	}

	return (
		showOnBoarding ? (
			<Modal key={setModalId(startOnboarding)} id={setModalId(startOnboarding)} centered size={setModalSize(startOnboarding)} onCloseRequest={toggleShowOnBoarding}>
				{startOnboarding ? (
					<MultiStepForm 
						options={options}
						id="createOrganization"
						defaultData={optionsData}
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

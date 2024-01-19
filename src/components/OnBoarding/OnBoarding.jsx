import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ENTITIES } from '@constants';
import { hasObjectKey } from '@utils';
import { request } from '@utils/request';
import { fetchUser } from '@store/actions/user';
import { selectWorkspace } from '@store/selectors/workspace';
import { selectUser, isAuthenticated } from '@store/selectors/user';
import { Modal, Forms, MultiStepForm, Illustrations } from '@components';
import { fetchWorkspace, workspaceFetched } from '@store/actions/workspace';

import { setModalSize, setModalId } from './OnBoarding.controller';

const FORM_SECTIONS = {
	PERSONAL: 'PERSONAL', 
	BUSINESS: 'BUSINESS', 
	INVITE: 'INVITE'
};

const FORM_SECTION_KEYS = Object.keys(FORM_SECTIONS);

const options = [
	{
		validate: true,
		id: FORM_SECTIONS.PERSONAL,
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
		validate: true,
		id: FORM_SECTIONS.BUSINESS,
		title: (
			<span className="h4">
				Business Information
			</span>
		),
		Component: ({ ...rest }) => (
			<Forms.Workforce
				withPhoto
				withoutSubmit
				{...rest}
			/>
		),
	},
	{
		validate: false,
		id: FORM_SECTIONS.INVITE,
		title: (
			<span className="h4">
				Invite Users
			</span>
		),
		Component: ({ data, setData, ...rest }) => (
			<Forms.InviteUser
				hideFooter data={data?.invites || []}
				setData={(payload) => setData({ invites: payload })}
				{...rest}
			/>
		),
	},
];

const OnBoarding = () => {
	const [ optionsDa ] = React.useState(false);
	const [ optionsData, setOptionsData ] = React.useState([]);
	const [ isCompleted, setIsCompleted ] = React.useState(false);
	const [ startOnboarding, setStartOnboarding ] = React.useState(false);

	const dispatch = useDispatch();

	const user = useSelector(selectUser);
	const isUserAuth = useSelector(isAuthenticated);

	const { id: userId, isOnboarded } = user;

	const formHandlers = {
		[FORM_SECTIONS.PERSONAL]: (userId, jsonData = {}) => (
			request.patch({
				entity: 'user/update/' + userId, jsonData,
			})
		),
		[FORM_SECTIONS.BUSINESS]: (userId, jsonData = {}) => {
			if (jsonData?.id && jsonData?.id.length) {
				request.patch({
					entity: 'workspace/update/' + jsonData?.id, jsonData,
				}).then(({ result }) => {
					// console.log('Workforce created');
				});
			} else {
				return request.create({
					entity: ENTITIES.WORKFORCE,
					jsonData,
				}).then(({ result }) => {
					dispatch(workspaceFetched(result));
				});
			}
		},
		[FORM_SECTIONS.INVITE]: (userId, payload = {}) => {
			request.create({
				entity: ENTITIES.INVITE,
				jsonData: payload?.invites
			}).then(({ result }) => {
				// console.log('Invites sent');
			});
		},
	}

	React.useEffect(() => {
		dispatch(fetchUser(userId));
		// dispatch(fetchWorkspace());
	}, []);

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
			// console.log('---------->>>');
		}
	};

	const onSuccess = () => {
		const jsonData = { isOnboarded: true };

		request.patch({
			entity: 'user/update/' + userId, jsonData,
		}).then(() => {
			setIsCompleted(true);
		});
	}

	const onStartOnBoarding = () => setStartOnboarding(true);

	const onOptionChange = (stepIndex, payload) => {
		updateOptionData(stepIndex, payload);

		const currentFormSection = FORM_SECTION_KEYS[stepIndex];
		const currentFormApiFn = formHandlers[currentFormSection];

		return currentFormApiFn(userId, payload);
	}

	if (isOnboarded && !isUserAuth || isCompleted && !isUserAuth) return null;

	return (
		<Modal 
			centered 
			hideClose={!isCompleted}
			onCloseRequest={toggleShowOnBoarding}
			id={setModalId(startOnboarding, isCompleted)} 
			key={setModalId(startOnboarding, isCompleted)} 
			size={setModalSize(startOnboarding, isCompleted)} 
		>
			{startOnboarding ? (
				!isCompleted ? (
					<MultiStepForm 
						options={options}
						onSuccess={onSuccess}
						id="createWorkspace"
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
							<button type="button" className="text-center btn btn-outline-primary" onClick={toggleShowOnBoarding}>
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
	);
};

export default OnBoarding;

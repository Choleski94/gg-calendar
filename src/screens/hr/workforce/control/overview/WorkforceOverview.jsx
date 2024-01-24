import React from 'react';

import { request } from '@utils/request';
import { ENTITY_USER } from '@constants/user';
import { ENTITY_ROLE } from '@constants/access';
import formatMessage from '@utils/formatMessage';
import { ENTITY_INVITE } from '@constants/invites';
import { NavPill, Card, Counter } from '@components';

import Invites from './invites';
import Members from './members';

const SUPPORTED_SCREEN_SECTIONS = {
	INVITES: 'INVITES',
	MEMBERS: 'MEMBERS',
};

const NAV_TAB_OPTIONS = [           
	{
		key: SUPPORTED_SCREEN_SECTIONS.MEMBERS,
		value: 'Members',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.INVITES,
		value: 'Invites',
	},
];

const WorkforceOverview = () => {
	const [ loading, setLoading ] = React.useState([]);
	const [ roleObj, setRoleObj ] = React.useState({});
	const [ memberOptions, setMemberOptions ] = React.useState([]);
	const [ inviteOptions, setInviteOptions ] = React.useState([]);
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.MEMBERS);

	const fetchWorkforce = async () => {
		setLoading(true);

		request.list({ entity: ENTITY_USER, options }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setMemberOptions(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	};

	const fetchRoles = () => {
		setLoading(true);

		request.list({ entity: ENTITY_ROLE }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setRoleObj(
					data?.result?.reduce((agg, payload) => Object.assign(agg, {
						[payload?._id]: payload?.name,
					}), {})
				);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	const fetchInvites = async () => {
		setLoading(true);

		request.list({ entity: ENTITY_INVITE }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setInviteOptions(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	};

	React.useEffect(() => {
		Promise.all([
			fetchRoles(),
			fetchInvites(),
			fetchWorkforce()
		]);
	}, []);

	const metrics = React.useMemo(() => {
		// Evaluate total members.
		const totalMember = memberOptions?.length;
		const totalInvite = inviteOptions?.length;
		const totalRole = Object.keys(totalInvite || {}).length;
		const totalActiveMember = (memberOptions.filter(({ enabled }) => enabled) || []).length;
		const totalInactiveMember = totalMember - totalActiveMember;

		return {
			totalRole,
			totalMember,
			totalInvite,
			totalActiveMember,
			totalInactiveMember,
		}
	}, [ memberOptions, inviteOptions, roleObj ]);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<div className="row">
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total members
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={metrics?.totalMember} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active members
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={metrics?.totalActiveMember} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Inactive members
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={metrics?.totalInactiveMember} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Pending invites
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={metrics.totalInvite} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>

			<NavPill
				options={NAV_TAB_OPTIONS}
				defaultValue={activeSection}
				handleTabClick={setActiveSection}
			/>

			{activeSection === SUPPORTED_SCREEN_SECTIONS.MEMBERS && (
				<Members 
					fetchWorkforce={fetchWorkforce}
				/>
			)}

			{activeSection === SUPPORTED_SCREEN_SECTIONS.INVITES && (
				<Invites 
					roleObj={roleObj}
					fetchInvites={fetchInvites}
					inviteOptions={inviteOptions}
				/>
			)}
		</div>
	);
};

export default WorkforceOverview;

import _ from 'lodash';
import React from 'react';

import { hasObjectKey } from '@utils';
import { request } from '@utils/request';
import { ENTITY_ROLE } from '@constants/access';
import { validateEmail } from '@utils/validate';
import formatMessage from '@utils/formatMessage';
import { Card, InputDropdown, Illustrations } from '@components';

const InviteUser = ({ data = [], setData = () => null }) => {
	const [ query, setQuery ] = React.useState('');
	const [ errors, setErrors ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ options, setOptions ] = React.useState([]);

	const fetchRoles = () => {
		setLoading(true);

		request.list({ entity: ENTITY_ROLE }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				console.log('ROLE:::', data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	React.useEffect(() => {
		if (!hasObjectKey(data)) return

		setPayload(data);
	}, []);

	const onAddInvite = (payload) => {
		const cloneOptions = [ ...options ];

		const newOption = ({
			email: payload?.query,
			roleId: payload?.option,
			id: _.uniqueId(), 
		});

		cloneOptions.push(newOption);

		setOptions(cloneOptions);
	}

	const onRemoveItem = (e, itemId) => {
		e.preventDefault();
		setOptions([
			...options.filter((item) => (
				item.id !== itemId
			))
		]);
	}

	const hasOptions = React.useMemo(() => (
		Boolean((options || []).length)
	), [ options ]);

	const roleOptions = [
		{ label: 'Guest', value: '65915f25572278f5166663ea' },
		{ label: 'Admin', value: '65915f26572278f5166663ed' },
	];

	return (
		<>
			<div className="input-group mb-4 mb-sm-0">
				<InputDropdown
					type="text"
					name="query"
					// value={query}
					// onChange={onChange}
					options={roleOptions}
					handleSubmit={onAddInvite}
					placeholder="Invite people by email"
					defaultOption="65915f25572278f5166663ea"
				/>
			</div>
			<Card withoutBorder withoutHover centered={!hasOptions}>
				<Card.Body fullHeight noHorizontalPassing>
					{options && options.length ? (
						<ul className="list-unstyled list-py-2">
							{options.map(({ id, email }) => (
								<li key={id}>
									<div className="d-flex">
										<div className="flex-shrink-0">
											<span className="icon icon-soft-dark icon-sm icon-circle">
												<i className="bi-people-fill" />
											</span>
										</div>
										<div className="flex-grow-1 ms-3">
											<div className="row align-items-center">
												<div className="col-sm">
													<h5 className="text-body mb-0">
														{email}
													</h5>
												</div>
												<div className="col-sm-auto">
													<button className="btn btn-outline-danger btn-xs" onClick={(e) => onRemoveItem(e, id)}>
														<i className="bi bi-trash" />
														&nbsp;
														Remove
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					) : (
						<>
							<Illustrations.Collaboration />
							<Card.Text>
								Invite team members to join your workforce
							</Card.Text>
						</>
					)}
				</Card.Body>
			</Card>
		</>
	);
};

export default InviteUser;

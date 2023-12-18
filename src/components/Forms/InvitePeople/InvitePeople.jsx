import _ from 'lodash';
import React from 'react';

import { hasObjectKey } from '@utils';
import { validateEmail } from '@utils/validate';
import formatMessage from '@utils/formatMessage';
import { Card, Input, Illustrations } from '@components';

const InvitePeople = ({ data = [], setData = () => null }) => {
	const [ query, setQuery ] = React.useState('');
	const [ errors, setErrors ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ payload, setPayload ] = React.useState({ options: [] });

	React.useEffect(() => {
		if (!hasObjectKey(data)) return

		setPayload(data);
	}, []);

	React.useEffect(() => {
		if (payload?.options && payload?.options.length) {
			setData(payload);
		} else {
			setData({ options: [] });
		}
	}, [ payload ]);

	const onChange = (e) => setQuery(e.target.value);

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
		email: formatMessage('form.validation.email.error.text'),
	};

	const validate = (payload = {}) => {
		const errs = {};

		// Check for empty email.
		if (!payload?.query) {
			errs.query = errorMessages.empty;
		}

		// Verify query is a valid email.
		if (payload.query && !validateEmail(payload.query)) {
			errs.query = errorMessages.email;
		}

		return errs;
	};

	const onAddItem = (e) => {
		e.preventDefault();

		// Check if we have error(s).
		const errs = validate({ query });

		setErrors(errs);

		if (hasObjectKey(errs)) return null;

		const cloneOptions = [ ...payload.options ];

		const newOption = ({
			value: query,
			id: _.uniqueId(), 
		});

		cloneOptions.push(newOption);

		setPayload({ options: cloneOptions });

		setQuery(''); // Clear query.
	}

	const onRemoveItem = (e, itemId) => {
		e.preventDefault();
		setPayload({
			options: [
				...payload.options.filter((item) => (
					item.id !== itemId
				))
			]
		});
	}

	const hasOptions = React.useMemo(() => (
		Boolean((payload.options || []).length)
	), [ payload ]);

	return (
		<>
			<div className="mb-4">
				<div className="input-group mb-4 mb-sm-0">
					<Input
						id="query"
						type="text"
						name="query"
						value={query}
						onChange={onChange}
						placeholder="Invite people by email"
						className="form-control form-control-lg"
					/>
					<div className="input-group-append">
						<a className="btn btn-primary d-sm-inline-block" onClick={onAddItem}>
							<i className="bi bi-plus" />
							Invite
						</a>
					</div>
				</div>
				{errors?.query && (
					<span className="d-block text-danger text-small">
						{errors?.query}
					</span>
				)}
			</div>
			<Card withoutBorder withoutHover centered={!hasOptions}>
				<Card.Body fullHeight noHorizontalPassing>
					{payload?.options && payload?.options.length ? (
						<ul className="list-unstyled list-py-2">
							{payload?.options.map(({ id, value }) => (
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
														{value}
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

export default InvitePeople;

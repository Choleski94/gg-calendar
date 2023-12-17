import React from 'react';

import { hasObjectKey } from '@utils';
import { validateEmail } from '@utils/validate';
import formatMessage from '@utils/formatMessage';
import { Card, Input, Illustrations } from '@components';

const InvitePeople = () => {
	const [ query, setQuery ] = React.useState('');
	const [ errors, setErrors ] = React.useState({});
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);

	const onChange = (e) => {
		setQuery(e.target.value);
	};

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
		email: formatMessage('form.validation.email.error.text'),
	};

	const validate = (payload = {}) => {
		const errs = {};

		// Check for emptyquery
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

		console.log('Add item');

		const cloneOptions = [ ...options ];
		cloneOptions.push(query);

		setOptions(cloneOptions);

		setQuery(''); // Clear query.
	}

	const onRemoveItem = (e) => {
		e.preventDefault();
		console.log('Remove item');
	}

	console.log('DATA:::', options, query, errors);

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
						className="form-control form-control-lg"
						placeholder="Search by id, name or emails"
					/>
					<div className="input-group-append input-group-append-last-sm-down-none">
						<a className="btn btn-primary d-none d-sm-inline-block" onClick={onAddItem}>
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
			<Card withoutBorder withoutHover centered>
				{options && options.length ? (
					<ul className="list-unstyled list-py-2">
						{options.map((payload) => (
							<li>
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
													{payload}
												</h5>
											</div>
											<div className="col-sm-auto">
												<button className="btn btn-outline-danger btn-xs" onClick={(e) => onRemoveItem(e)}>
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
					<Card.Body fullHeight>
						<Illustrations.Collaboration />
						<Card.Text>
							Add team members to your workforce
						</Card.Text>
					</Card.Body>
				)}
			</Card>
		</>
	);
};

export default InvitePeople;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import formatMessage from '@utils/formatMessage';

const Tutorials = () => {
	const navigate = useNavigate();

	return (
		<>
			<span className="dropdown-header">
				Tutorials
			</span>
			<a className="dropdown-item" href="#">
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<span className="icon icon-soft-dark icon-xs icon-circle">
							<i className="bi-person-lines-fill" />
						</span>
					</div>
					<div className="flex-grow-1 text-truncate ms-2">
						<span>
							How to add a new customer?
						</span>
					</div>
				</div>
			</a>
			<a className="dropdown-item" href="#">
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<span className="icon icon-soft-dark icon-xs icon-circle">
							<i className="bi-cash-coin" />
						</span>
					</div>
					<div className="flex-grow-1 text-truncate ms-2">
						<span>
							How to create an invoice ?
						</span>
					</div>
				</div>
			</a>
		</>
	);
}

export default Tutorials;

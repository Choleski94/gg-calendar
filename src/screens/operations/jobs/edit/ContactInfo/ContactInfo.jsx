import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@components';
import formatMessage from '@utils/formatMessage';

const ContactInfo = ({ id: customerId = '' }) => {
	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);

	const hasData = React.useMemo(() => Boolean(
		Object.keys(data || {}).length
	), [ data ]);

	return (
		<Card>
			<Card.Header>
				<h4 className="card-header-title">
					General Information
				</h4>
				<Link className="btn btn-sm btn-outline-primary" to="/crm/customers/456">
					{hasData ? (
						<>
							<i className="bi-pencil-fill me-1" />
							&nbsp;
							Edit
						</>
					) : (
						<>
							<i className="bi-plus me-1" />
							&nbsp;
							Add customer
						</>
					)}
				</Link>
			</Card.Header>
			<Card.Body>
				<table className="table">
					<tbody>
						<tr>
							<td>Name:</td>
							<td className="table-column-ps-0">
								<Link className="d-flex align-items-center" to="/crm/customers/456">
									<div className="ms-3">
										<span className="d-block h5 text-inherit mb-0">
											Alex Thompson
										</span>
										<span className="d-block fs-5 text-body">
											Tenant
										</span>
									</div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>Parent Account:</td>
							<td className="table-column-ps-0">
								<Link className="d-flex align-items-center" to="/crm/customers/456">
									<div className="ms-3">
										<span className="d-block h5 text-inherit mb-0">
											Jason Richard
											&nbsp;
											<i className="bi-patch-check-fill text-primary" />
										</span>
										<span className="d-block fs-5 text-body">
											Landlord
										</span>
									</div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>Phone(s):</td>
							<td>
								<div>
									<i className="bi bi-phone-fill" />
									&nbsp;
									450-428-5500
									&nbsp;
									<small className="font-italic">
										(Mobile)
									</small>
								</div>
							</td>
						</tr>
						<tr>
							<td>Email(s):</td>
							<td>
								<div>
									j.richard@gmail.com
									&nbsp;
									<small className="font-italic">
										<i className="bi-patch-check-fill text-success" />
									</small>
								</div>
								<div>
									jason.richard@icloud.com
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</Card.Body>
		</Card>
	);
}

export default ContactInfo;

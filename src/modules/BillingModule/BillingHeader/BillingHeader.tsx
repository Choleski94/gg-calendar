import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const BillingHeader = ({ type, number, date, expiredDate }) => {
	return (
		<>
			<header>
				<div className="row align-items-center">
					<div className="col-sm-7 text-center text-sm-start mb-3 mb-sm-0">
						<div className="mb-2">
							<img
								src="https://lh5.googleusercontent.com/-cE18-VSLU2g/AAAAAAAAAAI/AAAAAAAAAAA/1hAAnx_OODQ/s44-p-k-no-ns-nd/photo.jpg"
								className="avatar"
								alt="Logo"
							/>
							<span
								className="h2"
								style={{ paddingLeft: "15px" }}
							>
								Flash Repair Inc.
							</span>
						</div>
					</div>
					<div className="col-sm-5 text-center text-sm-end">
						<h2 className="mb-0">
							{type === 'INVOICE' ? 'Invoice' : 'Estimate'}
						</h2>
					</div>
				</div>
				<hr />
			</header>
			<div className="row justify-content-md-between mb-3">
				<div className="col-md text-md-end">
					{number ? (
						<dl className="row">
							<dt className="col-sm-1 pt-2">
								No:
							</dt>
							<dd className="col-sm-2 pt-2">
								{number}
							</dd>
						</dl>
					) : null}
				</div>
				<div className="col-md text-md-end pb-3">
					{date ? (
						<dl className="row">
							<dt className="col-sm-9 pt-2">
								{type === 'INVOICE' ? 'Invoice' : 'Estimate'}
								&nbsp;
								date:
							</dt>
							<dd className="col-sm-3 pt-2">
								{date}
							</dd>
						</dl>
					) : null}
					{expiredDate ? (
						<dl className="row">
							<dt className="col-sm-9 pt-2">
								Due date:
							</dt>
							<dd className="col-sm-3 pt-2">
								{expiredDate}
							</dd>
						</dl>
					) : null}
				</div>
				{number || date || expiredDate ? (
					<hr />
				) : null}
			</div>
		</>
	);
};

export default BillingHeader;

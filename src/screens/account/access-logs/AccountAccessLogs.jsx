import React from 'react';

import api from '@api';
import { withPrivateRouter } from '@utils/hocs';
import formatMessage from '@utils/formatMessage';
import { Layout, Card, GetSupport } from '@components';

const AccountAccessLogs = () => {
	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-center">
					<div className="col-sm mt-4 mb-2 mb-sm-0">
						<Layout.Title>
							Recent devices
						</Layout.Title>
						<p className="page-header-text">
							Easily way to check for any unusual or suspicious sign-in activity
						</p>
					</div>
					<div className="col-sm-auto">
						<GetSupport />
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				<div className="row justify-content-lg-center">
					<div className="col-lg-9 mt-8">
						<Card>
							<div className="table-responsive">
								<table className="table table-thead-bordered table-nowrap table-align-middle card-table">
									<thead className="thead-light">
										<tr>
											<th>Browser</th>
											<th>Device</th>
											<th>Location</th>
											<th>Most recent activity</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="align-items-center">
												<img
													className="avatar avatar-xss me-2"
													src="/assets/svg/brands/chrome-icon.svg"
													alt="Image Description"
												/>{" "}
												Chrome on Windows
											</td>
											<td>
												<i className="bi-laptop fs-3 me-2" /> Dell XPS 15{" "}
												<span className="badge bg-soft-success text-success ms-1">
													Current
												</span>
											</td>
											<td>London, UK</td>
											<td>Now</td>
										</tr>
										<tr>
											<td className="align-items-center">
												<img
													className="avatar avatar-xss me-2"
													src="/assets/svg/brands/chrome-icon.svg"
													alt="Image Description"
												/>{" "}
												Chrome on Android
											</td>
											<td>
												<i className="bi-phone fs-3 me-2" /> Google Pixel 3a
											</td>
											<td>London, UK</td>
											<td>15, August 2020 15:08</td>
										</tr>
										<tr>
											<td className="align-items-center">
												<img
													className="avatar avatar-xss me-2"
													src="/assets/svg/brands/chrome-icon.svg"
													alt="Image Description"
												/>{" "}
												Chrome on Windows
											</td>
											<td>
												<i className="bi-display fs-3 me-2" /> Microsoft Studio 2
											</td>
											<td>London, UK</td>
											<td>12, August 2020 20:07</td>
										</tr>
									</tbody>
								</table>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default withPrivateRouter(AccountAccessLogs);

import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const SUPPORTED_TEAM_VIEW = {
	GRID: 'GRID',
	LIST: 'LIST',
};

const setActiveViewClassName = (activeView, currentView) => [
	'nav-link',
	(activeView === currentView ? ' active' : '')
].join('');

const Teams = () => {
	const [ activeView, setActiveView ] = React.useState(SUPPORTED_TEAM_VIEW.GRID);

	const handleViewClick = (e, currentView) => {
		e.preventDefault();
		if (currentView !== activeView) {
			setActiveView(currentView);
		}
	};

	return (
		<div className="col-lg-12">
			<div className="row align-items-center mb-5">
				<div className="col">
					<h3 className="mb-0">7 teams</h3>
				</div>
				<div className="col-auto">
					<ul className="nav nav-segment" id="profileTeamsTab" role="tablist">
						<li className="nav-item" role="presentation">
							<a
								id="grid-tab"
								data-bs-toggle="tab"
								href="#grid"
								role="tab"
								aria-controls="grid"
								aria-selected="true"
								title="Column view"
								onClick={(e) => handleViewClick(e, SUPPORTED_TEAM_VIEW.GRID)}
								className={setActiveViewClassName(activeView, SUPPORTED_TEAM_VIEW.GRID)}
							>
								<i className="bi-grid" />
							</a>
						</li>
						<li className="nav-item" role="presentation">
							<a
								className="nav-link"
								id="list-tab"
								data-bs-toggle="tab"
								href="#list"
								role="tab"
								aria-controls="list"
								aria-selected="false"
								title="List view"
								tabIndex={-1}
								onClick={(e) => handleViewClick(e, SUPPORTED_TEAM_VIEW.LIST)}
								className={setActiveViewClassName(activeView, SUPPORTED_TEAM_VIEW.LIST)}
							>
								<i className="bi-view-list" />
							</a>
						</li>
					</ul>
					{/* End Nav */}
				</div>
				{/* End Col */}
			</div>
			{/* End Row */}
			{activeView === SUPPORTED_TEAM_VIEW.GRID && (
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
					<div className="col mb-3 mb-lg-5">
						{/* Card */}
						<div className="card h-100">
							{/* Body */}
							<div className="card-body pb-0">
								<div className="row align-items-center mb-2">
									<div className="col-9">
										<h4 className="mb-1">
											<a href="user-profile-teams.html#">
												#digitalmarketing
											</a>
										</h4>
									</div>
									{/* End Col */}
									<div className="col-3 text-end">
										{/* Dropdown */}
										<div className="dropdowm">
											<button
												type="button"
												className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
												id="teamsDropdown1"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<i className="bi-three-dots-vertical" />
											</button>
											<div
												className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
												aria-labelledby="teamsDropdown1"
											>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Rename team
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Add to favorites
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Archive team
												</a>
												<div className="dropdown-divider" />
												<a
													className="dropdown-item text-danger"
													href="user-profile-teams.html#"
												>
													Delete
												</a>
											</div>
										</div>
										{/* End Dropdown */}
									</div>
									{/* End Col */}
								</div>
								{/* End Row */}
								<p>
									Our group promotes and sells products and services by
									leveraging online marketing tactics
								</p>
							</div>
							{/* End Body */}
							{/* Footer */}
							<div className="card-footer border-0 pt-0">
								<div className="list-group list-group-flush list-group-no-gutters">
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Industry:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												<a
													className="badge bg-soft-primary text-primary p-2"
													href="user-profile-teams.html#"
												>
													Marketing team
												</a>
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Members:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Avatar Group */}
												<div className="avatar-group avatar-group-xs avatar-circle">
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Ella Lauda"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img9.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="David Harrison"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img3.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-dark"
														data-toggle="tooltip"
														data-placement="top"
														title="Antony Taylor"
													>
														<span className="avatar-initials">A</span>
													</span>
													<span
														className="avatar avatar-soft-info"
														data-toggle="tooltip"
														data-placement="top"
														title="Sara Iwens"
													>
														<span className="avatar-initials">S</span>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Finch Hoot"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img5.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-light avatar-circle"
														data-toggle="tooltip"
														data-placement="top"
														title="Sam Kart, Amanda Harvey and 1 more"
													>
														<span className="avatar-initials">+3</span>
													</span>
												</div>
												{/* End Avatar Group */}
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
								</div>
							</div>
							{/* End Footer */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3 mb-lg-5">
						{/* Card */}
						<div className="card h-100">
							{/* Body */}
							<div className="card-body pb-0">
								<div className="row align-items-center mb-2">
									<div className="col-9">
										<h4 className="mb-1">
											<a href="user-profile-teams.html#">#ethereum</a>
										</h4>
									</div>
									<div className="col-3 text-end">
										{/* Dropdown */}
										<div className="dropdowm">
											<button
												type="button"
												className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
												id="teamsDropdown2"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<i className="bi-three-dots-vertical" />
											</button>
											<div
												className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
												aria-labelledby="teamsDropdown2"
											>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Rename team
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Add to favorites
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Archive team
												</a>
												<div className="dropdown-divider" />
												<a
													className="dropdown-item text-danger"
													href="user-profile-teams.html#"
												>
													Delete
												</a>
											</div>
										</div>
										{/* End Dropdown */}
									</div>
									{/* End Col */}
								</div>
								{/* End Row */}
								<p>Focusing on innovative and disruptive business models</p>
							</div>
							{/* End Body */}
							{/* Footer */}
							<div className="card-footer border-0 pt-0">
								<div className="list-group list-group-flush list-group-no-gutters">
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Industry:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												<a
													className="badge bg-soft-dark text-dark p-2"
													href="user-profile-teams.html#"
												>
													Blockchain
												</a>
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Members:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Avatar Group */}
												<div className="avatar-group avatar-group-xs avatar-circle">
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Sam Kart"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img4.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-danger"
														data-toggle="tooltip"
														data-placement="top"
														title="Teresa Eyker"
													>
														<span className="avatar-initials">T</span>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Amanda Harvey"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img10.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="David Harrison"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img3.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-warning"
														data-toggle="tooltip"
														data-placement="top"
														title="Olivier L."
													>
														<span className="avatar-initials">O</span>
													</span>
													<span
														className="avatar avatar-light avatar-circle"
														data-toggle="tooltip"
														data-placement="top"
														title="Brian Halligan, Rachel Doe and 7 more"
													>
														<span className="avatar-initials">+9</span>
													</span>
												</div>
												{/* End Avatar Group */}
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
								</div>
							</div>
							{/* End Footer */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3 mb-lg-5">
						{/* Card */}
						<div className="card h-100">
							{/* Body */}
							<div className="card-body pb-0">
								<div className="row align-items-center mb-2">
									<div className="col-9">
										<h4 className="mb-1">
											<a href="user-profile-teams.html#">#conference</a>
										</h4>
									</div>
									<div className="col-3 text-end">
										{/* Dropdown */}
										<div className="dropdowm">
											<button
												type="button"
												className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
												id="teamsDropdown3"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<i className="bi-three-dots-vertical" />
											</button>
											<div
												className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
												aria-labelledby="teamsDropdown3"
											>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Rename team
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Add to favorites
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Archive team
												</a>
												<div className="dropdown-divider" />
												<a
													className="dropdown-item text-danger"
													href="user-profile-teams.html#"
												>
													Delete
												</a>
											</div>
										</div>
										{/* End Dropdown */}
									</div>
									{/* End Col */}
								</div>
								{/* End Row */}
								<p>Online meeting services group</p>
							</div>
							{/* End Body */}
							{/* Footer */}
							<div className="card-footer border-0 pt-0">
								<div className="list-group list-group-flush list-group-no-gutters">
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Industry:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												<a
													className="badge bg-soft-info text-info p-2"
													href="user-profile-teams.html#"
												>
													Marketing team
												</a>
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Members:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Avatar Group */}
												<div className="avatar-group avatar-group-xs avatar-circle">
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Costa Quinn"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img6.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Clarice Boone"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img7.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-dark"
														data-toggle="tooltip"
														data-placement="top"
														title="Zack Ins"
													>
														<span className="avatar-initials">Z</span>
													</span>
												</div>
												{/* End Avatar Group */}
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
								</div>
							</div>
							{/* End Footer */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3 mb-lg-5">
						{/* Card */}
						<div className="card h-100">
							{/* Body */}
							<div className="card-body pb-0">
								<div className="row align-items-center mb-2">
									<div className="col-9">
										<h4 className="mb-1">
											<a href="user-profile-teams.html#">#supportteam</a>
										</h4>
									</div>
									<div className="col-3 text-end">
										{/* Dropdown */}
										<div className="dropdowm">
											<button
												type="button"
												className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
												id="teamsDropdown5"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<i className="bi-three-dots-vertical" />
											</button>
											<div
												className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
												aria-labelledby="teamsDropdown5"
											>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Rename team
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Add to favorites
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Archive team
												</a>
												<div className="dropdown-divider" />
												<a
													className="dropdown-item text-danger"
													href="user-profile-teams.html#"
												>
													Delete
												</a>
											</div>
										</div>
										{/* End Dropdown */}
									</div>
									{/* End Col */}
								</div>
								{/* End Row */}
								<p>Keep in touch and stay productive with us</p>
							</div>
							{/* End Body */}
							{/* Footer */}
							<div className="card-footer border-0 pt-0">
								<div className="list-group list-group-flush list-group-no-gutters">
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Industry:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												<a
													className="badge bg-soft-danger text-danger p-2"
													href="user-profile-teams.html#"
												>
													Customer service
												</a>
											</div>
										</div>
									</div>
									{/* End List Item */}
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Members:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Avatar Group */}
												<div className="avatar-group avatar-group-xs avatar-circle">
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Costa Quinn"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img6.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Clarice Boone"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img7.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-dark"
														data-toggle="tooltip"
														data-placement="top"
														title="Adam Keep"
													>
														<span className="avatar-initials">A</span>
													</span>
												</div>
												{/* End Avatar Group */}
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
								</div>
							</div>
							{/* End Footer */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3 mb-lg-5">
						{/* Card */}
						<div className="card h-100">
							{/* Body */}
							<div className="card-body pb-0">
								<div className="row align-items-center mb-2">
									<div className="col-9">
										<h4 className="mb-1">
											<a href="user-profile-teams.html#">#invoices</a>
										</h4>
									</div>
									<div className="col-3 text-end">
										{/* Dropdown */}
										<div className="dropdowm">
											<button
												type="button"
												className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
												id="teamsDropdown4"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<i className="bi-three-dots-vertical" />
											</button>
											<div
												className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
												aria-labelledby="teamsDropdown4"
											>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Rename team
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Add to favorites
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Archive team
												</a>
												<div className="dropdown-divider" />
												<a
													className="dropdown-item text-danger"
													href="user-profile-teams.html#"
												>
													Delete
												</a>
											</div>
										</div>
										{/* End Dropdown */}
									</div>
									{/* End Col */}
								</div>
								{/* End Row */}
								<p>
									This group serves online money transfers as an electronic
									alternative to paper methods
								</p>
							</div>
							{/* End Body */}
							{/* Footer */}
							<div className="card-footer border-0 pt-0">
								<div className="list-group list-group-flush list-group-no-gutters">
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Industry:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												<a
													className="badge bg-soft-primary text-primary p-2"
													href="user-profile-teams.html#"
												>
													Online payment
												</a>
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Members:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Avatar Group */}
												<div className="avatar-group avatar-group-xs avatar-circle">
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Finch Hoot"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img5.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-dark"
														data-toggle="tooltip"
														data-placement="top"
														title="Bob Bardly"
													>
														<span className="avatar-initials">B</span>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Linda Bates"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img8.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Ella Lauda"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img9.jpg"
															alt="Image Description"
														/>
													</span>
												</div>
												{/* End Avatar Group */}
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
								</div>
							</div>
							{/* End Footer */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3 mb-lg-5">
						{/* Card */}
						<div className="card h-100">
							{/* Body */}
							<div className="card-body pb-0">
								<div className="row align-items-center mb-2">
									<div className="col-9">
										<h4 className="mb-1">
											<a href="user-profile-teams.html#">#payments</a>
										</h4>
									</div>
									<div className="col-3 text-end">
										{/* Dropdown */}
										<div className="dropdowm">
											<button
												type="button"
												className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
												id="teamsDropdown6"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<i className="bi-three-dots-vertical" />
											</button>
											<div
												className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
												aria-labelledby="teamsDropdown6"
											>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Rename team
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Add to favorites
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Archive team
												</a>
												<div className="dropdown-divider" />
												<a
													className="dropdown-item text-danger"
													href="user-profile-teams.html#"
												>
													Delete
												</a>
											</div>
										</div>
										{/* End Dropdown */}
									</div>
									{/* End Col */}
								</div>
								{/* End Row */}
								<p>
									Our responsibility to manage the money in this
									organization
								</p>
							</div>
							{/* End Body */}
							{/* Footer */}
							<div className="card-footer border-0 pt-0">
								<div className="list-group list-group-flush list-group-no-gutters">
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Industry:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												<a
													className="badge bg-soft-info text-info p-2"
													href="user-profile-teams.html#"
												>
													Finance
												</a>
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Members:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Avatar Group */}
												<div className="avatar-group avatar-group-xs avatar-circle">
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Amanda Harvey"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img10.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="David Harrison"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img3.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-info"
														data-toggle="tooltip"
														data-placement="top"
														title="Lisa Iston"
													>
														<span className="avatar-initials">L</span>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Sam Kart"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img4.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-dark"
														data-toggle="tooltip"
														data-placement="top"
														title="Zack Ins"
													>
														<span className="avatar-initials">Z</span>
													</span>
													<span
														className="avatar avatar-light avatar-circle"
														data-toggle="tooltip"
														data-placement="top"
														title="Lewis Clarke, Chris Mathew and 3 more"
													>
														<span className="avatar-initials">+5</span>
													</span>
												</div>
												{/* End Avatar Group */}
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
								</div>
							</div>
							{/* End Footer */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3 mb-lg-5">
						{/* Card */}
						<div className="card h-100">
							{/* Body */}
							<div className="card-body pb-0">
								<div className="row align-items-center mb-2">
									<div className="col-9">
										<h4 className="mb-1">
											<a href="user-profile-teams.html#">#event</a>
										</h4>
									</div>
									<div className="col-3 text-end">
										{/* Dropdown */}
										<div className="dropdowm">
											<button
												type="button"
												className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
												id="teamsDropdown7"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												<i className="bi-three-dots-vertical" />
											</button>
											<div
												className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
												aria-labelledby="teamsDropdown7"
											>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Rename team
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Add to favorites
												</a>
												<a
													className="dropdown-item"
													href="user-profile-teams.html#"
												>
													Archive team
												</a>
												<div className="dropdown-divider" />
												<a
													className="dropdown-item text-danger"
													href="user-profile-teams.html#"
												>
													Delete
												</a>
											</div>
										</div>
										{/* End Dropdown */}
									</div>
									{/* End Col */}
								</div>
								{/* End Row */}
								<p>
									Because we love to know what's going on &amp; share great
									ideas
								</p>
							</div>
							{/* End Body */}
							{/* Footer */}
							<div className="card-footer border-0 pt-0">
								<div className="list-group list-group-flush list-group-no-gutters">
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Industry:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												<a
													className="badge bg-soft-dark text-dark p-2"
													href="user-profile-teams.html#"
												>
													Organizers
												</a>
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
									{/* List Item */}
									<div className="list-group-item">
										<div className="row align-items-center">
											<div className="col">
												<span className="card-subtitle">Members:</span>
											</div>
											{/* End Col */}
											<div className="col-auto">
												{/* Avatar Group */}
												<div className="avatar-group avatar-group-xs avatar-circle">
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Costa Quinn"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img6.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-info"
														data-toggle="tooltip"
														data-placement="top"
														title="Bob Bardly"
													>
														<span className="avatar-initials">B</span>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Clarice Boone"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img7.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar"
														data-toggle="tooltip"
														data-placement="top"
														title="Sam Kart"
													>
														<img
															className="avatar-img"
															src="/assets/img/160x160/img4.jpg"
															alt="Image Description"
														/>
													</span>
													<span
														className="avatar avatar-soft-primary"
														data-toggle="tooltip"
														data-placement="top"
														title="Daniel Cs."
													>
														<span className="avatar-initials">D</span>
													</span>
												</div>
												{/* End Avatar Group */}
											</div>
											{/* End Col */}
										</div>
									</div>
									{/* End List Item */}
								</div>
							</div>
							{/* End Footer */}
						</div>
						{/* End Card */}
					</div>
				</div>
			)}

			{activeView === SUPPORTED_TEAM_VIEW.LIST && (
				<div className="row row-cols-1">
					<div className="col mb-3">
						{/* Card */}
						<div className="card card-body">
							<div className="row align-items-md-center">
								<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
									<h4>
										<a href="user-profile-teams.html#">#digitalmarketing</a>
									</h4>
									<a
										className="badge bg-soft-primary text-primary p-2"
										href="user-profile-teams.html#"
									>
										Marketing team
									</a>
								</div>
								<div className="col-3 col-md-auto order-md-last text-end">
									{/* Dropdown */}
									<div className="dropdown">
										<button
											type="button"
											className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
											id="teamsListDropdown1"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi-three-dots-vertical" />
										</button>
										<div
											className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
											aria-labelledby="teamsListDropdown1"
										>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Rename team
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Add to favorites
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Archive team
											</a>
											<div className="dropdown-divider" />
											<a
												className="dropdown-item text-danger"
												href="user-profile-teams.html#"
											>
												Delete
											</a>
										</div>
									</div>
									{/* End Dropdown */}
								</div>
								{/* End Col */}
								<div className="col-sm mb-2 mb-sm-0">
									<p>
										Our group promotes and sells products and services by
										leveraging online marketing tactics
									</p>
								</div>
								{/* End Col */}
								<div className="col-sm-auto">
									{/* Stars */}
									<div className="d-flex gap-1 mb-2">
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star-half.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="default"
										/>
										<img
											src="/assets/svg/illustrations-light/star-half.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="dark"
										/>
									</div>
									{/* End Stars */}
									{/* Avatar Group */}
									<div className="avatar-group avatar-group-xs avatar-circle">
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Ella Lauda"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img9.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="David Harrison"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img3.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-dark"
											data-toggle="tooltip"
											data-placement="top"
											title="Antony Taylor"
										>
											<span className="avatar-initials">A</span>
										</span>
										<span
											className="avatar avatar-soft-info"
											data-toggle="tooltip"
											data-placement="top"
											title="Sara Iwens"
										>
											<span className="avatar-initials">S</span>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Finch Hoot"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img5.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-light avatar-circle"
											data-toggle="tooltip"
											data-placement="top"
											title="Sam Kart, Amanda Harvey and 1 more"
										>
											<span className="avatar-initials">+3</span>
										</span>
									</div>
									{/* End Avatar Group */}
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3">
						{/* Card */}
						<div className="card card-body">
							<div className="row align-items-md-center">
								<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
									<h4>
										<a href="user-profile-teams.html#">#ethereum</a>
									</h4>
									<a
										className="badge bg-soft-dark text-dark p-2"
										href="user-profile-teams.html#"
									>
										Blockchain
									</a>
								</div>
								<div className="col-3 col-md-auto order-md-last text-end">
									{/* Dropdown */}
									<div className="dropdown">
										<button
											type="button"
											className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
											id="teamsListDropdown2"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi-three-dots-vertical" />
										</button>
										<div
											className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
											aria-labelledby="teamsListDropdown2"
										>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Rename team
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Add to favorites
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Archive team
											</a>
											<div className="dropdown-divider" />
											<a
												className="dropdown-item text-danger"
												href="user-profile-teams.html#"
											>
												Delete
											</a>
										</div>
									</div>
									{/* End Dropdown */}
								</div>
								{/* End Col */}
								<div className="col-sm mb-2 mb-sm-0">
									<p>
										Focusing on innovative and disruptive business models
									</p>
								</div>
								{/* End Col */}
								<div className="col-sm-auto">
									{/* Stars */}
									<div className="d-flex gap-1 mb-2">
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star-muted.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="default"
										/>
										<img
											src="/assets/svg/illustrations-light/star-muted.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="dark"
										/>
									</div>
									{/* End Stars */}
									{/* Avatar Group */}
									<div className="avatar-group avatar-group-xs avatar-circle">
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Sam Kart"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img4.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-danger"
											data-toggle="tooltip"
											data-placement="top"
											title="Teresa Eyker"
										>
											<span className="avatar-initials">T</span>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Amanda Harvey"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img10.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="David Harrison"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img3.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-warning"
											data-toggle="tooltip"
											data-placement="top"
											title="Olivier L."
										>
											<span className="avatar-initials">O</span>
										</span>
										<span
											className="avatar avatar-light avatar-circle"
											data-toggle="tooltip"
											data-placement="top"
											title="Brian Halligan, Rachel Doe and 7 more"
										>
											<span className="avatar-initials">+9</span>
										</span>
									</div>
									{/* End Avatar Group */}
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3">
						{/* Card */}
						<div className="card card-body">
							<div className="row align-items-md-center">
								<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
									<h4>
										<a href="user-profile-teams.html#">#conference</a>
									</h4>
									<a
										className="badge bg-soft-info text-info p-2"
										href="user-profile-teams.html#"
									>
										Marketing team
									</a>
								</div>
								<div className="col-3 col-md-auto order-md-last text-end">
									{/* Dropdown */}
									<div className="dropdown">
										<button
											type="button"
											className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
											id="teamsListDropdown3"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi-three-dots-vertical" />
										</button>
										<div
											className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
											aria-labelledby="teamsListDropdown3"
										>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Rename team
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Add to favorites
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Archive team
											</a>
											<div className="dropdown-divider" />
											<a
												className="dropdown-item text-danger"
												href="user-profile-teams.html#"
											>
												Delete
											</a>
										</div>
									</div>
									{/* End Dropdown */}
								</div>
								{/* End Col */}
								<div className="col-sm mb-2 mb-sm-0">
									<p>Online meeting services group</p>
								</div>
								{/* End Col */}
								<div className="col-sm-auto">
									{/* Stars */}
									<div className="d-flex gap-1 mb-2">
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star-half.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="default"
										/>
										<img
											src="/assets/svg/illustrations-light/star-half.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="dark"
										/>
									</div>
									{/* End Stars */}
									{/* Avatar Group */}
									<div className="avatar-group avatar-group-xs avatar-circle">
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Costa Quinn"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img6.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Clarice Boone"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img7.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-dark"
											data-toggle="tooltip"
											data-placement="top"
											title="Zack Ins"
										>
											<span className="avatar-initials">Z</span>
										</span>
									</div>
									{/* End Avatar Group */}
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3">
						{/* Card */}
						<div className="card card-body">
							<div className="row align-items-md-center">
								<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
									<h4>
										<a href="user-profile-teams.html#">#supportteam</a>
									</h4>
									<a
										className="badge bg-soft-danger text-danger p-2"
										href="user-profile-teams.html#"
									>
										Customer service
									</a>
								</div>
								<div className="col-3 col-md-auto order-md-last text-end">
									{/* Dropdown */}
									<div className="dropdown">
										<button
											type="button"
											className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
											id="teamsListDropdown4"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi-three-dots-vertical" />
										</button>
										<div
											className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
											aria-labelledby="teamsListDropdown4"
										>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Rename team
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Add to favorites
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Archive team
											</a>
											<div className="dropdown-divider" />
											<a
												className="dropdown-item text-danger"
												href="user-profile-teams.html#"
											>
												Delete
											</a>
										</div>
									</div>
									{/* End Dropdown */}
								</div>
								{/* End Col */}
								<div className="col-sm mb-2 mb-sm-0">
									<p>Keep in touch and stay productive with us</p>
								</div>
								{/* End Col */}
								<div className="col-sm-auto">
									{/* Stars */}
									<div className="d-flex gap-1 mb-2">
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star-half.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="default"
										/>
										<img
											src="/assets/svg/illustrations-light/star-half.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="dark"
										/>
									</div>
									{/* End Stars */}
									{/* Avatar Group */}
									<div className="avatar-group avatar-group-xs avatar-circle">
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Costa Quinn"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img6.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Clarice Boone"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img7.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-dark"
											data-toggle="tooltip"
											data-placement="top"
											title="Adam Keep"
										>
											<span className="avatar-initials">A</span>
										</span>
									</div>
									{/* End Avatar Group */}
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3">
						{/* Card */}
						<div className="card card-body">
							<div className="row align-items-md-center">
								<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
									<h4>
										<a href="user-profile-teams.html#">#invoices</a>
									</h4>
									<a
										className="badge bg-soft-primary text-primary p-2"
										href="user-profile-teams.html#"
									>
										Online payment
									</a>
								</div>
								<div className="col-3 col-md-auto order-md-last text-end">
									{/* Dropdown */}
									<div className="dropdown">
										<button
											type="button"
											className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
											id="teamsListDropdown5"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi-three-dots-vertical" />
										</button>
										<div
											className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
											aria-labelledby="teamsListDropdown5"
										>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Rename team
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Add to favorites
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Archive team
											</a>
											<div className="dropdown-divider" />
											<a
												className="dropdown-item text-danger"
												href="user-profile-teams.html#"
											>
												Delete
											</a>
										</div>
									</div>
									{/* End Dropdown */}
								</div>
								{/* End Col */}
								<div className="col-sm mb-2 mb-sm-0">
									<p>
										This group serves online money transfers as an
										electronic alternative to paper methods
									</p>
								</div>
								{/* End Col */}
								<div className="col-sm-auto">
									{/* Stars */}
									<div className="d-flex gap-1 mb-2">
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star-muted.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="default"
										/>
										<img
											src="/assets/svg/illustrations-light/star-muted.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="dark"
										/>
									</div>
									{/* End Stars */}
									{/* Avatar Group */}
									<div className="avatar-group avatar-group-xs avatar-circle">
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Finch Hoot"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img5.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-dark"
											data-toggle="tooltip"
											data-placement="top"
											title="Bob Bardly"
										>
											<span className="avatar-initials">B</span>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Linda Bates"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img8.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Ella Lauda"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img9.jpg"
												alt="Image Description"
											/>
										</span>
									</div>
									{/* End Avatar Group */}
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3">
						{/* Card */}
						<div className="card card-body">
							<div className="row align-items-md-center">
								<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
									<h4>
										<a href="user-profile-teams.html#">#payments</a>
									</h4>
									<a
										className="badge bg-soft-info text-info p-2"
										href="user-profile-teams.html#"
									>
										Finance
									</a>
								</div>
								<div className="col-3 col-md-auto order-md-last text-end">
									{/* Dropdown */}
									<div className="dropdown">
										<button
											type="button"
											className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
											id="teamsListDropdown6"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi-three-dots-vertical" />
										</button>
										<div
											className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
											aria-labelledby="teamsListDropdown6"
										>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Rename team
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Add to favorites
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Archive team
											</a>
											<div className="dropdown-divider" />
											<a
												className="dropdown-item text-danger"
												href="user-profile-teams.html#"
											>
												Delete
											</a>
										</div>
									</div>
									{/* End Dropdown */}
								</div>
								{/* End Col */}
								<div className="col-sm mb-2 mb-sm-0">
									<p>
										Our responsibility to manage the money in this
										organization
									</p>
								</div>
								{/* End Col */}
								<div className="col-sm-auto">
									{/* Stars */}
									<div className="d-flex gap-1 mb-2">
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
									</div>
									{/* End Stars */}
									{/* Avatar Group */}
									<div className="avatar-group avatar-group-xs avatar-circle">
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Amanda Harvey"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img10.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="David Harrison"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img3.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-info"
											data-toggle="tooltip"
											data-placement="top"
											title="Lisa Iston"
										>
											<span className="avatar-initials">L</span>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Sam Kart"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img4.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-dark"
											data-toggle="tooltip"
											data-placement="top"
											title="Zack Ins"
										>
											<span className="avatar-initials">Z</span>
										</span>
										<span
											className="avatar avatar-light avatar-circle"
											data-toggle="tooltip"
											data-placement="top"
											title="Lewis Clarke, Chris Mathew and 3 more"
										>
											<span className="avatar-initials">+5</span>
										</span>
									</div>
									{/* End Avatar Group */}
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
						</div>
						{/* End Card */}
					</div>
					<div className="col mb-3">
						{/* Card */}
						<div className="card card-body">
							<div className="row align-items-md-center">
								<div className="col-9 col-md-4 col-lg-3 mb-2 mb-md-0">
									<h4>
										<a href="user-profile-teams.html#">#event</a>
									</h4>
									<a
										className="badge bg-soft-dark text-dark p-2"
										href="user-profile-teams.html#"
									>
										Organizers
									</a>
								</div>
								<div className="col-3 col-md-auto order-md-last text-end">
									{/* Dropdown */}
									<div className="dropdown">
										<button
											type="button"
											className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
											id="teamsListDropdown7"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<i className="bi-three-dots-vertical" />
										</button>
										<div
											className="dropdown-menu dropdown-menu-sm dropdown-menu-end"
											aria-labelledby="teamsListDropdown7"
										>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Rename team
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Add to favorites
											</a>
											<a
												className="dropdown-item"
												href="user-profile-teams.html#"
											>
												Archive team
											</a>
											<div className="dropdown-divider" />
											<a
												className="dropdown-item text-danger"
												href="user-profile-teams.html#"
											>
												Delete
											</a>
										</div>
									</div>
									{/* End Dropdown */}
								</div>
								{/* End Col */}
								<div className="col-sm mb-2 mb-sm-0">
									<p>
										Because we love to know what's going on &amp; share
										great ideas
									</p>
								</div>
								{/* End Col */}
								<div className="col-sm-auto">
									{/* Stars */}
									<div className="d-flex gap-1 mb-2">
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star.svg"
											alt="Review rating"
											width={14}
										/>
										<img
											src="/assets/svg/illustrations/star-muted.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="default"
										/>
										<img
											src="/assets/svg/illustrations-light/star-muted.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="dark"
										/>
										<img
											src="/assets/svg/illustrations/star-muted.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="default"
										/>
										<img
											src="/assets/svg/illustrations-light/star-muted.svg"
											alt="Review rating"
											width={14}
											data-hs-theme-appearance="dark"
										/>
									</div>
									{/* End Stars */}
									{/* Avatar Group */}
									<div className="avatar-group avatar-group-xs avatar-circle">
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Costa Quinn"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img6.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-info"
											data-toggle="tooltip"
											data-placement="top"
											title="Bob Bardly"
										>
											<span className="avatar-initials">B</span>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Clarice Boone"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img7.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar"
											data-toggle="tooltip"
											data-placement="top"
											title="Sam Kart"
										>
											<img
												className="avatar-img"
												src="/assets/img/160x160/img4.jpg"
												alt="Image Description"
											/>
										</span>
										<span
											className="avatar avatar-soft-primary"
											data-toggle="tooltip"
											data-placement="top"
											title="Daniel Cs."
										>
											<span className="avatar-initials">D</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Teams;

import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const CreateInvoice = ({ id = '' }) => {
	return (
		<div>
			<div className="row">
				<div className="col-lg-9 mb-5 mb-lg-0">
					{/* Card */}
					<div className="card card-lg">
						{/* Body */}
						<div className="card-body">
							<div className="row justify-content-md-between">
								<div className="col-md-4 mb-3 mb-md-0">
									{/* Logo */}
									<label
										className="form-check form-check-dashed"
										htmlFor="logoUploader"
									>
										<img
											id="logoImg"
											className="avatar avatar-xl avatar-4x3 avatar-centered h-100 mb-2"
											src="./assets/svg/illustrations/oc-browse-file.svg"
											alt="Image Description"
											data-hs-theme-appearance="default"
										/>
										<span className="d-block">Browse your file here</span>
										<input
											type="file"
											className="js-file-attach form-check-input"
											id="logoUploader"
										/>
									</label>
									{/* End Logo */}
								</div>
								{/* End Col */}
								<div className="col-md-5 text-md-end">
									<h2>Invoice #</h2>
									{/* Form */}
									<div className="d-grid d-md-flex justify-content-md-end mb-2 mb-md-4">
										<input
											type="text"
											className="form-control w-auto"
											placeholder
											aria-label
											defaultValue="0982131"
										/>
									</div>
									{/* End Form */}
									<textarea
										className="form-control"
										placeholder="Who is this invoice from?"
										id="invoiceAddressFromLabel"
										aria-label="Who is this invoice from?"
										rows={3}
										defaultValue={""}
									/>
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
							<hr className="my-5" />
							<div className="row mb-3">
								<div className="col-md-5">
									{/* Form */}
									<div className="mb-4">
										<label
											htmlFor="invoiceAddressToLabel"
											className="form-label"
										>
											Bill to:
										</label>
										<textarea
											className="form-control"
											placeholder="Who is this invoice from?"
											id="invoiceAddressToLabel"
											aria-label="Who is this invoice from?"
											rows={3}
											defaultValue={""}
										/>
									</div>
									{/* End Form */}
								</div>
								{/* End Col */}
								<div className="col-md-7 align-self-md-end">
									{/* Form */}
									<div className="mb-4">
										<dl className="row align-items-sm-center mb-3">
											<dt className="col-md text-sm-end mb-2 mb-sm-0">
												Invoice date:
											</dt>
											<dd className="col-md-auto mb-0">
												{/* Flatpickr */}
												<div
													id="invoiceDateFlatpickr"
													className="js-flatpickr flatpickr-custom"
													data-hs-flatpickr-options='{
										"appendTo": "#invoiceDateFlatpickr",
										"dateFormat": "d/m/Y",
										"wrap": true
										}'
												>
													<input
														type="text"
														className="flatpickr-custom-form-control form-control flatpickr-input"
														placeholder="Select dates"
														data-input
														defaultValue="29/06/2020"
														readOnly="readonly"
													/>
													<div
														className="flatpickr-calendar animate"
														tabIndex={-1}
													>
														<div className="flatpickr-months">
															<span className="flatpickr-prev-month">
																<i className="bi-chevron-left flatpickr-custom-arrow" />
															</span>
															<div className="flatpickr-month">
																<div className="flatpickr-current-month">
																	<select
																		className="flatpickr-monthDropdown-months"
																		aria-label="Month"
																		tabIndex={-1}
																	>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={0}
																			tabIndex={-1}
																		>
																			January
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={1}
																			tabIndex={-1}
																		>
																			February
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={2}
																			tabIndex={-1}
																		>
																			March
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={3}
																			tabIndex={-1}
																		>
																			April
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={4}
																			tabIndex={-1}
																		>
																			May
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={5}
																			tabIndex={-1}
																		>
																			June
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={6}
																			tabIndex={-1}
																		>
																			July
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={7}
																			tabIndex={-1}
																		>
																			August
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={8}
																			tabIndex={-1}
																		>
																			September
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={9}
																			tabIndex={-1}
																		>
																			October
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={10}
																			tabIndex={-1}
																		>
																			November
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={11}
																			tabIndex={-1}
																		>
																			December
																		</option>
																	</select>
																	<div className="numInputWrapper">
																		<input
																			className="numInput cur-year"
																			type="number"
																			tabIndex={-1}
																			aria-label="Year"
																		/>
																		<span className="arrowUp" />
																		<span className="arrowDown" />
																	</div>
																</div>
															</div>
															<span className="flatpickr-next-month">
																<i className="bi-chevron-right flatpickr-custom-arrow" />
															</span>
														</div>
														<div className="flatpickr-innerContainer">
															<div className="flatpickr-rContainer">
																<div className="flatpickr-weekdays">
																	<div className="flatpickr-weekdaycontainer">
																		<span className="flatpickr-weekday">
																			Mo
																		</span>
																		<span className="flatpickr-weekday">
																			Tu
																		</span>
																		<span className="flatpickr-weekday">
																			We
																		</span>
																		<span className="flatpickr-weekday">
																			Th
																		</span>
																		<span className="flatpickr-weekday">
																			Fr
																		</span>
																		<span className="flatpickr-weekday">
																			Sa
																		</span>
																		<span className="flatpickr-weekday">
																			Su
																		</span>
																	</div>
																</div>
																<div className="flatpickr-days" tabIndex={-1}>
																	<div className="dayContainer">
																		<span
																			className="flatpickr-day"
																			aria-label="June 1, 2020"
																			tabIndex={-1}
																		>
																			1
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 2, 2020"
																			tabIndex={-1}
																		>
																			2
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 3, 2020"
																			tabIndex={-1}
																		>
																			3
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 4, 2020"
																			tabIndex={-1}
																		>
																			4
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 5, 2020"
																			tabIndex={-1}
																		>
																			5
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 6, 2020"
																			tabIndex={-1}
																		>
																			6
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 7, 2020"
																			tabIndex={-1}
																		>
																			7
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 8, 2020"
																			tabIndex={-1}
																		>
																			8
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 9, 2020"
																			tabIndex={-1}
																		>
																			9
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 10, 2020"
																			tabIndex={-1}
																		>
																			10
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 11, 2020"
																			tabIndex={-1}
																		>
																			11
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 12, 2020"
																			tabIndex={-1}
																		>
																			12
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 13, 2020"
																			tabIndex={-1}
																		>
																			13
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 14, 2020"
																			tabIndex={-1}
																		>
																			14
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 15, 2020"
																			tabIndex={-1}
																		>
																			15
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 16, 2020"
																			tabIndex={-1}
																		>
																			16
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 17, 2020"
																			tabIndex={-1}
																		>
																			17
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 18, 2020"
																			tabIndex={-1}
																		>
																			18
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 19, 2020"
																			tabIndex={-1}
																		>
																			19
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 20, 2020"
																			tabIndex={-1}
																		>
																			20
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 21, 2020"
																			tabIndex={-1}
																		>
																			21
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 22, 2020"
																			tabIndex={-1}
																		>
																			22
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 23, 2020"
																			tabIndex={-1}
																		>
																			23
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 24, 2020"
																			tabIndex={-1}
																		>
																			24
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 25, 2020"
																			tabIndex={-1}
																		>
																			25
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 26, 2020"
																			tabIndex={-1}
																		>
																			26
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 27, 2020"
																			tabIndex={-1}
																		>
																			27
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 28, 2020"
																			tabIndex={-1}
																		>
																			28
																		</span>
																		<span
																			className="flatpickr-day selected"
																			aria-label="June 29, 2020"
																			tabIndex={-1}
																		>
																			29
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 30, 2020"
																			tabIndex={-1}
																		>
																			30
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 1, 2020"
																			tabIndex={-1}
																		>
																			1
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 2, 2020"
																			tabIndex={-1}
																		>
																			2
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 3, 2020"
																			tabIndex={-1}
																		>
																			3
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 4, 2020"
																			tabIndex={-1}
																		>
																			4
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 5, 2020"
																			tabIndex={-1}
																		>
																			5
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 6, 2020"
																			tabIndex={-1}
																		>
																			6
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 7, 2020"
																			tabIndex={-1}
																		>
																			7
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 8, 2020"
																			tabIndex={-1}
																		>
																			8
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 9, 2020"
																			tabIndex={-1}
																		>
																			9
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 10, 2020"
																			tabIndex={-1}
																		>
																			10
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 11, 2020"
																			tabIndex={-1}
																		>
																			11
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 12, 2020"
																			tabIndex={-1}
																		>
																			12
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												{/* End Flatpickr */}
											</dd>
										</dl>
										<dl className="row align-items-sm-center">
											<dt className="col-md text-sm-end mb-2 mb-sm-0">
												Due date:
											</dt>
											<dd className="col-md-auto mb-0">
												{/* Flatpickr */}
												<div
													id="invoiceDueDateFlatpickr"
													className="js-flatpickr flatpickr-custom"
													data-hs-flatpickr-options='{
										"appendTo": "#invoiceDueDateFlatpickr",
										"dateFormat": "d/m/Y",
										"wrap": true
										}'
												>
													<input
														type="text"
														className="flatpickr-custom-form-control form-control flatpickr-input"
														placeholder="Select dates"
														data-input
														defaultValue="29/06/2020"
														readOnly="readonly"
													/>
													<div
														className="flatpickr-calendar animate"
														tabIndex={-1}
													>
														<div className="flatpickr-months">
															<span className="flatpickr-prev-month">
																<i className="bi-chevron-left flatpickr-custom-arrow" />
															</span>
															<div className="flatpickr-month">
																<div className="flatpickr-current-month">
																	<select
																		className="flatpickr-monthDropdown-months"
																		aria-label="Month"
																		tabIndex={-1}
																	>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={0}
																			tabIndex={-1}
																		>
																			January
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={1}
																			tabIndex={-1}
																		>
																			February
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={2}
																			tabIndex={-1}
																		>
																			March
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={3}
																			tabIndex={-1}
																		>
																			April
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={4}
																			tabIndex={-1}
																		>
																			May
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={5}
																			tabIndex={-1}
																		>
																			June
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={6}
																			tabIndex={-1}
																		>
																			July
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={7}
																			tabIndex={-1}
																		>
																			August
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={8}
																			tabIndex={-1}
																		>
																			September
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={9}
																			tabIndex={-1}
																		>
																			October
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={10}
																			tabIndex={-1}
																		>
																			November
																		</option>
																		<option
																			className="flatpickr-monthDropdown-month"
																			value={11}
																			tabIndex={-1}
																		>
																			December
																		</option>
																	</select>
																	<div className="numInputWrapper">
																		<input
																			className="numInput cur-year"
																			type="number"
																			tabIndex={-1}
																			aria-label="Year"
																		/>
																		<span className="arrowUp" />
																		<span className="arrowDown" />
																	</div>
																</div>
															</div>
															<span className="flatpickr-next-month">
																<i className="bi-chevron-right flatpickr-custom-arrow" />
															</span>
														</div>
														<div className="flatpickr-innerContainer">
															<div className="flatpickr-rContainer">
																<div className="flatpickr-weekdays">
																	<div className="flatpickr-weekdaycontainer">
																		<span className="flatpickr-weekday">
																			Mo
																		</span>
																		<span className="flatpickr-weekday">
																			Tu
																		</span>
																		<span className="flatpickr-weekday">
																			We
																		</span>
																		<span className="flatpickr-weekday">
																			Th
																		</span>
																		<span className="flatpickr-weekday">
																			Fr
																		</span>
																		<span className="flatpickr-weekday">
																			Sa
																		</span>
																		<span className="flatpickr-weekday">
																			Su
																		</span>
																	</div>
																</div>
																<div className="flatpickr-days" tabIndex={-1}>
																	<div className="dayContainer">
																		<span
																			className="flatpickr-day"
																			aria-label="June 1, 2020"
																			tabIndex={-1}
																		>
																			1
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 2, 2020"
																			tabIndex={-1}
																		>
																			2
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 3, 2020"
																			tabIndex={-1}
																		>
																			3
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 4, 2020"
																			tabIndex={-1}
																		>
																			4
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 5, 2020"
																			tabIndex={-1}
																		>
																			5
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 6, 2020"
																			tabIndex={-1}
																		>
																			6
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 7, 2020"
																			tabIndex={-1}
																		>
																			7
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 8, 2020"
																			tabIndex={-1}
																		>
																			8
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 9, 2020"
																			tabIndex={-1}
																		>
																			9
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 10, 2020"
																			tabIndex={-1}
																		>
																			10
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 11, 2020"
																			tabIndex={-1}
																		>
																			11
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 12, 2020"
																			tabIndex={-1}
																		>
																			12
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 13, 2020"
																			tabIndex={-1}
																		>
																			13
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 14, 2020"
																			tabIndex={-1}
																		>
																			14
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 15, 2020"
																			tabIndex={-1}
																		>
																			15
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 16, 2020"
																			tabIndex={-1}
																		>
																			16
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 17, 2020"
																			tabIndex={-1}
																		>
																			17
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 18, 2020"
																			tabIndex={-1}
																		>
																			18
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 19, 2020"
																			tabIndex={-1}
																		>
																			19
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 20, 2020"
																			tabIndex={-1}
																		>
																			20
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 21, 2020"
																			tabIndex={-1}
																		>
																			21
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 22, 2020"
																			tabIndex={-1}
																		>
																			22
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 23, 2020"
																			tabIndex={-1}
																		>
																			23
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 24, 2020"
																			tabIndex={-1}
																		>
																			24
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 25, 2020"
																			tabIndex={-1}
																		>
																			25
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 26, 2020"
																			tabIndex={-1}
																		>
																			26
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 27, 2020"
																			tabIndex={-1}
																		>
																			27
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 28, 2020"
																			tabIndex={-1}
																		>
																			28
																		</span>
																		<span
																			className="flatpickr-day selected"
																			aria-label="June 29, 2020"
																			tabIndex={-1}
																		>
																			29
																		</span>
																		<span
																			className="flatpickr-day"
																			aria-label="June 30, 2020"
																			tabIndex={-1}
																		>
																			30
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 1, 2020"
																			tabIndex={-1}
																		>
																			1
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 2, 2020"
																			tabIndex={-1}
																		>
																			2
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 3, 2020"
																			tabIndex={-1}
																		>
																			3
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 4, 2020"
																			tabIndex={-1}
																		>
																			4
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 5, 2020"
																			tabIndex={-1}
																		>
																			5
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 6, 2020"
																			tabIndex={-1}
																		>
																			6
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 7, 2020"
																			tabIndex={-1}
																		>
																			7
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 8, 2020"
																			tabIndex={-1}
																		>
																			8
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 9, 2020"
																			tabIndex={-1}
																		>
																			9
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 10, 2020"
																			tabIndex={-1}
																		>
																			10
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 11, 2020"
																			tabIndex={-1}
																		>
																			11
																		</span>
																		<span
																			className="flatpickr-day nextMonthDay"
																			aria-label="July 12, 2020"
																			tabIndex={-1}
																		>
																			12
																		</span>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												{/* End Flatpickr */}
											</dd>
										</dl>
									</div>
									{/* End Form */}
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
							<div
								className="js-add-field"
								data-hs-add-field-options='{
					"template": "#addInvoiceItemTemplate",
					"container": "#addInvoiceItemContainer",
					"defaultCreated": 0
					}'
							>
								{/* Title */}
								<div className="bg-light border-bottom p-2 mb-3">
									<div className="row">
										<div className="col-sm-5">
											<h6 className="card-title text-cap">Item</h6>
										</div>
										{/* End Col */}
										<div className="col-sm-3 d-none d-sm-inline-block">
											<h6 className="card-title text-cap">Quantity</h6>
										</div>
										{/* End Col */}
										<div className="col-sm-2 d-none d-sm-inline-block">
											<h6 className="card-title text-cap">Rate</h6>
										</div>
										{/* End Col */}
										<div className="col-sm-2 d-none d-sm-inline-block">
											<h6 className="card-title text-cap">Amount</h6>
										</div>
										{/* End Col */}
									</div>
									{/* End Row */}
								</div>
								{/* End Title */}
								{/* Content */}
								<div className="row">
									<div className="col-md-5">
										<input
											type="text"
											className="form-control mb-3"
											placeholder="Item name"
											aria-label="Item name"
										/>
										<input
											type="text"
											className="form-control mb-3"
											placeholder="Description"
											aria-label="Description"
										/>
									</div>
									{/* End Col */}
									<div className="col-12 col-sm-auto col-md-3">
										{/* Quantity */}
										<div className="quantity-counter mb-3">
											<div className="js-quantity-counter row align-items-center">
												<div className="col">
													<input
														className="js-result form-control form-control-quantity-counter"
														type="text"
														defaultValue={1}
													/>
												</div>
												{/* End Col */}
												<div className="col-auto">
													<a
														className="js-minus btn btn-white btn-xs btn-icon rounded-circle"
													>
														<svg
															width={8}
															height={2}
															viewBox="0 0 8 2"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z"
																fill="currentColor"
															/>
														</svg>
													</a>
													<a
														className="js-plus btn btn-white btn-xs btn-icon rounded-circle"
													>
														<svg
															width={8}
															height={8}
															viewBox="0 0 8 8"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z"
																fill="currentColor"
															/>
														</svg>
													</a>
												</div>
												{/* End Col */}
											</div>
											{/* End Row */}
										</div>
										{/* End Quantity */}
									</div>
									{/* End Col */}
									<div className="col-12 col-sm col-md-2">
										{/* Input Group */}
										<div className="mb-3">
											<input
												type="number"
												className="form-control"
												placeholder="00"
												aria-label="00"
											/>
										</div>
										{/* End Input Group */}
									</div>
									{/* End Col */}
									<div className="col col-md-2">
										<input
											type="number"
											className="form-control-plaintext mb-3"
											placeholder="$0.00"
											aria-label="$0.00"
										/>
									</div>
									{/* End Col */}
								</div>
								{/* End Content */}
								{/* Container For Input Field */}
								<div id="addInvoiceItemContainer" />
								<a className="js-create-field form-link">
									<i className="bi-plus" /> Add item
								</a>
								{/* Add Phone Input Field */}
								<div id="addInvoiceItemTemplate" style={{ display: "none" }}>
									{/* Content */}
									<div className="input-group-add-field">
										<div className="row">
											<div className="col-md-5">
												<input
													type="text"
													className="form-control mb-3"
													placeholder="Item name"
													aria-label="Item name"
												/>
												<input
													type="text"
													className="form-control mb-3"
													placeholder="Description"
													aria-label="Description"
												/>
											</div>
											{/* End Col */}
											<div className="col-12 col-sm-auto col-md-3">
												{/* Quantity */}
												<div className="quantity-counter mb-3">
													<div className="js-quantity-counter row align-items-center">
														<div className="col">
															<input
																className="js-result form-control form-control-quantity-counter"
																type="text"
																defaultValue={1}
															/>
														</div>
														{/* End Col */}
														<div className="col-auto">
															<a
																className="js-minus btn btn-white btn-xs btn-icon rounded-circle"
															>
																<svg
																	width={8}
																	height={2}
																	viewBox="0 0 8 2"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M0 1C0 0.723858 0.223858 0.5 0.5 0.5H7.5C7.77614 0.5 8 0.723858 8 1C8 1.27614 7.77614 1.5 7.5 1.5H0.5C0.223858 1.5 0 1.27614 0 1Z"
																		fill="currentColor"
																	/>
																</svg>
															</a>
															<a
																className="js-plus btn btn-white btn-xs btn-icon rounded-circle"
															>
																<svg
																	width={8}
																	height={8}
																	viewBox="0 0 8 8"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M4 0C4.27614 0 4.5 0.223858 4.5 0.5V3.5H7.5C7.77614 3.5 8 3.72386 8 4C8 4.27614 7.77614 4.5 7.5 4.5H4.5V7.5C4.5 7.77614 4.27614 8 4 8C3.72386 8 3.5 7.77614 3.5 7.5V4.5H0.5C0.223858 4.5 0 4.27614 0 4C0 3.72386 0.223858 3.5 0.5 3.5H3.5V0.5C3.5 0.223858 3.72386 0 4 0Z"
																		fill="currentColor"
																	/>
																</svg>
															</a>
														</div>
														{/* End Col */}
													</div>
													{/* End Row */}
												</div>
												{/* End Quantity */}
											</div>
											{/* End Col */}
											<div className="col-12 col-sm col-md-2">
												{/* Input Group */}
												<div className="mb-3">
													<input
														type="number"
														className="form-control"
														placeholder="00"
														aria-label="00"
													/>
												</div>
												{/* End Input Group */}
											</div>
											{/* End Col */}
											<div className="col col-md-2">
												<input
													type="number"
													className="form-control-plaintext mb-3"
													placeholder="$0.00"
													aria-label="$0.00"
												/>
											</div>
											{/* End Col */}
										</div>
										{/* End Row */}
										<a
											className="js-delete-field input-group-add-field-delete"
											data-toggle="tooltip"
											data-placement="top"
											title="Remove item"
										>
											<i className="bi-x-lg" />
										</a>
									</div>
									{/* End Content */}
								</div>
								{/* End Add Phone Input Field */}
							</div>
							<hr className="my-5" />
							<div className="row justify-content-md-end mb-3">
								<div className="col-md-auto">
									<dl className="row text-md-end">
										<dt className="col-md-6">Subtotal:</dt>
										<dd className="col-md-6">$0.00</dd>
										<dt className="col-md-6">Total:</dt>
										<dd className="col-md-6">$0.00</dd>
										<dt className="col-md-6 mb-1 mb-md-0">Tax:</dt>
										<dd className="col-md-6">
											{/* Input Group */}
											<div className="tom-select-custom tom-select-custom-end">
												<div id="taxSelect" className="input-group">
													<input
														type="number"
														className="form-control"
														placeholder={0.0}
														aria-label={0.0}
														style={{ minWidth: "5rem" }}
													/>
													{/* Select */}
													<select
														className="js-select form-select tomselected ts-hidden-accessible"
														data-hs-tom-select-options='{
											"searchInDropdown": false,
											"hideSearch": true,
											"dropdownWidth": "9rem"
											}'
														id="tomselect-1"
														tabIndex={-1}
													>
														<option value="discount2Filter1">Flat ($)</option>
														<option value="discount2Filter2" selected>
															Percent (%)
														</option>
													</select>
													<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
														<div className="ts-control">
															<div
																data-value="discount2Filter2"
																className="item"
																data-ts-item
															>
																Percent (%)
															</div>
														</div>
														<div className="tom-select-custom">
															<div
																className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
																style={{ display: "none" }}
															>
																<div
																	role="listbox"
																	tabIndex={-1}
																	className="ts-dropdown-content"
																	id="tomselect-1-ts-dropdown"
																/>
															</div>
														</div>
													</div>
													{/* End Select */}
												</div>
											</div>
											{/* End Input Group */}
										</dd>
										<dt className="col-md-6 mb-1 mb-md-0">Amount paid:</dt>
										<dd className="col-md-6">
											{/* Input Group */}
											<div className="input-group input-group-merge">
												<div className="input-group-prepend input-group-text">
													<i className="bi-currency-dollar" />
												</div>
												<input
													type="number"
													className="form-control"
													placeholder={0.0}
													aria-label={0.0}
												/>
											</div>
											{/* End Input Group */}
										</dd>
										<dt className="col-md-6">Due balance:</dt>
										<dd className="col-md-6">$0.00</dd>
									</dl>
									{/* End Row */}
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
							{/* Form */}
							<div className="mb-4">
								<label htmlFor="invoiceNotesLabel" className="form-label">
									Notes &amp; terms
								</label>
								<textarea
									className="form-control"
									placeholder="Who is this invoice to?"
									id="invoiceNotesLabel"
									aria-label="Who is this invoice to?"
									rows={3}
									defaultValue={""}
								/>
							</div>
							{/* End Form */}
							<p className="fs-6 mb-0">© Front. 2020 Htmlstream.</p>
						</div>
						{/* End Body */}
					</div>
					{/* End Card */}
					{/* Sticky Block End Point */}
					<div id="stickyBlockEndPoint" />
				</div>
				<div className="col-lg-3">
					<div id="stickyBlockStartPoint">
						<div
							className="js-sticky-block"
							data-hs-sticky-block-options='{
				"parentSelector": "#stickyBlockStartPoint",
				"breakpoint": "lg",
				"startPoint": "#stickyBlockStartPoint",
				"endPoint": "#stickyBlockEndPoint",
				"stickyOffsetTop": 20
				}'
						>
							<div className="d-grid gap-2 gap-sm-3 mb-2 mb-sm-3">
								<a className="btn btn-primary">
									<i className="bi-cursor-fill me-1" /> Send invoice
								</a>
								<a className="btn btn-white">
									<i className="bi-download me-1" /> Download
								</a>
							</div>
							<div className="row gx-3">
								<div className="col-sm mb-2 mb-sm-0">
									<div className="d-grid">
										<a className="btn btn-white">
											Preview
										</a>
									</div>
								</div>
								{/* End Col */}
								<div className="col-sm">
									<div className="d-grid">
										<a className="btn btn-white">
											Save
										</a>
									</div>
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
							<hr className="my-4" />
							{/* Form */}
							<div className="mb-4">
								<label
									htmlFor="currencyLabel-ts-control"
									className="form-label"
									id="currencyLabel-ts-label"
								>
									Currency
								</label>
								{/* Select */}
								<div className="tom-select-custom">
									<select
										className="js-select form-select tomselected ts-hidden-accessible"
										id="currencyLabel"
										autoComplete="off"
										data-hs-tom-select-options='{
							"searchInDropdown": false,
							"hideSearch": true
							}'
										tabIndex={-1}
									>
										<option label="empty" />
										<option
											value="currency2"
											data-option-template='<span class="d-flex align-items-center text-truncate"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Image description" width="16"/><span>GBP (United Kingdom Pound)</span></span>'
										>
											GBP (United Kingdom Pound)
										</option>
										<option
											value="currency3"
											data-option-template='<span class="d-flex align-items-center text-truncate"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/eu.svg" alt="Image description" width="16"/><span>Euro (Euro Member Countries)</span></span>'
										>
											Euro (Euro Member Countries)
										</option>
										<option
											value="currency1"
											selected
											data-option-template='<span class="d-flex align-items-center text-truncate"><img class="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width="16"/><span>USD (United States Dollar)</span></span>'
										>
											USD (United States Dollar)
										</option>
									</select>
									<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
										<div className="ts-control">
											<span
												className="d-flex align-items-center text-truncate item"
												data-value="currency1"
												data-ts-item
											>
												<img
													className="avatar avatar-xss avatar-circle me-2"
													src="./assets/vendor/flag-icon-css/flags/1x1/us.svg"
													alt="Image description"
													width={16}
												/>
												<span>USD (United States Dollar)</span>
											</span>
										</div>
										<div className="tom-select-custom">
											<div
												className="ts-dropdown single plugin-change_listener plugin-hs_smart_position"
												style={{ display: "none" }}
											>
												<div
													role="listbox"
													tabIndex={-1}
													className="ts-dropdown-content"
													id="currencyLabel-ts-dropdown"
													aria-labelledby="currencyLabel-ts-label"
												/>
											</div>
										</div>
									</div>
								</div>
								{/* End Select */}
							</div>
							{/* End Form */}
							<div className="d-grid gap-3">
								{/* Form Switch */}
								<label
									className="row form-check form-switch"
									htmlFor="invoicePaymentTermsSwitch"
								>
									<span className="col-8 col-sm-9 ms-0">Payment terms</span>
									<span className="col-4 col-sm-3 text-end">
										<input
											type="checkbox"
											className="form-check-input"
											id="invoicePaymentTermsSwitch"
											defaultChecked
										/>
									</span>
								</label>
								{/* End Form Switch */}
								{/* Form Switch */}
								<label
									className="row form-check form-switch"
									htmlFor="invoiceClientNotesSwitch"
								>
									<span className="col-8 col-sm-9 ms-0">Client notes</span>
									<span className="col-4 col-sm-3 text-end">
										<input
											type="checkbox"
											className="form-check-input"
											id="invoiceClientNotesSwitch"
											defaultChecked
										/>
									</span>
								</label>
								{/* End Form Switch */}
								{/* Form Switch */}
								<label
									className="row form-check form-switch"
									htmlFor="invoiceAttachPDFSwitch"
								>
									<span className="col-8 col-sm-9 ms-0">
										Attach PDF in mail
									</span>
									<span className="col-4 col-sm-3 text-end">
										<input
											type="checkbox"
											className="form-check-input"
											id="invoiceAttachPDFSwitch"
										/>
									</span>
								</label>
								{/* End Form Switch */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Row */}
		</div>
	);
};

export default CreateInvoice;

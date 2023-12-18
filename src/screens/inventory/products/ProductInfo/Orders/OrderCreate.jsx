import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const OrderCreate = ({ readOnly }) => {
	const [ data, setData ] = React.useState({});

	return (
		<div className="d-grid gap-3 gap-lg-5 mt-5">
			{/*
			<div className="row">
				<div className="col-lg-6">
					<div className="mb-4">
						<label className="form-label">
							Logo
						</label>
						<div className="d-flex align-items-center">
							<label className="avatar avatar-xl avatar-circle avatar-uploader me-5">
								<img
									className="avatar-img"
									alt="Image Description"
									src="/assets/svg/brands/guideline-icon.svg"
								/>
								<input type="file" className="js-file-attach avatar-uploader-input" />
								<span className="avatar-uploader-trigger">
									<i className="bi-pencil-fill avatar-uploader-icon shadow-sm" />
								</span>
							</label>
							<button type="button" className="js-file-attach-reset-img btn btn-white">
								Delete
							</button>
						</div>
					</div>
				</div>
				<div className="col-lg-6" />
			</div>
			*/}

			<div className="row">
				<div className="col-lg-12">
					<div className="mb-4">
						<label className="form-label">
							Name
							&nbsp;
							<i className="bi-question-circle text-body ms-1"
								title="Displayed on public forums, such as Front."
							/>
						</label>
						<div className="input-group input-group-merge">
							<div className="input-group-prepend input-group-text">
								<i className="bi-briefcase" />
							</div>
							<input
								type="text"
								disabled={readOnly}
								className="form-control"
								defaultValue="Diagnostic test"
								aria-label="Search services, parts, equipments"
								placeholder="Search services, parts, equipments"
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4">
							<div className="mb-4">
								<label className="form-label">
									Category
									&nbsp;
								</label>
								<div className="tom-select-custom">
									<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
										<div className="ts-control">
											<div className="item">
												Fridge
											</div>
										</div>
										<div className="tom-select-custom" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="mb-4">
								<label className="form-label">
									Type
								</label>
								<div className="tom-select-custom">
									<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
										<div className="ts-control">
											<div className="item">
												Service
											</div>
										</div>
										<div className="tom-select-custom" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="mb-4">
								<label className="form-label">
									Code
								</label>
								&nbsp;
								<span className="form-label-secondary">
									(Optional)
								</span>
								<input type="text" className="form-control mb-3" placeholder="Item code" aria-label="Item code" disabled={readOnly} />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-6">
							<div className="mb-4">
								<label className="form-label">
									Quantity
								</label>

								<div className="quantity-counter">
									<div className="js-quantity-counter row align-items-center">
										<div className="col">
											<input type="text" className="js-result form-control form-control-quantity-counter" defaultValue={1} disabled={readOnly} />
										</div>
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
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<label className="form-label">
								Price
							</label>
							&nbsp;
							<span className="form-label-secondary">
								(CAD)
							</span>
							<div className="mb-4">
								<div className="input-group input-group-merge">
									<div className="input-group-prepend input-group-text">
										<i className="bi-currency-dollar" />
									</div>
									<input
										type="text"
										disabled={readOnly}
										name="expectedValue"
										className="form-control"
										defaultValue="125.00"
										aria-label="Enter price"
										placeholder="Enter price"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-12">
							<label className="form-label">
								Description
								&nbsp;
								<span className="form-label-secondary">
									(Optional)
								</span>
							</label>
							<div className="quill-custom">
								{!readOnly && (
									<div className="ql-toolbar ql-snow">
										<span className="ql-formats">
											<button type="button" className="ql-bold">
												<svg viewBox="0 0 18 18">
													<path
														className="ql-stroke"
														d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
													/>
													<path
														className="ql-stroke"
														d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
													/>
												</svg>
											</button>
											<button type="button" className="ql-italic">
												<svg viewBox="0 0 18 18">
													<line className="ql-stroke" x1={7} x2={13} y1={4} y2={4} />
													<line className="ql-stroke" x1={5} x2={11} y1={14} y2={14} />
													<line className="ql-stroke" x1={8} x2={10} y1={14} y2={4} />
												</svg>
											</button>
											<button type="button" className="ql-underline">
												<svg viewBox="0 0 18 18">
													<path
														className="ql-stroke"
														d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
													/>
													<rect
														className="ql-fill"
														height={1}
														rx="0.5"
														ry="0.5"
														width={12}
														x={3}
														y={15}
													/>
												</svg>
											</button>
											<button type="button" className="ql-strike">
												<svg viewBox="0 0 18 18">
													<line
														className="ql-stroke ql-thin"
														x1="15.5"
														x2="2.5"
														y1="8.5"
														y2="9.5"
													/>
													<path
														className="ql-fill"
														d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"
													/>
													<path
														className="ql-fill"
														d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"
													/>
												</svg>
											</button>
											<button type="button" className="ql-link">
												<svg viewBox="0 0 18 18">
													<line className="ql-stroke" x1={7} x2={11} y1={7} y2={11} />
													<path
														className="ql-even ql-stroke"
														d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
													/>
													<path
														className="ql-even ql-stroke"
														d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
													/>
												</svg>
											</button>
											<button type="button" className="ql-image">
												<svg viewBox="0 0 18 18">
													<rect
														className="ql-stroke"
														height={10}
														width={12}
														x={3}
														y={4}
													/>
													<circle className="ql-fill" cx={6} cy={7} r={1} />
													<polyline
														className="ql-even ql-fill"
														points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
													/>
												</svg>
											</button>
											<button type="button" className="ql-blockquote">
												<svg viewBox="0 0 18 18">
													<rect
														className="ql-fill ql-stroke"
														height={3}
														width={3}
														x={4}
														y={5}
													/>
													<rect
														className="ql-fill ql-stroke"
														height={3}
														width={3}
														x={11}
														y={5}
													/>
													<path
														className="ql-even ql-fill ql-stroke"
														d="M7,8c0,4.031-3,5-3,5"
													/>
													<path
														className="ql-even ql-fill ql-stroke"
														d="M14,8c0,4.031-3,5-3,5"
													/>
												</svg>
											</button>
											<button type="button" className="ql-code">
												<svg viewBox="0 0 18 18">
													<polyline
														className="ql-even ql-stroke"
														points="5 7 3 9 5 11"
													/>
													<polyline
														className="ql-even ql-stroke"
														points="13 7 15 9 13 11"
													/>
													<line className="ql-stroke" x1={10} x2={8} y1={5} y2={13} />
												</svg>
											</button>
											<button type="button" className="ql-list" value="bullet">
												<svg viewBox="0 0 18 18">
													<line className="ql-stroke" x1={6} x2={15} y1={4} y2={4} />
													<line className="ql-stroke" x1={6} x2={15} y1={9} y2={9} />
													<line className="ql-stroke" x1={6} x2={15} y1={14} y2={14} />
													<line className="ql-stroke" x1={3} x2={3} y1={4} y2={4} />
													<line className="ql-stroke" x1={3} x2={3} y1={9} y2={9} />
													<line className="ql-stroke" x1={3} x2={3} y1={14} y2={14} />
												</svg>
											</button>
										</span>
									</div>
								)}
								<div className="js-quill ql-container ql-snow hs-quill-initialized" style={{ height: "15rem" }}>
									<div
										contentEditable="true"
										className="ql-editor ql-blank"
										data-placeholder="Type your message..."
									>
										<p>
											<br />
										</p>
									</div>
									<div
										className="ql-clipboard"
										contentEditable="true"
										tabIndex={-1}
									/>
									<div className="ql-tooltip ql-hidden">
										<a
											className="ql-preview"
											rel="noopener noreferrer"
											target="_blank"
											href="about:blank"
										/>
										<input
											type="text"
											data-formula="e=mc^2"
											data-link="https://quilljs.com"
											data-video="Embed URL"
										/>
										<a className="ql-action" />
										<a className="ql-remove" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-12">
					<div className="form-check">
						<input
							defaultValue
							defaultChecked
							type="checkbox"
							className="form-check-input"
						/>
						<label className="form-check-label">
							Non depletable
						</label>
					</div>
					<div className="form-check">
						<input
							defaultValue
							defaultChecked
							type="checkbox"
							className="form-check-input"
						/>
						<label className="form-check-label">
							Attached to invoice
						</label>
					</div>
					<div className="form-check">
						<input
							defaultValue
							defaultChecked
							type="checkbox"
							className="form-check-input"
						/>
						<label className="form-check-label">
							Attached to estimate
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OrderCreate;

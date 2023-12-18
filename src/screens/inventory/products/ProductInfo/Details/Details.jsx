import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import { Modal, Card } from '@components';
import formatMessage from '@utils/formatMessage';

import DetailsEdit from './DetailsEdit';

const Details = ({ id: customerId = '' }) => {
	const [ showModal, setShowModal ] = React.useState(false);

	const toggleModal = () => setShowModal(!showModal);


	const onEditDetailsClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	}

	return (
		<>
			<Card>
				<Card.Header>
					<h4 className="card-header-title">
						Product Details
					</h4>
					{/*
					<a href="#service-location-edit" className="btn btn-sm btn-outline-primary" onClick={onEditDetailsClick}>
						<i className="bi-pencil-fill me-1" />
						&nbsp;
						Edit
					</a>
					*/}
				</Card.Header>
				<Card.Body>
					<div className="row">
						<div className="col-sm-4">
							<div className="mb-4">
								<label htmlFor="productNameLabel" className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									name="productName"
									id="productNameLabel"
									placeholder="Shirt, t-shirts, etc."
									aria-label="Shirt, t-shirts, etc."
									defaultValue="Bosch 0392020039 Electric Water Pump"
								/>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="mb-4">
								<label htmlFor="productNameLabel" className="form-label">
									Product #
								</label>
								<input
									type="text"
									className="form-control"
									name="productName"
									id="productNameLabel"
									placeholder="0392020039"
									aria-label="Shirt, t-shirts, etc."
								/>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="mb-4">
								<label htmlFor="productNameLabel" className="form-label">
									Category
								</label>
								<div className="tom-select-custom">
									<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
										<div className="ts-control">
											<div className="item">
												Washer
											</div>
										</div>
										<div className="tom-select-custom" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4">
							<div className="mb-4">
								<label htmlFor="productNameLabel" className="form-label">
									Condition
								</label>
								<div className="tom-select-custom">
									<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
										<div className="ts-control">
											<div className="item">
												New
											</div>
										</div>
										<div className="tom-select-custom" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="mb-3">
								<label htmlFor="SKULabel" className="form-label">
									SKU
								</label>
								<input
									type="text"
									className="form-control"
									name="SKU"
									id="SKULabel"
									placeholder="eg. 348121032"
									aria-label="eg. 348121032"
								/>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="mb-4">
								<label htmlFor="weightLabel" className="form-label">
									Type
								</label>
								<input
									type="text"
									className="form-control"
									name="SKU"
									id="SKULabel"
									placeholder="eg. equipments, parts, service"
									aria-label="eg. 348121032"
								/>
							</div>
						</div>
					</div>
					<label className="form-label">
						Description <span className="form-label-secondary">(Optional)</span>
					</label>
					{/* Quill */}
					<div className="quill-custom">
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
						<div
							className="js-quill ql-container ql-snow hs-quill-initialized"
							style={{ height: "15rem" }}
							data-hs-quill-options='{
				"placeholder": "Type your description...",
				"modules": {
				"toolbar": [
				["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
				]
				}
				}'
						>
							<div
								className="ql-editor"
								data-gramm="false"
								contentEditable="true"
								data-placeholder="Type your description..."
							>
								<p>
									Train hard. Stay dry. This soccer jacket is made of soft,
									sweat-wicking fabric that keeps you moving on the practice
									field. Stretch panels at the elbows and sides give you a full
									range of motion as you work.
								</p>
								<p>
									<br />
								</p>
								<h3>Specifications</h3>
								<ul>
									<li>
										Regular fit is wider at the body, with a straight silhouette
									</li>
									<li>Ribbed stand-up collar</li>
									<li>Long sleeves with ribbed cuffs</li>
									<li>100% polyester doubleknit</li>
									<li>
										Front zip pockets; Full zip; Ribbing details; Ribbed hem
									</li>
								</ul>
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
				</Card.Body>
			</Card>
			{showModal && (
				<Modal onCloseRequest={toggleModal} title="Edit servie location" size="md" withFooter>
					<DetailsEdit />
				</Modal>
			)}
		</>
	);
};

export default Details;

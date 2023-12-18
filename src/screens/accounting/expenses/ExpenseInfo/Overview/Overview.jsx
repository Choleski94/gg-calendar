import React from 'react';

import { Card } from '@components';

const Overview = () => {
	return (
		<Card>
			<Card.Body>
				<form>
					<h5 className="mb-3 text-uppercase bg-light p-2">
						Basic Info
					</h5>
					<div className="row mb-3">
						<div className="col-md-4" style={{ marginBottom: "15px !important" }}>
							<label>Customer Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4" style={{ marginBottom: "15px !important" }}>
							<label>Customer Type</label>
							<select className="form-control">
								<option>Select Customer Type</option>
								<option>Regular Customer</option>
								<option>Office Managment Company</option>
								<option>Landlord</option>
								<option>Warranty</option>
							</select>
						</div>
						<div className="col-md-4" style={{ marginBottom: "15px !important" }}>
							<label>Account Number</label>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="vip"
								/>
								<label className="form-check-label" htmlFor="vip">
									VIP Account?
								</label>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="serviceAgreement"
								/>
								<label
									className="form-check-label"
									htmlFor="serviceAgreement"
								>
									Service Agreement?
								</label>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="active"
								/>
								<label className="form-check-label" htmlFor="active">
									Active?
								</label>
							</div>
						</div>
					</div>
					<h5 className="mb-3 text-uppercase bg-light p-2">
						Primary Contact
					</h5>
					<div className="row mb-3">
						<div className="col-md-2">
							<label>Prefix</label>
							<select className="form-control">
								<option value />
								<option value="Mr.">Mr.</option>
								<option value="Mrs.">Mrs.</option>
								<option value="Ms.">Ms.</option>
								<option value="Dr.">Dr.</option>
								<option value="Atty.">Atty.</option>
								<option value="Prof.">Prof.</option>
								<option value="Hon.">Hon.</option>
								<option value="Gov.">Gov.</option>
								<option value="Ofc.">Ofc.</option>
								<option value="Rep.">Rep.</option>
								<option value="Sen.">Sen.</option>
								<option value="Amb.">Amb.</option>
								<option value="Sec.">Sec.</option>
								<option value="Pvt.">Pvt.</option>
								<option value="Cpl.">Cpl.</option>
								<option value="Sgt.">Sgt.</option>
								<option value="Adm.">Adm.</option>
								<option value="Gen.">Gen.</option>
								<option value="Maj.">Maj.</option>
								<option value="Capt.">Capt.</option>
								<option value="Cmdr.">Cmdr.</option>
								<option value="Lt.">Lt.</option>
								<option value="Lt Col.">Lt Col.</option>
								<option value="Col.">Col.</option>
								<option value="Chief">Chief</option>
							</select>
						</div>
						<div className="col-md-4">
							<label>First Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<label>Last Name</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-2">
							<label>Suffix</label>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-4">
							<label>Department</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<label>Job Title</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<label>Birthday</label>
							<input type="date" className="form-control" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-4">
							<label>Anniversary</label>
							<input type="date" className="form-control" />
						</div>
						<div className="col-md-4">
							<label>Phone Number</label>
							<input type="date" className="form-control" />
						</div>
						<div className="col-md-4">
							<label>Email</label>
							<input type="email" className="form-control" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="billing"
								/>
								<label className="form-check-label" htmlFor="billing">
									Billing Contact
								</label>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="bookingContact"
								/>
								<label
									className="form-check-label"
									htmlFor="bookingContact"
								>
									Booking Contact
								</label>
							</div>
						</div>
					</div>
					<h5 className="mb-3 text-uppercase bg-light p-2">
						Stored Service Locations
					</h5>
					<div className="row mb-3">
						<div className="col-md-4">
							<label>Location Nickname</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<label>Contact</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<label>Street Address or Latitude, Longitude</label>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-4">
							<label>Apt/Suite/Unit#</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<label>City</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<label>State/Province</label>
							<input type="text" className="form-control" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-4">
							<label>Zip/Postal Code</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="primaryLocation"
								/>
								<label
									className="form-check-label"
									htmlFor="primaryLocation"
								>
									Primary Location
								</label>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="billingAddress"
								/>
								<label
									className="form-check-label"
									htmlFor="billingAddress"
								>
									Billing Address
								</label>
							</div>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="active2"
								/>
								<label className="form-check-label" htmlFor="active2">
									Active
								</label>
							</div>
						</div>
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="gatedProperty"
								/>
								<label className="form-check-label" htmlFor="gatedProperty">
									Gated Property
								</label>
							</div>
						</div>
					</div>
					<div className="row">
						<h5 className="mb-3 text-uppercase bg-light p-2">
							Additoinal Info
						</h5>
						<div className="col-md-4">
							<label>Customer Tag</label>
							<select className="form-control">
								<option>Select Tag</option>
							</select>
						</div>
						<div className="col-md-4">
							<label>Referral Source</label>
							<select className="form-control">
								<option>Select Source</option>
							</select>
						</div>
						<div className="col-md-4">
							<label>Industry</label>
							<select className="form-control">
								<option>Select Industry</option>
							</select>
						</div>
						<div className="col-md-4">
							<label>Assigned Contract</label>
							<select className="form-control">
								<option>Select Contract</option>
							</select>
						</div>
						<div className="col-md-4">
							<label>Business Number</label>
							<input type="text" className="form-control" />
						</div>
						<div className="col-md-4">
							<div className="form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="taxable"
								/>
								<label className="form-check-label" htmlFor="taxable">
									Taxable
								</label>
							</div>
						</div>
						<div className="col-md-4">
							<label>Internal/Private Notes</label>
							<textarea
								className="form-control"
								rows={4}
								defaultValue={""}
							/>
						</div>
						<div className="col-md-4">
							<label>Public/Work Order Notes</label>
							<textarea
								className="form-control"
								rows={4}
								defaultValue={""}
							/>
						</div>
					</div>
					<button className="btn btn-primary">Save</button>
				</form>
			</Card.Body>
		</Card>
	);
}

export default Overview;

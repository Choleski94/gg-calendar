import React from 'react';

const ContactLocation = () => {

	return (
		<>
			<div className="row">
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="firstName" className="form-label">
							First name
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							className="form-control"
							placeholder="First name"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="lastName" className="form-label">
							Last name
						</label>
						<input
							type="text"
							id="lastName"
							name="lastName"
							className="form-control"
							placeholder="Last name"
						/>
					</div>
				</div>
			</div>

			{/* TODO: Add support for contact phone & email */}

			<div className="row">
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="firstName" className="form-label">
							Language
						</label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							className="form-control"
							placeholder="First name"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactLocation;

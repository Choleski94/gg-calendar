import React from 'react';

const ServiceLocation = () => {

	return (
		<>
			<div className="row">
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="firstName" className="form-label">
							Country
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
							State
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
			<div className="row">
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="firstName" className="form-label">
							City
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
							Zip
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
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="firstName" className="form-label">
							Address
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
							Unit
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
		</>
	);
}

export default ServiceLocation;

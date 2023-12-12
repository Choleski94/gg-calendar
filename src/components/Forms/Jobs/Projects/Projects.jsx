import React from 'react';

const Projects = () => {

	return (
		<>
			<div className="row">
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="firstName" className="form-label">
							Brand
						</label>
						<input
							type="text"
							id="brand"
							name="brand"
							className="form-control"
							placeholder="Brand"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="lastName" className="form-label">
							Equipment
						</label>
						<input
							type="text"
							id="equipment"
							name="equipment"
							className="form-control"
							placeholder="Equipment"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="firstName" className="form-label">
							Model
						</label>
						<input
							type="text"
							id="model"
							name="model"
							className="form-control"
							placeholder="Model"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="lastName" className="form-label">
							Serial #
						</label>
						<input
							type="text"
							id="serial"
							name="serial"
							className="form-control"
							placeholder="Serial"
						/>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="firstName" className="form-label">
							Status
						</label>
						<input
							type="text"
							id="status"
							name="status"
							className="form-control"
							placeholder="Status"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="lastName" className="form-label">
							Techs
						</label>
						<input
							type="text"
							id="techs"
							name="techs"
							className="form-control"
							placeholder="techs"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="firstName" className="form-label">
							Last service
						</label>
						<input
							type="text"
							id="lastService"
							name="lastService"
							className="form-control"
							placeholder="Last service"
						/>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="mb-4">
						<label htmlFor="lastName" className="form-label">
							Notes
						</label>
						<input
							type="text"
							id="notes"
							name="notes"
							className="form-control"
							placeholder="Notes"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;

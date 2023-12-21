import React from 'react';

const Confirm = () => {
	return (
		<form className="js-validate needs-validation" noValidate>
			<div className="text-center">
				<div className="mb-5">
					<h1 className="display-5">
						Confirm your account
					</h1>
					<p>
						Already validate your account?
						&nbsp;
						<a className="switcher-text2 link inline-text" href="/signin">
							Sign in here
						</a>
					</p>
				</div>
			</div>
			<p className="mb-4">
				Confirm your email address to get started on Tigado. 
				A Code has been sent to <span className="text-white text-4">+1*******179</span>
			</p>
			<label className="form-label">
				Enter 6 digit code
			</label>
			<div className="row g-3">
				<div className="col">
					<input type="text" className="form-control text-center text-6 py-2" maxLength={1} required autoComplete="off" />
				</div>
				<div className="col">
					<input type="text" className="form-control text-center text-6 py-2" maxLength={1} required autoComplete="off" />
				</div>
				<div className="col">
					<input type="text" className="form-control text-center text-6 py-2" maxLength={1} required autoComplete="off" />
				</div>
				<div className="col">
					<input type="text" className="form-control text-center text-6 py-2" maxLength={1} required autoComplete="off" />
				</div>
				<div className="col">
					<input type="text" className="form-control text-center text-6 py-2" maxLength={1} required autoComplete="off" />
				</div>
				<div className="col">
					<input type="text" className="form-control text-center text-6 py-2" maxLength={1} required autoComplete="off" />
				</div>
			</div>
			<div className="d-grid gap-2">
				<div className="row align-items-center mt-4">
					<div className="col-auto">
						<button className="btn btn-primary shadow-none my-2" type="submit">Verify</button>
					</div>
					<div className="col">
						<p className="text-end text-2 text-light mb-0">Didn't get the code? <a href="#">Resend it</a></p>
					</div>
				</div>
			</div>
		</form>
	);
}

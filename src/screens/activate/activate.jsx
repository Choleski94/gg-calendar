import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { hasObjectKey } from '@utils';
import { activate } from '@store/actions/auth';
import formatMessage from '@utils/formatMessage';
import { withGuestRouter, withBrowserDetect } from '@utils/hocs';
import { AuthBranding, Input, Layout, Forms, InlineError } from '@components';

const ActivatePage = ({ browser, version, OS, language }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [ data, setData ] = React.useState({});
	const [ errors, setErrors ] = React.useState({});
	const [ browserInfo, setBrowserInfo ] = React.useState({});

	const inputRefs = Array.from({ length: 6 }, () => React.createRef());

	React.useEffect(() => setBrowserInfo({
		browser, version, OS, language
	}), []);

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
	};

	const validate = (data = {}, ignoreKeys = []) => {
		const errs = {};

		// Check for empty input(s).
		Array.from({ length: 6 }, ((_, idx) => {
			const numKey = `n${idx}`;
			
			// Check for empty email.
			if (!data[numKey]) {
				errs[numKey] = errorMessages.empty;
			}
		}));
		
		return errs;
	};

	const onChange = (index, value) => {
		// Clear existing errors.
		if (hasObjectKey(errors)) setErrors({});

		if (value.length === 1 && index < inputRefs.length - 1) {
			const nextInput = inputRefs[index + 1];
			if (nextInput) {
				inputRefs[index + 1].current.focus();
			}
		}

		setData((prevData) => ({
			...prevData,
			[`n${index}`]: value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		// Check if we have error(s).
		const errs = validate(data, ['OS', 'browser', 'language']);

		setErrors(errs);

		if (Object.keys(errs).length) return null;

		dispatch(activate(data)).then((res) => (
			navigate('/dashboard')
		));
	};

	return (
		<Layout type="auth">
			<div className="container-fluid px-3">
				<div className="row">
					<div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0">
						<AuthBranding />
					</div>
					<div className="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
						<div
							className="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1"
							style={{ maxWidth: "25rem" }}
						>
							<form className="js-validate needs-validation" method="post" onSubmit={onSubmit}>
								<div className="text-center">
									<div className="mb-5">
										<h1 className="display-5">
											{formatMessage('page.activate.header.text')}
										</h1>
										<p>
											{formatMessage('page.activate.has-account.text')}
											&nbsp;
											<Link to="/signup" className="link">
												{formatMessage('page.activate.form.link.signin.text')}
											</Link>
										</p>
									</div>
								</div>
								<p className="mb-4">
									{formatMessage(
										'page.activate.no-account.text', {
										email: (
											<span className="text-bold text-4">
												demo@tigado.ca
											</span>
										)
									})}
								</p>
								<label className="form-label">
									{formatMessage('page.activate.label.code.text')}
								</label>
								<div className="row g-3">
									{Array.from({ length: 6 }, (_, index) => (
										<div className="col" key={index}>
											<Input
												type="text"
												maxLength={1} 
												id={`n${index}`}
												name={`n${index}`}
												autoComplete="off"
												ref={inputRefs[index]}
												value={data[`n${index}`]}
												className="form-control form-control-lg"
												error={errors[`n${index}`] ? ' ' : null}
												onChange={(e) => onChange(index, e.target.value)}
											/>
										</div>
									))}
									{hasObjectKey(errors) && (
										<InlineError 
											text={
												errors?.n0 || errors?.n1 || errors?.n2 ||
												errors?.n3 || errors?.n4 || errors?.n5
											}
										/>
									)}
								</div>
								<div className="d-grid gap-2">
									<div className="row align-items-center mt-4">
										<div className="col-auto">
											<button type="submit" className="btn btn-primary btn-lg" onClick={onSubmit}>
												{formatMessage('page.activate.form.btn.activate.text')}
											</button>
										</div>
										<div className="col">
											<p className="text-end text-2 text-bold mb-0">
												{formatMessage('page.activate.no-code.text')}
												&nbsp;
												<a href="#">
													{formatMessage('page.activate.form.link.resend.text')}
												</a>
											</p>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default withGuestRouter(withBrowserDetect(ActivatePage));

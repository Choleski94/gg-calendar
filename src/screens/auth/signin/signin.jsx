import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { AUTH_KEY } from '@constants/auth';
import { login } from '@store/user/actions';
import { Input, Layout } from '@components';
import AuthBranding from '@views/AuthBranding';
import { validateEmail } from '@utils/validate';
import formatMessage from '@utils/formatMessage';
import useLocalStorage from '@utils/hooks/useLocalStorage';
import withBrowserDetect from '@utils/hocs/withBrowserDetect';

import api from '@api';
import * as actionTypes from '@store/user/types';

import errorHandler from '@utils/request/errorHandler';
import successHandler from '@utils/request/successHandler';

const DEFAULT_AUTH_DATA = {
	email: '', password: '', remember: true
};

const SignInPage = ({ browser, version, OS, language }) => {
	// const router = {};
	// // const navigate = useNavigate();
	// // const dispatch = useDispatch();

	const [ errors, setErrors ] = React.useState({});
	// const [ auth, setAuth ] = useLocalStorage('user', '');
	// const [ browserInfo, setBrowserInfo ] = React.useState({});
	const [ data, setData ] = React.useState(DEFAULT_AUTH_DATA);
	// const [ localToken, setLocalToken ] = useLocalStorage(AUTH_KEY, '');
	// const [ isLoggedIn, setIsLoggedIn ] = useLocalStorage('isLoggedIn', '');

	// React.useEffect(() => {
	// 	// setBrowserInfo({
	// 	// 	browser, version, OS, language
	// 	// });
	// }, []);

	// const errorMessages = {
	// 	empty: formatMessage('form.validation.empty.error.text'),
	// 	email: formatMessage('form.validation.email.error.text')
	// };

	// const validate = (data = {}) => {
	// 	const errs = {};

	// 	// Check for empty email.
	// 	if (!data?.email) {
	// 		errs.email = errorMessages.empty;
	// 	}

	// 	// Check for empty password.
	// 	if (!data?.password) {
	// 		errs.password = errorMessages.empty;
	// 	}

	// 	// Verify Email.
	// 	if (data.email && !validateEmail(data.email)) {
	// 		errs.email = errorMessages.email;
	// 	}

	//         return errs;
	// };

	const onChange = (e) => setData({
		...data, [e.target?.name]: (
			(e.target.type === 'checkbox') ? 
			e.target.checked : e.target.value
		)
	});

	const onSubmit = (e) => {
	// 	e.preventDefault();

	// 	// Check if we have error(s).
	// 	const errs = validate(data);

	// 	setErrors(errs);

	// 	if (Object.keys(errs).length) return null;

	// 	// // Set loading state.
	// 	// dispatch({
	// 	// 	type: actionTypes.LOADING_REQUEST,
	// 	// 	payload: { loading: true },
	// 	// });

	// 	// api.auth.login(data).then((response) => {
	// 	// 	const { status, data } = response;

	// 	// 	if (data.success === true) {
	// 	// 		// Success network request
	// 	// 		setIsLoggedIn(true);
	// 	// 		console.log('DATA:::', data?.result);

	// 	// 		setLocalToken(data?.result.token);
	// 	// 		setAuth(JSON.stringify(data?.result));

	// 	// 		// Set sucess toast.
	// 	// 		dispatch({
	// 	// 			type: actionTypes.LOGIN_SUCCESS,
	// 	// 			payload: data?.result,
	// 	// 		});

	// 	// 		successHandler(
	// 	// 			{ data, status },
	// 	// 			{
	// 	// 				notifyOnSuccess: false,
	// 	// 				notifyOnFailed: true,
	// 	// 			}
	// 	// 		);

	// 	// 		// Reload application now our user is authenticated.
	// 	// 		router.reload();
	// 	// 	} else {
	// 	// 		// Failed network request
	// 	// 		dispatch({
	// 	// 			type: actionTypes.FAILED_REQUEST,
	// 	// 			payload: data,
	// 	// 		});
	// 	// 	}
	// 	// }).catch((error) => {
	// 	// 	// errorHandler(error, navigate);
	// 	// });
	};

	return (
		<>
			{/*
			<Head>
				<title>
					{formatMessage('meta.signin.title.text')}
				</title>
			</Head>
			*/}
			<Layout type="auth">
				<div className="container-fluid px-3">
					<div className="row">
						<div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0">
							<AuthBranding />
						</div>
						<div className="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
							{/* <Header /> */}
							<div
								className="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1"
								style={{ maxWidth: "25rem" }}
							>
								<form className="js-validate needs-validation" method="post" onSubmit={onSubmit}>
									<div className="text-center">
										<div className="mb-5">
											<h1 className="display-5">
												{formatMessage('page.signin.header.text')}
											</h1>
											<p>
												{formatMessage('page.signin.no-account.text')}
												&nbsp;
												<Link to="/signup" className="link">
													{formatMessage('page.signin.form.link.signup.text')}
												</Link>
											</p>
										</div>
										{/*
										<div className="d-grid mb-4">
											<a
												className="btn btn-white btn-lg"
												href="authentication-signin-cover.html#"
											>
												<span className="d-flex justify-content-center align-items-center">
													<img
														className="avatar avatar-xss me-2"
														src="assets/svg/brands/google-icon.svg"
														alt="Image Description"
													/>
													{formatMessage('page.signin.form.btn.signin-google.text')}
												</span>
											</a>
										</div>
										<span className="divider-center text-muted mb-4">
											{formatMessage('page.signin.label.or.text')}
										</span>
										*/}
									</div>
									<div className="mb-4">
										<Input
											id="email"
											type="email"
											name="email"
											value={data?.email}
											onChange={onChange}
											error={errors?.email}
											className="form-control form-control-lg"
											label={formatMessage('page.signin.label.email.text')}
											placeholder={formatMessage('page.signin.form.email.text')}
										/>
									</div>
									<div className="mb-4">
										<Input
											id="password"
											name="password"
											type="password"
											onChange={onChange}
											value={data?.password}
											error={errors?.password}
											className="form-control form-control-lg"
											placeholder={formatMessage('page.signin.form.password.text')}
											label={(
												<span className="d-flex justify-content-between align-items-center">
													<span>
														{formatMessage('page.signin.label.password.text')}
													</span>
													<Link to="/forgot_password" className="form-label-link mb-0">
														{formatMessage('page.signin.form.link.forgot.text')}
													</Link>
												</span>
											)}
										/>
									</div>
									<Input
										id="remember"
										name="remember"
										type="checkbox"
										onChange={onChange}
										value={data?.remember}
										className="form-check-input"
										label={formatMessage('page.signin.form.remember.text')}
									/>
									<div className="d-grid mt-3">
										<button type="submit" className="btn btn-primary btn-lg" onClick={onSubmit}>
											{formatMessage('page.signin.form.btn.signin.text')}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

// export default withBrowserDetect(SignInPage);
export default SignInPage;

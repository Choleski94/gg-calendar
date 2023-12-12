import styled, { keyframes } from 'styled-components';

export const SpinnerAnimation = keyframes`
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
`;

export const LoaderWrapper = styled.div`
	width:100%;
	height:100vh;
	background-color: #fff;
	position:absolute;
	z-index:99;
	top:0;
	left:0;
`;

export const LoaderMain = styled.div`
	height:100%;
	display:flex;
	align-items:center;
	justify-content:center;
`;

export const LoaderSpinner = styled.div`
	border: 16px solid rgba(122, 91, 207,.15);
	border-top: 16px solid rgba(122, 91, 207,.8);
	border-radius: 50%;
	width: 120px;
	height: 120px;
	/* animation */
	-webkit-animation:${SpinnerAnimation} 1.2s linear infinite;
	-moz-animation:${SpinnerAnimation} 1.2s linear infinite;
	-ms-animation:${SpinnerAnimation} 1.2s linear infinite;
	-o-animation:${SpinnerAnimation} 1.2s linear infinite;
	animation:${SpinnerAnimation} 1.2s linear infinite;
`;

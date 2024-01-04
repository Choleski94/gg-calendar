import styled from 'styled-components';

import COLORS from './colors';

export const SwitchWrapper = styled.div`
	display: flex;
	cursor: pointer;
	width: 3.3124em;
	padding: 3.5px 5px;
	border-radius: 15px;
	align-items: center;
	transition: background-color 0.3s ease;
	background-color: ${({ isChecked }) => (isChecked ? COLORS.PURPLE : COLORS.GRAY)};
`;

export const SwitchSlider = styled.div`
	border-width: 0;
	width: 1.4125em;
	height: 1.4125em;
	border-radius: 50%;
	background-color: #fff;
	transition: transform 0.3s ease;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	transform: ${({ isChecked }) => (isChecked ? 'translateX(calc(3.3124em - (1.4125em + 10px)))' : 'translateX(0)')};
`;

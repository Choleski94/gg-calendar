import styled from 'styled-components';

export const AvatarCircleWrapper = styled.div`
	& {
		${({ $background }) => $background ? `background-color: ${$background} !important` : ''};
	}
`;


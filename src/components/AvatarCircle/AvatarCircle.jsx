import React from 'react';

import { AvatarCircleWrapper } from './AvatarCircle.styled';

const AvatarCircle = ({ background, children }) => (
	<AvatarCircleWrapper 
		$background={background} 
		className="avatar avatar-soft-primary avatar-circle"
	>
		<span className="avatar-initials text-white">
			{children}
		</span>
	</AvatarCircleWrapper>
);

export default AvatarCircle;

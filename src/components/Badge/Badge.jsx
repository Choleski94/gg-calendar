import React from 'react';

import { setBadgeClassName } from './Badge.controller';

const Badge = ({ type = '', children, onClick = null }) => (
	<span onClick={onClick} className={setBadgeClassName(type)}>
		{children}
	</span>
);

export default Badge;

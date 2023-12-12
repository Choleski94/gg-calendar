import React from 'react';

import { LoaderWrapper, LoaderMain, LoaderSpinner } from './Loader.styled';

const LoaderSection = () => (
	<LoaderWrapper>
		<LoaderMain>
			<LoaderSpinner />
		</LoaderMain>
	</LoaderWrapper>
);

export default LoaderSection;


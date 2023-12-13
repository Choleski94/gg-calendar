import React from 'react';

import api from '@api';
import { Card } from '@components';
import formatMessage from '@utils/formatMessage';

import BaseProject from './BaseProject';
import ProjectService from './ProjectService';

const ProjectCreate = () => (
	<>
		<BaseProject />
		<ProjectService />
	</>
);

export default ProjectCreate;

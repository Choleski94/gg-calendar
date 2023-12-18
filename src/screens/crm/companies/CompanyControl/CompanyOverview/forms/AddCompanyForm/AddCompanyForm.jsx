import React from 'react';

import { MultiStepForm } from '@components';

import ProjectSection from './ProjectSection';
import CompanySection from './CompanySection';
import LocationSection from './LocationSection';
import ScheduleSection from './ScheduleSection';

const multiStepOptions = [
	// {
	// 	title: 'Basic',
	// 	content: ProjectSection,
	// },
	{
		title: 'General',
		content: CompanySection,
	},
	{
		title: 'Pricing',
		content: LocationSection,
	},
	{
		title: 'Scheduling',
		content: ScheduleSection,
	},
];

const AddCompany = () => (
	<MultiStepForm id="addCompany" options={multiStepOptions} />
	// <>
	// 	<CompanySection />
	// 	<LocationSection />
	// 	<ProjectSection />
	// 	<ScheduleSection />
	// </>
);

export default AddCompany;

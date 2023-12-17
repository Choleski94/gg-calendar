import React from 'react'; 

const useOrganizationOptions = React.useMemo(() => {

	const typeOptions = React.useMemo(() => ([
		{
			label: 'University',
			value: 'UNI'
		},
		{
			label: 'Trust',
			value: 'TRUST'
		},
		{
			label: 'Syndicate',
			value: 'SYND'
		},
		{
			label: 'Special Purpose Company',
			value: 'SPC'
		},
		{
			label: 'Public Limited Company',
			value: 'PLC'
		},
		{
			label: 'Organization',
			value: 'ORG'
		},
		{
			label: 'Non-Profit Organization',
			value: 'NPO'
		},
		{
			label: 'Non-Governmental Organization',
			value: 'NGO'
		},
		{
			label: 'Limited Partnership',
			value: 'LP'
		},
		{
			label: 'Limited Life Company',
			value: 'LLC-2'
		},
		{
			label: 'Limited Liability Partnership',
			value: 'LLP'
		},
		{
			label: 'Limited Liability Partnership',
			value: 'LL-1'
		},
		{
			label: 'Limited Liability Company',
			value: 'LLC'
		},
		{
			label: 'Limited',
			value: 'LTD'
		},
		{
			label: 'Institute',
			value: 'INST'
		},
		{
			label: 'Incorporated',
			value: 'INC'
		},
		{
			label: 'Government Agency',
			value: 'GOV'
		},
		{
			label: 'Foundation',
			value: 'FDN'
		},
		{
			label: 'Educational Institution',
			value: 'EDU'
		},
		{
			label: 'Corporation',
			value: 'CORP'
		},
		{
			label: 'Cooperative',
			value: 'CO-OP'
		},
		{
			label: 'Company',
			value: 'CO'
		},
		{
			label: 'Club or Social Organization',
			value: 'CLUB'
		},
		{
			label: 'Charity',
			value: 'CHAR'
		},
		{
			label: 'Association',
			value: 'ASSOC'
		},
		{
			label: 'Other',
			value: 'OTHER'
		},
	]), []);

	const sectorOptions = React.useMemo(() => ([
		{
			label: 'Transportation and Logistics',
			value: 'TRANSPORTATION_LOGISTICS'
		},
		{
			label: 'Retail and Consumer Goods',
			value: 'RETAIL_CONSUMER_GOODS'
		},
		{
			label: 'Repair Appliances',
			value: 'REPAIR_APPLIANCES'
		},
		{
			label: 'Manufacturing',
			value: 'MANUFACTURING'
		},
		{
			label: 'Information Technology and Telecommunications',
			value: 'INFORMATION_TECHNOLOGY_TELECOMMUNICATIONS'
		},
		{
			label: 'Health Care and Life Sciences',
			value: 'HEALTH_CARE_LIFE_SCIENCES'
		},
		{
			label: 'Financial Services',
			value: 'FINANCIAL_SERVICES'
		},
		{
			label: 'Engineering',
			value: 'ENGINEERING'
		},
		{
			label: 'Creative Industries',
			value: 'CREATIVE_INDUSTRIES'
		},
		{
			label: 'Construction',
			value: 'CONSTRUCTION'
		},
		{
			label: 'Agriculture and Agri-food',
			value: 'AGRICULTURE_AGRI_FOOD'
		},
		{
			label: 'Other',
			value: 'OTHER'
		},
	]), []);

	return {
		typeOptions,
		sectorOptions
	};
}, []);

export default useOrganizationOptions;

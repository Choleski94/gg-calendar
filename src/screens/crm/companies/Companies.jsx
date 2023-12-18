import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import CompanyInfo from './CompanyInfo';
import CompanyControl from './CompanyControl';

const CompaniesScreen = () => {
	const navigate = useNavigate();

	const { id: companyId = '' } = useParams();

	const setCompanyId = (id = '') => navigate(`/crm/companies/${id}`);

	return (
		companyId && companyId.length ? (
			<CompanyInfo 
				companyId={companyId} 
				setCompanyId={setCompanyId} 
			/>
		) : (
			<CompanyControl
				companyId={companyId} 
				setCompanyId={setCompanyId} 
			/>
		)
	);
};

export default CompaniesScreen;

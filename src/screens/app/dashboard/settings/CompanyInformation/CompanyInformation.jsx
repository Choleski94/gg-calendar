import React from 'react';

import { Card } from '@components';

import withCompanyInformation from './withCompanyInformation';
import CompanyInformationForm from './CompanyInformationForm';
import CompanyInformationOpeningHoursForm from './CompanyInformationOpeningHoursForm';

const CompanyInformation = ({ loading, payload, typeOptions, sectorOptions }) => (
	<>
		<Card>
			<Card.Body>
				<div className="row">
					<div className="col-lg-12">
						<CompanyInformationForm 
							defaultValue={payload}
							typeOptions={typeOptions}
							sectorOptions={sectorOptions}
						/>
					</div>
				</div>
			</Card.Body>
		</Card>
		<Card>
			<Card.Body>
				<div className="row">
					<div className="col-lg-12">
						<CompanyInformationOpeningHoursForm />
					</div>
				</div>
			</Card.Body>
		</Card>
	</>
);

export default withCompanyInformation(CompanyInformation);

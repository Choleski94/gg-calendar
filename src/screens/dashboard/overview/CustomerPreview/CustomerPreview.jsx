import React from 'react';
import { Card, PieChart } from '@components';
import formatMessage from '@utils/formatMessage';

export const pieData = [
	{ label: 'customer-0', value: 0, color: '#00D285' },
	{ label: 'customer-1', value: 0, color: '#1BABFE' },
	{ label: 'customer-2', value: 0, color: '#FFFFFF' },
];              
                
export const pieColors = pieData.map(({ color }) => color);

const CustomerPreview = ({ data = {} }) => (
	<Card>
		<Card.Body>
			<Card.Title>
				Customer Preview
			</Card.Title>
			<div className="mt-4 mb-1 text-center d-block mx-auto">
				<PieChart
					hideText
					width={170}
					height={170}
					arcRadius={50}
					borderWidth={3}
					innerRadius={55}
					outerRadius={80}
					colors={pieColors}
					borderColor="#FFF"
					data={[{
						color: '#00C9A7',
						label: 'Customers', 
						value: data?.new, 
					}]}
				/>
			</div>
			<span className="mt-2 text-dark text-center d-block mx-auto" >
				New Customer this Month
			</span>
			<span className="mt-4 mb-3 divider-center">
				Active Customer
			</span>
			<div className="text-dark text-center d-block mx-auto" >
				<h3 className="mt-1 mb-3 text-success">
					{(data?.active || 0).toFixed(2)} %
				</h3>
			</div>
		</Card.Body>
	</Card>
);

export default CustomerPreview;


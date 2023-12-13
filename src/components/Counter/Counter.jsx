import React from 'react';

const Count = ({ number, duration }) => {
	const [ count, setCount ] = React.useState('0');

	React.useEffect(() => {
		let start = 0;

		const stringNum = String(number);

		// first three numbers from props
		const end = parseInt(stringNum.substring(0, 3));

		// if zero, return
		if (start === end) return;

		// find duration per increment
		let totalMilSecDur = parseInt(duration);
		let incrementTime = (totalMilSecDur / end) * 1000;

		// timer increments start counter 
		// then updates count
		// ends if start reaches end
		let timer = setInterval(() => {
			start += 1;
			setCount(String(start) + stringNum.substring(3));
			if (start === end) clearInterval(timer)       
		}, incrementTime);

		// dependency array
	}, [ number, duration ]);

	return count;
}

export default Count;

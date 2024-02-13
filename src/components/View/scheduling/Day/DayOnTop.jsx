import React from 'react';

const DayOnTop = ({}) => {
	// Evaluate gmt offset.
	const gmtOffset = React.useMemo(() => {
		let gmtDelta = new Date().getTimezoneOffset() / 60;
		if (gmtDelta < 0) {
			gmtDelta = `+${Math.abs(gmtDelta)}`;
		}
		return gmtDelta;
	}, []);

	return (
		<div className="dv-ontop-row2">
			<div className="dv-gmt">
				UTC {gmtOffset}
			</div>
			<div className="dayview--ontop-container" data-dv-top="true" />
		</div>
	);
}

export default DayOnTop;

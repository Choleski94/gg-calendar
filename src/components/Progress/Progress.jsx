import React from 'react';

const Progress = ({ title = '', percent = 0, type = 'primary', withPercent = false, showZero = false }) => {

	const percentNum = Number(percent);

	return (
		<>
			{(title || withPercent) && (
				<div className="d-flex justify-content-between align-items-center mt-3">
					{title && (
						<p className="mb-2">
							{title}
						</p>
					)}
					{withPercent && (
						<span className="mb-2" style={{ width: '36px', textAlign: 'right' }}>
							{percentNum}%
						</span>
					)}
				</div>
			)}
			{(showZero || (percentNum > 0)) ? (
				<div className="progress flex-grow-1">
					<div 
						className={`progress-bar bg-${type}`} 
						style={{ width: `${percentNum}%` }} 
						aria-valuenow={percentNum} 
						aria-valuemax={100} 
						role="progressbar" 
						aria-valuemin={0} 
					/>
				</div>
			) : null}
		</>
	);
}

export default Progress;

import React from 'react';

export const useAccessOptions = (options = []) => {
	const totalRole = React.useMemo(() => (
		(options || []).length
	), [ options ]);

	const totalActiveRole = React.useMemo(() => {
		const targetOptions = (
			options.filter(({ enabled }) => enabled)
		);
		return (targetOptions || []).length;
	}, [ options ]);

	const totalInactiveRole = React.useMemo(() => {
		const targetOptions = (
			options.filter(({ enabled }) => !enabled)
		);
		return (targetOptions || []).length;
	}, [ options ]);

	return {
		totalRole,
		totalActiveRole,
		totalInactiveRole,
	}
}

export default useAccessOptions;

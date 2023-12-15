import React from 'react';
import styled from 'styled-components';

import InlineError from './../InlineError';

const CheckboxWrapper = ({ children }) => (
	<div className="form-check">
		{children}
	</div>
);

const Input = ({
	onChange,
	name = '',
	value = '',
	label = '',
	error = null,
	type = 'text',
	required = '',
	className = '',
	secondaryLabel = '',
	...rest
}) => {
	const labelClassName = React.useMemo(() => (
		`form-label ${secondaryLabel ? '' : 'w-100'}`
	), [ secondaryLabel ]);

	const inputClassName = React.useMemo(() => (
		error ? `${className} is-invalid` : className
	), [ error ]);

	const inputComponent = (
		<>
			{label && type !== 'checkbox' && (
				<label className={labelClassName} htmlFor={name}>
					{label}
				</label>
			)}
			{secondaryLabel && type !== 'checkbox' && (
				<>
					&nbsp;
					<label className="form-label-secondary" htmlFor={name}>
						{secondaryLabel}
					</label>
				</>
			)}

			<input
				className={inputClassName}
				required={required}
				onChange={onChange}
				checked={value}
				value={value}
				name={name}
				type={type}
				{...rest}
			/>
			{label && type === 'checkbox' && (
				<label className="form-label" htmlFor={name}>
					{label}
				</label>
			)}
		</>
	);

	return (
		type === 'checkbox' ? (
			<>
				<CheckboxWrapper>
					{inputComponent}
				</CheckboxWrapper>
				{error && <InlineError text={error} />}
			</>
		) : (
			<>
				{inputComponent}
				{error && <InlineError text={error} />}
			</>
		)
	);
}

export default Input;

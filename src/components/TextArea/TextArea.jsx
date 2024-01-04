import styled from 'styled-components';
import React from 'react';

import InlineError from './../InlineError';

const TextArea = ({
	onChange,
	rows = 10,
	name = '',
	value = '',
	label = '',
	error = null,
	type = 'text',
	required = '',
	disabled = false,
	secondaryLabel = '',
	...rest
}) => (
	<>
		{label && (
			<label className="form-label" htmlFor={name}>
				{label}
				{secondaryLabel && (
					<>
						&nbsp;
						<span className="form-label-secondary">
							{secondaryLabel}
						</span>
					</>
				)}
			</label>
		)}
		<textarea
			className="form-control"
			required={required}
			onChange={onChange}
			disabled={disabled}
			value={value}
			name={name}
			type={type}
			rows={Number(rows) || 10}
			{...rest}
		/>
		{error && <InlineError text={error} />}
	</>
);

export default TextArea;

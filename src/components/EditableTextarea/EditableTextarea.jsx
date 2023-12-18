import React from 'react';

import ButtonToggle from '../ButtonToggle';

const noteStyle = { 'maxWidth': '300px', 'width': '300px' };

const EditableTextarea = ({ defaultValue = '', handleOnSave = () => null }) => {
	const [ value, setValue ] = React.useState(defaultValue);
	const [ isEditing, setIsEditing ] = React.useState(false);

	const _handleHasPrimary = (flag) => {
		const newFlag = !flag;

		setIsEditing(newFlag);

		if (!newFlag) {
			handleOnSave(value);
		}
	};

	const _handleTextAreaClick = (e) => e.stopPropagation();

	const _handleChange = (event) => setValue(event.target.value);

	return (
		<span className="row">
			<div className="col-md-10 pl-0">
				<br />
				{isEditing ? (
					<>
						<textarea
							value={value}
							style={noteStyle}
							onChange={_handleChange}
							className="form-control"
							onClick={_handleTextAreaClick}
						/>
					</>
				) : (
					<div style={noteStyle}>
						{value}
					</div>
				)}
				<br />
			</div>
			<div className="col-md-2">
				<br />
				<ButtonToggle
					secondaryText="Save"
					hasPrimary={_handleHasPrimary}
					primaryText={value && value.length ? 'Edit' : 'Add'}
				/>
				<br />
				<br />
			</div>
		</span>
	);
};

export default EditableTextarea; 

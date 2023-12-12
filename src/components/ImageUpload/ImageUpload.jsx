import React from 'react';

const DEFAULT_ASSETS = {
	BUSINESS: '/assets/img/160x160/img2.jpg',
	INDIVIDUAL: '/assets/img/160x160/img1.jpg',
};

const ImageUpload = ({ id = '', name = '', value = '', type = 'INDIVIDUAL', deleteText = 'Delete', onChange = () => null }) => {
	const [ base64Data, setBase64Data ] = React.useState(null);

	const inputId = React.useMemo(() => (
		id || 'image-id'
	), [ id ]);

	const inputName = React.useMemo(() => (
		name || 'image-file'
	), [ name ]);

	React.useEffect(() => {
		if (value && value.length) {
			setBase64Data(value);
		}
	}, [ value ]);

	const handleReaderLoaded = (e) => {
		setBase64Data(e.target.result);
		// ⚠️ This is a Hack ⚠️
		onChange(Object.assign({}, {
			target: {
				...e.target,
				name: inputName,
				result: e.target.result,
			}
		}));
	}

	const onFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = handleReaderLoaded;
			reader.readAsDataURL(file);
		}
	};

	const onDeleteClick = (e) => setBase64Data(null);

	return (
		<div className="d-flex align-items-center">
			<label className="avatar avatar-xl avatar-circle avatar-uploader me-5">
				<img
					className="avatar-img"
					src={base64Data || DEFAULT_ASSETS[type]}
				/>
				<input
					type="file"
					id={inputId}
					name={inputName}
					onChange={onFileChange}
					accept=".jpg, .jpeg, .png"
					className="js-file-attach avatar-uploader-input"
				/>
				<span className="avatar-uploader-trigger">
					<i className="bi-pencil-fill avatar-uploader-icon shadow-sm" />
				</span>
			</label>
			<button type="button" className="js-file-attach-reset-img btn btn-white" onClick={onDeleteClick}>
				{deleteText}
			</button>
		</div>
	);
};

export default ImageUpload;

import React from 'react';

import { CATEGORY_COLORS } from '@constants/calendar';

export const setActiveColorStyle = (color = '') => ({
	background: color,
});

const CreateCategory = ({
	onClose = () => null,
}) => {
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = React.useState({ name: '', color: '#2C52BA' });

	const validate = (payload = {}) => {
		const errs = {};

		if (!payload?.name || !payload?.name.length) {
			errs.name = 'Category name is required';
		}

		return errs;
	}

	const handleChange = (e) => setData({
		[e.target.name]: e.target.value
	});

	const handleColor = (color) => setData({
		...data, color,
	});

	const handleSubmit = () => {
		const errs = validate(data);

		const hasError = Object.keys(errs || {}).length;

		if (hasError) return null;

		console.log('New category:::', data);
	}

	return (
		<>
			<aside className="category__form" style={{ left: "211px", top: "314px" }}>
				<div className="category__form--body">
					<div className="ctg-input--err hide-ctg-err" />
					<input
						placeholder="Create new category"
						className="category__form-input"
						onChange={handleChange}
						value={data?.name}
						maxLength={20}
						minLength={1}
						type="text"
						name="name"
						required
					/>
					<div className="color__picker">
						<div className="color-picker__header">
							<div
								className="color-picker__title"
								style={setActiveColorStyle(data?.color)}
							>
								color
							</div>
						</div>
						<div className="color-picker__options">
							{CATEGORY_COLORS.map((hexColor) => (
								<div
									key={hexColor}
									data-color-hex={hexColor}
									className="color-picker--option"
									style={{ backgroundColor: hexColor }}
									onClick={() => handleColor(hexColor)}
								>
									{(hexColor === data?.color) ? (
										<svg
											width="18px"
											height="18px"
											viewBox="0 0 24 24"
											fill="var(--taskcolor"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
										</svg>
									) : null}
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="category__form--footer">
					<button
						className="btn-root category__form--cancel"
						aria-label="button"
						onClick={onClose}
						role="button"
					>
						Cancel
					</button>
					{" "}
					<button
						className="btn-root category__form--submit"
						onClick={handleSubmit}
						aria-label="button"
						role="button"
					>
						Save
					</button>
				</div>
			</aside>
			<aside 
				className="category__form-overlay"
				onClick={onClose}
			/>
		</>
	);
}

export default CreateCategory;

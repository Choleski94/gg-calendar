import React from 'react';

import { CATEGORY_COLORS } from '@constants/calendar';

export const setActiveColorStyle = (color = '') => ({
	background: color,
});

const CreateCategory = ({
	onClose = () => null,
}) => {
	const [ name, setName ] = React.useState('');
	const [ error, setError ] = React.useState('');
	const [ activeColor, setActiveColor ] = React.useState('#2C52BA');

	const handleChange = (e) => {
		setName(e.target.value)
	}

	// Category name is required

	return (
		<>
			<aside className="category__form" style={{ left: "211px", top: "314px" }}>
				<div className="category__form--body">
					<div className="ctg-input--err hide-ctg-err" />
					<input
						placeholder="Create new category"
						className="category__form-input"
						onChange={handleChange}
						maxLength={20}
						minLength={1}
						value={name}
						type="text"
						required
					/>
					<div className="color__picker">
						<div className="color-picker__header">
							<div
								className="color-picker__title"
								style={setActiveColorStyle(activeColor)}
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
									onClick={() => setActiveColor(hexColor)}
								>
									{(hexColor === activeColor) ? (
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
					</button>{" "}
					<button
						className="btn-root category__form--submit"
						role="button"
						aria-label="button"
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

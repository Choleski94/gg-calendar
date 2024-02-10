import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCollapsed, selectCategories } from '@store/selectors/app';

export const setCategoryOptionBtnStyle = (color = '') => ({
	backgroundColor: color,
	border: `2px solid ${color}`,
})

const CategoryOption = ({ id = '', text = '', color = '' }) => {
	const dispatch = useDispatch();

	const categories = useSelector(selectCategories);
	const { category: isCategoryCollapsed } = useSelector(selectCollapsed);

	return (
		<div className="sbch-form--item">
			<div className="sbch-form--item__col">
				<div className="sbch-form--item__checkbox--wrapper">
					<button
						data-sbch-checked="true"
						data-sbch-category="default"
						className="sbch-form--item__checkbox"
						style={setCategoryOptionBtnStyle(color)}
					>
						<svg
							width="18px"
							height="18px"
							viewBox="0 0 24 24"
							fill="var(--taskcolor0)"
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
					</button>
				</div>
				<span className="sbch-form--item__label">
					{text}
				</span>
			</div>
			<div className="sbch-form--item__col--actions">
				<button
					data-sbch-color="#2C52BA"
					data-sbch-category="default"
					className="sbch-col--actions__edit-icon sbch-col--actions__edit-icon--immutable"
				>
					<svg height={20} width={20} fill="var(--white3)">
						<path d="M10 16q-.625 0-1.062-.438Q8.5 15.125 8.5 14.5t.438-1.062Q9.375 13 10 13t1.062.438q.438.437.438 1.062t-.438 1.062Q10.625 16 10 16Zm0-4.5q-.625 0-1.062-.438Q8.5 10.625 8.5 10t.438-1.062Q9.375 8.5 10 8.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438ZM10 7q-.625 0-1.062-.438Q8.5 6.125 8.5 5.5t.438-1.062Q9.375 4 10 4t1.062.438q.438.437.438 1.062t-.438 1.062Q10.625 7 10 7Z" />
					</svg>
				</button>
			</div>
		</div>
	);
}

export default CategoryOption;

import React from 'react';

const Pagination = ({ 
	currentPage,
	options = [], 
	elementsPerPage = 25, 
	setCurrentPage = () => null,
}) => {
	const [elements, setElements] = React.useState([]);
	const [pageBound, setPageBound] = React.useState(3);
	const [upperPageBound, setUpperPageBound] = React.useState(3);
	const [lowerPageBound, setLowerPageBound] = React.useState(0);
	const [isNextBtnActive, setIsNextBtnActive] = React.useState('');
	const [isPrevBtnActive, setIsPrevBtnActive] = React.useState('disabled');

	const setDefaultData = () => {
		setPageBound(3);
		setCurrentPage(1);
		setUpperPageBound(3);
		setLowerPageBound(0);
		setElements(options);
		setIsNextBtnActive('');
		setIsPrevBtnActive('disabled');
	};

	React.useEffect(() => {
		setDefaultData();
	}, [options]);

	const handleClick = e => {
		let listid = Number(e.target.id);
		setCurrentPage(listid);
		setPrevAndNextBtnClass(listid);
	};

	const setPrevAndNextBtnClass = (listid) => {
		let totalPage = Math.ceil(elements.length / elementsPerPage);

		setIsNextBtnActive('disabled');
		setIsPrevBtnActive('disabled');

		if (totalPage === listid && totalPage > 1) {
			setIsPrevBtnActive('');
		} else if (listid === 1 && totalPage > 1) {
			setIsNextBtnActive('');
		} else if (totalPage > 1) {
			setIsNextBtnActive('');
			setIsPrevBtnActive('');
		}
	};

	const btnIncrementClick = () => {
		setUpperPageBound(upperPageBound + pageBound);
		setLowerPageBound(lowerPageBound + pageBound);

		let listid = upperPageBound + 1;

		setCurrentPage(listid);
		setPrevAndNextBtnClass(listid);
	};

	const btnDecrementClick = () => {
		setUpperPageBound(upperPageBound - pageBound);
		setLowerPageBound(lowerPageBound - pageBound);

		let listid = upperPageBound - pageBound;

		setCurrentPage(listid);
		setPrevAndNextBtnClass(listid);
	};

	const btnPrevClick = () => {
		if ((currentPage - 1) % (pageBound === 0)) {
			setUpperPageBound(upperPageBound - pageBound);
			setLowerPageBound(lowerPageBound - pageBound);
		}

		let listid = currentPage - 1;

		setCurrentPage(listid);
		setPrevAndNextBtnClass(listid);
	};

	const btnNextClick = () => {
		if (currentPage + 1 > upperPageBound) {
			setUpperPageBound(upperPageBound + pageBound);
			setLowerPageBound(lowerPageBound + pageBound);
		}

		let listid = currentPage + 1;

		setCurrentPage(listid);
		setPrevAndNextBtnClass(listid);
	};

	// const elements = options;

	// Logic for displaying current elements list
	const indexOfLastItem = currentPage * elementsPerPage;
	const indexOfFirstItem = indexOfLastItem - elementsPerPage;
	const currentItems = elements.slice(indexOfFirstItem, indexOfLastItem);

	// Logic for displaying page numbers
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(elements.length / elementsPerPage); i += 1) {
		pageNumbers.push(i);
	}

	const renderPageNumbers = pageNumbers.map((number) => {
		var pageNum;

		if (number === 1 && currentPage === 1) {
			pageNum = (
				<li key={number} className="page-item active">
					{/* <a id={number} className="page-link" href onClick={handleClick}> */}
					<a className="page-link" href>
						{number}
					</a>
				</li>
			);
		} else if (number < upperPageBound + 1 && number > lowerPageBound) {
			pageNum = (
				<li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
					<a
						href
						id={number}
						className="page-link"
						onClick={handleClick}
					>
						{number}
					</a>
				</li>
			);
		}

		return pageNum;
	});

	let pageIncrementBtn = null;

	if (pageNumbers.length > upperPageBound) {
		pageIncrementBtn = (
			<li className="page-item">
				<a className="page-link" href onClick={btnIncrementClick}>
					&hellip;
				</a>
			</li>
		);
	}

	let pageDecrementBtn = null;

	if (lowerPageBound >= 1) {
		pageDecrementBtn = (
			<li className="page-item">
				<a className="page-link" href onClick={btnDecrementClick}>
					&hellip;
				</a>
			</li>
		);
	}

	let renderPrevBtn = null;

	if (isPrevBtnActive === 'disabled') {
		renderPrevBtn = (
			<li className={`page-item ${isPrevBtnActive}`}>
				<a className="page-link" href aria-label="Previous">
					Prev
				</a>
			</li>
		);
	} else {
		renderPrevBtn = (
			<li className={`page-item ${isPrevBtnActive}`}>
				<a
					href
					id="btnPrev"
					className="page-link"
					aria-label="Previous"
					onClick={btnPrevClick}
				>
					Prev
				</a>
			</li>
		);
	}

	let renderNextBtn = null;

	if (isNextBtnActive === 'disabled') {
		renderNextBtn = (
			<li className="page-item">
				<a className={`page-link ${isNextBtnActive}`} href aria-label="Next">
					Next
				</a>
			</li>
		);
	} else {
		renderNextBtn = (
			<li className="page-item">
				<a
					href
					id="btnNext"
					aria-label="Next"
					onClick={btnNextClick}
					className={`page-link ${isNextBtnActive}`}
				>
					Next
				</a>
			</li>
		);
	}

	// currentPage(currentPage);

	return (
		<nav aria-label="Page navigation" className="nav justify-content-center mt-5 pagination-centered">
			<ul className="pagination">
				{renderPrevBtn}
				{pageDecrementBtn}
				{renderPageNumbers}
				{pageIncrementBtn}
				{renderNextBtn}
			</ul>
		</nav>
	);
}

export default Pagination;

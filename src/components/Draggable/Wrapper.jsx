import React from 'react';

const Wrapper = ({ children }) => {
	const wrapperRef = React.useRef(null);

	const [ offsetTop, setOffsetTop ] = React.useState(0);
	const [ scrollTop, setScrollTop ] = React.useState(0);

	React.useEffect(() => {
		const handleScroll = () => {
			if (wrapperRef.current) {
				// Get the offsetTop of the wrapper element
				const newOffsetTop = wrapperRef.current.offsetTop;
				const newScrollTop = wrapperRef.current.scrollTop;

				setOffsetTop(newOffsetTop);
				setScrollTop(newScrollTop);

				console.log({
					newOffsetTop,
					newScrollTop
				});
			}
		};

		// Attach the event listener to handle scroll
		window.addEventListener('scroll', handleScroll);

		// Initial calculation when component mounts
		handleScroll();

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return React.cloneElement(children, { ref: wrapperRef });

	// return (
	// 	<div ref={wrapperRef}>
	// 		{children(offsetTop)}
	// 	</div>
	// );
};

export default Wrapper;

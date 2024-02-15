import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import RGL, { WidthProvider } from 'react-grid-layout';

import { selectDate } from '@store/selectors/app';

import DayCell from './DayCell';
import useDayGrid from './useDayGrid';
import { Day } from './DayGrid.controller';

const GridLayout = WidthProvider(RGL);

const DEFAULT_RESIZE_HANDLES = ['sw', 'nw', 'se', 'ne' ];

const withResizeHandles = (payload) => (
	payload.map((xItem) => ({
		...xItem, 
		resizeHandles: DEFAULT_RESIZE_HANDLES
	}))
);

const items = [
	{ i: 'a_button', x: 0, y: 0, w: 1, h: 2 },
	{ i: 'b_button', x: 1, y: 0, w: 3, h: 12 },
	{ i: 'c_button', x: 4, y: 0, w: 3, h: 1 },
	{ i: 'd_button', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
]

const DayGrid = () => {
	const { getDayEntries } = useDayGrid();

	const [ layout, setLayout ] = React.useState([]);

	const {
		day: selectedDay,
		month: selectedMonth,
		year: selectedYear,
	} = useSelector(selectDate);

	const entries = React.useMemo(() => getDayEntries(
		new Date(
			selectedYear, selectedMonth, selectedDay
		)
	), [ selectedYear, selectedMonth, selectedDay ]);

	const [ topBoxes, allBoxes ] = React.useMemo(() => {
		const boxes = new Day(entries.day, entries.allDay);
		return [ boxes.getBoxesTop(), boxes.getBoxes() ];
	}, [ entries ]);

	//
	const onDrop = (layout, layoutItem) => {
		console.log(`Dropped`, layout, layoutItem);
		// // console.log(`Dropped element props:\n${JSON.stringify(layoutItem, ['x', 'y', 'w', 'h'], 2)}`);
		// const newLayoutItem = Object.assign(layoutItem, {
		// 	i: tmpLayoutItemId,
		// 	resizeHandles: DEFAULT_RESIZE_HANDLES,
		// });

		// setLayout([
		// 	...new Map([
		// 		...layout,
		// 		newLayoutItem,
		// 	].map((item) => [item.i, item])).values()
		// ]);
		// dispatch(actions.editorSet(newLayoutItem));
		// setTmpLayoutItemId(null);
	};

	const onLayoutChange = (layout, layouts) => {
		// Track client layout change.
		// Grid changes (e.g. i, x, y)
		// Properties changes (e.g. i, h, w)
		console.log('LAYOUT:::', layout, layouts);
	};

	const onDragStart = (layout, layoutItem, _event) => {
		console.log('On drag start:::', layout, layoutItem, _event);

		// if (!UNSUPPORTED_LAYOUT_IDS.includes(layoutItem.i)) {
		// 	dispatch(actions.editorSet(layoutItem));
		// 	return null;
		// }
		// setTmpLayoutItemId([uuidv4(), state.app.activeTool].join('_'));
	};


	const generateLayout = () => {
		console.log('Generate layout....');

		const availableHandles = ["s", "w", "e", "n", "sw", "nw", "se", "ne"];

		return _.map(new Array(items), (item, i) => {
			const y = Math.ceil(Math.random() * 4) + 1;
			return {
				x: (i * 2) % cols,
				y: Math.floor(i / 6) * y,
				w: 2,
				h: y,
				i: i.toString(),
				resizeHandles: availableHandles
			};
		});
	}

	const onLayoutChangeHandler = React.useCallback((newLayout) => {
		setLayout(newLayout);
		onLayoutChange(newLayout);
	}, [ onLayoutChange ]);

	return (
		<GridLayout
			cols={1}
			layout={layout}
			rowHeight={500}
			className="dayview--main-grid"
			onLayoutChange={onLayoutChangeHandler}
		>
			{allBoxes.map(({ id, ...rest}) => (
				<DayCell 
					id={id} 
					key={id} 
					{...rest}
				/>
			))}
		</GridLayout>
	);

	// return (
	// 	<GridLayout
	// 		cols={12}
	// 		isDroppable
	// 		allowOverlap
	// 		width={1200}
	// 		rowHeight={30}
	// 		onDrop={onDrop}
	// 		data-dv-top="false"
	// 		verticalCompact={false}
	// 		onDragStart={onDragStart}
	// 		className="dayview--main-grid"
	// 		onLayoutChange={onLayoutChange}
	// 		layout={withResizeHandles(layout)}
	// 	>
	// 		{allBoxes.map(({ id, ...rest}) => (
	// 			<DayCell 
	// 				id={id} 
	// 				key={id} 
	// 				{...rest}
	// 			/>
	// 		))}
	// 	</GridLayout>
	// );
}

export default DayGrid;

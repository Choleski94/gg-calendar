import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import RGL, { WidthProvider } from 'react-grid-layout';

import { selectDate } from '@store/selectors/app';

import DayCell from './DayCell';
import useDayGrid from './useDayGrid';
import { Day } from './DayGrid.controller';

const GridLayout = WidthProvider(RGL);

const initialLayout = [
	{ i: '1', id: '1', x: 0, y: 0, w: 1, h: 1 },
	{ i: '2', id: '2', x: 1, y: 0, w: 1, h: 1 },
	{ i: '3', id: '3', x: 2, y: 0, w: 1, h: 1 },
];

const parseBox = (payload = {}) => ({
	...payload,
	i: payload.id, x: 0, y: 0, w: 1, h: 2,
	resizeHandles: DEFAULT_RESIZE_HANDLES,
});

const DayGrid = () => {
	const { getDayEntries } = useDayGrid();
	const [ layout, setLayout ] = React.useState(initialLayout);

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

	const dayCellRefs = React.useMemo(() => allBoxes.map(() => (
		React.createRef())
	), [ allBoxes ]);

	// TODO: 
	const onLayoutChange = (newLayout) => {
		setLayout(newLayout);
	};

	const onLayoutChangeHandler = React.useCallback((newLayout) => {
		setLayout(newLayout);
		onLayoutChange(newLayout);
	}, [ onLayoutChange ]);

	return (
		<GridLayout
			cols={1}
			rowHeight={50}
                        layout={layout}
			preventCollision
                        resizeHandles={['s']}
			verticalCompact={false}
                        className="dayview--main-grid"
                        onLayoutChange={onLayoutChange}
		>
			{/* allBoxes.map(parseBox).map(({ id, ...rest}, cellIdx) => ( */}
			{layout.map((item, cellIdx) => (
				<div
					key={item.i}
					className="dv-box"
					data-dv-box-id={item.id}
					data-dv-box-category="default"
					style={{
						// top: "50px",
						// height: "50px",
						// left: "calc(0% + 0px)",
						width: "calc((100% - 4px) * 1)",
						backgroundColor: "rgb(44, 82, 186)",
					}}
				>
					<div className="dv-box__header">
						<div className="dv-box-title">
							Test {item.i}
						</div>
					</div>
					{/*
					<div className="dv-box__content">
						<span className="dv-box-time">1 – 2am</span>
					</div>
					<div className="dv-box-resize-s" />
					*/}
				</div>

				// <DayCell 
				// 	ref={dayCellRefs[cellIdx]}
				// 	id={id}  key={id} title={id}
				// 	{...rest}
				// />
			))}
		</GridLayout>
	);
}

export default DayGrid;

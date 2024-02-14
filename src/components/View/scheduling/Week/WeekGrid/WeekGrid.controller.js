/**
 * @class Week
 * 
 * @param {Array} dayEntries
 * @description Array of entries that span a single day.
 * 
 * @param {Array} allDayEntries
 * @description Array of entries that span multiple days.
 */
class Week {
	constructor (dayEntries, allDayEntries) {
		this.boxes = dayEntries;
		this.boxesTop = allDayEntries;
	}

	setAllBoxes(tempEntries) {
		this.boxes = tempEntries.day;
		this.boxesTop = tempEntries.allDay;
	}

	addBox(box) {
		this.boxes.push(box);
	}

	addBoxTop(box) {
		this.boxesTop.push(box);
	}

	getBox(id) {
		return this.boxes.find(box => box.id === id);
	}

	getBoxes() {
		return this.boxes;
	}

	getBoxesTop() {
		return this.boxesTop;
	}

	getLength() {
		return this.boxes.length;
	}

	getBoxesByColumn(col) {
		return this.boxes.filter(box => +box.coordinates.x == col);
	}

	getBoxesByColumnTop(col) {
		return this.boxesTop.filter(box => +box.coordinates.x == col);
	}

	getBoxesTopByDay(day) {
		return this.boxesTop.filter(box => +box.coordinates.y == day);
	}

	getBoxesTopLengths() {
		return this.getBoxesTop().reduce((a, c) => {
			let start = new Date(c.start);
			if (a[start.getDay()]) {
				a[start.getDay()]++;
			}
			else {
				a[start.getDay()] = 1;
			}
			return a;
		}, {});
	}

	getColumnsWithMultipleBoxes() {
		let temp = {};
		let columns = [];
		for (const box of this.boxes) {
			if (temp[box.coordinates.x]) {
				temp[box.coordinates.x]++;
				if (temp[box.coordinates.x] === 2) {
					columns.push(box.coordinates.x);
				}
			} else {
				temp[box.coordinates.x] = 1;
			}
		}
		return columns;
	}

	getEntriesByTitle(title) {
		return this.boxes.filter(box => box.title.toLowerCase().includes(title.toLowerCase()));
	}

	updateCoordinates(id, coordinates) {
		this.getBox(id).coordinates = coordinates;
	}

	sortByY(bxs) {
		return bxs.sort((a, b) => +a.coordinates.y - +b.coordinates.y);
	}

	checkForCollision(col) {
		const bxs = this.getBoxesByColumn(col);
		let overlaps = []; // a list to store the overlapping entries
		for (let i = 0; i < bxs.length; i++) {
			for (let j = i + 1; j < bxs.length; j++) {
				const e1 = bxs[i];
				const e2 = bxs[j];
				if (e1.coordinates.y < e2.coordinates.e && e1.coordinates.e > e2.coordinates.y) {
					if (!overlaps.includes(e1)) {
						overlaps.push(e1);
					}
					if (!overlaps.includes(e2)) {
						overlaps.push(e2);
					}
				}
			}
		}
		return overlaps.sort((a, b) => +a.coordinates.y - +b.coordinates.y)
	}

	// updateStore(store, id, weekArray) {
	// 	const boxEntry = this.getBox(id);
	// 	const coords = boxEntry.coordinates;
	// 	let boxstart = +coords.y * 15;
	// 	let boxend = +coords.e * 15;
	// 	let day = weekArray[+coords.x];

	// 	const startDate = new Date(day);
	// 	const starthours = Math.floor(boxstart / 60);
	// 	const startminutes = boxstart % 60;
	// 	startDate.setHours(starthours);
	// 	startDate.setMinutes(startminutes);

	// 	const endDate = new Date(day);
	// 	const endhours = Math.floor(boxend / 60);
	// 	const endminutes = boxend % 60;
	// 	endDate.setHours(endhours);
	// 	endDate.setMinutes(endminutes);

	// 	store.updateEntry(id, {
	// 		start: startDate,
	// 		end: endDate,
	// 	});
	// }
}

export {
	Week,
};
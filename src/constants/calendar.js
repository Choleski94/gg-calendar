export const CALENDAR_SHORTCUTS = {
	D: 'D',
	W: 'W',
	M: 'M',
	Y: 'Y',
	L: 'L',
	ESCAPE: 'ESCAPE',
}

export const BASE_CALENDAR_VIEWS = {
	DAY: 'DAY',
	WEEK: 'WEEK',
	MONTH: 'MONTH',
	YEAR: 'YEAR',
	LIST: 'LIST',
}

export const BASE_CALENDAR_KEYS = Object.keys(BASE_CALENDAR_VIEWS || {});

export const CALENDAR_VIEWS = { ...BASE_CALENDAR_VIEWS, ESCAPE: 'ESCAPE' }

export const CALENDAR_VIEW_OPTIONS = [
	{
		id: CALENDAR_SHORTCUTS.D,
		slug: CALENDAR_VIEWS.DAY,
		text: 'Day',
	},
	{
		id: CALENDAR_SHORTCUTS.W,
		slug: CALENDAR_VIEWS.WEEK,
		text: 'Week',
	},
	{
		id: CALENDAR_SHORTCUTS.M,
		slug: CALENDAR_VIEWS.MONTH,
		text: 'Month',
	},
	{
		id: CALENDAR_SHORTCUTS.Y,
		slug: CALENDAR_VIEWS.YEAR,
		text: 'Year',
	},
	{
		id: CALENDAR_SHORTCUTS.L,
		slug: CALENDAR_VIEWS.LIST,
		text: 'List',
	}
]

export default {
	CALENDAR_VIEWS,
	CALENDAR_SHORTCUTS,
	BASE_CALENDAR_KEYS,
	BASE_CALENDAR_VIEWS,
	CALENDAR_VIEW_OPTIONS,
}

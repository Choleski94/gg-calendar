import React from 'react';

import api from '@api';
import { DEFAULT_TIME_FORMAT } from '@constants';
import { getTodayDateRange, formatDate } from '@utils';
import EditableTextarea from '@components/EditableTextarea';
import { CALL_NAV_TABS, CALL_MISSING_OUTCOME } from '@constants/calls';
import { Card, Badge, Icons, Table, NavTab, Tooltip } from '@components';

// Render
import {
	renderTime,
	renderPhone,
	renderCalled,
	renderStatus,
	renderRoutedTo,
	renderDuration,
	renderCallDirection,
} from './CallOverview.controller';
import useCallMetrics from './hooks/useCallMetrics';
import useCallOptions from './hooks/useCallOptions';
import useCallFilters from './hooks/useCallFilters';
import useLocalizeContent from './hooks/useLocalizeContent';
import useCallUserStatistics from './hooks/useCallUserStatistics';

const [ todayStartDate, todayEndDate ] = getTodayDateRange();

const CallOVerview = () => {
	const [ options, setOptions ] = React.useState([]);
	const [ tmpNotes, setTmpNotes ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showDetail, setShowDetail ] = React.useState(false);
	const [ currentSection, setCurrentSection ] = React.useState(CALL_NAV_TABS.LOG);
	const [ dateRange, setDateRange ] = React.useState([ todayStartDate, todayEndDate ]);

	/* Filters */
	const [ filterUsers, setFilterUsers ] = React.useState([]);
	const [ filterReasons, setFilterReasons ] = React.useState([]);
	const [ filterStatuses, setFilterStatuses ] = React.useState([]);
	const [ filterOutcomes, setFilterOutcomes ] = React.useState([]);
	const [ filterSalesLead, setFilterSalesLead ] = React.useState([]);

	const content = useLocalizeContent();

	const { userOptions, reasonOptions, outcomeOptions, salesLeadOptions, statusOptions, directionOptions } = useCallOptions(options);

	const handleCallNote = (id, note = '', prevNote = '') => {
		if (!id || !note || !note.length || note === prevNote) {
			return null;
		}

		api.calls.addNote({ id, note }).then(() => {
			const cloneNotes = { ...tmpNotes };
			cloneNotes[id] = note;
			setTmpNotes(cloneNotes);
		});
	};

	const fetchPhoneCalls = () => {
		setLoading(true);

		if (dateRange && dateRange.length) {
			const startDate = new Date(dateRange[0]);
			const endDate = new Date(dateRange[1]);

			// TODO: Enforce date format locale.
			const start_date = formatDate(startDate.toLocaleString());
			const end_date = formatDate(endDate.toLocaleString());
			
			const start_time = startDate.toLocaleTimeString(DEFAULT_TIME_FORMAT);
			const end_time = endDate.toLocaleTimeString(DEFAULT_TIME_FORMAT);

			setOptions([]);

			api.calls.list({ start_date, end_date, start_time, end_time }).then((payload) => {
				setLoading(false);
				setOptions(payload);
			}).catch(() => {
				setLoading(false);
			});
		}
	}

	React.useEffect(() => {
		fetchPhoneCalls();
	}, [ dateRange ]);

	const clearFilters = () => {
		setFilterUsers([]);
		setFilterReasons([]);
		setFilterStatuses([]);
		setFilterOutcomes([]);
		setFilterSalesLead([]);
	};

	const handleDateRangeClean = () => setDateRange([ todayStartDate, todayEndDate ]);

	const setActiveSection = (section = '') => {
		if (section !== currentSection) {
			if (section === CALL_NAV_TABS.STATISTICS) {
				clearFilters();
			}
			setCurrentSection(section);
		}
	};

	const handleDateRangeChange = (dateRangeElts = []) => dateRangeElts?.length && setDateRange(dateRangeElts);

	const onRefreshClick = () => {
		if (!loading) {
			fetchPhoneCalls();
		}
	};

        const onFilterChange = {
		'user': (currentUserOptions) => setFilterUsers(currentUserOptions.map(({ value }) => value)),
		'reason': (currentReasonOptions) => setFilterReasons(currentReasonOptions.map(({ value }) => value)),
		'status':  (currentStatusOptions) => setFilterStatuses(currentStatusOptions.map(({ value }) => value)),
		'outcome': (currentOutcomeOptions) => setFilterOutcomes(currentOutcomeOptions.map(({ value }) => value)),
		'salesLead': (currentSalesLeadOptions) => setFilterSalesLead(currentSalesLeadOptions.map(({ value }) => value)),
        };

	const filteredCalls = useCallFilters({
		/* Filters */
		filterUsers,
		filterReasons,
		filterStatuses,
		filterOutcomes,
		filterSalesLead,
		/* Payload */
		callData: options,
	});

	const filterOutCompleted = React.useMemo(() => {
		if (filteredCalls && filteredCalls.length) {

			const payload = [ ...filteredCalls ];

			/*
			 * We are using a dictionary to keep track of called phone(s).
			 */
			const phoneBook = {};

			payload.reverse().forEach((data) => {
				if (data?.status !== 'completed') {
					phoneBook[data?.phone] = data;
				} else {
					// Step I: Check if such phone has been called.
					const hasPhone = Boolean(Object.keys(phoneBook[data?.called] || {}).length);
					if (hasPhone) {
						// TODO: Consider taking into consideration timestamp.
						// Step II: Remove if status is valid withing timeout window.
						delete phoneBook[data?.called];
					}
					
				}	
			});

			return (Object.values(phoneBook) || []).reverse();
		}

		return filteredCalls;
	}, [ filteredCalls ]);	


	const statisticsOptions = useCallUserStatistics({
		callData: filteredCalls,
		userOptions, reasonOptions,
		statusOptions, directionOptions,
		outcomeOptions, salesLeadOptions,
	});

	const {
		cxTotalCallCount,
		totalUniqueCallCount,
		cxPercentNoAnswerCall,
		totalCallCount, inboundCallCount, 
		outboundCallCount, noAnswerCallCount, 
		techNoAnswerCallCount, cxNoAnswerCallCount,
		techInboundCallCount, techOutboundCallCount, 
	} = useCallMetrics(filteredCalls);

	const optionHeader = React.useMemo(() => (
		currentSection === CALL_NAV_TABS.LOG ? content.table.all : content.table.noAnswer
	), [ currentSection ]);

	const optionData = currentSection === CALL_NAV_TABS.LOG ? options : filterOutCompleted

	return (
		<>
			<div className="page-header">
				<div className="row">
					<div className="col-sm-4 col-lg-4 mb-3 mb-lg-3">
						<Card>
							<Card.Body title={
								<Tooltip text={content.tooltips.qtyUniqueCalls} position="right">
									{content.metrics.qtyUniqueCalls}
								</Tooltip>
							}>
								<div className="row align-items-center gx-2 mb-1">
									<div className="col-md-3 mt-3">
										<Icons.Call />
									</div>
									<div className="col-md-9">
										<h2 className="card-title mt-2 text-muted text-end">
											{totalUniqueCallCount}
										</h2>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-2 col-lg-2 mb-3 mb-lg-3">
						<Card>
							<Card.Body title={
								<Tooltip text={content.tooltips.inboundTechnicianCalls} position="right">
									{content.metrics.inboundTechnicianCalls}
								</Tooltip>
							}>
								<div className="row align-items-center gx-2 mb-1">
									<div className="col-md-3 mt-3">
										<Icons.Call.Inbound />
									</div>
									<div className="col-md-9">
										<h2 className="card-title mt-2 text-success text-end">
											{techInboundCallCount}
										</h2>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-2 col-lg-2 mb-3 mb-lg-3">
						<Card>
							<Card.Body title={
								<Tooltip text={content.tooltips.outboundTechnicianCalls} position="right">
									{content.metrics.outboundTechnicianCalls}
								</Tooltip>
							}>
								<div className="row align-items-center gx-2 mb-1">
									<div className="col-md-3 mt-3">
										<Icons.Call.Outbound />
									</div>
									<div className="col-md-9">
										<h2 className="card-title text-info text-end">
											{techOutboundCallCount}
										</h2>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-2 col-lg-2 mb-3 mb-lg-3">
						<Card>
							<Card.Body title={
								<Tooltip text={content.tooltips.noAnswerTechnicianCalls} position="right">
									{content.metrics.noAnswerTechnicianCalls}
								</Tooltip>
							}>
								<div className="row align-items-center gx-2 mb-1">
									<div className="col-md-3 mt-3">
										<Icons.Call.NoAnswer />
									</div>
									<div className="col-md-9">
										<h2 className="card-title mt-2 text-danger text-end">
											{techNoAnswerCallCount}
										</h2>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-2 col-lg-2 mb-3 mb-lg-3">
						<Card>
							<Card.Body title={
								<Tooltip text={content.tooltips.noAnswerPercentCalls} position="left">
									{content.metrics.noAnswerPercentCalls}
								</Tooltip>
							}>
								<div className="row align-items-center gx-2 mb-1">
									<div className="col-md-3 mt-3">
										<Icons.Call.NoAnswer />
									</div>
									<div className="col-md-9">
										<h2 className="card-title mt-2 text-danger text-end">
											{cxPercentNoAnswerCall} %
										</h2>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
				<NavTab 
					withPageHeader
					id="profileTab"
					options={content.navOptions}
					handleTabClick={setActiveSection}
				/>
			</div>

			<Table
				withFilter
				height="63vh"
				elementsPerPage={300}
				headers={optionHeader}
				searchPlaceholder={content.table.search}
				data={optionData.map((payload) => ({
					id: payload?.id,
					reason: payload?.reason,
					outcome: payload?.outcome,
					time: renderTime(payload),
					phone: renderPhone(payload),
					status: renderStatus(payload),
					called: renderCalled(payload),
					sales_lead: payload?.sales_lead,
					duration: renderDuration(payload),
					routed_to : renderRoutedTo(payload),
					callDirection: renderCallDirection(payload),
					notes: (
						<EditableTextarea 
							defaultValue={tmpNotes[payload.id] || payload.note} 
							handleOnSave={(message) => (
								handleCallNote(payload.id, payload.message, payload.note)
							)}
						/>
					),
				}))}
			/>
		</>
	);
};

export default CallOVerview;

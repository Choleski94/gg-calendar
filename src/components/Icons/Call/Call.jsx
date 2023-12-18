import React from 'react';

const Call = () => (
	<span className="bi-telephone nav-icon h1" />
);

Call.Inbound = () => (
	<span className="bi-telephone-inbound nav-icon h1 text-success" />
);

Call.NoAnswer = () => (
	<span className="bi-telephone-x nav-icon h1 text-danger" />
);

Call.Outbound = () => (
	<span className="bi-telephone-outbound nav-icon h1 text-info" />
);

export default Call;

import React from 'react';

const Mailbox = ({ userName }) => {
	return (
		<div className="mailbox">
			<div className="sidebar">sidebar</div>
			<div className="header">header</div>
			<div className="content">content</div>
		</div>
	);
};

export default React.memo(Mailbox);

import React from 'react';
import Header from 'components/header/Header';

const Mailbox = ({ userName }) => {
	return (
		<div className="mailbox">
			<div className="sidebar">sidebar</div>
			<Header />
			<div className="content">content</div>
		</div>
	);
};

export default React.memo(Mailbox);

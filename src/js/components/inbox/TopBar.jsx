import React from 'react';

const TopBar = ({ totalEmails }) => (
	<div className="inbox-topbar">
		<div className={'inbox-topbar-title'}>{totalEmails && `Inbox (${totalEmails})`}</div>
		<div className={'inbox-search-box'} />
	</div>
);

export default React.memo(TopBar);

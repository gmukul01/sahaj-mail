import React from 'react';

const TopBar = ({ totalEmails }) => (
	<div className="inbox-topbar">
		<div className={'title'}>{`Inbox (${totalEmails || ''})`}</div>
	</div>
);

export default React.memo(TopBar);

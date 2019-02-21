import React from 'react';
import PropTypes from 'prop-types';

const TopBar = ({ totalEmails }) => (
	<div className="inbox-topbar">
		<div className={'title'}>{`Inbox (${totalEmails || ''})`}</div>
	</div>
);

TopBar.propTypes = {
	totalEmails: PropTypes.number
};

export default React.memo(TopBar);

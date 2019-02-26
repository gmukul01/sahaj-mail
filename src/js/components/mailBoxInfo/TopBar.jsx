import React from 'react';
import PropTypes from 'prop-types';

const TopBar = ({ title, totalEmails }) => (
	<div className="mailBoxInfo-topbar">
		<div className={'title'}>{`${title} (${totalEmails || ''})`}</div>
	</div>
);

TopBar.propTypes = {
	totalEmails: PropTypes.number
};

export default React.memo(TopBar);

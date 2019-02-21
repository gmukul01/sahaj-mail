import React from 'react';
import PropTypes from 'prop-types';

const Badge = props => {
	const { className, badgeContent, children } = props;

	return (
		<button className={className}>
			{children}
			{badgeContent && badgeContent !== 0 ? <span className="badge">{badgeContent}</span> : null}
		</button>
	);
};

Badge.propTypes = {
	className: PropTypes.string,
	badgeContent: PropTypes.number,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

export default React.memo(Badge);

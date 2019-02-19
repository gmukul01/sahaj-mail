import React from 'react';

const Badge = props => {
	const { className, badgeContent, children } = props;

	return (
		<button className={className}>
			{children}
			{badgeContent && badgeContent !== 0 ? <span className="badge">{badgeContent}</span> : null}
		</button>
	);
};

export default React.memo(Badge);

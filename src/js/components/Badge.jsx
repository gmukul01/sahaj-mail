import React from 'react';

const Badge = props => {
	const { className, badgeContent, children } = props;

	return (
		<button className={className}>
			{children}
			<span className="badge">{badgeContent}</span>
		</button>
	);
};

export default React.memo(Badge);

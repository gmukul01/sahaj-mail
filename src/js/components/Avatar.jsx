import React from 'react';

const Avatar = () => (
	<div className="avatar">
		<img alt="User Pic" src="http://i.pravatar.cc/150?img=66" />
	</div>
);

export default React.memo(Avatar);

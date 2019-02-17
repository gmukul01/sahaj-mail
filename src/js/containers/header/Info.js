import { connect } from 'react-redux';

import { removeUserDetails } from 'actions/user';
import Info from 'components/header/Info';

export default connect(
	null,
	{
		onLogoutClick: removeUserDetails
	}
)(Info);

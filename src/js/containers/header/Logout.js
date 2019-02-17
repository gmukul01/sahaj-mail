import { connect } from 'react-redux';

import { removeUserDetails } from 'actions/user';
import Logout from 'components/header/Logout';

export default connect(
	null,
	{
		onLogoutClick: removeUserDetails
	}
)(Logout);

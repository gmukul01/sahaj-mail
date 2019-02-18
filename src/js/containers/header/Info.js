import { connect } from 'react-redux';

import { removeUserDetails } from 'actions/user';
import Info from 'components/header/Info';

const mapStateToProps = ({ inbox: { totalUnread } }) => ({
	totalUnread
});

export default connect(
	mapStateToProps,
	{
		onLogoutClick: removeUserDetails
	}
)(Info);

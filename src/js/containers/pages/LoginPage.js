import { connect } from 'react-redux';

import { fetchUserDetails } from 'actions/user';
import Loginpage from 'components/pages/Loginpage';

const mapStateToProps = ({ user: { name, isLoading, errorMessage } }) => ({
	isLoading,
	errorMessage,
	isUserLoggedIn: name ? true : false
});

export default connect(
	mapStateToProps,
	{
		fetchUserDetails
	}
)(Loginpage);

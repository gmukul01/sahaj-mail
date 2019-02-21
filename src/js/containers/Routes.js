import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Routes from 'components/routes/Routes';

const mapStateToProps = ({ user: { name } }) => ({
	isUserLoggedIn: name ? true : false
});

export default withRouter(
	connect(
		mapStateToProps,
		null
	)(Routes)
);

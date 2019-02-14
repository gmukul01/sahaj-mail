import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUserDetails } from 'actions/user';
import LoginPage from 'components/pages/LoginPage';

const mapStateToProps = state => ({
	isUserLoggedIn: state.user ? state.user.name : undefined
});

export default withRouter(
	connect(
		mapStateToProps,
		{
			fetchUserDetails
		}
	)(LoginPage)
);

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import PrivateRoute from './PrivateRoute';
import Loginpage from 'containers/pages/LoginPage';
import Mailbox from 'components/pages/MailBox';

const Routes = ({ isUserLoggedIn }) => (
	<Switch>
		<Route exact path="/login" component={Loginpage} />
		<PrivateRoute path="/" component={Mailbox} isAuthenticated={isUserLoggedIn} />
	</Switch>
);

Routes.propTypes = {
	isUserLoggedIn: PropTypes.string
};

export default Routes;

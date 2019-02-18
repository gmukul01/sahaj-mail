import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Loginpage from 'containers/pages/LoginPage';
import Mailbox from 'containers/pages/MailBox';

const Routes = ({ isUserLoggedIn }) => (
	<Switch>
		<Route exact path="/login" component={Loginpage} />
		<PrivateRoute path="/" component={Mailbox} isAuthenticated={isUserLoggedIn} />
	</Switch>
);

export default Routes;

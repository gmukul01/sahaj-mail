import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
	<Route
		exact
		{...rest}
		render={props =>
			isAuthenticated ? (
				<Component {...props} />
			) : (
				<div>
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location }
						}}
					/>
				</div>
			)
		}
	/>
);

PrivateRoute.propTypes = {
	isUserLoggedIn: PropTypes.bool
};

export default PrivateRoute;

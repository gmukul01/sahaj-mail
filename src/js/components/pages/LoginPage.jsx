import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';

import { useFormInput } from 'effects/useFormInput';

export const Loginpage = props => {
	const { setValue: setEmail, ...email } = useFormInput(''),
		{ setValue: setPassword, ...password } = useFormInput(''),
		[errorMessage, setErrorMessage] = useState(props.errorMessage);

	const { isUserLoggedIn, isLoading, fetchUserDetails, location } = props,
		{ from } = location.state || { from: undefined };

	useEffect(() => {
		setErrorMessage(props.errorMessage);
	}, [props.errorMessage]);

	if (isUserLoggedIn) {
		return <Redirect to={from || '/'} />;
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (email.value === '' && password.value === '') setErrorMessage('Please enter Email & Password');
		else if (email.value === '') setErrorMessage('Please enter Email');
		else if (password.value === '') setErrorMessage('Please enter Password');
		else fetchUserDetails(email.value, password.value);
	};

	return (
		<section className="login">
			{isLoading ? (
				<ReactLoading type="spin" color="black" />
			) : (
				<form onSubmit={handleSubmit} className="login-card">
					<h1>Sign In</h1>
					<input type="text" {...email} placeholder="Username" />
					<input type="password" {...password} placeholder="Password" />
					<button type="submit">Login</button>
				</form>
			)}
			{errorMessage && <p className="error">{errorMessage}</p>}
		</section>
	);
};

Loginpage.propTypes = {
	isUserLoggedIn: PropTypes.bool,
	isLoading: PropTypes.bool,
	fetchUserDetails: PropTypes.func.isRequired,
	location: PropTypes.object.isRequired
};

export default React.memo(Loginpage);

import React from 'react';
import { Redirect } from 'react-router-dom';
import { useFormInput } from 'effects/useFormInput';

export const Login = ({ isUserLoggedIn, fetchUserDetails, location }) => {
	const email = useFormInput(''),
		password = useFormInput('');

	//If user is already logged in then redirect to the previous page
	const { from } = location.state || { from: undefined };
	if (from && isUserLoggedIn) return <Redirect to={from} />;

	function handleClick() {
		fetchUserDetails(email.value, password.value);
	}

	return (
		<section className="login">
			<div className="login-card">
				<h1>Sign In</h1>
				<input type="text" {...email} placeholder="Username" />
				<input type="password" {...password} placeholder="Password" />
				<button onClick={handleClick}>Login</button>
			</div>
		</section>
	);
};

export default React.memo(Login);

import React from 'react';
import { Redirect } from 'react-router-dom';
import { useFormInput } from 'effects/useFormInput';

export const Login = ({ isUserLoggedIn, fetchUserDetails, location }) => {
	const email = useFormInput('Mukul'),
		password = useFormInput('');

	//If user is already logged in then redirect to the previous page
	const { from } = location.state || { from: undefined };
	if (from && isUserLoggedIn) return <Redirect to={from} />;

	function handleClick() {
		fetchUserDetails(email.value, password.value);
	}

	return (
		<>
			<input type="text" {...email} />
			<input type="text" {...password} />
			<button onClick={handleClick}>Submit</button>
		</>
	);
};

export default React.memo(Login);

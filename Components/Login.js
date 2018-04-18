import React from "react";
import { Link } from 'react-router-native';
import StyledIcon from './StyledIcon';

const LoginOrLogout = ({isLoggedIn, login, logout}) => {
	return (
		isLoggedIn?(
				<StyledIcon name='logout-variant' onPress={logout}/>
		) : (<StyledIcon name='login-variant' onPress={login}/>)
	)
}

const Login = ({ isLoggedIn, login, logout }) => {
	return <LoginOrLogout isLoggedIn={isLoggedIn} login={login} logout={logout}/>;
}

export default Login;

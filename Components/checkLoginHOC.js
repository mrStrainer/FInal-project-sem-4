import React from 'react'
import { Text } from 'react-native'
import Login from './Login'


const checkLogin = (Component) => ({ isLoggedIn, runAuthentication, logout, ...props }) =>
  isLoggedIn ? <Component {...props} />
    : <Login isLoggedIn={isLoggedIn} login={runAuthentication} logout={logout} />

export default checkLogin;
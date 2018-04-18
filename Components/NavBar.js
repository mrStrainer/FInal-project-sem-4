import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { Route, Link } from 'react-router-native';
import StyledIcon from './StyledIcon'
import Styles from '../Styles/NavBar'
import Login from './Login'

const NavItem = ({ text }) => {
    return (
        <View style={Styles.navBar}>
            <Link to='/'><Text style={Styles.navText}>{text}</Text></Link>
        </View>
    )
}

const NavBar = ({ isLoggedIn, runAuthentication, logout }) => {
	const mainNavText = isLoggedIn?'Home':'Login';
	return (
		<SafeAreaView style={Styles.nav}>
			<StyledIcon name='menu'/>
			<Route exact path='/' render={(props) => <NavItem text={mainNavText} {...props}/> }/>
			<Route path='/search' render={(props)=> <NavItem text='Search'  {...props}/> }/>
			<Route path='/album/:id' render={(props)=> <NavItem text='Album' {...props}/> }/>
			<Login isLoggedIn={isLoggedIn} login={runAuthentication} logout={logout} />
		</SafeAreaView>
	)
}
export default NavBar;
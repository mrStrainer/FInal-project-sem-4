import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native';
import Styles from '../Styles/Main'
import Login from './Login' 

const Main = ({ isLoggedIn, runAuthentication, logout }) => {
	return (
		<View style={Styles.center}>
			<Link to='/search/'><Text style={Styles.navText}>Search</Text></Link>
			<Link to='/album/'><Text style={Styles.navText}>Album</Text></Link>
			<Link to='/profile/me'><Text style={Styles.navText}>Profile</Text></Link>
			<Link to='/playlist/me'><Text style={Styles.navText}>Playlist</Text></Link>
		</View>
    )
}

export default Main;

import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import Styles from '../Styles/Main'
import Login from './Login' 

const Main = ({ isLoggedIn, login, logout }) => {
	return (
		<View style={Styles.center}>
			<Text>Main</Text>
		</View>
    )
}

export default Main;

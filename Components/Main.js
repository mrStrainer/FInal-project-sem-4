import React from 'react'
import { Text } from 'react-native'

const Main = ({ isLoggedIn }) => {
	if(isLoggedIn)
		return <Text>Logged In</Text>
	return <Text>Not Logged In</Text>
}

export default Main;
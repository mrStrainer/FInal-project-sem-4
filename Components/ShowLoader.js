import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const ShowLoader = ({ isFetching }) => 
	isFetching?(
		<View style={{height:50, flex:1}}>
			<ActivityIndicator />
		</View>):<View style={{height:50, flex:1}}/>;

export default ShowLoader;
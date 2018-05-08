import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../../Styles/Playlists'

const PlaylistHeader = ({ id, total }) => {
	return (
		<View style={Styles.Header}>
			<Text style={Styles.headerText}>{id}</Text>
			<Text style={Styles.headerSubText}>{`${total}`}</Text>
		</View>	
	)
}

export default PlaylistHeader;
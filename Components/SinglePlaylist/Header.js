import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../../Styles/Playlists'

const PlaylistHeader = ({ name, total }) => {
	return (
		<View style={Styles.Header}>
			<Text style={Styles.headerText}>{name}</Text>
			<Text style={Styles.headerSubText}>{`${total}`}</Text>
		</View>	
	)
}
export default PlaylistHeader;
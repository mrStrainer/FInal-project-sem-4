import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native';
import Styles from '../../Styles/Playlists'

const PlaylistItem = ({ name, id, isPublic, total_tracks, owner, userId }) => {
	return (
		<Link to={`/playlist/${userId}/${id}`}>
			<View style={Styles.ItemContainer}>
				<View style={Styles.ItemView}>
					<Text style={Styles.Text} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
					<Text style={Styles.oText}>{total_tracks}</Text>
				</View>
				<View style={Styles.ItemSubView}>
					<Text style={ [Styles.Text, Styles.sText]} numberOfLines={1} ellipsizeMode='tail'>{owner}</Text>
					<Text style={Styles.oText}>{isPublic && 'Public'}</Text>
				</View>
			</View>
		</Link>
	)
}
export default PlaylistItem;
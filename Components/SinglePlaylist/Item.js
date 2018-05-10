import React from 'react'
import { Text, View } from 'react-native'
import Styles from '../../Styles/Playlists'
import { formatDuration } from '../Helpers'

export default class PlaylistItem extends React.PureComponent {
	render() {
		const { name, duration_ms, album, artists } = this.props;
		return (
			<View style={Styles.ItemContainer}>
				<View style={Styles.ItemView}>
					<Text style={Styles.Text} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
					<Text style={Styles.oText}>- {formatDuration(duration_ms)}</Text>
				</View>
				<View style={Styles.ItemSubView}>
					<Text style={ [Styles.ContainerText, Styles.sText]} numberOfLines={1} ellipsizeMode='tail'>{album.name} <Text style={Styles.oText} numberOfLines={1} ellipsizeMode='tail'>- {artists.map(artist => artist.name).join(', ')}</Text></Text>	
				</View>
			</View>
		)
	}
}
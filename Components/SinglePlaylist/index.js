import React from 'react'
import { Text, View, FlatList } from 'react-native'
import Styles from '../../Styles/Playlists'
import Results from './Results'

export default class SinglePlaylist extends React.Component {
	componentDidMount() {
		this.props.fetchSinglePlaylist(this.props.match.params.userId, this.props.match.params.playlistId);
	}
	render () {
		const { playlist, fetchMoreSinglePlaylistTracks } = this.props;
		return (
			<View style={Styles.playlistContainer}>		
				<Results results={playlist.tracks} {...this.props} message={'No playlist'} isFetching={playlist.isFetchingInfo || playlist.isFetchingTracks}/>
			</View>
		)
	}
}
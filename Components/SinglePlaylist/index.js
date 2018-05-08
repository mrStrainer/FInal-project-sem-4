import React from 'react'
import { Text, View, FlatList } from 'react-native'
import Styles from '../../Styles/Playlists'
import withResults from '../withResultsHOC'
import withSpinner from '../withSpinnerHOC'
import ShowLoader from '../ShowLoader'
import Track from '../Track'
import { formatDuration } from '../Helpers'

const PlaylistItem = ({ name, duration_ms, album, artists }) => {
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

const PlaylistHeader = ({ name, total }) => {
	return (
		<View style={Styles.Header}>
			<Text style={Styles.headerText}>{name}</Text>
			<Text style={Styles.headerSubText}>{`${total}`}</Text>
		</View>	
	)
}

const SPResult = ({ playlist, fetchMoreSinglePlaylistTracks }) => 
	<FlatList 
		onEndReachedThreshold={0.3}
		onEndReached={fetchMoreSinglePlaylistTracks}
        data={playlist.tracks}
        ListHeaderComponent={<PlaylistHeader name={playlist.info.name} total={playlist.info.total}/>}
        ListFooterComponent={<ShowLoader isFetching={playlist.isFetchingMoreTracks}/>}
        keyExtractor={(item,i) => `${i}-${item.id}`}
        renderItem={({item}, i) => <PlaylistItem {...item}/>}
    />

const SPResultWithSpinner = withSpinner(SPResult);
const SPResultWithCheckAndSpinner = withResults(SPResultWithSpinner);

export default class SinglePlaylist extends React.Component {
	componentDidMount() {
		this.props.fetchSinglePlaylist(this.props.match.params.userId, this.props.match.params.playlistId);
	}
	render () {
		const { fetchSinglePlaylist, fetchSinglePlaylistInfo, fetchSinglePlaylistTracks, fetchMoreSinglePlaylistTracks, match, playlist } = this.props;
		return (
			<View style={Styles.playlistContainer}>		
				<SPResultWithCheckAndSpinner results={playlist.tracks} {...this.props} message={'No playlist'}/>
			</View>
		)
	}
}

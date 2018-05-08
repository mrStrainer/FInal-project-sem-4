import React from 'react'
import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native';
import Styles from '../../Styles/Playlists'
import ShowLoader from '../ShowLoader'
import Login from '../Login' 
import withResults from '../withResultsHOC'
import withSpinner from '../withSpinnerHOC'
import PlaylistHeader from './Header'
import PlaylistItem from './Item'

const PlaylistsResult = ({ playlists, fetchMorePlaylists, userId }) => 
	<FlatList 
		onEndReachedThreshold={0.3}
		onEndReached={() => fetchMorePlaylists()}
        data={playlists.playlists}
        ListHeaderComponent={<PlaylistHeader id={playlists.id} total={playlists.total}/>}
        ListFooterComponent={<ShowLoader isFetching={playlists.isFetchingMore}/>}
        keyExtractor={(item,i) => `${i}-${item.id}`}
        renderItem={({item}, i) => <PlaylistItem {...item} userId={userId}/>}
    />
const PlaylistsResultWithSpinner = withSpinner(PlaylistsResult);
const PlaylistsResultWithCheckAndSpinner = withResults(PlaylistsResultWithSpinner);

export default class Playlist extends React.Component {
	componentDidMount() {
		this.props.fetchPlaylists(this.props.match.params.userId);
	}
	// link to playlists
	// ui for single playlist

	render () {
		const { isFetching, isFetchingMore, playlists, id, total } = this.props.playlists;
		const { fetchMorePlaylists } = this.props;
		if (playlists && !isFetching){
			return (
				<View style={Styles.playlistContainer}>
					<PlaylistsResultWithCheckAndSpinner results={this.props.playlists.playlists} message={'No playlists'} {...this.props} userId={this.props.match.params.userId}/>
				</View>
		    )
		}
		return <Text style={{color:'#ccc'}}>No playlists</Text>
	}
}

import React from 'react'
import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native';
import Styles from '../../Styles/Playlists'
import ShowLoader from '../ShowLoader'
import Login from '../Login' 
		// name:playlist.name,
		// id:playlist.id,
		// public:playlist.public,
		// total_tracks:playlist.tracks.total,
		// owner: playlist.owner.id,
const PlaylistItem = ({ name, id, isPublic, total_tracks, owner }) => {
	return (
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
		
	)
}
const PlaylistHeader = ({ id }) => {
	return (
		<View style={Styles.center}>
			<Text style={Styles.headerText}>Playlists - {id}</Text>
		</View>	
	)
}
export default class Playlist extends React.Component {
	componentDidMount() {
		this.props.fetchPlaylists(this.props.match.params.userId);
	}
	// link to playlists
	// ui for playlist item

	render () {
		const { isFetching, isFetchingMore, playlists, id } = this.props.playlists;
		const { fetchMorePlaylists } = this.props;
		if (playlists && !isFetching){
			return (
				<View style={Styles.playlistContainer}>
					<FlatList 
						onEndReachedThreshold={0.3}
						onEndReached={() => fetchMorePlaylists()}
				        data={playlists}
				        ListHeaderComponent={<PlaylistHeader id={id}/>}
				        ListFooterComponent={<ShowLoader isFetching={isFetchingMore}/>}
				        keyExtractor={(item,i) => `${i}-${item.id}`}
				        renderItem={({item}, i) => <PlaylistItem {...item} />}
				    />
				</View>
		    )
		}
		return <Text style={{color:'#ccc'}}>No playlists</Text>
	}
}

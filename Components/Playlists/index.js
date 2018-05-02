import React from 'react'
import { StyleSheet, FlatList, View, Text, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native';
import Styles from '../../Styles/Playlists'
import ShowLoader from '../ShowLoader'
import Login from '../Login' 

export default class Playlist extends React.Component {
	componentDidMount() {
		this.props.fetchPlaylists(this.props.match.params.id);
	}
	// link to playlists
	// ui for playlist item

	render () {
		const { isFetching, isFetchingMore, playlists } = this.props.playlists;
		const { fetchMorePlaylists } = this.props;
		if (playlists && !isFetching){
			return (
				<View style={Styles.playlistContainer}>
					<FlatList 
						onEndReachedThreshold={0.3}
						onEndReached={() => fetchMorePlaylists()}
				        data={playlists}
				        ListFooterComponent={<ShowLoader isFetching={isFetchingMore}/>}
				        keyExtractor={(item,i) => `${i}-${item.id}`}
				        renderItem={({item}, i) => <Text>{item.name}</Text>}
				    />
				</View>
		    )
		}
		return <Text style={{color:'#ccc'}}>No playlists</Text>
	}
}

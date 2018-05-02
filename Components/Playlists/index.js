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
	       //              <FlatList 
				    //     data={playlists}
				    //     ListFooterComponent={<ShowLoader isFetching={isFetchingMore}/>}
				    //     keyExtractor={(item,i) => `${i}-${item.id}`}
				    //     renderItem={({item}, i) => <Text> {item.name}</Text>}
				    // />
	render () {
		const { isFetching, isFetchingMore, playlists } = this.props.playlists;
		if (playlists && !isFetching){
			return (
				<View style={Styles.playlistContainer}>

				</View>
		    )
		}
		return <Text style={{color:'#ccc'}}>No playlists</Text>
	}
}

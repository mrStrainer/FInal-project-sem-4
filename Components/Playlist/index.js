import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native';
import Styles from '../../Styles/Playlist'
import Login from '../Login' 

export default class Playlist extends React.Component {
	componentDidMount() {
		this.props.fetchPlaylist(this.props.match.params.id);
	}
	// link to playlists
	render () {
		const { isFetching, playlist } = this.props.playlist;
		if (playlist && !isFetching)
			return (
				<View style={Styles.profileContainer}>
					<View style={Styles.center}>
						<Text style={Styles.headerText}>{profile.name}</Text>
						<Text style={Styles.text}>{profile.id}</Text>
						<Text style={Styles.text}>{profile.followers}</Text>
					</View>
				</View>
		    )
		return <Text style={{color:'#ccc'}}>No playlists</Text>
	}
}

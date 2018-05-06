import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native';
import Styles from '../Styles/Main'
import Login from './Login' 
import StyledLink from './StyledLink'

const Main = () => {
	return (
		<View style={Styles.center}>
			<StyledLink to='/search/' text='Search'/>
			<StyledLink to='/album/' text='Album'/>
			<StyledLink to='/profile/hotsince82' text='Profile'/>
			<StyledLink to='/playlists/hotsince82' text='Playlist'/>
			<StyledLink to='/artist/1Bl6wpkWCQ4KVgnASpvzzA' text='Artist'/>
			<StyledLink to='/playlist/hotsince82/5JLCbPHqw868uCVpkM7KFJ' text='Single Playlist'/>
		</View>
    )
}

export default Main;

import React from 'react'
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native';
import StyledLink from '../StyledLink'
import Styles from '../../Styles/Profile'
import Login from '../Login' 
import Placeholder from '../Resources/none.png'

export default class Profile extends React.Component {
	componentDidMount() {
		this.props.fetchProfile(this.props.match.params.profileId);
	}
	// link to playlists
	render () {
		const { isFetching, profile } = this.props.profile;
		if (profile && !isFetching) {
			let source = Placeholder;
			if (profile.image)
				source = { uri : profile.image.url };
			return (
				<View style={Styles.profileContainer}>
					<View style={Styles.center}>
						<Image source={source} style={Styles.headerImage}/>
						<Text style={Styles.headerText}>{profile.name}</Text>
						<Text style={Styles.text}>{profile.id}</Text>
						<Text style={Styles.text}>{profile.followers}</Text>
						<StyledLink to={`/playlists/${profile.id}`} text='Playlists'/>
					</View>
				</View>
		    )
		}
		return <Text style={{color:'#ccc'}}>No profile</Text>
	}
}

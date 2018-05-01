import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { Link } from 'react-router-native';
import Styles from '../../Styles/Profile'
import Login from '../Login' 

export default class Profile extends React.Component {
	componentDidMount() {
		this.props.fetchProfile(this.props.match.params.id);
	}
	render () {
		const { isFetching, profile } = this.props.profile;
		if (profile && !isFetching)
			return (
				<View style={Styles.profileContainer}>
					<View style={Styles.center}>
						<Text style={Styles.headerText}>{profile.name}</Text>
						<Text style={Styles.text}>{profile.id}</Text>
						<Text style={Styles.text}>{profile.followers}</Text>
					</View>
				</View>
		    )
		return <Text>No profile</Text>
	}
}

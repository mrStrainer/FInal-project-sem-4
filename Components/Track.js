import React, { Component } from "react";
import { Text, View } from "react-native";
import { formatDuration } from './Helpers';
import Styles from '../Styles/Track'

const Track = ({ highlight, tracknr, name, duration }) => {
	return (
		<View style={highlight ? Styles.Highlight : Styles.trackView}>
			<Text style={Styles.trackNo}>{tracknr}</Text>
			<Text style={Styles.trackTitle} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
			<Text style={Styles.trackTime}>{formatDuration(duration)}</Text>
		</View>
	);
}

export default Track;
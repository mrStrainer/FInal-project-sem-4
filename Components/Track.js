import React, { Component } from "react";
import { Text, View } from "react-native";
import { formatDuration } from './Helpers';
import Styles from '../Styles/Track'

const Track = ({ tracknr, name, duration, last }) => {
	return (
		<View style={last ? Styles.trackViewNoBorder : Styles.trackView}>
			<Text style={Styles.trackNo}>{tracknr}</Text>
			<Text style={Styles.trackTitle} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
			<Text style={Styles.trackTime}>{formatDuration(duration)}</Text>
		</View>
	);
}

export default Track;
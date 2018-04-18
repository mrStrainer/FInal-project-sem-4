import React from "react";
import { Text, View, Image } from "react-native";
import { Link } from 'react-router-native';

import Styles from '../Styles/SearchItem';

const SearchItem = ({ id, name, artist, url, last }) => {
	return (
		<View style={last ? Styles.searchItemNoBorder : Styles.searchItem}>
		<Image source={{ uri: url }} style={Styles.albumImg}/>
			<Link to={`album/${id}`}>
				<View style={{width:285}}>
					<Text style={Styles.albumTitle} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
					<Text style={Styles.albumArtist} ellipsizeMode='tail'>{artist}</Text>
				</View>
			</Link>
		</View>
	);
}

export default SearchItem;
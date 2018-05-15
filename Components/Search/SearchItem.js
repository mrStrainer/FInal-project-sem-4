import React from "react";
import { Text, View, Image } from "react-native";
import { Link } from 'react-router-native';
import Styles from '../../Styles/SearchItem';
import Placeholder from '../Resources/none.png'

export const SingleAlbum = ({ id, name, artist, image }) => {
	let source = Placeholder;
	if (image)
		source = { uri : image.url };
	return (
		<View style={Styles.searchItem}>
		<Image source={source} style={Styles.albumImg}/>
			<Link to={`/album/${id}`}>
				<View style={{width:285}}>
					<Text style={Styles.albumTitle} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
					<Text style={Styles.albumArtist} ellipsizeMode='tail'>{artist}</Text>
				</View>
			</Link>
		</View>
	)
}
export const SingleArtist = ({ id, name, image }) => {
	let source = Placeholder;
	if (image)
		source = { uri : image.url };
	return (
		<View style={Styles.searchItem}>
		<Image source={source} style={Styles.albumImg}/>
			<Link to={`/artist/${id}`}>
				<View style={{width:285}}>
					<Text style={Styles.albumTitle} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
				</View>
			</Link>
		</View>
	)
}
export const SingleTrack = ({ id, name, artists, album, albumId }) => {
	return (
		<View style={Styles.searchItem}>
			<Link to={`/album/${albumId}?highlight=${id}`}>
				<View style={{width:285}}>
					<Text style={Styles.albumTitle} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
					<Text style={Styles.albumArtist} numberOfLines={2} ellipsizeMode='tail'>{artists.join(', ')}</Text>
				</View>
			</Link>
		</View>
	)
}
const SearchItem = ({ type, ...props }) => {
	switch(type) {
		case 'albums':
			return <SingleAlbum {...props}/>
		case 'artists':
			return <SingleArtist {...props}/>
		case 'tracks':
			return <SingleTrack {...props}/>
		default:
			return <Text> No results </Text>;
	}
}

export default SearchItem;
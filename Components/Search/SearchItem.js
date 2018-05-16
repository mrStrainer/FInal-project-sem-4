import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Link, Redirect, withRouter } from 'react-router-native';
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
export const ArtistLink = ({ fetchArtist, id, children }) => {
	if (fetchArtist !== undefined)
		return (
			<TouchableOpacity onPress={() => fetchArtist(id)}>
				{children}
			</TouchableOpacity>
		)
	return (
		<Link to={`/artist/${id}`}>
			{children}
		</Link>
	)
}
export const SingleArtist = ({ id, name, image, fetchArtist }) => {
	let source = Placeholder;
	if (image)
		source = { uri : image.url };
	return (
		<View style={Styles.searchItem}>
		<Image source={source} style={Styles.albumImg}/>
			<ArtistLink id={id} fetchArtist={fetchArtist}>
				<View style={{width:285}}>
					<Text style={Styles.albumTitle} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
				</View>
			</ArtistLink>
		</View>
	)
}

export const SingleTrack = ({ id, name, artists, album }) => {
	return (
		<View style={Styles.searchItem}>
			<Link to={`/album/${album.id}?highlight=${id}`}>
				<View style={{width:285}}>
					<Text style={Styles.albumTitle} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
					<Text style={Styles.albumArtist} numberOfLines={2} ellipsizeMode='tail'>{artists.map(artist => artist.name).join(', ')}</Text>
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
import React from 'react'
import { Text, View, Image } from 'react-native'
import Styles from '../../Styles/Artist'
import Placeholder from '../Resources/none.png'

const ArtistHeader = ({ name, id, followers, image }) => {
	let source = Placeholder;
	if (image)
		source = { uri : image.url };
	return (
		<View style={Styles.Header}>
			<Image source={source} style={Styles.headerImage}/>
			<View style={Styles.headerTextContainer}>
				<Text style={Styles.headerText} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
				<Text style={Styles.headerSubText} numberOfLines={1} ellipsizeMode='tail'>{followers}</Text>
			</View>
		</View>	
	)
}
export default ArtistHeader;
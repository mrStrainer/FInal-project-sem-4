import React from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
import Styles from '../../Styles/Artist'
import Placeholder from '../Resources/none.png'

const HeaderInfo = ({ isFetching, children }) => {
	if(isFetching)
		return <ActivityIndicator style={{ width:40 }}/>
	return children;
}
const ArtistHeader = ({ name, id, followers, image, isFetching }) => {
	let source = Placeholder;
	if (image)
		source = { uri : image.url };
	return (
		<View style={Styles.Header}>
			<Image source={source} style={Styles.headerImage}/>
			<View style={Styles.headerTextContainer}>
				<HeaderInfo isFetching={isFetching}>
					<Text style={Styles.headerText} numberOfLines={1} ellipsizeMode='tail'>{name}</Text>
					<Text style={Styles.headerSubText} numberOfLines={1} ellipsizeMode='tail'>{followers}</Text>
				</HeaderInfo>
			</View>
		</View>	
	)
}
export default ArtistHeader;
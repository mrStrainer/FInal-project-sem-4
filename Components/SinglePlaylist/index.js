import React from 'react'
import { View } from 'react-native'

import StyledButton from '../StyledButton'

const SinglePlaylist = ({ fetchSinglePlaylistInfo, fetchSinglePlaylistTracks, fetchMoreSinglePlaylistTracks, match }) => {
	return (
		<View>		
			<StyledButton text='fetch info' onPress={() => fetchSinglePlaylistInfo(match.params.userId, match.params.playlistId)}/>
			<StyledButton text='fetch tracks' onPress={() => fetchSinglePlaylistTracks(match.params.userId, match.params.playlistId)}/>
			<StyledButton text='fetch more tracks' onPress={fetchMoreSinglePlaylistTracks}/>
		</View>
	)
}
export default SinglePlaylist;
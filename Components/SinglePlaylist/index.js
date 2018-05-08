import React from 'react'
import { View } from 'react-native'

import StyledButton from '../StyledButton'
//<StyledButton text='fetch tracks' onPress={() => fetchSinglePlaylistTracks(match.params.userId, match.params.playlistId)}/>
const SinglePlaylist = ({ fetchSinglePlaylist, fetchSinglePlaylistInfo, fetchSinglePlaylistTracks, fetchMoreSinglePlaylistTracks, match, playlist }) => {
	return (
		<View>		
			<StyledButton text='fetch info' onPress={() => fetchSinglePlaylist(match.params.userId, match.params.playlistId)}/>
			<StyledButton text='fetch more tracks' onPress={fetchMoreSinglePlaylistTracks}/>
		</View>
	)
}
export default SinglePlaylist;
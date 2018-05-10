import React from 'react'
import { FlatList } from 'react-native'
import Styles from '../../Styles/Playlists'
import PlaylistItem from './Item'
import PlaylistHeader from './Header'
import withResults from '../withResultsHOC'
import withSpinner from '../withSpinnerHOC'
import ShowLoader from '../ShowLoader'

const SPResult = ({ playlist, fetchMoreSinglePlaylistTracks }) => 
	<FlatList 
		onEndReachedThreshold={0.3}
		onEndReached={fetchMoreSinglePlaylistTracks}
        data={playlist.tracks}
        ListHeaderComponent={<PlaylistHeader name={playlist.info.name} total={playlist.info.total}/>}
        ListFooterComponent={<ShowLoader isFetching={playlist.isFetchingMoreTracks}/>}
        keyExtractor={(item,i) => `${i}-${item.id}`}
        renderItem={({item}, i) => <PlaylistItem {...item} /> }
    />

const SPResultWithSpinner = withSpinner(SPResult);
const SPResultWithCheckAndSpinner = withResults(SPResultWithSpinner);

export default SPResultWithCheckAndSpinner;
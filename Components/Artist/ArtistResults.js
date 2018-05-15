import React from 'react'
import { FlatList, Text } from 'react-native'
import Styles from '../../Styles/Artist'
import ShowLoader from '../ShowLoader'
import { SingleAlbum, SingleArtist, SingleTrack } from '../Search/SearchItem'
const TopTracks = ({ topTracks, isFetchingTopTracks }) => 
	<FlatList 
	    style={Styles.artistTracks}
	    data={topTracks}
	    ListFooterComponent={<ShowLoader isFetching={isFetchingTopTracks}/>}
	    keyExtractor={(item,i) => `${i}-${item.id}`}
	    renderItem={({item}, i) => <SingleTrack {...item}/>}
	/>

const ArtistAlbums = ({ albums, isFetchingMoreAlbums}) => 
	<FlatList 
	    style={Styles.artistTracks}
	    data={albums}
	    ListFooterComponent={<ShowLoader isFetching={isFetchingMoreAlbums}/>}
	    keyExtractor={(item,i) => `${i}-${item.id}`}
	    renderItem={({item}, i) => <SingleAlbum {...item}/>}
	/>

const RelatedArtists = ({ relatedArtists, isFetchingRelated}) => 
	<FlatList 
	    style={Styles.artistTracks}
	    data={relatedArtists}
	    ListFooterComponent={<ShowLoader isFetching={isFetchingRelated}/>}
	    keyExtractor={(item,i) => `${i}-${item.id}`}
	    renderItem={({item}, i) => <SingleArtist {...item}/>}
	/>

const ArtistResults = ({ type, ...props }) => {
	switch(type) {
		case 'TopTracks':
			return <TopTracks {...props}/>
		case 'ArtistAlbums':
			return <ArtistAlbums {...props}/>
		case 'RelatedArtists':
			return <RelatedArtists {...props}/>
		default:
			return <Text> No results </Text>;
	}
}

export default ArtistResults
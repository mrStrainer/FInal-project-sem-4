import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import SearchItem from './SearchItem'
import StyledButton from './StyledButton'
import StyledInput from './StyledInput'
import Styles from '../Styles/Search'
import withSpinner from './withSpinnerHOC'
import withResults from './withResultsHOC'

const SearchInput = ({ onChangeText, onSubmitEditing }) => { 
	return (
  		<View style={Styles.CenterView}> 
  			<StyledInput placeholder='Search...' onChangeText={onChangeText} onSubmitEditing={onSubmitEditing}/>
  		</View>
  	);
}

//TODO 

// check for empty input
// check for auth
// inputvalidation

// tabs
// 	tracks
// 	artists
// 	albums
//scroll on loadmore

// 	checkTotal
// onclicks

// save token
// load token
// expireCheck


const AlbumResults = ({ albums }) => {
	return albums.items.map(
		(album,i) => <SearchItem type='album' key={album.id} id={album.id} url={album.image.url} name={album.name} artist={album.artist} last={i === albums.items.length-1 ? true : false}/>
	)
}
const ArtistResults = ({ artists }) => {
	return artists.items.map(
		(artist,i) => {
			return <SearchItem type='artist' key={artist.id} id={artist.id} {...artist} last={i === artists.items.length-1 ? true : false}/>
		}
	)
}
const TrackResults = ({ tracks }) => {
	return tracks.items.map(
		(track,i) => <SearchItem type='track' key={track.id} id={track.id} name={track.name} album={track.album} artists={track.artists.reduce((artistsList, value) => artistsList += `, ${value}`)} last={i === tracks.items.length-1 ? true : false}/>
	)
}
const SearchResults = ({ albums, artists, tracks, searchQ, searchMore }) => {
	const foundAlbums = albums.total > 0 && searchQ;
	const foundArtists = artists.total > 0 && searchQ;
	const foundTracks = tracks.total > 0 && searchQ;
	const noResult = !foundAlbums && !foundArtists && !foundTracks;

	if (noResult) 
		return <Text style={Styles.Text}>Couldn't find {searchQ}</Text>

	return (
		<View>
			{foundAlbums && <AlbumResults albums={albums}/>}
			<StyledButton text='Load more albums' onPress={() => searchMore('album')}/>
			{foundArtists && <ArtistResults artists={artists}/>}
			<StyledButton text='Load more artists' onPress={() => searchMore('artist')}/>
			{foundTracks && <TrackResults tracks={tracks}/>}
			<StyledButton text='Load more tracks' onPress={() => searchMore('track')}/>
		</View>
	)
}
const SearchResultsWithSpinner = withSpinner(SearchResults);
const SearchResultsWithCheckAndSpinner = withResults(SearchResultsWithSpinner);

export default class Search extends React.Component {
	state = {
		searchQ:'',
	}
// <ScrollView style={Styles.Results} ref={ref => this.scrollView = ref} onContentSizeChange={(contentWidth, contentHeight)=>{this.scrollView.scrollToEnd({animated: true})} }>
	render() {
		const { searchNew, searchMore } = this.props;

		return (
			<View style={Styles.componentContainer}>
				<SearchInput value={this.state.searchQ} onChangeText={(text) => this.setState({searchQ:text})} onSubmitEditing={() => searchNew(this.state.searchQ)}/>
				
				<ScrollView style={Styles.Results}>
					<SearchResultsWithCheckAndSpinner {...this.props.search} searchMore={searchMore} style={{marginBottom:20, paddingBottom:40}}/>
                </ScrollView>
			</View>
		);
	}
}

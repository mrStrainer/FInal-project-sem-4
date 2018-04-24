import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
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
// Search item for artist, track

// check for empty input
// check for auth
// inputvalidation
// NewSearch
// 	offsetReset
// 	serachQreset
// Search for artist, track
// tabs
// 	tracks
// 	artists
// 	albums
// LoadMore
// 	checkTotal
// 	track
// 	artist
// 	album
// onclicks

// save token
// load token
// expireCheck


const SearchResults = ({ albums, artists, tracks, searchQ }) => {
	const foundAlbums = albums.total > 0 && searchQ;
	const foundArtists = artists.total > 0 && searchQ;
	const foundTracks = tracks.total > 0 && searchQ;
	const noResult = !foundAlbums && !foundArtists && !foundTracks;
	if (foundAlbums) 
		return albums.items.map(
			(album,i) => <SearchItem key={album.id} id={album.id} url={album.image.url} name={album.name} artist={album.artist} last={i === albums.length-1 ? true : false}/>
		)
	if (noResult) 
		return <Text style={Styles.Text}>Couldn't find {searchQ}</Text>

	return <Text style={Styles.Text}>Search for something</Text>
}
const SearchResultsWithSpinner = withSpinner(SearchResults);
const SearchResultsWithCheckAndSpinner = withResults(SearchResultsWithSpinner);
export default class Search extends React.Component {
	state = {
		searchQ:'',
	}
	//{results.length > 0 && <StyledButton onPress={() => searchAlbum(searchQ, offset+15)} style={{width:'80%'}}text='Load More'/> }

	render() {
		const { searchNew } = this.props;

		return (
			<View style={Styles.componentContainer}>
				<SearchInput value={this.state.searchQ} onChangeText={(text) => this.setState({searchQ:text})} onSubmitEditing={() => searchNew(this.state.searchQ)}/>
				
				<View style={Styles.Results}>
					<SearchResultsWithCheckAndSpinner {...this.props.search}/>
                </View>
			</View>
		);
	}
}

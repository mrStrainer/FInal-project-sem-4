import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import SearchItem from './SearchItem'
import StyledButton from './StyledButton'
import StyledInput from './StyledInput'

const SearchInput = ({ onChangeText, onSubmitEditing }) => { 
	return (
  		<View style={{alignItems:'center', padding:5}}> 
  			<StyledInput placeholder='Search...' onChangeText={onChangeText} onSubmitEditing={onSubmitEditing}/>
  		</View>
  	);
}

//TODO 
// style in separate
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
const withSpinner = (Component) => ({ isFetching, ...others }) =>
  isFetching
    ? <ActivityIndicator />
    : <Component { ...others } />

const SearchResults = ({ results, total, searchQ}) => {
	if (results.length > 0) 
		return results.map(
			(album,i) => <SearchItem key={album.id} id={album.id} url={album.image.url} name={album.name} artist={album.artist} last={i === results.length-1 ? true : false}/>
		)
	if (total === 0  && searchQ) 
		return <Text style={{color:'#ccc'}}>Couldn't find {searchQ}</Text>

	return <Text style={{color:'#ccc'}}>Search for something</Text>
}
const SearchResultsWithSpinner = withSpinner(SearchResults);
export default class Search extends React.Component {
	state = {
		searchQ:'',
	}
	//{results.length > 0 && <StyledButton onPress={() => searchAlbum(searchQ, offset+15)} style={{width:'80%'}}text='Load More'/> }
	RenderResults = () => {
		const { results, total,/* offset, */searchQ } = this.props.search;
		const { searchAlbum } = this.props;
		return (
			<View>
				{this.RenderItems()}
			</View>
		)
	}
	render() {
		const { isFetching } = this.props.search;
		const { searchAlbum } = this.props;

		return (
			<View style={Styles.componentContainer}>
				<SearchInput value={this.state.searchQ}onChangeText={(text) => this.setState({searchQ:text})} onSubmitEditing={() => searchAlbum(this.state.searchQ)}/>
				
				<View style={{flex:1, padding:10, flexDirection: 'column'}}>
					<SearchResultsWithSpinner isFetching={isFetching} {...this.props.search}/>
                </View>
			</View>
		);
	}
}
const Styles = StyleSheet.create({
	componentContainer: { 
		flex: 1, 
		alignSelf: 'stretch', 
		backgroundColor:'#181818'
	}
})
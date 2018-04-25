import React from 'react'
import { StyleSheet, ScrollView, FlatList, ActivityIndicator, View, Text } from 'react-native'
import SearchItem, { SingleAlbum } from './SearchItem'
import StyledButton from './StyledButton'
import StyledInput from './StyledInput'
import Styles from '../Styles/Search'
import withSpinner from './withSpinnerHOC'
import withResults from './withResultsHOC'
import { Route, Link } from 'react-router-native';

//TODO 
// sticky headers?
// pagin on scrollend
// check for empty input
// check for auth
// inputvalidation

// checkTotal
// onclicks

// save token
// load token
// expireCheck
const SearchInput = ({ onChangeText, onSubmitEditing }) => { 
	return (
  		<View style={Styles.SearchBar}> 
  			<StyledInput placeholder='Search' onChangeText={onChangeText} onSubmitEditing={onSubmitEditing}/>
  		</View>
  	);
}
const ShowLoader = ({ isFetching }) => 
	isFetching?(
		<View style={{height:50, flex:1}}>
			<ActivityIndicator />
		</View>):null;
const SearchResults = ({ type, albums, artists, tracks, searchQ, isFetchingMore, searchMore }) => {
	const foundAlbums = albums.total > 0 && searchQ;
	const foundArtists = artists.total > 0 && searchQ;
	const foundTracks = tracks.total > 0 && searchQ;
	const noResult = !foundAlbums && !foundArtists && !foundTracks;

	if (noResult) 
		return <Text style={Styles.Text}>Couldn't find {searchQ}</Text>

	const scroll = false;
	if (noResult) 
		return <Text style={Styles.Text}>Couldn't find {searchQ}</Text>

 	const results ={
 		albums,
 		artists,
 		tracks
 	}
	return (
		<FlatList 
			style={Styles.Results}
			onEndReachedThreshold={0.1}
			onEndReached={() => searchMore(type)}
			data={results[type].items}
			ListFooterComponent={<ShowLoader isFetching={isFetchingMore}/>}
			keyExtractor={(item,i) => `${i}-${item.id}`}
			renderItem={({item}, i) => <SearchItem type={type} {...item} last={i === tracks.items.length-1 ? true : false}/>}
		/>
	)
}

const TypeMenu = ({ selected = 0 }) => {
	return (
		<View style={Styles.TypeMenu}>
			<Link to='/'style={selected === 0? Styles.Selected : Styles.NotSelected}>
				<Text style={Styles.Text}>Albums</Text>
			</Link>
			<Link to='/artists' style={selected === 1? Styles.Selected : Styles.NotSelected}>
				<Text style={Styles.Text}>Artists</Text>
			</Link>
			<Link to='/tracks' style={selected === 2? Styles.Selected : Styles.NotSelected}>
				<Text style={Styles.Text}>Tracks</Text>
			</Link>
		</View>
	)
}

const typeSelect = [
	{
		path:'/',
		type:'albums'
	},{
		path:'/artists',
		type:'artists'
	},{
		path:'/tracks',
		type:'tracks'
	},
]

const SearchResultsWithSpinner = withSpinner(SearchResults);
const SearchResultsWithCheckAndSpinner = withResults(SearchResultsWithSpinner);

export default class Search extends React.Component {
	state = {
		searchQ:'',
		scroll:false
	}

	render() {
		const { scroll } = this.state;
		const { searchNew, searchMore } = this.props;
		const { albums, artists, tracks } = this.props.search.results

		return (
			<View style={Styles.componentContainer}>
				<SearchInput value={this.state.searchQ} onChangeText={(text) => this.setState({searchQ:text})} onSubmitEditing={() => searchNew(this.state.searchQ)}/>
				{typeSelect.map((route, index) => <Route exact={true} key={index} path={route.path} render={()=> <TypeMenu selected={index} />}/> )}
				<View style={Styles.ResultsContainer}>
					{typeSelect.map(
						(route, index) => 
							<Route exact={true} key={index} path={route.path} render={
								(props) => <SearchResultsWithCheckAndSpinner {...this.props.search} type={route.type} searchMore={searchMore}/>}
							/> 
					)}
                </View>
			</View>
		);
	}
}

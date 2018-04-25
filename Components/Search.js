import React from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import SearchItem from './SearchItem'
import StyledButton from './StyledButton'
import StyledInput from './StyledInput'
import Styles from '../Styles/Search'
import withSpinner from './withSpinnerHOC'
import withResults from './withResultsHOC'
import { Route, Link } from 'react-router-native';

//TODO 
// flatlist for results
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
// trackid,albumId for tracks --
const AlbumResults = ({ albums }) => 
	albums === null ? null : (
		albums.items.map(
			(album,i) => <SearchItem type='album' key={`${i}-${album.id}`} {...album} last={i === albums.items.length-1 ? true : false}/>
		)
	)
const ArtistResults = ({ artists }) => {
	return artists.items.map(
		(artist,i) => {
			return <SearchItem type='artist' key={`${i}-${artist.id}`} {...artist} last={i === artists.items.length-1 ? true : false}/>
		}
	)
}
const TrackResults = ({ tracks }) => {
	return tracks.items.map(
		(track,i) => <SearchItem type='track' key={`${i}-${track.id}`} {...track} last={i === tracks.items.length-1 ? true : false}/>
	)
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

	const scroll = false;
	if (noResult) 
		return <Text style={Styles.Text}>Couldn't find {searchQ}</Text>
	const loadMoreOnScroll = (e,type) => {
        let paddingToBottom = 40;
        paddingToBottom += e.nativeEvent.layoutMeasurement.height;
        if(e.nativeEvent.contentOffset.y >= e.nativeEvent.contentSize.height - paddingToBottom) {
          searchMore(type);
    	}
    }
	switch(type) {
		case 'albums':
			return (
				<ScrollView 
					style={Styles.Results}
					ref={ref => this.scrollView = ref} 
					onContentSizeChange={(contentWidth, contentHeight)=>{scroll?this.scrollView.scrollToEnd({animated: true}):false} }
					onScroll={(e) => loadMoreOnScroll(e,'album')}>
					<AlbumResults albums={albums}/>
					<ShowLoader isFetching={isFetchingMore}/>
				</ScrollView>
			)
		case 'artists':
			return (
				<ScrollView 
					style={Styles.Results}
					ref={ref => this.scrollView = ref} 
					onContentSizeChange={(contentWidth, contentHeight)=>{scroll?this.scrollView.scrollToEnd({animated: true}):false} }
					onScroll={(e) => loadMoreOnScroll(e,'artist')}>>
					<ArtistResults artists={artists}/>
					<ShowLoader isFetching={isFetchingMore}/>
				</ScrollView>
				
			)
		case 'tracks':
			return (
				<ScrollView 
					style={Styles.Results}
					ref={ref => this.scrollView = ref} 
					onContentSizeChange={(contentWidth, contentHeight)=>{scroll?this.scrollView.scrollToEnd({animated: true}):false} }
					onScroll={(e) => loadMoreOnScroll(e,'track')}>>
					<TrackResults tracks={tracks}/>
					<ShowLoader isFetching={isFetchingMore}/>
				</ScrollView>
			)
		default:
			return (
				<View>
					<Text>Search For something</Text>
				</View>
			)
	}
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

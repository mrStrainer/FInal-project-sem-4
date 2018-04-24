import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import SearchItem from './SearchItem'
import StyledButton from './StyledButton'
import StyledInput from './StyledInput'
import Styles from '../Styles/Search'
import withSpinner from './withSpinnerHOC'
import withResults from './withResultsHOC'
import { Route, Link } from 'react-router-native';
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

// checkTotal
// onclicks

// save token
// load token
// expireCheck


const AlbumResults = ({ albums }) => 
	albums === null ? null : (
		albums.items.map(
			(album,i) => <SearchItem type='album' key={album.id} id={album.id} url={album.image.url} name={album.name} artist={album.artist} last={i === albums.items.length-1 ? true : false}/>
		)
	)
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
const SearchResults = ({ type, albums, artists, tracks, searchQ, searchMore }) => {
	const foundAlbums = albums.total > 0 && searchQ;
	const foundArtists = artists.total > 0 && searchQ;
	const foundTracks = tracks.total > 0 && searchQ;
	const noResult = !foundAlbums && !foundArtists && !foundTracks;

	if (noResult) 
		return <Text style={Styles.Text}>Couldn't find {searchQ}</Text>

	switch(type) {
		case 'albums':
			return (
				<View>
					<AlbumResults albums={albums}/>
					<StyledButton text='Load more albums' onPress={() => searchMore('album')}/>
				</View>
			)
		case 'artists':
			return (
				<View>
					<ArtistResults artists={artists}/>
					<StyledButton text='Load more artists' onPress={() => searchMore('artist')}/>
				</View>
			)
		case 'tracks':
			return (
				<View>
					<TrackResults tracks={tracks}/>
					<StyledButton text='Load more tracks' onPress={() => searchMore('track')}/>
				</View>
			)
	}
}

const TypeMenu = ({ selected = 0 }) => {
	return (
		<View style={Styles.TypeMenu}>
			<Link to='/' style={{padding:4}}><Text style={selected === 0? Styles.Selected : Styles.NotSelected}>Albums</Text></Link>
			<Link to='/artists' style={{padding:4}}><Text style={selected === 1? Styles.Selected : Styles.NotSelected}>Artists</Text></Link>
			<Link to='/tracks' style={{padding:4}}><Text style={selected === 2? Styles.Selected : Styles.NotSelected}>Tracks</Text></Link>
		</View>
	)
}

const typeSelect = [
	{
		path:'/',
		menu:() => <TypeMenu selected={0} />,
		type:'albums'
	},{
		path:'/artists',
		menu:() => <TypeMenu selected={1} />,
		type:'artists'
	},{
		path:'/tracks',
		menu:() => <TypeMenu selected={2} />,
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
				{typeSelect.map((route, index) => <Route exact={true} key={index} path={route.path} component={route.menu}/> )}
				<ScrollView style={Styles.Results} ref={ref => this.scrollView = ref} onContentSizeChange={(contentWidth, contentHeight)=>{scroll?this.scrollView.scrollToEnd({animated: true}):false} }>
					{typeSelect.map(
						(route, index) => 
							<Route exact={true} key={index} path={route.path} render={
								(props) => <SearchResultsWithCheckAndSpinner {...this.props.search} type={route.type} searchMore={searchMore}/>}
							/> 
					)}
                </ScrollView>
			</View>
		);
	}
}

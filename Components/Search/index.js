import React from 'react'
import { StyleSheet, ScrollView, FlatList, ActivityIndicator, View, Text } from 'react-native'
import SearchItem, { SingleAlbum } from './SearchItem'
import StyledButton from '../StyledButton'
import StyledInput from '../StyledInput'
import Styles from '../../Styles/Search'
import SearchResults from './SearchResults'
import withSpinner from '../withSpinnerHOC'
import withResults from '../withResultsHOC'
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

const TypeMenu = ({ selected = 0 }) => {
	return (
		<View style={Styles.TypeMenu}>
			<Link to='/search/'style={selected === 0? Styles.Selected : Styles.NotSelected}>
				<Text style={Styles.Text}>Albums</Text>
			</Link>
			<Link to='/search/artists' style={selected === 1? Styles.Selected : Styles.NotSelected}>
				<Text style={Styles.Text}>Artists</Text>
			</Link>
			<Link to='/search/tracks' style={selected === 2? Styles.Selected : Styles.NotSelected}>
				<Text style={Styles.Text}>Tracks</Text>
			</Link>
		</View>
	)
}

const typeSelect = [
	{
		path:'/search/',
		type:'albums'
	},{
		path:'/search/artists',
		type:'artists'
	},{
		path:'/search/tracks',
		type:'tracks'
	},
]

const SearchResultsWithSpinner = withSpinner(SearchResults);
const SearchResultsWithCheckAndSpinner = withResults(SearchResultsWithSpinner);

export default class Search extends React.Component {
	state = {
		searchQ:'',
	}

	render() {
		const { searchNew, searchMore } = this.props;

		return (
			<View style={Styles.componentContainer}>
				<SearchInput value={this.state.searchQ} onChangeText={(text) => this.setState({searchQ:text})} onSubmitEditing={() => searchNew(this.state.searchQ)}/>
				
				{typeSelect.map((route, index) => <Route exact={true} key={index} path={route.path} render={() => <TypeMenu selected={index} />}/> )}
				<View style={Styles.ResultsContainer}>
					{typeSelect.map(
						(route, index) => 
							<Route exact={true} key={index} path={route.path} render={
								() => <SearchResultsWithCheckAndSpinner {...this.props.search} type={route.type} message={'Search for something'} searchMore={searchMore}/>}
							/> 
					)}
                </View>
			</View>
		);
	}
}

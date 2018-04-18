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


export default class Search extends React.Component {
	state = {
		searchQ:'',
	}
	RenderResults = () => {
		const { results, total, offset, searchQ } = this.props.search;
		const { searchAlbum } = this.props;
		return (
			<View>
				{this.RenderItems()}
				{results.length > 0 && <StyledButton onPress={() => searchAlbum(searchQ, offset+15)} text='Load More'/> }
			</View>
		)
	}
	RenderItems = () => {
		const { results, total, offset, searchQ } = this.props.search;
		if (results.length > 0) 
			return results.map(
				(album,i) => <SearchItem key={album.id} id={album.id} url={album.image.url} name={album.name} artist={album.artist} last={i === results.length-1 ? true : false}/>
			)

		if (total === 0  && searchQ) 
			return <Text style={{color:'#ccc'}}>Couldn't find {searchQ}</Text>

		return <Text style={{color:'#ccc'}}>Search for something</Text>
	}
	render() {
		const { isFetching } = this.props.search;
		const { searchAlbum } = this.props;
		if (!isFetching) {
			return (
				<View style={Styles.componentContainer}>
					<SearchInput value={this.state.searchQ}onChangeText={(text) => this.setState({searchQ:text})} onSubmitEditing={() => searchAlbum(this.state.searchQ)}/>
					
					<View style={{flex:1, padding:10, flexDirection: 'column'}}>
						{this.RenderResults()}
	                </View>
				</View>
			);
		}
		return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
            </View>
		)
	}
}
const Styles = StyleSheet.create({
	componentContainer: { 
		flex: 1, 
		alignSelf: 'stretch', 
		backgroundColor:'#181818'
	}
})
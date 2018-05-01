import React from 'react'
import { FlatList, ActivityIndicator, View, Text } from 'react-native'
import Styles from '../../Styles/Search'
import SearchItem from './SearchItem'
import ShowLoader from '../ShowLoader'
class SearchResults extends React.Component {
	render() {
		const { type, albums, artists, tracks, searchQ, isFetchingMore, searchMore } = this.props;
		const foundAlbums = albums.total > 0 && searchQ;
		const foundArtists = artists.total > 0 && searchQ;
		const foundTracks = tracks.total > 0 && searchQ;
		const noResult = !foundAlbums && !foundArtists && !foundTracks;

		if (noResult) 
			return <Text style={Styles.Text}>Couldn't find {searchQ}</Text>
		// onScroll={(event) => this.setState( { scrollPosition: { [type]: event.nativeEvent.contentOffset.y } }) }
		// this.flatListRef.scrollToOffset({animated: false, offset: this.state.scrollPosition.albums});
		return (
			<FlatList 
				style={Styles.Results}
				ref={(ref) => this.flatListRef = ref }
				onEndReachedThreshold={0.3}
				onEndReached={() => searchMore(type)}
				data={this.props[type].items}
				ListFooterComponent={<ShowLoader isFetching={isFetchingMore}/>}
				keyExtractor={(item,i) => `${i}-${item.id}`}
				renderItem={({item}, i) => <SearchItem type={type} {...item} last={i === tracks.items.length-1 ? true : false}/>}
			/>
		)
	}
}
export default SearchResults;
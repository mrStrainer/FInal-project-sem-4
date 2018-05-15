const artist = (state = {
	isFetching: false,
}, action) => {
	switch (action.type) {
		case 'REQUEST_ARTIST':
			return {
				...state,
				isFetching:true
			}
		case 'RECEIVE_ARTIST':
			return {
				...state,
				isFetching:false,
				artist:action.artist
			}
		case 'REQUEST_ARTIST_TOP_TRACKS':
			return {
				...state,
				isFetchingTopTracks:true,
			}
		case 'RECEIVE_ARTIST_TOP_TRACKS':
			return {
				...state,
				isFetchingTopTracks:false,
				topTracks:action.topTracks,
			}
		case 'RECEIVE_NO_ARTIST_TOP_TRACKS':
			return {
				...state,
				isFetchingTopTracks:false,
			}
		case 'REQUEST_ARTIST_ALBUMS':
			return {
				...state,
				isFetchingAlbums:true,
			}
		case 'RECEIVE_ARTIST_ALBUMS':
			return {
				...state,
				isFetchingAlbums:false,
				total:action.albums.total,
				offset:action.albums.offset,
				albums:action.albums.albums
			}
		case 'RECEIVE_NO_ARTIST_ALBUMS' :
			return {
				...state,
				isFetchingAlbums:false,
			}
		case 'REQUEST_MORE_ARTIST_ALBUMS':
			return {
				...state,
				isFetchingMoreAlbums:true,
			}
		case 'RECEIVE_MORE_ARTIST_ALBUMS':
			return {
				...state,
				offset:action.albums.offset,
				albums:[
					...state.albums,
					...action.albums.albums,
				],
				isFetchingMoreAlbums:false,
			}
		case 'RECEIVE_NO_MORE_ARTIST_ALBUMS':
			return {
				...state,
				isFetchingMoreAlbums:false,
			}
		case 'REQUEST_RELATED_ARTISTS':
			return {
				...state,
				isFetchingRelated:true,
			}
		case 'RECEIVE_RELATED_ARTISTS':
			return {
				...state,
				isFetchingRelated:false,
				relatedArtists:action.relatedArtists
			}
		case 'RECEIVE_NO_RELATED_ARTISTS':
			return {
				...state,
				isFetchingRelated:false,
			}
		case 'ERROR_ARTIST':
			return {
				...state, 
				isFetching:false,
			}
		default:
			return state;
	}
}
export default artist;
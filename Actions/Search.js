import { json, status, createHeader } from './Helpers'

export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export const REQUEST_MORE_SEARCH = 'REQUEST_MORE_SEARCH'
export const RECEIVE_MORE_SEARCH = 'RECEIVE_MORE_SEARCH'
export const RECEIVE_NO_RESULT = 'RECEIVE_NO_RESULT'
export const ERROR_SEARCH = 'ERROR_SEARCH'

export const requestSearch = (searchQ) => ({
	type:REQUEST_SEARCH,
	searchQ,
})

export const receiveSearch = results => ({
	type:RECEIVE_SEARCH,
	results,
})

export const requestMoreSearch = searchType => ({
	type:REQUEST_MORE_SEARCH,
	searchType
})

export const receiveMoreSearch = (searchType,results) => ({
	type:RECEIVE_MORE_SEARCH,
	searchType,
	results
})

export const receiveNoResult = () => ({
	type:RECEIVE_NO_RESULT,
})

export const errorSearch = error => ({
	type:ERROR_SEARCH,
	error
})

export const albumResponse = responseAlbums => {
	const { items } = responseAlbums;
	const albums = items.map(album => ({
		name:album.name,
		artist:album.artists[0].name,
		id:album.id,
		image:album.images[2]
	}));

	return albums;
}

export const artistResponse = responseArtists => {
	const { items } = responseArtists;
	const artists = items.map(artist => ({
		name: artist.name,
		id: artist.id,
		image:artist.images[2]
	}));
	return artists;
}

export const trackResponse = responseTracks => {
	const { items } = responseTracks;
	const tracks = items.map(track => ({
		name:track.name,
		artists:track.artists.map(artist => {
			const { name, id } = artist;
			return {
				name,
				id
			}
		}),
		id:track.id,
		album:{
			name:track.album.name,
			id:track.album.id,
		}
	}));
	return tracks;
}

export const searchResponse = results => {
	const res = {}
	for (prop of Object.keys(results)) {
		switch(prop) {
			case 'albums':
				res[prop] = {
					total:results[prop].total,
					offset:results[prop].offset,
					items: albumResponse(results[prop])
				}
				break;
			case 'artists':
				res[prop] = {
					total:results[prop].total,
					offset:results[prop].offset,
					items: artistResponse(results[prop])
				}
				break;
			case 'tracks':
				res[prop] = {
					total:results[prop].total,
					offset:results[prop].offset,
					items: trackResponse(results[prop])
				}
				break;
			default:
				return res;
		}		
	}
	return res;
}

export const searchMore = searchType => (dispatch, getState) => {
	const { token } = getState().auth;
	const { searchQ, results:{ [searchType]:{ total, offset } } } = getState().search

	dispatch(requestMoreSearch(searchType))
	if (offset > total) {
		return dispatch(receiveNoResult());
	}

	const type = searchType.slice(0, -1);
	
	return fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(`${searchQ}`)}&type=${type}&limit=15&offset=${offset+15}`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(searchResponse)
		.then(results => dispatch(receiveMoreSearch(searchType,results)))
		.catch(error => {
			dispatch(errorSearch(error))
			console.log(error)
		})
}

export const searchNew = (searchQ) => (dispatch, getState) => {
	const { token } = getState().auth; 
	dispatch(requestSearch(searchQ))
	return fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(`${searchQ}`)}&type=${encodeURIComponent(`album,artist,track`)}&limit=15`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(searchResponse)
		.then(results => dispatch(receiveSearch(results)))
		.catch(error => {
			dispatch(errorSearch(error))
			console.log(error)
		})
}
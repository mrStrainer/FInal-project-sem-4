import { json, status, createHeader } from './Helpers'

export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export const REQUEST_MORE_SEARCH = 'REQUEST_MORE_SEARCH'
export const RECEIVE_MORE_SEARCH = 'RECEIVE_MORE_SEARCH'

export const requestSearch = (searchQ/*, offset*/) => ({
	type:REQUEST_SEARCH,
	searchQ,
	//offset
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
		artists:track.artists.map(artist => artist.name),
		id:track.id,
		album:track.album.name,

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
				console.log('eh');
		}		
	}
	return res;
}

export const searchMore = searchType => (dispatch, getState) => {
	const { token } = getState().auth;
	let { searchQ, results:{ [searchType]:{ total, offset } } } = getState().search;
	// if (offset+15 > total) {
	// 	offset =
	// }
	dispatch(requestMoreSearch(searchType))
	return fetch(`https://api.spotify.com/v1/search?q=${searchQ}&type=${searchType}&limit=15&offset=${offset+15}`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(searchResponse)
		.then(results => dispatch(receiveMoreSearch(searchType,results)))
		.catch(error => console.log(error))
}

//type = 'album,track,artist',
export const searchAlbum = (searchQ) => (dispatch, getState) => {
	const { token } = getState().auth; 
	dispatch(requestSearch(searchQ))
	return fetch(`https://api.spotify.com/v1/search?q=${searchQ}&type=${encodeURIComponent(`album,artist,track`)}&limit=15`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(searchResponse)
		.then(results => dispatch(receiveSearch(results)))
		.catch(error => console.log(error))
}
import { json, status, createHeader } from './Helpers'

export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

export const requestSearch = (searchQ/*, offset*/) => ({
	type:REQUEST_SEARCH,
	searchQ,
	//offset
})

export const receiveSearch = results => ({
	type:RECEIVE_SEARCH,
	results,
})

const searchResponse = results => {
	//TODO
	//results for all types
	const { total, items:responseAlbums  } = results.albums;

	const albums = responseAlbums.map(album => ({
		name:album.name,
		artist:album.artists[0].name,
		id:album.id,
		image:album.images[2]
	}));

	return {
		total,
		albums
	}
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
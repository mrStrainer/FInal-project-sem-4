import { json, status, createHeader } from './Helpers'

const REQUEST_SEARCH = 'REQUEST_SEARCH'
const RECEIVE_SEARCH = 'RECEIVE_SEARCH'

const requestSearch = (searchQ, offset) => ({
	type:REQUEST_SEARCH,
	searchQ,
	offset
})

const receiveSearch = results => ({
	type:RECEIVE_SEARCH,
	results,
})

const searchResponse = results => {
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
export const searchAlbum = (searchQ, offset = 0) => (dispatch, getState) => {
	const { token } = getState().auth; 
	dispatch(requestSearch(searchQ, offset))
	return fetch(`https://api.spotify.com/v1/search?q=${searchQ}&type=album&limit=15&offset=${offset}`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(searchResponse)
		.then(results => dispatch(receiveSearch(results)))
		.catch(error => console.log(error))
}
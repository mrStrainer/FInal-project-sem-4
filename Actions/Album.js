import { json, status, createHeader } from './Helpers'

export const REQUEST_ALBUM = 'REQUEST_ALBUM'

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM'

export const requestAlbum = albumId => ({
	type:REQUEST_ALBUM,
	albumId
})

export const receiveAlbum = album => ({
	type:RECEIVE_ALBUM,
	album, 
})

const albumResponse = album => ({
    name: album.name,
    id:album.id,
    artist:album.artists[0].name,
    release_date:album.release_date,
    tracks:album.tracks.items,
    image:album.images[1]
})

const fetchAlbum = (albumId, token) => dispatch => {
	dispatch(requestAlbum(albumId));
 	return fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
			method: `GET`,
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		})
 		.then(json)
 		.then(status)
 		.then(albumResponse)
 		.then(album => dispatch(receiveAlbum(album)))
 		.catch(error => console.log(error, albumId))
}

const shouldFetchAlbum = (state, albumId) => {
	const { album } = state;

	if (albumId === undefined || album.isFetching || album.album !== undefined && album.id === albumId) 
		return false;

	return true;
}

export const fetchAlbumIfNeeded = (albumId) => (dispatch, getState) => {
	if (shouldFetchAlbum(getState(), albumId)){
		return dispatch(fetchAlbum(albumId, getState().auth.token));
	}
}
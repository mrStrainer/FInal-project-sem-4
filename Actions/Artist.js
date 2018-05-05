import { json, status, createHeader } from './Helpers'

export const REQUEST_ARTIST = 'REQUEST_ARTIST'
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'
export const ERROR_ARTIST = 'ERROR_ARTIST'
export const requestArtist = artistId => ({
	type:REQUEST_ARTIST,
	artistId
})

export const receiveArtist = artist => ({
	type:RECEIVE_ARTIST,
	artist, 
})

export const errorArtist = error => ({
	type:ERROR_ARTIST,
	error
})

const artistResponse = artist => ({
    name: artist.name,
    id:artist.id,
    followers:artist.followers,
    image:artist.images[artist.images.length-1]
})

const fetchArtist = (artistId, token) => dispatch => {
	dispatch(requestArtist(artistId));
 	return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
			method: `GET`,
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		})
 		.then(json)
 		.then(status)
 		.then(artistResponse)
 		.then(artist => dispatch(receiveArtist(artist)))
 		.catch(error => {
 			dispatch(errorArtist(error))
 			console.log(error, artistId)
 		})
}

const shouldFetchArtist = (state, artistId) => {
	const { artist } = state;

	if (artistId === undefined || artist.isFetching || artist.artist !== undefined && artist.id === artistId) 
		return false;

	return true;
}

export const fetchArtistIfNeeded = artistId => (dispatch, getState) => {
	if (shouldFetchArtist(getState(), artistId)){
		return dispatch(fetchArtist(artistId, getState().auth.token));
	}
}

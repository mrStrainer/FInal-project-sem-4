import { json, status, createHeader } from './Helpers'

export const REQUEST_ARTIST = 'REQUEST_ARTIST'
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'
export const REQUEST_ARTIST_TOP_TRACKS = 'REQUEST_ARTIST_TOP_TRACKS'
export const RECEIVE_ARTIST_TOP_TRACKS = 'RECEIVE_ARTIST_TOP_TRACKS'
export const ERROR_ARTIST = 'ERROR_ARTIST'
export const RECEIVE_NO_ARTIST_TOP_TRACKS = 'RECEIVE_NO_ARTIST_TOP_TRACKS'

export const requestArtist = artistId => ({
	type:REQUEST_ARTIST,
	artistId
})

export const receiveArtist = artist => ({
	type:RECEIVE_ARTIST,
	artist, 
})

export const requestArtistTopTracks = artistId => ({
	type:REQUEST_ARTIST_TOP_TRACKS,
	artistId
})

export const receiveArtistTopTracks = topTracks => ({
	type:RECEIVE_ARTIST_TOP_TRACKS,
	topTracks
})

export const receiveNoArtistTopTracks = error => ({
	type:RECEIVE_NO_ARTIST_TOP_TRACKS,
	error
})

export const errorArtist = error => ({
	type:ERROR_ARTIST,
	error
})

const artistResponse = artist => ({
    name: artist.name,
    id:artist.id,
    followers:artist.followers.total,
    image:artist.images[artist.images.length-1]
})

const artistTopTracksResponse = responseTopTracks => {
	const { tracks } = responseTopTracks;
	const topTracks = tracks.map(track => {
		const { id, name, duration_ms, album, artists } = track;
		return	{
			id,
			name,
			duration_ms,
			album:{
				name:album.name,
				id:album.id
			},
			artists: artists.map(artist => {
				const { id, name } = artist;
				return {
					id,
					name,
				}
			}),
		}
	})

	return topTracks;
}

const fetchArtist = (artistId, token) => dispatch => {
	dispatch(requestArtist(artistId));
 	return fetch(`https://api.spotify.com/v1/artists/${artistId}`, createHeader('GET', token))
 		.then(json)
 		.then(status)
 		.then(artistResponse)
 		.then(artist => dispatch(receiveArtist(artist)))
 		.catch(error => {
 			dispatch(errorArtist(error))
 			console.log(error, artistId)
 		})
}
const fetchArtistTopTracks = artistId => {
	//requestArtistTopTracks
	return fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=DK`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(artistTopTracksResponse)
		.then(topTracks => dispatch())
		.catch(error => {
			dispatch()
			console.log(error)
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

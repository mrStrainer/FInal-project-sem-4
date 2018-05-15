import { json, status, createHeader } from './Helpers'
import { albumResponse } from './Search'

export const REQUEST_ARTIST = 'REQUEST_ARTIST'
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST'
export const REQUEST_ARTIST_TOP_TRACKS = 'REQUEST_ARTIST_TOP_TRACKS'
export const RECEIVE_ARTIST_TOP_TRACKS = 'RECEIVE_ARTIST_TOP_TRACKS'
export const REQUEST_ARTIST_ALBUMS = 'REQUEST_ARTIST_ALBUMS'
export const RECEIVE_ARTIST_ALBUMS = 'RECEIVE_ARTIST_ALBUMS'
export const REQUEST_MORE_ARTIST_ALBUMS = 'REQUEST_MORE_ARTIST_ALBUMS'
export const RECEIVE_MORE_ARTIST_ALBUMS = 'RECEIVE_MORE_ARTIST_ALBUMS'
export const REQUEST_RELATED_ARTISTS = 'REQUEST_RELATED_ARTISTS'
export const RECEIVE_RELATED_ARTISTS = 'RECEIVE_RELATED_ARTISTS'
export const RECEIVE_NO_MORE_ARTIST_ALBUMS = 'RECEIVE_NO_MORE_ARTIST_ALBUMS'
export const RECEIVE_NO_ARTIST_ALBUMS = 'RECEIVE_NO_ARTIST_ALBUMS'
export const RECEIVE_NO_ARTIST_TOP_TRACKS = 'RECEIVE_NO_ARTIST_TOP_TRACKS'
export const RECEIVE_NO_RELATED_ARTISTS = 'RECEIVE_NO_RELATED_ARTISTS'
export const ERROR_ARTIST = 'ERROR_ARTIST'


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

export const requestArtistAlbums = artistId => ({
	type:REQUEST_ARTIST_ALBUMS,
	artistId
})

export const receiveArtistAlbums = albums => ({
	type:RECEIVE_ARTIST_ALBUMS,
	albums
})

export const requestMoreArtistAlbums = artistId => ({
	type:REQUEST_MORE_ARTIST_ALBUMS,
	artistId
})

export const receiveMoreArtistAlbums = albums => ({
	type:RECEIVE_MORE_ARTIST_ALBUMS,
	albums
})

export const requestRelatedArtists = artistId => ({
	type:REQUEST_RELATED_ARTISTS,
	artistId
})

export const receiveRelatedArtists = relatedArtists => ({
	type:RECEIVE_RELATED_ARTISTS,
	relatedArtists
})

export const receiveNoArtistTopTracks = error => ({
	type:RECEIVE_NO_ARTIST_TOP_TRACKS,
	error
})

export const receiveNoArtistAlbums = error => ({
	type:RECEIVE_NO_ARTIST_ALBUMS,
	error
})

export const receiveNoMoreArtistAlbums = error => ({
	type:RECEIVE_NO_MORE_ARTIST_ALBUMS,
	error
})

export const receiveNoRelatedArtists = error => ({
	type:RECEIVE_NO_RELATED_ARTISTS,
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

const artistAlbumResponse = albums => {
	const { offset, total } = albums;
	return {
		albums:albumResponse(albums),
		total,
		offset
	}
}

const relatedArtistsResponse = responseRelatedArtists => {
	const { artists } = responseRelatedArtists;
	return artists.map(artist => artistResponse(artist));
}

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
export const fetchArtist = (artistId, token) => (dispatch, getState) => {
	dispatch(fetchArtistInfo(artistId,token))
	dispatch(fetchArtistTopTracks(artistId))
	dispatch(fetchArtistAlbums(artistId))
	dispatch(fetchRelatedArtists(artistId))
}
const fetchArtistInfo = (artistId) => (dispatch, getState) => {
	const { token } = getState().auth;

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

const fetchArtistTopTracks = artistId => (dispatch, getState) => {
	const { token } = getState().auth;
	//requestArtistTopTracks
	dispatch(requestArtistTopTracks(artistId))
	return fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=DK`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(artistTopTracksResponse)
		.then(topTracks => dispatch(receiveArtistTopTracks(topTracks)))
		.catch(error => {
			dispatch(receiveNoArtistTopTracks(error))
			console.log(error)
		})
}

const fetchArtistAlbums = artistId => (dispatch, getState) => {
	const { token } = getState().auth;
	//requestArtistalbums
	dispatch(requestArtistAlbums(artistId))
	return fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=${encodeURIComponent('album,single')}&limit=15`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(artistAlbumResponse)
		.then(albums => dispatch(receiveArtistAlbums(albums)))
		.catch(error => {
			dispatch(receiveNoArtistAlbums(error))
			console.log(error)
		})
}

export const fetchMoreArtistAlbums = artistId => (dispatch, getState) => {
	const { token } = getState().auth;
	const { total, offset } = getState().artist;
	//requestArtistalbums
	dispatch(requestMoreArtistAlbums(artistId))
	if (offset > total) {
		return dispatch(receiveNoMoreArtistAlbums('No more albums to get'));
	}
	return fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=${encodeURIComponent('album,single')}&limit=15&offset=${offset+15}`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(artistAlbumResponse)
		.then(albums => dispatch(receiveMoreArtistAlbums(albums)))
		.catch(error => {
			dispatch(receiveNoMoreArtistAlbums(error))
			console.log(error)
		})
}

const fetchRelatedArtists = artistId => (dispatch, getState) => {
	const { token } = getState().auth;
	//requestRelatedArtists
	dispatch(requestRelatedArtists(artistId))
	return fetch(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(relatedArtistsResponse)
		.then(artists => dispatch(receiveRelatedArtists(artists)))
		.catch(error => {
			dispatch(receiveNoRelatedArtists(error))
			console.log(error)
		})
}

// const shouldFetchArtist = (state, artistId) => {
// 	const { artist } = state;

// 	if (artistId === undefined || artist.isFetching || artist.artist !== undefined && artist.id === artistId) 
// 		return false;

// 	return true;
// }

// export const fetchArtistIfNeeded = artistId => (dispatch, getState) => {
// 	if (shouldFetchArtist(getState(), artistId)){
// 		return dispatch(fetchArtist(artistId, getState().auth.token));
// 	}
// }

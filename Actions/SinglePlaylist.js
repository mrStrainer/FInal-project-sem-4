import { json, status, createHeader } from './Helpers'

const REQUEST_SINGLE_PLAYLIST = 'REQUEST_SINGLE_PLAYLIST'
const RECEIVE_SINGLE_PLAYLIST = 'RECEIVE_SINGLE_PLAYLIST'
const REQUEST_MORE_PLAYLIST_TRACKS = 'REQUEST_MORE_PLAYLIST_TRACKS'
const RECEIVE_MORE_PLAYLIST_TRACKS = 'RECEIVE_MORE_PLAYLIST_TRACKS'
const RECEIVE_NO_PLAYLIST_TRACKS = 'RECEIVE_NO_PLAYLIST_TRACKS'
const ERROR_SINGLE_PLAYLIST = 'ERROR_SINGLE_PLAYLIST'

// TODO
// REDUCERS, playlist ui

export const requestSinglePlaylist = (userId, playlistId) => ({
	type: REQUEST_SINGLE_PLAYLIST,
	userId,
	playlistId
})

export const receiveSinglePlaylist = playlist => ({
	type:RECEIVE_SINGLE_PLAYLIST,
	playlist
})

export const requestMorePlaylistTracks = () => ({
	type:REQUEST_MORE_PLAYLIST_TRACKS,
})

export const receiveMorePlaylistTracks = (tracks) => ({
	type:RECEIVE_MORE_PLAYLIST_TRACKS,
	tracks
})

export const receiveNoPlaylistTracks = () => ({
	type:RECEIVE_NO_PLAYLIST_TRACKS,
})

export const errorSinglePlaylist = error => ({
	type:ERROR_SINGLE_PLAYLIST,
	error
})

// const singlePlaylistInfoResponse = responseSinglePlaylistInfo => {
// 	const { items, total, offset } = responseSinglePlaylist;
// 		id
// 		name
// 		description
// 		followers.total
// 		owner.id
// 		tracks.total

// }
// const singlePlaylistTracksResponse = responseSinglePlaylistTracks => {
// 		tracks.offset
// 		tracks.items.added_by.id
// 		tracks.items.added_at
// 		tracks.items.track.album.id
// 		tracks.items.track.album.name
// 		tracks.items.track.artists[i].id 
// 		tracks.items.track.artists[i].name
// 		tracks.items.track.duration_ms
// 		tracks.items.track.id
// 		tracks.items.track.name
// }

// `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}?fields=${encodeURIComponent(`id,name,description,followers(total),owner(id),tracks(total)`)}`
// export const fetchSinglePlaylistInfo = (userId, playlistId) => (dispatch, getState) => {
// 	const { token } = getState().auth; 
// 	dispatch(requestPlaylists(id));
// 	return fetch(`https://api.spotify.com/v1${endPoint}?limit=15`, createHeader('GET', token))
// 		.then(json)
// 		.then(status)
// 		.then(playlistsResponse)
// 		.then(playlists => dispatch(receivePlaylists(playlists)))
// 		.catch(error => {
// 			dispatch(errorPlaylists(error))
// 			console.log(error)
// 		})
// }
// export const fetchSinglePlaylistTracks = (userId, playlistId) => (dispatch,getState) => {
// 	return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, createHeader('GET', token))

// }

// export const fetchMoreSinglePlaylistTracks= () => (dispatch, getState) => {
// 	const { token } = getState().auth;
// 	const { id, offset, total } = getState().playlists

// 	dispatch(requestMorePlaylists())
// 	if (offset > total) {
// 		return dispatch(receiveNoPlaylists());
// 	}
// 	const endPoint = id === 'me' ? '/me/playlists' : `/users/${id}/playlists`

// 	return fetch(`https://api.spotify.com/v1${endPoint}?limit=15&offset=${offset+15}`, createHeader('GET', token))
// 		.then(json)
// 		.then(status)
// 		.then(playlistsResponse)
// 		.then(playlists => dispatch(receiveMorePlaylists(playlists)))
// 		.catch(error => {
// 			dispatch(errorPlaylists(error))
// 			console.log(error)
// 		})
// }
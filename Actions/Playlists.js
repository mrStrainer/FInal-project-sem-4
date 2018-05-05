import { json, status, createHeader } from './Helpers'

const REQUEST_PLAYLISTS = 'REQUEST_PLAYLISTS'
const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS'
const REQUEST_MORE_PLAYLISTS = 'REQUEST_MORE_PLAYLISTS'
const RECEIVE_MORE_PLAYLISTS = 'RECEIVE_MORE_PLAYLISTS'
const RECEIVE_NO_PLAYLISTS = 'RECEIVE_NO_PLAYLISTS'
const ERROR_PLAYLISTS = 'ERROR_PLAYLISTS'

// TODO
// REDUCERS, playlist ui

export const requestPlaylists = id => ({
	type: REQUEST_PLAYLISTS,
	id
})

export const receivePlaylists = playlists => ({
	type:RECEIVE_PLAYLISTS,
	playlists
})

export const requestMorePlaylists = () => ({
	type:REQUEST_MORE_PLAYLISTS,
})

export const receiveMorePlaylists = (playlists) => ({
	type:RECEIVE_MORE_PLAYLISTS,
	playlists
})

export const receiveNoPlaylists = () => ({
	type:RECEIVE_NO_PLAYLISTS,
})

export const errorPlaylists = error => ({
	type:ERROR_PLAYLISTS,
	error
})

const playlistsResponse = responsePlaylists => {
	const { items, total, offset } = responsePlaylists;
	const playlists = items.map(playlist => ({
		name:playlist.name,
		id:playlist.id,
		isPublic:playlist.public,
		total_tracks:playlist.tracks.total,
		owner: playlist.owner.id,
	}));
	return {
		offset,
		total,
		playlists
	}
}

export const fetchPlaylists = (id = 'me') => (dispatch, getState) => {
	const endPoint = id === 'me' ? '/me/playlists' : `/users/${id}/playlists`
	const { token } = getState().auth; 
	dispatch(requestPlaylists(id));
	return fetch(`https://api.spotify.com/v1${endPoint}?limit=15`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(playlistsResponse)
		.then(playlists => dispatch(receivePlaylists(playlists)))
		.catch(error => {
			dispatch(errorPlaylists(error))
			console.log(error)
		})
}

export const fetchMorePlaylists = () => (dispatch, getState) => {
	const { token } = getState().auth;
	const { id, offset, total } = getState().playlists

	dispatch(requestMorePlaylists())
	if (offset > total) {
		return dispatch(receiveNoPlaylists());
	}
	const endPoint = id === 'me' ? '/me/playlists' : `/users/${id}/playlists`

	return fetch(`https://api.spotify.com/v1${endPoint}?limit=15&offset=${offset+15}`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(playlistsResponse)
		.then(playlists => dispatch(receiveMorePlaylists(playlists)))
		.catch(error => {
			dispatch(errorPlaylists(error))
			console.log(error)
		})
}
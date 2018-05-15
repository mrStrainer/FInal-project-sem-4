import { json, status, createHeader } from './Helpers'
const REQUEST_SINGLE_PLAYLIST_INFO = 'REQUEST_SINGLE_PLAYLIST_INFO'
const RECEIVE_SINGLE_PLAYLIST_INFO = 'RECEIVE_SINGLE_PLAYLIST_INFO'
const REQUEST_SINGLE_PLAYLIST_TRACKS = 'REQUEST_SINGLE_PLAYLIST_TRACKS'
const RECEIVE_SINGLE_PLAYLIST_TRACKS = 'RECEIVE_SINGLE_PLAYLIST_TRACKS'
const REQUEST_MORE_SINGLE_PLAYLIST_TRACKS = 'REQUEST_MORE_SINGLE_PLAYLIST_TRACKS'
const RECEIVE_MORE_SINGLE_PLAYLIST_TRACKS = 'RECEIVE_MORE_SINGLE_PLAYLIST_TRACKS'
const RECEIVE_NO_SINGLE_PLAYLIST_INFO = 'RECEIVE_NO_SINGLE_PLAYLIST_INFO'
const RECEIVE_NO_SINGLE_PLAYLIST_TRACKS = 'RECEIVE_NO_SINGLE_PLAYLIST_TRACKS'
const RECEIVE_NO_MORE_SINGLE_PLAYLIST_TRACKS = 'RECEIVE_NO_MORE_SINGLE_PLAYLIST_TRACKS'
const ERROR_SINGLE_PLAYLIST = 'ERROR_SINGLE_PLAYLIST'

// TODO
// REDUCERS, playlist ui
export const requestSinglePlaylistInfo = (userId, playlistId) => ({
	type:REQUEST_SINGLE_PLAYLIST_INFO,
	userId,
	playlistId
})

export const receiveSinglePlaylistInfo = playlistInfo => ({
	type:RECEIVE_SINGLE_PLAYLIST_INFO,
	playlistInfo
})

export const requestSinglePlaylistTracks = (userId, playlistId) => ({
	type: REQUEST_SINGLE_PLAYLIST_TRACKS,
	userId,
	playlistId
})

export const receiveSinglePlaylistTracks = tracks => ({
	type:RECEIVE_SINGLE_PLAYLIST_TRACKS,
	tracks
})

export const requestMoreSinglePlaylistTracks = () => ({
	type:REQUEST_MORE_SINGLE_PLAYLIST_TRACKS,
})

export const receiveMoreSinglePlaylistTracks = tracks => ({
	type:RECEIVE_MORE_SINGLE_PLAYLIST_TRACKS,
	tracks
})

export const receiveNoSinglePlaylistInfo = error => ({
	type:RECEIVE_NO_SINGLE_PLAYLIST_INFO,
	error,
})

export const receiveNoSinglePlaylistTracks = error => ({
	type:RECEIVE_NO_SINGLE_PLAYLIST_TRACKS,
	error,
})

export const receiveNoMoreSinglePlaylistTracks = () => ({
	type:RECEIVE_NO_MORE_SINGLE_PLAYLIST_TRACKS,
})

export const errorSinglePlaylist = error => ({
	type:ERROR_SINGLE_PLAYLIST,
	error,
})

const singlePlaylistInfoResponse = responseSinglePlaylistInfo => {
	const { description, followers, id, name, owner, tracks } = responseSinglePlaylistInfo;

	return {
		name,
		id,
		description,
		owner:owner.id,
		followers:followers.total,
		total:tracks.total,
		offset:tracks.offset
	}
}

const singlePlaylistTracksResponse = responseSinglePlaylistTracks => {
	const { offset, items } = responseSinglePlaylistTracks;
	const tracks = items.map(item => {
		const { added_at, track } = item;
		return {
			id:track.id,
			name:track.name,
			duration_ms:track.duration_ms,
			added_at,
			album:{
				id: track.album.id,
				name:track.album.name
			},
			artists: track.artists.map(artist => {
				const  { id, name } = artist;
				return {
					id,
					name
				}
			}),

		}
	})

	return {
		offset,
		tracks
	};		
}

// 
export const fetchSinglePlaylistInfo = (userId, playlistId) => (dispatch, getState) => {
	const { token } = getState().auth; 
	dispatch(requestSinglePlaylistInfo(userId, playlistId));
	return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}?fields=${encodeURIComponent(`id,name,description,followers(total),owner(id),tracks(total, offset)`)}`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(singlePlaylistInfoResponse)
		.then(playlistInfo => dispatch(receiveSinglePlaylistInfo(playlistInfo)))
		.catch(error => {
			dispatch(receiveNoSinglePlaylistInfo(error))
			console.log(error)
		})
}

export const fetchSinglePlaylistTracks = (userId, playlistId) => (dispatch, getState) => {
	const { token } = getState().auth; 
	dispatch(requestSinglePlaylistTracks(userId, playlistId));
	return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks?fields=${encodeURIComponent(`offset,items(added_at,track(id,name,duration_ms,album(id,name),artists(id,name)))`)}&limit=15&offset=0`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(singlePlaylistTracksResponse)
		.then(playlistTracks => dispatch(receiveSinglePlaylistTracks(playlistTracks)))
		.catch(error => {
			dispatch(receiveNoSinglePlaylistTracks(error))
			console.log(error)
		})
}

export const fetchSinglePlaylist = (userId, playlistId) => (dispatch, getState) => {
	dispatch(fetchSinglePlaylistInfo(userId,playlistId))
	dispatch(fetchSinglePlaylistTracks(userId,playlistId))
}
//owner, total, id, offset to info
export const fetchMoreSinglePlaylistTracks = () => (dispatch, getState) => {
	const { token } = getState().auth; 
	const { info } = getState().currentPlaylist;

	dispatch(requestMoreSinglePlaylistTracks());
	if (info.offset >= info.total) {
		return dispatch(receiveNoMoreSinglePlaylistTracks());
	}
	return fetch(`https://api.spotify.com/v1/users/${info.owner}/playlists/${info.id}/tracks?fields=${encodeURIComponent(`offset,items(added_at,track(id,name,duration_ms,album(id,name),artists(id,name)))`)}&limit=15&offset=${info.offset+15}`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(singlePlaylistTracksResponse)
		.then(playlistTracks => dispatch(receiveMoreSinglePlaylistTracks(playlistTracks)))
		.catch(error => {
			dispatch(receiveNoMoreSinglePlaylistTracks())
			console.log(error)
		})
}

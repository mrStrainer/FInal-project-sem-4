import * as actions from './index'

describe('SinglePlaylist actions', () => {
	it('requestSinglePlaylistInfo should create REQUEST_SINGLE_PLAYLIST_INFO action', () => {
		expect(
			actions.requestSinglePlaylistInfo('id','playlistId')).toEqual({
			type:'REQUEST_SINGLE_PLAYLIST_INFO',
			userId:'id',
			playlistId:'playlistId'
		})
	})

	it('receiveSinglePlaylistInfo should create RECEIVE_SINGLE_PLAYLIST_INFO action', () => {
		expect(
			actions.receiveSinglePlaylistInfo('info')).toEqual({
			type:'RECEIVE_SINGLE_PLAYLIST_INFO',
			playlistInfo:'info'
		})
	})

	it('requestSinglePlaylistTracks should create REQUEST_SINGLE_PLAYLIST_TRACKS action', () => {
		expect(
			actions.requestSinglePlaylistTracks('id','playlistId')).toEqual({
			type:'REQUEST_SINGLE_PLAYLIST_TRACKS',
			userId:'id',
			playlistId:'playlistId'
		})
	})

	it('receiveSinglePlaylistTracks should create RECEIVE_SINGLE_PLAYLIST_TRACKS action', () => {
		expect(
			actions.receiveSinglePlaylistTracks('tracks')).toEqual({
			type:'RECEIVE_SINGLE_PLAYLIST_TRACKS',
			tracks:'tracks'
		})
	})

	it('requestMoreSinglePlaylistTracks should create REQUEST_MORE_SINGLE_PLAYLIST_TRACKS action', () => {
		expect(
			actions.requestMoreSinglePlaylistTracks()).toEqual({
			type:'REQUEST_MORE_SINGLE_PLAYLIST_TRACKS',
		})
	})

	it('receiveMoreSinglePlaylistTracks should create RECEIVE_MORE_SINGLE_PLAYLIST_TRACKS action', () => {
		expect(
			actions.receiveMoreSinglePlaylistTracks('tracks')).toEqual({
			type:'RECEIVE_MORE_SINGLE_PLAYLIST_TRACKS',
			tracks:'tracks'
		})
	})

	it('receiveNoSinglePlaylistTracks should create RECEIVE_NO_SINGLE_PLAYLIST_TRACKS action', () => {
		expect(
			actions.receiveNoSinglePlaylistTracks()).toEqual({
			type:'RECEIVE_NO_SINGLE_PLAYLIST_TRACKS',
		})
	})

	it('errorSinglePlaylist should create ERROR_SINGLE_PLAYLIST action', () => {
		expect(
			actions.errorSinglePlaylist('error')).toEqual({
			type:'ERROR_SINGLE_PLAYLIST',
			error:'error'
		})
	})

})
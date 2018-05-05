import * as actions from './index'

describe('Profile actions', () => {

	it('requestPlaylists should create REQUEST_PLAYLISTS action', () => {
		expect(
			actions.requestPlaylists('id')).toEqual({
			type:'REQUEST_PLAYLISTS',
			id:'id'
		})
	})

	it('receivePlaylists should create RECEIVE_PLAYLISTS action', () => {
		expect(
			actions.receivePlaylists({
				offset:0,
				total:1,
				playlists: [{
					name:'playlist',
					id:'id',
					public:true,
					total_tracks:0,
					owner:'id'
				}]
			})
		).toEqual({
			type:'RECEIVE_PLAYLISTS',
			playlists: {
				offset:0,
				total:1,
				playlists: [{
					name:'playlist',
					id:'id',
					public:true,
					total_tracks:0,
					owner:'id'
				}]
			}
		})
	})

	it('requestMorePlaylists should create REQUEST_MORE_PLAYLISTS action', () => {
		expect(
			actions.requestMorePlaylists()).toEqual({
			type:'REQUEST_MORE_PLAYLISTS',
		})
	})

	it('receiveMorePlaylists should create RECEIVE_MORE_PLAYLISTS action', () => {
		expect(
			actions.receiveMorePlaylists({
				offset:0,
				total:1,
				playlists: [{
					name:'playlist',
					id:'id',
					public:true,
					total_tracks:0,
					owner:'id'
				}]
			})).toEqual({
			type:'RECEIVE_MORE_PLAYLISTS',
			playlists: {
				offset:0,
				total:1,
				playlists: [{
					name:'playlist',
					id:'id',
					public:true,
					total_tracks:0,
					owner:'id'
				}]
			}
		})
	})

	it('errorPlaylists should create ERROR_PLAYLISTS action', () => {
		expect(actions.errorPlaylists('Cant load playlists')).toEqual({
			type:'ERROR_PLAYLISTS',
			error:'Cant load playlists'
		})
	})
})
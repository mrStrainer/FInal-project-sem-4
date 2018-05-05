import * as actions from './index'

describe('album actions', () => {
	it('requestAlbum should create REQUEST_ALBUM action', () => {
		expect(actions.requestAlbum('albumId')).toEqual({
			type:'REQUEST_ALBUM',
			albumId:'albumId'
		})
	})

	const album = {
		name: 'name',
		id: 'id',
		artist:'artist',
		release_date:'release_date',
		tracks:[],
		image:{
			width:300,
			height:300,
			url:'url'
		}
	}

	it('receiveAlbum should create a RECEIVE_ALBUM action', () => {
		expect(actions.receiveAlbum(album)).toEqual({
			type: 'RECEIVE_ALBUM',
			album: {
				name: 'name',
				id: 'id',
				artist:'artist',
				release_date:'release_date',
				tracks:[],
				image:{
					width:300,
					height:300,
					url:'url'
				}
			}
		})
	}) 

	it('errorAlbum should create ERROR_ALBUM action', () => {
		expect(actions.errorAlbum('401: Unauthorized')).toEqual({
			type:'ERROR_ALBUM',
			error:'401: Unauthorized'
		})
	})
})
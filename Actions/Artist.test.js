import * as actions from './index'

describe('artist actions', () => {
	it('requestArtist should create REQUEST_ARTIST action', () => {
		expect(actions.requestArtist('artistId')).toEqual({
			type:'REQUEST_ARTIST',
			artistId:'artistId'
		})
	})

	it('receiveArtist should create a RECEIVE_ARTIST action', () => {
		expect(actions.receiveArtist({
			name:'name',
			id:'id',
			followers:0,
			image:{
				width:300,
				height:300,
				url:'url'
			}
		})).toEqual({
			type: 'RECEIVE_ARTIST',
			artist: {
				name: 'name',
				id: 'id',
				followers:0,
				image:{
					width:300,
					height:300,
					url:'url'
				}
			}
		})
	}) 

	it('errorArtist should create ERROR_ARTIST action', () => {
		expect(actions.errorArtist('404: not found')).toEqual({
			type:'ERROR_ARTIST',
			error:'404: not found'
		})
	})
})
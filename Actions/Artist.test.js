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

	it('requestArtistTopTracks should create REQUEST_ARTIST_TOP_TRACKS action', () => {
		expect(actions.requestArtistTopTracks('artistId')).toEqual({
			type:'REQUEST_ARTIST_TOP_TRACKS',
			artistId:'artistId'
		})
	})

	it('receiveArtistTopTracks should create RECEIVE_ARTIST_TOP_TRACKS action', () => {
		expect(actions.receiveArtistTopTracks([
				{
					name:'name',
					id:'id',
					duration_ms:300,
					album:{
						name:'name',
						id:'id'
					},
					artists:[
						{
							name:'name',
							id:'id'
						}
					]
				}
			])).toEqual({
				type:'RECEIVE_ARTIST_TOP_TRACKS',
				topTracks:[
					{
						name:'name',
						id:'id',
						duration_ms:300,
						album:{
							name:'name',
							id:'id'
						},
						artists:[
							{
								name:'name',
								id:'id'
							}
						]
					}
				]
		})
	})

	it('requestArtistAlbums should create REQUEST_ARTIST_ALBUMS action', () => {
		expect(actions.requestArtistAlbums('artistId')).toEqual({
			type:'REQUEST_ARTIST_ALBUMS',
			artistId:'artistId'
		})
	})
	
	it('receiveArtistAlbums should create RECEIVE_ARTIST_ALBUMS action', () => {
		expect(actions.receiveArtistAlbums({
			albums:[
				{
					name:'name',
					id:'id'
				}
			],
			total:1,
			offset:0
		})).toEqual({
			type:'RECEIVE_ARTIST_ALBUMS',
			albums:{
				albums:[
					{
						name:'name',
						id:'id'
					}
				],
				total:1,
				offset:0
			}
		})
	})

	it('requestRelatedArtists should create REQUEST_RELATED_ARTISTS action', () => {
		expect(actions.requestRelatedArtists('artistId')).toEqual({
			type:'REQUEST_RELATED_ARTISTS',
			artistId:'artistId'
		})
	})

	it('receiveRelatedArtists should create RECEIVE_RELATED_ARTISTS action', () => {
		expect(actions.receiveRelatedArtists([
				{
					name:'name',
					id:'id',
					followers:1,
					image:{}
				}
			])).toEqual({
			type:'RECEIVE_RELATED_ARTISTS',
			relatedArtists:[{
					name:'name',
					id:'id',
					followers:1,
					image:{}
				}
			]
		})
	})

	it('receiveNoArtistTopTracks should create RECEIVE_NO_ARTIST_TOP_TRACKS action', () => {
		expect(actions.receiveNoArtistTopTracks('404: not found')).toEqual({
			type:'RECEIVE_NO_ARTIST_TOP_TRACKS',
			error:'404: not found'
		})
	})

	it('receiveNoArtistAlbums should create RECEIVE_NO_ARTIST_ALBUMS action', () => {
		expect(actions.receiveNoArtistAlbums('404: not found')).toEqual({
			type:'RECEIVE_NO_ARTIST_ALBUMS',
			error:'404: not found'
		})
	})

	it('receiveNoRelatedArtists should create RECEIVE_NO_RELATED_ARTISTS action', () => {
		expect(actions.receiveNoRelatedArtists('404: not found')).toEqual({
			type:'RECEIVE_NO_RELATED_ARTISTS',
			error:'404: not found'
		})
	})

	it('errorArtist should create ERROR_ARTIST action', () => {
		expect(actions.errorArtist('404: not found')).toEqual({
			type:'ERROR_ARTIST',
			error:'404: not found'
		})
	})


})
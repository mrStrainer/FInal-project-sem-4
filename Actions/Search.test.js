import * as actions from './index'
import exampleResponse from './search_response'

describe('search actions', () => {
	it('requestSearch should create REQUEST_SEARCH action', () => {
		expect(actions.requestSearch('searchQ')).toEqual({
			type:'REQUEST_SEARCH',
			searchQ:'searchQ'
		})
	})

	it('receiveSearch should create RECEIVE_SEARCH action', () => {
		expect(
			actions.receiveSearch({
				total:0,
				albums:[]
			})
		).toEqual({
			type:'RECEIVE_SEARCH',
			results: {
				total:0,
				albums:[]
			}
		})
	})

	it('requestMoreSearch should create REQUEST_MORE_SEARCH action', () => {
		expect(actions.requestMoreSearch('type')).toEqual({
			type:'REQUEST_MORE_SEARCH',
			searchType:'type'
		})
	})

	it('receiveMoreSearch should create RECEIVE_MORE_SEARCH action', () => {
		expect(actions.receiveMoreSearch('type')).toEqual({
			type:'RECEIVE_MORE_SEARCH',
			searchType:'type'
		})
	})


	it('formats album data correctly', () => {
		expect(
			actions.albumResponse(exampleResponse.albums)
		).toEqual([
			{
				name:"Black Holes And Revelations",
				artist:"Muse",
				id:"0lw68yx3MhKflWFqCsGkIs",
				image:{
		            "height": 64,
		            "url": "https://i.scdn.co/image/81a3f82578dc938c53efdcb405f6a3d3ebbf009f",
		            "width": 64
		        }
			},	
			{
				name:"The Resistance",
				artist:"Muse",
				id:"0eFHYz8NmK75zSplL5qlfM",
				image:{
		            "height": 64,
		            "url": "https://i.scdn.co/image/26098aaa50a3450f0bac8f1a7d7677accf3f3cb6",
		            "width": 64
		        }
			},
			{
				name:"Drones",
				artist:"Muse",
				id:"2wart5Qjnvx1fd7LPdQxgJ",
				image:{
		            "height": 64,
		            "url": "https://i.scdn.co/image/8978459cc3ad68b39bd6dbda418625b06ba5d80c",
		            "width": 64
		        }
			},

		])
	})

	it('formats artist data correctly', () => {
		expect(
			actions.artistResponse(exampleResponse.artists)
		).toEqual([
			{
				name:"Muse",
				id:"12Chz98pHFMPJEknJQMWvI",
				image:{
		            "height": 160,
		            "url": "https://i.scdn.co/image/f026a6204c28907e43e833eaa1820f9b674295ca",
		            "width": 160
		          }
			},	
			{
				name:"Clip Muse",
				id:"15qpUkIDVVWsb60MTzCVsJ",
				image:{
		            "height": 64,
		            "url": "https://i.scdn.co/image/64803e843e21fd189cd618ba8dcb3dba11c52811",
		            "width": 64
		          }
			},
			{
				name:"Charlee Muse",
				id:"0EcCExwuVReDp8Y86sLXUo",
				image:{
		            "height": 160,
		            "url": "https://i.scdn.co/image/ae04510bb2b9493375de9e3748651e4574de4084",
		            "width": 160
		          }
			},

		])
	})

	it('formats track data correctly', () => {
		expect(
			actions.trackResponse(exampleResponse.tracks)
		).toEqual([
			{
				name:"Uprising",
				artists:["Muse"],
				id:"4VqPOruhp5EdPBeR92t6lQ",
				album:"The Resistance",
				"albumId": "0eFHYz8NmK75zSplL5qlfM",
			},	
			{
				name:"Starlight",
				artists:["Muse"],
				id:"3skn2lauGk7Dx6bVIt5DVj",
				album:"Black Holes And Revelations",
				"albumId": "0lw68yx3MhKflWFqCsGkIs",
			},
			{
				name:"Supermassive Black Hole",
				artists:["Muse"],
				id:"3lPr8ghNDBLc2uZovNyLs9",
				album:"Black Holes And Revelations",
				"albumId": "0lw68yx3MhKflWFqCsGkIs",
			},

		])
	})

	it('does the response formatting (serachResponse)', () => {
		expect(
			actions.searchResponse(exampleResponse)
		).toEqual({
			albums: {
				total: 1155,
				offset: 0,
				items:[
					{
						name:"Black Holes And Revelations",
						artist:"Muse",
						id:"0lw68yx3MhKflWFqCsGkIs",
						image:{
				            "height": 64,
				            "url": "https://i.scdn.co/image/81a3f82578dc938c53efdcb405f6a3d3ebbf009f",
				            "width": 64
				        }
					},	
					{
						name:"The Resistance",
						artist:"Muse",
						id:"0eFHYz8NmK75zSplL5qlfM",
						image:{
				            "height": 64,
				            "url": "https://i.scdn.co/image/26098aaa50a3450f0bac8f1a7d7677accf3f3cb6",
				            "width": 64
				        }
					},
					{
						name:"Drones",
						artist:"Muse",
						id:"2wart5Qjnvx1fd7LPdQxgJ",
						image:{
				            "height": 64,
				            "url": "https://i.scdn.co/image/8978459cc3ad68b39bd6dbda418625b06ba5d80c",
				            "width": 64
				        }
					},

				]
			},
			artists: {
				total: 189,
				offset: 0,
				items:[
					{
						name:"Muse",
						id:"12Chz98pHFMPJEknJQMWvI",
						image:{
				            "height": 160,
				            "url": "https://i.scdn.co/image/f026a6204c28907e43e833eaa1820f9b674295ca",
				            "width": 160
				          }
					},	
					{
						name:"Clip Muse",
						id:"15qpUkIDVVWsb60MTzCVsJ",
						image:{
				            "height": 64,
				            "url": "https://i.scdn.co/image/64803e843e21fd189cd618ba8dcb3dba11c52811",
				            "width": 64
				          }
					},
					{
						name:"Charlee Muse",
						id:"0EcCExwuVReDp8Y86sLXUo",
						image:{
				            "height": 160,
				            "url": "https://i.scdn.co/image/ae04510bb2b9493375de9e3748651e4574de4084",
				            "width": 160
				          }
					},

				]
			},
			tracks: {
				total: 11974,
				offset: 0,
				items:[
					{
						name:"Uprising",
						artists:["Muse"],
						id:"4VqPOruhp5EdPBeR92t6lQ",
						album:"The Resistance",
						"albumId": "0eFHYz8NmK75zSplL5qlfM",
					},	
					{
						name:"Starlight",
						artists:["Muse"],
						id:"3skn2lauGk7Dx6bVIt5DVj",
						album:"Black Holes And Revelations",
						"albumId": "0lw68yx3MhKflWFqCsGkIs",
					},
					{
						name:"Supermassive Black Hole",
						artists:["Muse"],
						id:"3lPr8ghNDBLc2uZovNyLs9",
						album:"Black Holes And Revelations",
						"albumId": "0lw68yx3MhKflWFqCsGkIs",
					},
				]
			}
		})
	})

	it('errorSearch should create ERROR_SEARCH action', () => {
		expect(actions.errorSearch('Cant load search results')).toEqual({
			type:'ERROR_SEARCH',
			error:'Cant load search results'
		})
	})
})	
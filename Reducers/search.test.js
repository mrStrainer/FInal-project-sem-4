import search from './search'

describe('search reducer', () => {
	it('should deal with initial state', () => {
		expect(
			search(undefined,{})
		).toEqual({
			isFetching:false,
			results:{}
		})
	})

	it('should handle REQUEST_SEARCH', () => {
		expect(
			search(undefined, {
				type:'REQUEST_SEARCH'
			})
		).toEqual({
			isFetching:true,
			results:{}
		})
	})

	it('should handle REQUEST_SEARCH with searchQ', () => {
		expect(
			search(undefined, {
				type:'REQUEST_SEARCH',
				searchQ:'text'
			})
		).toEqual({
			isFetching:true,
			searchQ:'text',
			results:{}
		})
	})


	const results = {
		albums:{},
		artists:{},
		tracks:{},
	}

	it('should handle RECEIVE_SEARCH', () => {
		expect(
			search({
				isFetching:true
			}, {
				type:'RECEIVE_SEARCH',
				results
			})
		).toEqual({
			isFetching:false,
			results:{
				albums:{},
				artists:{},
				tracks:{}
			}
		})
	})

	it('should handle RECEIVE_MORE_SEARCH', () => {
		expect(
			search({
				isFetching:false,
				results:{
					albums:{
						total:1,
						offset:0,
						items:[]
					},
					artists:{
						total:0,
						offset:0,
						items:[]
					},
					tracks:{
						total:0,
						offset:0,
						items:[]						
					}
				}
			},{
				type:'RECEIVE_MORE_SEARCH',
				searchType:'album',
				results:{
					albums:{
						total:1,
						offset:0,
						items:[{
							name:"Black Holes And Revelations",
							artist:"Muse",
							id:"0lw68yx3MhKflWFqCsGkIs",
							image:{
					            "height": 64,
					            "url": "https://i.scdn.co/image/81a3f82578dc938c53efdcb405f6a3d3ebbf009f",
					            "width": 64
					        }
						}]
					}
				}
			})
		).toEqual({
			isFetching:false,
			isFetchingMore:false,
			results:{
				albums:{
					total:1,
					offset:0,
					items:[{
						name:"Black Holes And Revelations",
						artist:"Muse",
						id:"0lw68yx3MhKflWFqCsGkIs",
						image:{
				            "height": 64,
				            "url": "https://i.scdn.co/image/81a3f82578dc938c53efdcb405f6a3d3ebbf009f",
				            "width": 64
				        }
					}]
				},
				artists:{
					total:0,
					offset:0,
					items:[]
				},
				tracks:{
					total:0,
					offset:0,
					items:[]
				}
			}
		})
	})
})
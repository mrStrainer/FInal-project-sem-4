import playlists from './Playlists'

describe('playlists reducer', () => {
	it('should deal with initial state', () => {
		expect(
			playlists(undefined,{})
		).toEqual({
			isFetching: false,
		})
	})

	it('should handle REQUEST_PLAYLISTS', () => {
		expect(
			playlists({
				isFetching:false,
				playlists:{}
			},{
				type:'REQUEST_PLAYLISTS',
				id:'id'
			})
		).toEqual({
			id:'id',
			isFetching: true,
			playlists:{}
		})
	})

	it('should handle RECEIVE_PLAYLISTS', () => {
		expect(
			playlists({
				id:'id',
				isFetching:true,
				playlists:{}
			},{
				type:'RECEIVE_PLAYLISTS',
				playlists:{
					offset:0,
					total:1,
					playlists:[{
						name:'name',
						id:'id'
					}]
				}
			})
		).toEqual({
			id:'id',
			isFetching:false,
			offset:0,
			total:1,
			playlists:[{
				name:'name',
				id:'id'
			}]
		})
	})

	it('should handle REQUEST_MORE_PLAYLISTS', () => {
		expect(
			playlists({
				id:'id',
				isFetching:false,
				playlists:{}
			},{
				type:'REQUEST_MORE_PLAYLISTS',
			})
		).toEqual({
			id:'id',
			isFetching: false,
			isFetchingMore:true,
			playlists:{}
		})
	})

	it('should handle RECEIVE_MORE_PLAYLISTS', () => {
		expect(
			playlists({
				id:'id',
				isFetching:false,
				offset:0,
				total:1,
				playlists:[{
					name:'name',
					id:'id'
				}]
			},{
				type:'RECEIVE_MORE_PLAYLISTS',
				playlists:{
					offset:1,
					total:1,
					playlists:[{
						name:'name1',
						id:'id1'
					}]
				}
			})
		).toEqual({
			id:'id',
			isFetching:false,
			isFetchingMore:false,
			offset:1,
			total:1,
			playlists:[{
				name:'name',
				id:'id'
			},{
				name:'name1',
				id:'id1'
			}]
		})
	})

	it('should handle RECEIVE_NO_PLAYLISTS', () => {
		expect(
			playlists({
				id:'id',
				isFetching:false,
				playlists:{}
			},{
				type:'RECEIVE_NO_PLAYLISTS',
			})
		).toEqual({
			id:'id',
			isFetching: false,
			isFetchingMore:false,
			playlists:{}
		})
	})

})
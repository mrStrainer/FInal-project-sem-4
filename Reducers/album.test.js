import albumReducer from './album'

describe('albumReducer reducer', () => {
	it('should deal with initial state', () => {
		expect(
			albumReducer(undefined,{})
		).toEqual({
			isFetching:false,
		})
	})

	it('should handle REQUEST_ALBUM', () => {
		expect(
			albumReducer(undefined, {
				type:'REQUEST_ALBUM'
			})
		).toEqual({
			isFetching:true
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

	it('should handle RECEIVE_ALBUM', () => {
		expect(
			albumReducer({
				isFetching:true
			}, {
				type:'RECEIVE_ALBUM',
				album
			})
		).toEqual({
			isFetching:false,
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
})
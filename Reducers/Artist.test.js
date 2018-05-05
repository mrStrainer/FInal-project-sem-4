import artistReducer from './Artist'

describe('artistReducer reducer', () => {
	it('should deal with initial state', () => {
		expect(
			artistReducer(undefined,{})
		).toEqual({
			isFetching:false,
		})
	})

	it('should handle REQUEST_ARTIST', () => {
		expect(
			artistReducer(undefined, {
				type:'REQUEST_ARTIST'
			})
		).toEqual({
			isFetching:true
		})
	})

	it('should handle RECEIVE_ARTIST', () => {
		expect(
			artistReducer({
				isFetching:true
			}, {
				type:'RECEIVE_ARTIST',
				artist: {
					name:'name',
					id: 'id',
					followers:0,
					image:{
						width:300,
						height:300,
						url:'url'
					}
				}
			})
		).toEqual({
			isFetching:false,
			artist: {
				name:'name',
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

	it('should handle ERROR_ARTIST', () => {
		expect(
			artistReducer({
				isFetching:true
			}, {
				type:'ERROR_ARTIST',
				error:'error'
			})
		).toEqual({
			isFetching:false
		})
	})
})
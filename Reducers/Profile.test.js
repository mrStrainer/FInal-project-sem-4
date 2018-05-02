import profile from './Profile'

describe('profile reducer', () => {
	it('should deal with initial state', () => {
		expect(
			profile(undefined,{})
		).toEqual({
			isFetching: false
		})
	})

	it('should handle REQUEST_PROFILE', () => {
		expect(
			profile(undefined,{
				type:'REQUEST_PROFILE',
				id:'id'
			})
		).toEqual({
			isFetching: true
		})
	})

	it('should handle RECEIVE_PROFILE', () => {
		expect(
			profile(undefined,{
				type:'RECEIVE_PROFILE',
				profile:{
					name:'name',
					id:'id'
				}
			})
		).toEqual({
			isFetching:false,
			profile:{
				name:'name',
				id:'id'
			}
		})
	})

})
import auth from './Auth'

describe('login reducer', () => {
	it('should deal with initial state', () => {
		expect(
			auth(undefined,{})
		).toEqual({
			isLoggedIn:false
		})
	})

	it('should handle login', () => {
		expect(
			auth(undefined,{
				type:'LOGIN',
				token:'token'
			})
		).toEqual({
			isLoggedIn:true,
			token:'token'
		})

		expect(
			auth({
				isLoggedIn:true,
				token:'token'
			}, {
				type:'LOGIN',
				token:'token2'
			})
		).toEqual({
			isLoggedIn:true,
			token:'token2'
		})
	})

	it('should handle logout', () => {
		expect(
			auth(undefined,{
				type:'LOGOUT'
			})
		).toEqual({
			isLoggedIn:false
		})

		expect(
			auth({
				isLoggedIn:true,
				token:'token'
			},{
				type:'LOGOUT'
			})
		).toEqual({
			isLoggedIn:false,
			token:'token'
		})

	})

	it('should handle ERROR_AUTH', () => {
		expect(
			auth({
				isLoggedIn:true
			}, {
				type:'ERROR_AUTH',
				error:'error'
			})
		).toEqual({
			isLoggedIn:false
		})
	})

})
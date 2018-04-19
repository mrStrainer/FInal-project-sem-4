import * as actions from './index'

describe('login actions', () => {

	it('login should create LOGIN action', () => {
		expect(actions.login('token')).toEqual({
			type:'LOGIN',
			token:'token'
		})
	})

	it('logout should create LOGOUT action', () => {
		expect(actions.logout()).toEqual({
			type:'LOGOUT'
		})
	})
})
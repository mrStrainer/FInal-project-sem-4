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

	it('errorAuth should create ERROR_AUTH action', () => {
		expect(actions.errorAuth('Cant log in')).toEqual({
			type:'ERROR_AUTH',
			error:'Cant log in'
		})
	})
})
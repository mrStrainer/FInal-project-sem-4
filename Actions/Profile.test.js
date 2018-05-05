import * as actions from './index'

describe('Profile actions', () => {

	it('requestProfile should create REQUEST_PROFILE action', () => {
		expect(actions.requestProfile('id')).toEqual({
			type:'REQUEST_PROFILE',
			id:'id'
		})
	})

	it('receiveProfile should create RECEIVE_PROFILE action', () => {
		expect(
			actions.receiveProfile({
				name:'name',
				id:'id',
				followers:0,
				type:'user'
			})
		).toEqual({
			type:'RECEIVE_PROFILE',
			profile: {
				name:'name',
				id:'id',
				followers:0,
				type:'user'
			}
		})
	})

	it('errorProfile should create ERROR_PROFILE action', () => {
		expect(actions.errorProfile('Cant load profile')).toEqual({
			type:'ERROR_PROFILE',
			error:'Cant load profile'
		})
	})

})
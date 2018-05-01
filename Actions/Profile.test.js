import * as actions from './index'

describe('Profile actions', () => {

	it('requestProfile should create REQUEST_PROFILE action', () => {
		expect(actions.requestProfile()).toEqual({
			type:'REQUEST_PROFILE'
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

})
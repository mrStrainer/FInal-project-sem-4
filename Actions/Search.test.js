import * as actions from './index'

describe('search actions', () => {
	it('requestSearch should create REQUEST_SEARCH action', () => {
		expect(actions.requestSearch('searchQ')).toEqual({
			type:'REQUEST_SEARCH',
			searchQ:'searchQ'
		})
	})

	it('receiveSearch should create RECEIVE_SEARCH action', () => {
		expect(
			actions.receiveSearch({
				total:0,
				albums:[]
			})
		).toEqual({
			type:'RECEIVE_SEARCH',
			results: {
				total:0,
				albums:[]
			}
		})
	})
})	
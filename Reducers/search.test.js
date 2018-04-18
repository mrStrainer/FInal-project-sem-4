import search from './search'

describe('search reducer', () => {
	it('should deal with initial state', () => {
		expect(
			search(undefined,{})
		).toEqual({
			isFetching:false,
			results:[],
			total:0
		})
	})

	it('should handle REQUEST_SEARCH', () => {
		expect(
			search(undefined, {
				type:'REQUEST_SEARCH'
			})
		).toEqual({
			isFetching:true,
			results:[],
			total:0
		})
	})


	const results = {
		albums:[{}],
		total:1
	}

	it('should handle RECEIVE_SEARCH', () => {
		expect(
			search({
				isFetching:true
			}, {
				type:'RECEIVE_SEARCH',
				results
			})
		).toEqual({
			isFetching:false,
			results:[{}],
			total:1
		})
	})
})
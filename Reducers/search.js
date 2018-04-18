const search = (state = {
	isFetching:false,
	results:[],
	offset:0,
	total:0
}, action) => {
	switch (action.type) {
		case 'REQUEST_SEARCH':
			return {
				...state,
				searchQ:action.searchQ,
				offset:state.offset + action.offset,
				isFetching:true,
			}
		case 'RECEIVE_SEARCH':
			return {
				...state,
				isFetching:false,
				results:action.results.albums,
				total:action.results.total
			}
		default:
			return state;
	}
}
export default search;
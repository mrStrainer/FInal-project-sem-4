import searchMore from './searchMore'

const search = (state = {
	isFetching:false,
	results:{}
}, action) => {
	switch (action.type) {
		case 'REQUEST_SEARCH':
			return {
				...state,
				searchQ:action.searchQ,
				isFetching:true,
			}
		case 'RECEIVE_SEARCH':
			return {
				...state,
				isFetching:false,
				results:action.results,
			}
		case 'REQUEST_MORE_SEARCH':
			return {
				...state,
				isFetchingMore:true,
			}
		case 'RECEIVE_MORE_SEARCH': 
			return {
				...state,
				isFetchingMore:false,
				results:{
					...state.results,
					[`${action.searchType}s`]:searchMore(state.results[`${action.searchType}s`], action),
				}
			}
		case 'RECEIVE_NO_RESULT':
			return {
				...state,
				isFetchingMore:false
			}
		default:
			return state;
	}
}

export default search;
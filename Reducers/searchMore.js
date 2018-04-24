
const searchMore = (state = {}, action) => {
	switch (action.type) {
		case 'RECEIVE_MORE_SEARCH': 
			return {
				...state,
				offset:action.results[action.searchType].offset,
				items:[
					...state.items, 
					...action.results[action.searchType].items
				]
			}
		default:
			return state;
	}
}

export default searchMore;
const playlists = (state = {
	isFetching:false,
}, action) => {
	switch (action.type) {
		case 'REQUEST_PLAYLISTS':
			return {
				...state,
				id:action.id,
				isFetching:true,
			}
		case 'RECEIVE_PLAYLISTS':
			return {
				...state,
				isFetching:false,
				total:action.playlists.total,
				offset:action.playlists.offset,
				playlists:action.playlists.playlists,
			}
		case 'REQUEST_MORE_PLAYLISTS':
			return {
				...state,
				isFetchingMore:true,
			}
		case 'RECEIVE_MORE_PLAYLISTS': 
			return {
				...state,
				offset:action.playlists.offset,
				isFetchingMore:false,
				playlists:[
					...state.playlists,
					...action.playlists.playlists
				]
			}
		case 'RECEIVE_NO_PLAYLISTS':
			return {
				...state,
				isFetchingMore:false
			}
		case 'ERROR_PLAYLISTS':
			return {
				...state, 
				isFetching:false,
				isFetchingMore:false,
			}
		default:
			return state;
	}
}

export default playlists;
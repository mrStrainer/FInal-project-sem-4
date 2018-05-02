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
				playlists:action.playlists,
			}
		case 'REQUEST_MORE_PLAYLISTS':
			return {
				...state,
				isFetchingMore:true,
			}
		case 'RECEIVE_MORE_PLAYLISTS': 
			return {
				...state,
				isFetchingMore:false,
				playlists:{
					...state.playlists,
					offset:action.playlists.offset,
					playlists:[
						...state.playlists.playlists,
						...action.playlists.playlists
					]
				}
			}
		case 'RECEIVE_NO_PLAYLISTS':
			return {
				...state,
				isFetchingMore:false
			}
		default:
			return state;
	}
}

export default playlists;
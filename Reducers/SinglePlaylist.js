const currentPlaylist = (state = {
	isFetchingInfo:false,
	isFetchingTracks:false,
	isFetchingMoreTracks:false,
	tracks:[]
}, action) => {
	switch (action.type) {
		case 'REQUEST_SINGLE_PLAYLIST_INFO':
			return {
				...state,
				isFetchingInfo:true,
			}
		case 'RECEIVE_SINGLE_PLAYLIST_INFO':
			return {
				...state,
				isFetchingInfo:false,
				info:action.playlistInfo
			}
		case 'REQUEST_SINGLE_PLAYLIST_TRACKS':
			return {
				...state,
				isFetchingTracks:true,
			}
		case 'RECEIVE_SINGLE_PLAYLIST_TRACKS':
			return {
				...state,
				isFetchingTracks:false,
				tracks:action.tracks.tracks,
			}
		case 'REQUEST_MORE_SINGLE_PLAYLIST_TRACKS':
			return {
				...state,
				isFetchingMoreTracks:true,
			}
		case 'RECEIVE_MORE_SINGLE_PLAYLIST_TRACKS': 
			return {
				...state,
				isFetchingMoreTracks:false,
				info:{
					...state.info,
					offset:action.tracks.offset,
				},
				tracks:[
					...state.tracks,
					...action.tracks.tracks
				]

			}
		case 'RECEIVE_NO_SINGLE_PLAYLIST_INFO':
			return {
				...state,
				isFetchingInfo:false
			}
		case 'RECEIVE_NO_SINGLE_PLAYLIST_TRACKS':
			return {
				...state,
				isFetchingTracks:false
			}
		case 'RECEIVE_NO_MORE_SINGLE_PLAYLIST_TRACKS':
			return {
				...state,
				isFetchingMoreTracks:false
			}
		case 'ERROR_SINGLE_PLAYLIST':
			return {
				...state, 
				isFetchingInfo:false,
				isFetchingTracks:false,
				isFetchingMoreTracks:false,
			}
		default:
			return state;
	}
}

export default currentPlaylist;
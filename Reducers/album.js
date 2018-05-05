const album = (state = {
	isFetching: false,
	album:{}
}, action) => {
	switch (action.type) {
		case 'REQUEST_ALBUM':
			return {
				...state,
				isFetching:true
			}
		case 'RECEIVE_ALBUM':
			return {
				...state,
				isFetching:false,
				album:action.album
			}
		case 'ERROR_ALBUM':
			return {
				...state, 
				isFetching:false,
			}
		default:
			return state;
	}
}
export default album;
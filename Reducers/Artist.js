const artist = (state = {
	isFetching: false,
}, action) => {
	switch (action.type) {
		case 'REQUEST_ARTIST':
			return {
				...state,
				isFetching:true
			}
		case 'RECEIVE_ARTIST':
			return {
				...state,
				isFetching:false,
				artist:action.artist
			}
		case 'ERROR_ARTIST':
			return {
				...state, 
				isFetching:false,
			}
		default:
			return state;
	}
}
export default artist;
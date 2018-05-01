const profile = (state = {
	isFetching: false,
}, action) => {
	switch (action.type) {
		case 'REQUEST_PROFILE':
			return {
				...state,
				isFetching:true
			}
		case 'RECEIVE_PROFILE':
			return {
				...state,
				isFetching:false,
				profile:action.profile
			}
		default:
			return state;
	}
}
export default profile;
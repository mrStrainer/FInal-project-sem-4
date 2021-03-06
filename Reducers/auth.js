const auth = (state ={
	isLoggedIn:false
}, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				isLoggedIn:true,
				token:action.token,
			}
		case 'LOGOUT':
			return {
				...state,
				isLoggedIn:false
			}
		case 'ERROR_AUTH':
			return {
				...state, 
				isLoggedIn:false,
			}
		default:
			return state;
	}
}
export default auth;
import { json, status, createHeader } from './Helpers'

const REQUEST_PROFILE = 'REQUEST_OWN_PROFILE'
const RECEIVE_PROFILE = 'RECEIVE_OWN_PROFILE'

export const requestProfile = id => ({
	type: REQUEST_PROFILE,
	token
})

export const receiveProfile = profile => ({
	type:RECEIVE_PROFILE,
	profile
})

profileResponse = responseProfile => ({
	name: responseProfile.display_name || responseProfile.id,
	id:responseProfile.id,
	followers:responseProfile.followers.total,
	type:responseProfile.type,
})
export const fetchProfile = (id = 'me') => (dispatch, getState) => {
	const endPoint = id === 'me' ? '/me' : `/users/${id}`
	const { token } = getState().auth; 
	dispatch(requestProfile(id));
	return fetch(`https://api.spotify.com/v1${endpoint}`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(profileResponse)
		.then(profile => dispatch(receiveProfile(profile)))
		.catch(error => console.log(error))
}

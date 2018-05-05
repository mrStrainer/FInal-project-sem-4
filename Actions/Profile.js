import { json, status, createHeader } from './Helpers'

const REQUEST_PROFILE = 'REQUEST_PROFILE'
const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
const ERROR_PROFILE = 'ERROR_PROFILE'

export const requestProfile = id => ({
	type:REQUEST_PROFILE,
	id
})

export const receiveProfile = profile => ({
	type:RECEIVE_PROFILE,
	profile
})

export const errorProfile = error => ({
	type:ERROR_PROFILE,
	error
})
const profileResponse = responseProfile => ({
	name:responseProfile.display_name || responseProfile.id,
	id:responseProfile.id,
	followers:responseProfile.followers.total,
	type:responseProfile.type,
	image:responseProfile.images[responseProfile.images.length-1]
})
export const fetchProfile = (id = 'me') => (dispatch, getState) => {
	const endPoint = id === 'me' ? '/me' : `/users/${id}`
	const { token } = getState().auth; 
	dispatch(requestProfile(id));
	return fetch(`https://api.spotify.com/v1${endPoint}`, createHeader('GET', token))
		.then(json)
		.then(status)
		.then(profileResponse)
		.then(profile => dispatch(receiveProfile(profile)))
		.catch(error => {
			dispatch(errorProfile(error))
			console.log(error)
		})
}

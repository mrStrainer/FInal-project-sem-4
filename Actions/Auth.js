import { AuthSession } from "expo";
import SpotifyConfig from "../Config/Spotify/";

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const ERROR_AUTH = 'ERROR_AUTH'

export const login = token => ({
	type: LOGIN,
	token
})

export const logout = () => ({
	type:LOGOUT
})

export const errorAuth = error => ({
	type:ERROR_AUTH,
	error
})

export const runAuthentication = () => dispatch => {

	return redirect()
		.then(status)
		.then(token => dispatch(login(token)))
		.catch(error => {
			dispatch(errorAuth(error))
			console.log(error)
		});
}

const redirect = async () => {
	const redirectUrl = AuthSession.getRedirectUrl();
	return AuthSession.startAsync({
		authUrl:
			`https://accounts.spotify.com/authorize?response_type=token` +
			`&client_id=${SpotifyConfig.appId}` +
			`&scope=${encodeURIComponent(SpotifyConfig.scopes)}` +
			`&redirect_uri=${encodeURIComponent(redirectUrl)}`
	})
}
const status = response => {
	if (response.type === "success") {
		const { params: { access_token } } = response;
		return access_token;
	} else if (response.type === "error") {
		const { params: { error } } = response;
		throw `Error logging in: \n${error}`;
	}
}

export const fetchPlaylist = () => {
	return 'nope'
}

export const fetchOwnPlaylists = (options) => {
	return fetch(`https://api.spotify.com/v1/me/playlists`, options)
		.then(json)
		.then(status)
		.then(res => {
			return res;
		})
}
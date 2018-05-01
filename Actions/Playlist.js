
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

// 	/v1/me/playlists current users list of playlists
// 	/v1/users/{user_id}/playlists list of users playlists
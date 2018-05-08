import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux' 
import album from './Album'
import search from './Search'
import auth from './Auth'
import profile from './Profile'
import playlists from './Playlists'
import artist from './Artist'
import SinglePlaylist from './SinglePlaylist'

const rootReducer = combineReducers({
	album,
	search,
	auth,
	profile,
	playlists,
	artist,
	currentPlaylist:SinglePlaylist,
	//router: routerReducer
})

export default rootReducer;
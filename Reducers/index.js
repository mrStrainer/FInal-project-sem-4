import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux' 
import album from './Album'
import search from './Search'
import auth from './Auth'
import profile from './Profile'
import playlists from './Playlists'

const rootReducer = combineReducers({
	album,
	search,
	auth,
	profile,
	playlists,
	//router: routerReducer
})

export default rootReducer;
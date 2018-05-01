import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux' 
import album from './Album'
import search from './Search'
import auth from './Auth'
import profile from './Profile'

const rootReducer = combineReducers({
	album,
	search,
	auth,
	profile,
	//router: routerReducer
})

export default rootReducer;
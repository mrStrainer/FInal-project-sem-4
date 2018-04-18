import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux' 
import album from './album'
import search from './search'
import auth from './auth'

const rootReducer = combineReducers({
	album,
	search,
	auth,
	//router: routerReducer
})

export default rootReducer;
import reducer from './Reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
//import { routerMiddleware } from 'react-router-redux'
//import createHistory from 'history/createMemoryHistory'

//export const history = createHistory();
const middleware = [ thunk/*, routerMiddleware(history) */]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
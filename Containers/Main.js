import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { runAuthentication, logout } from '../Actions/';
import Main from '../Components/Main';
import checkLoginHOC from '../Components/checkLoginHOC'

const CheckedMain = checkLoginHOC(Main);

function mapStateToProps(state) {
  return {
  	isLoggedIn:state.auth.isLoggedIn
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({ runAuthentication, logout }, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(CheckedMain);

export default App;
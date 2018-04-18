import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, logout } from '../Actions/';
import Main from '../Components/Main';

function mapStateToProps(state) {
  return {
  	isLoggedIn:state.auth.isLoggedIn
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({ login, logout }, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { runAuthentication, logout } from '../Actions/';
import NavBar from '../Components/NavBar';

function mapStateToProps(state) {
  return {
  	isLoggedIn:state.auth.isLoggedIn
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({ runAuthentication, logout }, dispatch);
}

const NavBarContainer = connect(mapStateToProps, mapDispachToProps)(NavBar);

export default NavBarContainer;
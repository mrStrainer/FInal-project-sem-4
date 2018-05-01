import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchProfile } from '../Actions/'
import Profile from '../Components/Profile/' 

function mapStateToProps(state) {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		profile:state.profile
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchProfile}, dispatch);
}

const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);
export default ProfileContainer;
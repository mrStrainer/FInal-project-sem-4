import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPlaylists, fetchMorePlaylists, runAuthentication, logout } from '../Actions/'
import Playlists from '../Components/Playlists/' 

function mapStateToProps(state) {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		playlists:state.playlists
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPlaylists, fetchMorePlaylists, runAuthentication, logout}, dispatch);
}

const PlaylistsContainer = connect(mapStateToProps,mapDispatchToProps)(Playlists);
export default PlaylistsContainer;
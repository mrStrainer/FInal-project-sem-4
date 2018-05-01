import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchPlaylist, runAuthentication, logout } from '../Actions/'
import Playlist from '../Components/Playlist/' 

function mapStateToProps(state) {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		playlist:state.playlist
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchPlaylist, runAuthentication, logout}, dispatch);
}

const PlaylistContainer = connect(mapStateToProps,mapDispatchToProps)(Playlist);
export default PlaylistContainer;
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchSinglePlaylist, fetchSinglePlaylistInfo, fetchSinglePlaylistTracks, fetchMoreSinglePlaylistTracks } from '../Actions/'
import SinglePlaylist from '../Components/SinglePlaylist/' 

function mapStateToProps(state) {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		playlist:state.currentPlaylist
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchSinglePlaylist, fetchSinglePlaylistInfo, fetchSinglePlaylistTracks, fetchMoreSinglePlaylistTracks}, dispatch);
}

const SinglePlaylistContainer = connect(mapStateToProps,mapDispatchToProps)(SinglePlaylist);
export default SinglePlaylistContainer;
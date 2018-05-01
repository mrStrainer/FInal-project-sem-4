import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchAlbumIfNeeded } from '../Actions/'
import Album from '../Components/Album/' 

function mapStateToProps(state) {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		album:state.album
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchAlbumIfNeeded}, dispatch);
}

const AlbumContainer = connect(mapStateToProps,mapDispatchToProps)(Album);
export default AlbumContainer;
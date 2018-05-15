import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchArtist, fetchMoreArtistAlbums } from '../Actions/'
import Artist from '../Components/Artist/' 

function mapStateToProps(state) {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		artist:state.artist
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchArtist ,fetchMoreArtistAlbums }, dispatch);
}

const ArtistContainer = connect(mapStateToProps,mapDispatchToProps)(Artist);
export default ArtistContainer;
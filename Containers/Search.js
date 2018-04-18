import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchAlbum } from '../Actions/'
import Search from '../Components/Search' 

function mapStateToProps(state) {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		search:state.search
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchAlbum}, dispatch);
}

const SearchContainer = connect(mapStateToProps,mapDispatchToProps)(Search);
export default SearchContainer;
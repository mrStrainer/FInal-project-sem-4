import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { searchNew, searchMore } from '../Actions/'
import Search from '../Components/Search/' 

function mapStateToProps(state) {
	return {
		isLoggedIn:state.auth.isLoggedIn,
		search:state.search
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchNew, searchMore}, dispatch);
}

const SearchContainer = connect(mapStateToProps,mapDispatchToProps)(Search);
export default SearchContainer;
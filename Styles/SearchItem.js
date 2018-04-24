import { StyleSheet }  from 'react-native'

const Styles = StyleSheet.create({
	searchItem: {
		borderBottomColor:'#282828',
		borderBottomWidth:1,
		paddingLeft:0,
		padding:5,
		margin:0,
		marginBottom:5,
		flexDirection:'row',
		height:64,
		alignItems:'center'
	},
	searchItemNoBorder: {
		flex:1,
		padding:5,
		paddingLeft:0,
		margin:0,
		marginBottom:10,
		flexDirection:'row',
		height:64,
		alignItems:'center'
	},
	albumTitle: {
		color: "#ccc", 
		fontSize:16,
		padding: 2, 
		paddingTop:6,
	},
	albumArtist: {
		color: "#999", 
		padding: 2, 
		paddingBottom:6,
	},
	albumImg: {
		width:64,
		height:64,
		padding: 2, 
		paddingTop:6,
		marginRight:5,
	}
});

export default Styles;
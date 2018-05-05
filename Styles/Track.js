import { StyleSheet, Platform } from 'react-native'

const Styles = StyleSheet.create({
	trackView: {
		borderBottomColor:'#282828',
		borderBottomWidth:1,
		padding:5,
		margin:0,
		flexDirection:'row',
		height:40,
		alignItems:'center'
	},
	trackTitle: {
		color: "#ccc", 
		padding: 2, 
		paddingTop:6,
		width:265,
	},
	trackNo: {
		color: "#ccc", 
		width:22,
		padding: 2, 
		paddingTop:6,
		marginRight:4,
		textAlign:'center'
	},
	trackTime: {
		color: "#ccc", 
		padding: 2, 
		paddingTop:6,
		marginLeft:'auto'
	},
	Highlight: {
		borderBottomColor:'#282828',
		borderBottomWidth:1,
		backgroundColor:'#292929',
		padding:5,
		margin:0,
		flexDirection:'row',
		height:40,
		alignItems:'center'
	}
});

export default Styles;
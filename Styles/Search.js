import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
	componentContainer: { 
		flex: 1, 
		alignSelf: 'stretch', 
		backgroundColor:'#181818',
	},
	ResultsContainer: {
		flex:1, 
		padding:10,
		paddingTop:0,
		paddingBottom:0, 
		flexDirection: 'column',
	},
	Results: {
		paddingTop:10,
	},
	Text: {
		color:'#ccc',
	},
	Message: {
		flex:1,
		paddingTop:13,
		textAlign:'center',
		color:'#ccc',
	},
	SearchBar: {
		backgroundColor:'#282828',
		alignItems:'center', 
		padding:5,
	},
	TypeMenu:{
		height:40,
		flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#282828',
        // marginBottom:5,
        // shadowColor:'#181818',
        // shadowOffset: { 
        //    width:0, 
        //    height:5.1
        // },
        // shadowOpacity:0.2,
        // elevation:2,
	},
	Selected: {
		height:40,
		width:'33%',
		borderBottomColor:'#181818',
		borderBottomWidth:3,
		alignItems:'center',
		padding:7,
		paddingTop:10,
		backgroundColor:'#282828'
	},
	NotSelected: {
		height:40,
		width:'33%',
		borderBottomColor:'#282828',
		borderBottomWidth:3,
		alignItems:'center',
		padding:7,
		paddingTop:10,
		backgroundColor:'#282828'
	},
	CenterView: {
		width:'100%',
		alignItems:'center', 
		padding:5,
	},
})

export default Styles;
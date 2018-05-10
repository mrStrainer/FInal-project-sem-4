import { StyleSheet }  from 'react-native'

const Styles = StyleSheet.create({
	artistContainer:{ 
		flex: 1, 
		alignSelf: 'stretch', 
		backgroundColor:'#181818'
	}, 
	Text:{
		color:'#ccc'
	},
    Header: {
        width:'100%',
        height:75,
        flexDirection:'row',
        backgroundColor:'#282828',
        alignItems: 'center',
        padding:10,
    },
    headerTextContainer: {
    	width:290,
    	marginLeft:5,
    	paddingLeft:2,
    },
    headerText: {
    	fontSize:20,
    	color:'#ccc',
    },
    headerSubText:{
        paddingTop:4,
        color:'#ccc',
        fontSize:14,
        opacity:0.7,
    },
    headerImage: {
    	width:64,
    	height:64,
    	borderWidth:2,
    	borderColor:'#181818'
    },
	TypeMenu:{
		height:40,
		flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#282828',
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
})
export default Styles;
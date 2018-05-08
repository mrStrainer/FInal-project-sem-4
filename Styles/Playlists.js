import { StyleSheet }  from 'react-native'

const Styles = StyleSheet.create({
	playlistContainer: { 
		flex: 1, 
		alignSelf: 'stretch', 
		backgroundColor:'#181818'
	},
	center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },
    Header: {
        flex: 1,
        flexDirection:'row',
        backgroundColor:'#282828',
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
        marginBottom:7,
    },
    headerText: {
    	fontSize:20,
    	color:'#ccc',
    },
    headerSubText:{
        paddingLeft:4,
        paddingTop:5,
        color:'#ccc',
        fontSize:14,
        opacity:0.7,
    },
    Text: {
    	color:'#ccc',
        maxWidth:285,
        fontSize:16
    },
    ContainerText: {
        color:'#ccc',
        maxWidth:345,
    },
    sText: {
        fontSize:12,
    },
    oText:{
        color:'#ccc',
        opacity:0.7,
        paddingLeft:5,
        fontSize:12,
    },
    ItemView:{
        padding:5,
        paddingLeft:10,
        paddingBottom:0,
        margin:0,
        flexDirection:'row',
        height:35,
        alignItems:'center'  
    },
    ItemSubView:{
        borderBottomColor:'#282828',
        borderBottomWidth:1,
        padding:5,
        paddingLeft:10,
        paddingTop:0,
        margin:0,
        flexDirection:'row',
        height:28,
        alignItems:'center',
    },
    ItemContainer: {
        flexDirection:'column',
    }
});

export default Styles;
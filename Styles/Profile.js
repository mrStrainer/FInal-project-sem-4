import { StyleSheet }  from 'react-native'

const Styles = StyleSheet.create({
	profileContainer: { 
		flex: 1, 
		alignSelf: 'stretch', 
		backgroundColor:'#181818'
	},
	center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    headerText: {
    	fontSize:20,
    	color:'#ccc',
    },
    text: {
    	color:'#ccc'
    }
});

export default Styles;
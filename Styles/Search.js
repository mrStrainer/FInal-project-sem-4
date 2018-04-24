import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
	componentContainer: { 
		flex: 1, 
		alignSelf: 'stretch', 
		backgroundColor:'#181818',
	},
	Results: {
		flex:1, 
		padding:10, 
		flexDirection: 'column',
	},
	Text: {
		color:'#ccc',
	},
	CenterView: {
		alignItems:'center', 
		padding:5,
	},
	TypeMenu:{
		flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#282828',
        marginBottom:7,
        alignItems:'center',
        shadowColor:'#000',
        shadowOffset: { 
            width:0, 
            height:2.1
        },
        shadowOpacity:0.2,
        elevation:2,
	},
	Selected: {
		padding:5,
		color:'#ccc',
		backgroundColor:'#181818'
	},
	NotSelected: {
		padding:5,
		color:'#000',
		backgroundColor:'#282828'
	}
})

export default Styles;
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
	}
})

export default Styles;
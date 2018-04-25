import { StyleSheet, Platform }  from 'react-native'
import { Constants } from 'expo';

const Styles = StyleSheet.create({
    nav: {
        paddingTop: Platform.OS === 'ios' ? 5 : Constants.statusBarHeight+5,
        paddingBottom:5,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#282828',
        //marginBottom:7,
        alignItems:'center',
        // shadowColor:'#000',
        // shadowOffset: { 
        //    width:0, 
        //    height:2.1
        // },
        // shadowOpacity:0.2,
        // elevation:2,
    },
    navBar: {
        flex:1, 
        flexDirection:'row', 
        height:40, 
        alignItems:'center', 
        justifyContent:'center',
    },
    navText: {
        color:'#ccc', 
        fontSize:16
    }
});

export default Styles;
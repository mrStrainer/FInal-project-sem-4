import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Button: {
    backgroundColor: "rgba(40,40,40,1)",
    height: 40,
    width: 250,
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(24,24,24,1)",
    borderStyle: "solid",
    borderRadius: 5, 
    margin:5,
  },
  Icon: {
    opacity: 1,
    borderWidth: 1,
    borderColor: "#282828",
    borderStyle: "solid",
    borderRadius: 5, 
    justifyContent:'center',
    alignItems:'center',
    padding:3,
    paddingLeft:5,
    paddingRight:5,
  },
  Input: {
    width: '95%',
    height: 33,
    borderWidth: 2,
    borderColor: "#3d3d3d",
    borderRadius: 4,
    borderStyle: "solid",
    textAlign: "center",
    marginBottom:5,
    color:'#ccc'
  },
  Text: {
    flex:1,
    padding:10,
    textAlign:'center'
  }
});
export default Styles;
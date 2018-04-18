import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Styles from '../Styles/StyledComponent'

const StyledButton = ({ color = '#ccc', text = '', onPress }) => {
    return (
        <TouchableOpacity style={Styles.Button} onPress={onPress}>
            <Text style={[Styles.Text, {color:color}]}>{text}</Text>
        </TouchableOpacity>);
}

export default StyledButton;
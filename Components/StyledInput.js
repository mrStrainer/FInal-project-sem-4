import React from "react";
import { TextInput } from "react-native";
import Styles from '../Styles/StyledComponent'

const StyledInput = ({ placeholder = '', phColor = '#9c9c9c', onChangeText, onSubmitEditing }) => {
    return  (
        <TextInput
            style={Styles.Input} 
            placeholder={placeholder} 
            placeholderTextColor={phColor}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
        />
    )
}

export default StyledInput;

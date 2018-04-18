
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from '../Styles/StyledComponent'

const StyledIcon = ({ name = 'comment-question-outline', size = 32, color = '#ccc', onPress }) => {
    return (
        <TouchableOpacity style={Styles.Icon} onPress={onPress}>
            <MaterialCommunityIcons name={name} size={size} color={color} />
        </TouchableOpacity>);
}

export default StyledIcon;
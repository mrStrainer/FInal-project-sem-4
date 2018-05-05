import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Link } from 'react-router-native';
import Styles from '../Styles/StyledComponent'

const StyledLink = ({ color = '#ccc', text = '', to }) => {
    return (
    	<Link to={to} style={Styles.Link}>
    		<Text style={[Styles.LinkText, {color:color}]}>{text}</Text>
    	</Link>
    );
}

export default StyledLink;
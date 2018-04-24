import React from 'react'
import { Text } from 'react-native'
import Styles from '../Styles/Search'
const withResults = (Component) => ({ results, ...others }) =>
  Object.keys(results).length == 0
    ? <Text style={Styles.Text}>Search for something</Text>
    : <Component { ...results} {...others} />

export default withResults;
import React from 'react'
import { ActivityIndicator } from 'react-native'
const withSpinner = (Component) => ({ isFetching, ...others }) =>
  isFetching
    ? <ActivityIndicator />
    : <Component { ...others } />

export default withSpinner;
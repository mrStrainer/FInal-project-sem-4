import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux'
import { NativeRouter, Route, Link } from 'react-router-native';
import Styles from './Styles/App'
import store from './Store'
import Main from './Containers/Main'
import Search from './Containers/Search'
import NavBar from './Containers/NavBar'

//ignore warnings until fix
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated'
]);

export default class App extends React.Component {
    state = {};
    // history={history}
    render() {
        return (
            <Provider store={store}>
                <NativeRouter>
                    <View style={Styles.Container}>
                        <NavBar/>
                        <View style={Styles.Container}>
                            <Route path="/" component={Search}/>
                            <Route path="/search" component={Search}/>
                        </View>
                    </View>
                </NativeRouter>
            </Provider>
        );
    }
}
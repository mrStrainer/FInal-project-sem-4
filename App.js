import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Provider } from 'react-redux'
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import Styles from './Styles/App'
import store from './Store'
import Main from './Containers/Main'
import Album from './Containers/Album'
import Profile from './Containers/Profile'
import Playlist from './Containers/Playlist'
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
    // history={history}
    render() {
        return (
            <Provider store={store}>
                <NativeRouter>
                    <View style={Styles.Container}>
                        <NavBar/>
                        <View style={Styles.Container}>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/search" component={Search}/>
                            <Route exact path="/album/" component={Album}/>
                            <Route path="/album/:id" component={Album}/>
                            <Route path="/profile/me" component={Profile}/>
                            <Route path="/playlist/:id" component={Playlist}/>
                            <Route path="/playlist/me" component={Playlist}/>
                            </Switch>
                        </View>
                    </View>
                </NativeRouter>
            </Provider>
        );
    }
}
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux'
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import store from './Store'
import Main from './Containers/Main'

export default class App extends React.Component {
    state = {
        modalVisible: false,
    };
    // history={history}
    render() {
        return (
            <Provider store={store}>
                <NativeRouter>
                    <View style={styles.container}>
                        <Route path="/" component={Main}/>
                    </View>
                </NativeRouter>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

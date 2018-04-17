import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux'
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import Main from './Containers/Main'

export default class App extends React.Component {
    state = {
        modalVisible: false,
    };
    //  <Provider store={store}> history={history}</Provider>
    render() {
        return (
            
                <NativeRouter>
                    <View style={styles.container}>
                        <Route path="/" component={Main}/>
                    </View>
                </NativeRouter>
            
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

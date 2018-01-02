'use strict';

// ===========================================
// Imports
// ===========================================
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

// ===========================================
// Component
// ===========================================
class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyD0o39zkBE8grY4MMo2bwN5tCO45go7vKg",
            authDomain: "manager-f36b0.firebaseapp.com",
            databaseURL: "https://manager-f36b0.firebaseio.com",
            projectId: "manager-f36b0",
            storageBucket: "",
            messagingSenderId: "461863168456"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
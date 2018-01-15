'use strict';

// ===========================================
// Imports
// ===========================================
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
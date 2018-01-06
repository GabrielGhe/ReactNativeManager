'use strict';

// ===========================================
// Imports
// ===========================================
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Card, CardSection, Input } from './common';


// ===========================================
// Component
// ===========================================
class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    // Calling 'auth' because the reducers/index.js key is 'auth' 
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, actions)(LoginForm);

'use strict';

// ===========================================
// Imports
// ===========================================
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Card, CardSection, Input, Spinner } from './common';


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

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password } );
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }

        return (
            <Button onButtonPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    // Calling 'auth' because the reducers/index.js key is 'auth' 
    const { email, password, loading } = auth;
    
    return { email, password, loading };
};

export default connect(mapStateToProps, actions)(LoginForm);

'use strict';

// ===========================================
// Imports
// ===========================================
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// ===========================================
// Component
// ===========================================
const Button = ({ onButtonPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onButtonPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

// ===========================================
// Styling
// ===========================================
const styles = {
    textStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5 
    }
};

export { Button };
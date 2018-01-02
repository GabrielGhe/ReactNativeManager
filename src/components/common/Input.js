'use strict';

// ===========================================
// Imports
// ===========================================
import React from 'react';
import { View, Text, TextInput } from 'react-native';

// ===========================================
// Component
// ===========================================
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { containerStyle, labelStyle, inputStyle } = styles;

    return (
        <View style={containerStyle}>

            <Text style={labelStyle}>
                {label}
            </Text>

            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

// ===========================================
// Styling
// ===========================================
const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        color: '#000',
        lineHeight: 18,
        flex: 2
    }
};

export { Input };
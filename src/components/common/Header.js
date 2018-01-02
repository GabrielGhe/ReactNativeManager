'use strict';

// ===========================================
// Imports
// ===========================================
import React from 'react';
import { Text, View } from 'react-native';

// ===========================================
// Component
// ===========================================

// This is a functional component. It's used to present data
const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// ===========================================
// Styling 
// ===========================================
const styles = {
    viewStyle: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// make component available
export { Header };
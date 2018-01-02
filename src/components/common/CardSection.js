'use strict';

// ===========================================
// Imports
// ===========================================
import React from 'react';
import { View } from 'react-native';

// ===========================================
// Component
// ===========================================
const CardSection = (props) => {
    const { containerStyle } = styles;

    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

// ===========================================
// Styling
// ===========================================
const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
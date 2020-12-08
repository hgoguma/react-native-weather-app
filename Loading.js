import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello! </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : 'flex-end',
        paddingHorizontal: 30, //paddingHorizontal : 
        paddingVertical: 100, 
        backgroundColor: '#FDF6AA'
    },
    text: {
        color: '#2c2c2c',
        fontSize: 30
    }
})
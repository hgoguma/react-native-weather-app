import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function Weather ({temp}) {
return (
        <View style={styles.container}>
            <Text>하이하이 {temp}</Text>
        </View>
    )
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds"
    ]).isRequired

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

});
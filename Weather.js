import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons'; //icon 가져오기
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA080", "#D39D38"],
        title: "Haze",
        subTitle: "Just don't go outside."
    },
    // Thunderstorm: {
    //     iconName: "",
    //     gradient: ["", ""]
    // },
    // Drizzle: {
    //     iconName: "",
    //     gradient: ["", ""]
    // },
    // Rain: {
    //     iconName: "",
    //     gradient: ["", ""]
    // },
    // Snow: {
    //     iconName: "",
    //     gradient: ["", ""]
    // },
    // Atmosphere: {
    //     iconName: "",
    //     gradient: ["", ""]
    // },
    // Clear: {
    //     iconName: "",
    //     gradient: ["", ""]
    // },
    // Clouds: {
    //     iconName: "",
    //     gradient: ["", ""]
    // },
    // Haze: {
    //     iconName: "",
    //     gradient: ["", ""]
    // },
    // Mist: {
    //     iconName: "",
    //     gradient: ["", ""]
    // },
    // Dust: {
    //     iconName: "",
    //     gradient: ["", ""]
    // }
}


export default function Weather ({ temp, condition }) {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            {/* StatusBar : 화면 상에 보이지 않음 */}
            <StatusBar barStyle="light-content" />

            {/* icons */}

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}</Text>
            </View>

            {/* subtitles */}
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subTitle}>
                    {weatherOptions[condition].subTitle}
                </Text>

            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: "flex-start"
    }

});
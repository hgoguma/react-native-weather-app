import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default class extends React.Component {

    getLocation = async () => {
        const location = await Location.getCurrentPositionAsync(options)
        console.log(location);
    }
    
    componentDidMount() {
        this.getLocation();
    }

    render() {
        return <Loading />
    }
}

// export default function Loading() {
//     return <View style={styles.container}>
//         <Text style={styles.text}>Getting the fucking weather</Text>
//     </View>
// }

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
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';


export default class extends React.Component {

  state = {
    isLoading: true
  }


  getWeather = async (latitude, longitude) => {
    const API_KEY = '';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    const { data } = await axios.get(apiUrl);
    console.log('data : ', data)
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); //사용자로 부터 승인 받기

      // Object {
      //   "coords": Object {
      //     "accuracy": 65,
      //     "altitude": 50.53983688354492,
      //     "altitudeAccuracy": 10,
      //     "heading": -1,
      //     "latitude": 37.49821204036994,
      //     "longitude": 126.93320727287936,
      //     "speed": -1,
      //   },
      //   "timestamp": 1607343791996.7961,
      // }
      
      // const {
      //   coords: { latitude, longitude }
      // } = await Location.getCurrentPositionAsync();

      const { coords } = await Location.getCurrentPositionAsync();
      this.getWeather(coords.latitude, coords.longitude);
      this.setState({ isLoading : false });
      
    } catch(err) {
      console.log(err);
      Alert.alert("Can't find you", "So sad");
    }
    
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {

    const isLoading = this.state;

    return isLoading ? (
      <View style={styles.container}>
        <Text style={styles.text}>Hello!</Text>
      </View>
    ) : null;
  }
}

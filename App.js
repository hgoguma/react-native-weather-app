import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading'
import Weather from './Weather'
import * as Location from 'expo-location';
import axios from 'axios';


export default class extends React.Component {

  state = {
    isLoading: true,
    // location: ''
  }


  getWeather = async (latitude, longitude) => {
    const API_KEY = '658b24ffb8aeaee672509e6dbd657db0';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    const { 
      data: { 
        main: {temp},
        weather
      } 
    } = await axios.get(apiUrl);
    console.log(weather) //weather 은 배열임
    this.setState({ 
      isLoading: false, 
      temp, 
      condition: "Clear"
    });
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); //사용자로 부터 승인 받기

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

    const { isLoading, temp, condition } = this.state;

    return ( isLoading ?  <Loading /> : <Weather temp={Math.round(temp)} condition={"Haze"} /> );
  }
}

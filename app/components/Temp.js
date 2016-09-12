import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';

import fetchWeather from '../api/fetchWeather';
import getLocation from '../utils/getLocation';

class Temp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTemp: false,
            temp: 0
        };
    }

    getWeather() {
        getLocation((coords) => {
            let lat = coords.latitude;
            let long = coords.longitude;

            fetchWeather(lat, long).then((data) => {
                this.setState({
                    temp: data.currently.temperature,
                    showTemp: true
                });
            });
        });
    }

    componentDidMount() {
        this.getWeather();
    }

    render() {
        if (this.state.showTemp) {
            return (
                <View>
                    <Text>Temp: {this.state.temp} {String.fromCharCode(176)} F</Text>
                </View>
            );
        } else {
            return (
                <View>
                    <ActivityIndicator animating={true} />
                </View>
            );
        }
    }
}

export {Temp}

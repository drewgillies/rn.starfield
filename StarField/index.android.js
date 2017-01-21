/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Alert
} from 'react-native';
import { StarField } from './starfield';

export default class StarView extends Component {
    constructor (props) {
        super(props)
        this.state = {
            width: 0, 
            height: 0
        };
    }

    render() {
    	let width = 0;
    	if (this.state.width) {
            let width = this.state.width;
    	}
        return (
            <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: 'black'}} onLayout={this.onLayout}>
                <StarField 
                    starCount='40' 
                    getDimensions={this.getDimensions.bind(this)} />
            </View>
        );
    }

    onLayout = event => {
        if (event.nativeEvent.layout) {
            this.setState({
                width: event.nativeEvent.layout.width, 
                height: event.nativeEvent.layout.height
            })
        }
    }

    getDimensions() {
        return {
            width: this.state.width, 
            height: this.state.height
        };
    }
}

AppRegistry.registerComponent('StarField', () => StarView);

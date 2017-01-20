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
        this.state = {width: 0, height: 0};
    }

    render() {
    	let width = 0;
    	if (this.state.width) {
            let width = this.state.width;
    	}
        return (
            <View style={{flex: 1, alignSelf: 'stretch'}} onLayout={this.onLayout}>
                <StarField onGetBounds={this.getBounds.bind(this)} upperx='300' uppery='400'/>
            </View>
        );
    }

    onLayout = event => {
        if (event.nativeEvent.layout) {
            this.setState({width: event.nativeEvent.layout.width, height: event.nativeEvent.layout.height})
        }
    }

    getBounds() {
        return {width: this.state.width, height: this.state.height};
    }
}

AppRegistry.registerComponent('StarField', () => StarView);

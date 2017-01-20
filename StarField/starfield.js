
import React, { Component } from 'react';
import {
    View,
    Alert
} from 'react-native';

export class StarField extends React.Component {
    constructor(props) {
    	super(props);
        this.state = {starpos: 10};


        setInterval(() => {
//Alert.alert('Test', this.props.onGetBounds().width + "",);

        	let currentpos = this.state.starpos + 10;
        	if (currentpos>this.props.onGetBounds().width) {
        		currentpos = 10;
        	}
        	this.setState({starpos: currentpos});
        }, 300);
    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        let pos = this.state.starpos;
        return (
            <View style={{backgroundColor: 'blue', position: 'absolute', left: pos, top: 0, width: 5, height: 5}}/> 
        );
    }
}

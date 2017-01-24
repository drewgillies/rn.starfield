
import React, { Component } from 'react';
import {
    View,
    Alert,
    Text
} from 'react-native';

export class StarField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cachedWidth: 0,
            cachedHeight: 0,
            starPositions: []
        };

        setInterval(() => {
            width = this.props.getDimensions().width;
            height = this.props.getDimensions().height;
            if (width != this.state.cachedWidth || height != this.state.cachedHeight) {
                this.resize(width, height);
            }

            for (let i = 0; i < this.props.starCount; i++) {
                this.state.starPositions[i].x = this.state.starPositions[i].x + 3;
                if (this.state.starPositions[i].x > this.props.getDimensions().width) {
                    this.state.starPositions[i].x = 0;
                }
            }

            this.forceUpdate();
        }, 40);
    }

    render() {
        if (this.state.starPositions.length > 1)
        {
            var stars = [];
            for (var i = 0; i < this.state.starPositions.length; i++) {
                var starColor = this.calculateColor(5);
                //Alert.alert('test', starColor,);
                stars.push(
                    <View
                        key={i}
                        style={{
                            backgroundColor: starColor, 
                            position: 'absolute', 
                            left: this.state.starPositions[i].x, 
                            top: this.state.starPositions[i].y, 
                            width: 2, 
                            height: 1
                        }}
                    />
                );

            }
            return (
                <View>{stars}</View>
            );
        } else {
            return (
                <Text></Text>
            );
        }
    }

    calculateColor(z)
    {
        return 'white';
    }

    resize(width, height) {
        this.setState({
            starPositions: [],
            cachedWidth: width,
            cachedHeight: height
        });
        for (let i = 0; i < this.props.starCount; i++) {
            this.state.starPositions.push({
                x: Math.floor(Math.random() * width), 
                y: Math.floor(Math.random() * height),
                z: Math.floor(Math.random() * 10)            // z is an arbitrary constant for whiteness and speed
            });
        }
    }
}

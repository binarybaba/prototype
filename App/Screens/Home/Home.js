import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { View, Text } from 'react-native';
import QnA from './Screen/QnA/Index';
import Roleplay from './Screen/Roleplay/Index';
import Training from './Screen/Training/Index';
import Header from './../../Header/Index';
import { PRIMARY_COLOR } from './../../COLOR';

const HomeScreenStack = createMaterialTopTabNavigator({
    QnA: {
        screen: QnA,
        navigationOptions: () => ({
            title: 'Q&A',
        }),
    },
    Roleplay: {
        screen: Roleplay,
        navigationOptions: () => ({
            title: 'Roleplay',
        }),
    },
    Training: {
        screen: Training,
        navigationOptions: () => ({
            title: 'Training',
        }),
    }

}, {
    tabBarOptions: {
        activeTintColor: PRIMARY_COLOR,
        inactiveTintColor: '#3d3d3d',
        upperCaseLabel: false,
        labelStyle:{
            fontSize: 14,
        },
        style: {
            backgroundColor: 'white',
        },
        indicatorStyle:{
            backgroundColor: 'white'
        }
    }
});




class Home extends Component {
    static navigationOptions = {
        header: <Header />
    };

    render() {
        return <HomeScreenStack />;
    }
}

export default Home;

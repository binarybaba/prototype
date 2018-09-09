import React, { Component } from 'react';
import { YellowBox, View } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './Screens/Home/Home';
import Task from './Screens/Task/Task';
import Unfinished from './Screens/Unfinished/Unfinished';
import You from './Screens/You/You';
YellowBox.ignoreWarnings(['Remote debugger']);
const HomeStack = createStackNavigator({
    Home: Home,
    Task: Task,
    Unfinished: Unfinished,
    You: You
});

const RootStack = createBottomTabNavigator({
    Home: HomeStack,
    Task: Task,
    Unfinished: Unfinished,
    You: You
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            switch(routeName) {
                case 'Home': {
                    iconName = `ios-home`;
                    break;
                }
                case 'Task':
                    iconName = `ios-clipboard`;
                    break;
                case 'Unfinished': {
                    iconName = `ios-refresh`;
                    break;
                }
                case 'You': {
                    iconName = `ios-contact`;
                    break;
                }
                default: {
                    iconName = 'ios-information-circle';
                }
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Ionicon name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#a2dddb',
        inactiveTintColor: 'gray',
    },
});


class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}

export default App;

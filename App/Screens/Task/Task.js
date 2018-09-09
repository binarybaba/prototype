import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Task extends Component {
    static navigationOptions = {
        title: 'Tasks',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Task Screen</Text>
            </View>
        );
    }
}
export default Task;

import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from './SearchBar/Index';
import { GRADIENT_START, GRADIENT_END } from '../COLOR';

const styles = StyleSheet.create({
    background: {
        height: 100,

    },
    topBar:{
        paddingTop: 8,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    menu:{
        flex: 1,
        color: 'white'
    },
    bell:{
        color: 'white'
    },
    bottomBar:{
        paddingTop: 8,
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',

    },
    searchBar:{
        flex: 1,
        backgroundColor: 'transparent',

    },
    brandLogo: {
        flex: 1,
    },
    askButton: {
        flex: 1,
        alignItems:'flex-end',
        color: 'white'
    },
    askText: {
        color: 'white'
    }

});


class Header extends Component {

    state = {
        expandSearch: false
    };

    render() {
        return (
            <LinearGradient colors={[GRADIENT_START, GRADIENT_END]} styles={styles.background}>
                <View style={styles.background}>
                    <View style={styles.topBar}>
                        <Ionicon name="ios-menu" size={25} style={styles.menu}/>
                        <Ionicon name="ios-notifications-outline" size={25} style={styles.bell}/>
                    </View>
                    <View style={styles.bottomBar}>
                        <View style={styles.searchBar}>
                            <SearchBar expand={this.state.expandSearch}/>
                        </View>
                        <View style={styles.brandLogo}>
                            <Text> </Text>
                        </View>
                        <View style={styles.askButton}>
                            <Text style={styles.askText}>Ask</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>

        );
    }
}

export default Header;

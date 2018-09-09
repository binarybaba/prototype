import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    compressed: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    magnifyingGlassCompress: {
        flex: 1,
        color: 'white',
        width: 1,
        maxWidth:25
    },
    searchTextCompressed: {
        flex: 1,
        lineHeight:25,
        color: 'white'
    }
});

class SearchBar extends Component {
    state = {
        show: false
    };

    render() {
        return (
            <View style={styles.compressed}>
                <Ionicon name="ios-search" size={25} style={styles.magnifyingGlassCompress}/>
                <Text style={styles.searchTextCompressed}>Search</Text>
            </View>
        );
    }

}
export default SearchBar;

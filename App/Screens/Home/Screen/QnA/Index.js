import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { getQuestions } from './API';
import { PRIMARY_COLOR, RED, VERY_SUBTLE_COLOR, BACKGROUND_COLOR, SUBTLE_COLOR, ALMOST_SUBTLE_COLOR, DARK_TEXT } from './../../../../COLOR';

const styles = StyleSheet.create({
    background: {
      backgroundColor: BACKGROUND_COLOR
    },
    card: {
        backgroundColor: 'white',
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 12,
        paddingLeft: 12,
        marginTop: 20,
        marginBottom: 3,
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 4,
        shadowColor: VERY_SUBTLE_COLOR,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 4.65,
        elevation: 1,
    },
    category:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingBottom: 12
    },
    categoryText :{
        color: VERY_SUBTLE_COLOR,
        fontSize: 10,
        marginTop: 4,
        paddingLeft: 6

    },
    categoryIcon:{
        padding: 4,
    },
    question: {
        color: DARK_TEXT,
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom:12,
        paddingLeft: 26
    },
    rewardDetails: {
        color: ALMOST_SUBTLE_COLOR,
        fontSize: 12,
        width: '50%',
        fontWeight:'bold',
        paddingLeft: 26
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingTop:12,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding:8,
    },
    buttonWithBorder: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding:8,
        borderRightWidth: 1,
        borderRightColor: VERY_SUBTLE_COLOR,
        borderLeftWidth: 1,
        borderLeftColor: VERY_SUBTLE_COLOR,
    },
    icon:{
        paddingLeft: 2,
    },
    iconText: {
        flex: 1,
        alignItems: 'flex-start',
        color: SUBTLE_COLOR,
        paddingLeft:8,
        paddingTop: 2
    }

});

class QnA extends Component {

    state={};

    componentDidMount() {
        getQuestions()
            .then(questions => this.setState(() => ({ questions })));
    }

    render() {
        return !this.state.questions ? null : (
            <View style={styles.background}>
                <FlatList
                    data={this.state.questions}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <View style={styles.category}>
                                <Ionicon name="ios-heart" size={15} color={RED} style={styles.categoryIcon}/>
                                <Text style={styles.categoryText}>{item.category.name}</Text>
                            </View>
                            <Text style={styles.question}>{item.question}</Text>
                            <Text style={styles.rewardDetails}>{`Answer ${item.reward.question} question to get ${item.reward.token} token`}</Text>
                            <View style={styles.buttons}>
                                <View style={styles.button}>
                                    <Ionicon style={styles.icon} name="ios-infinite" size={25} color={PRIMARY_COLOR}/>
                                    <Text style={styles.iconText}>Join</Text>
                                </View>
                                <View style={styles.buttonWithBorder}>
                                    <Ionicon style={styles.icon} name="ios-person-add" size={25} color={SUBTLE_COLOR}/>
                                    <Text style={styles.iconText}>Follow</Text>
                                </View>
                                <View style={styles.button}>
                                    <Ionicon style={styles.icon} name="ios-share" size={25} color={SUBTLE_COLOR}/>
                                    <Text style={styles.iconText}>Share</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        )

    }
}
export default QnA;

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// TODO: Check if date is today if so then change color to indicate as such
const Card = (props) => {
    const { date, routineName } = props;

    return (
        <TouchableOpacity style={styles.cardContainer}>
            <View style={styles.routineContainer}>
                <Text style={styles.routineName} numberOfLines={3}>push</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>monday</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 80,
        height: 130,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F8F8F8",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    routineContainer: {
        flex: 3,
        justifyContent: "center",
    },
    routineName: {
        fontSize: 18,
        color: "#F2A727",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Roboto-Medium"
    },
    dateContainer: {
        flex: .4,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    date: {
        fontSize: 10,
        width: "100%",
        color: "#313030",
        borderTopWidth: .75,
        textAlign: "center",
        borderTopColor: "#313030",
        textTransform: "uppercase",
        fontFamily: "Roboto-Regular"
    }
})

export default Card;
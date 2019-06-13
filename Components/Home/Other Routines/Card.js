import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <TouchableOpacity style={styles.otherRoutinesCardContainer}>
            <Text style={styles.otherRoutinesCardText} numberOfLines={3}>stronglift 5x5</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    otherRoutinesCardContainer: {
        margin: 4,
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F2F2F2",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    otherRoutinesCardText: {
        fontSize: 10,
        color: "#828282",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Roboto-Regular"
    }
})

export default Card;
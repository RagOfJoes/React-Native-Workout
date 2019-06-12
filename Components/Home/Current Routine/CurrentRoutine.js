import React, { Component } from 'react';
import Card from './Card';
import { View, Text, StyleSheet } from 'react-native';

const CurrentRoutine = (props) => {
    return (
        <View style={styles.currentRoutineContainer}>
            <Text style={styles.currentRoutineText}>
                CURRENT ROUTINE
            </Text>
            {/* TODO: Horizontal Scrollview */}
            <Card />
        </View>
    )
}

const styles = StyleSheet.create({
    currentRoutineContainer: {
        height: 170,
        width: "80%",
        marginTop: 40,
        alignSelf: "center",
        // backgroundColor: "red",
        flexDirection: "column",
    },
    currentRoutineText: {
        fontSize: 14,
        color: "#313030",
        borderBottomWidth: .75,
        fontFamily: "Roboto-Medium",
        borderBottomColor: '#D2D2D2',
    }
})

export default CurrentRoutine;
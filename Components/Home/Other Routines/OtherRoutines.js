import React, { Component } from 'react';
import Card from './Card';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OtherRoutines = (props) => {
    return (
        <View style={styles.otherRoutineContainer}>
            <View style={{ width: "80%", height: "100%", justifyContent: "center" }}>
                <View style={styles.otherRoutineTitleRow}>
                    <Text style={styles.otherRoutineTextOne}>OTHER ROUTINES</Text>
                    <TouchableOpacity>
                        <Text style={styles.otherRoutineTextTwo}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.otherRoutineCardsRow}>
                    <Card />
                    {/* <Card />
                    <Card />
                    <Card /> */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    otherRoutineContainer: {
        height: 140,
        width: "100%",
        paddingTop: 25,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#FFF"
    },
    otherRoutineTitleRow: {
        flex: .5,
        flexDirection: 'row',
    },
    otherRoutineTextOne: {
        fontSize: 14,
        color: "#313030",
        marginRight: "auto",
        fontFamily: "Roboto-Medium"
    },
    otherRoutineTextTwo: {
        fontSize: 10,
        color: "#828282",
        marginTop: "auto",
        fontFamily: "Roboto-Regular"
    },
    otherRoutineCardsRow: {
        flex: 3,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default OtherRoutines;
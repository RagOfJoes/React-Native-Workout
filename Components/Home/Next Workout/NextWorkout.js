import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import normalizeText from '../../config/normalizeText';

const NextWorkout = () => {
    return (
        <View style={styles.nextWorkoutContainerStyle}>
            <View style={styles.nextWorkoutBackgroundStyle}>
                <View style={styles.nextWorkoutRow}>
                    <Text style={styles.title} numberOfLines={1}>
                        Next Workout
                    </Text>
                    <Text style={styles.currentWorkout} numberOfLines={1}>
                        push a
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nextWorkoutContainerStyle: {
        height: 170,
        width: '100%',
        marginTop: 50,
        alignItems: "center"
    },
    nextWorkoutBackgroundStyle: {
        width: "80%",
        height: "100%",
        borderRadius: 5,
        flexDirection: 'column',
        backgroundColor: "#303031"
    },
    nextWorkoutRow: {
        margin: 20,
        flexWrap: "wrap",
    },
    title: {
        fontSize: 12,
        marginLeft: 1.5,
        color: "#828282",
        fontFamily: "Roboto-Bold",
        textTransform: "uppercase"
    },
    currentWorkout: {
        fontSize: 30,
        color: "#F2F2F2",
        textTransform: "uppercase",
        fontFamily: "Roboto-Medium"
    }
})

export default NextWorkout;
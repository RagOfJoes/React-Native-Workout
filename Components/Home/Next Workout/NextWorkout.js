import React from 'react';
import Muscle from './Muscle';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// TODO: Fetch current routine and the day's planned workout
// 
const NextWorkout = () => {
    return (
        <View style={styles.nextWorkoutContainerStyle}>
            <View style={styles.nextWorkoutBackgroundStyle}>
                {/* Start Workout Card */}
                <View style={styles.nextWorkoutRow}>
                    {/* Start Workout Title */}
                    <View style={styles.nextWorkoutTitle}>
                        <Text style={styles.title} numberOfLines={1}>
                            Next Workout
                        </Text>
                        <Text style={styles.currentWorkout} numberOfLines={3} adjustsFontSizeToFit>
                            pull a
                        </Text>
                    </View>
                    {/* End Workout Title */}

                    {/* Start Muscle Groups */}
                    <View style={styles.muscleGroup}>
                        <Muscle muscleName="Chest" />
                        <Muscle muscleName="Shoulders" />
                        <Muscle muscleName="Chest" />
                        <Muscle muscleName="Arms" />
                        <Muscle muscleName="Shoulders" />
                        <TouchableOpacity style={styles.interactWorkout}>
                            <Image source={require("../../../assets/StartEdit.png")} style={{ width: 28, height: 34 }} resizeMode="cover" />
                        </TouchableOpacity>
                    </View>
                    {/* End Muscle Groups */}
                </View>
                {/* End Workout Card */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    nextWorkoutContainerStyle: {
        height: 170,
        width: '100%',
        // marginTop: 40,
        alignItems: "center"
    },
    nextWorkoutBackgroundStyle: {
        width: "80%",
        height: "100%",
        borderRadius: 5,
        alignItems: "flex-start",
        flexDirection: 'column',
        backgroundColor: "#313030",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    nextWorkoutRow: {
        height: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    // Start Title
    nextWorkoutTitle: {
        width: 115,
        height: "100%",
        textAlign: "center",
        alignItems: "center",
        borderTopLeftRadius: 10,
        justifyContent: "center",
        borderBottomLeftRadius: 10,
        backgroundColor: "#3A3A3A",
    },
    title: {
        fontSize: 12,
        marginBottom: -5,
        color: "#828282",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Roboto-Regular",
    },
    currentWorkout: {
        fontSize: 18,
        color: "#F2F2F2",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Roboto-Medium"
    },
    // End Title

    // Start Muscle Group
    muscleGroup: {
        flex: 1,
        flexWrap: "wrap",
        paddingVertical: 20,
        flexDirection: "row",
        alignContent: "flex-start"
    },
    interactWorkout: {
        right: 4,
        width: 60,
        height: 60,
        bottom: 15,
        borderRadius: 5,
        alignItems: "center",
        position: "absolute",
        justifyContent: 'center',
        backgroundColor: "#4A4A4A"
    },
    startWorkout: {
        fontSize: 12,
        color: "#F2A727",
        marginTop: "auto",
        textAlign: "center",
        marginBottom: "auto",
        fontFamily: "Roboto-Medium"
    }
    // End Muscle Group

    // Start Current Routine

    // End Current Routine
})

export default NextWorkout;
import React from 'react';
import Muscle from './Muscle';
import { color } from '../../config/colors';
import { fontSize } from '../../config/fontSize';
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
                        <Text style={[fontSize.CARD_TITLE, styles.title]} numberOfLines={1}>
                            Next Workout
                        </Text>
                        <Text style={[fontSize.CARD_CONTENT, styles.currentWorkout]} numberOfLines={3} adjustsFontSizeToFit>
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
                        {/* <Muscle muscleName="Shoulders" /> */}
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
        alignItems: "center"
    },
    nextWorkoutBackgroundStyle: {
        width: "80%",
        height: "100%",
        borderRadius: 5,
        alignItems: "flex-start",
        flexDirection: 'column',
        backgroundColor: color.SECONDARY_DARK,

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
        borderTopLeftRadius: 5,
        justifyContent: "center",
        borderBottomLeftRadius: 5,
        backgroundColor: color.TERTIARY_DARK,
    },
    title: {
        marginBottom: -5,
        color: color.GREY,
        textAlign: "center",
        textTransform: "uppercase",
    },
    currentWorkout: {
        color: color.WHITE,
        textAlign: "center",
        textTransform: "uppercase",
    },
    // End Title

    // Start Muscle Group
    muscleGroup: {
        flex: 1,
        flexWrap: "wrap",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    interactWorkout: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: color.TERTIARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
    // End Muscle Group
})

export default NextWorkout;
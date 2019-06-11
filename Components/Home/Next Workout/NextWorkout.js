import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NextWorkout = () => {
    return (
        <View style={styles.nextWorkoutContainerStyle}>
            <View style={styles.nextWorkoutBackgroundStyle}>
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
                        
                    {/* End Muscle Groups */}
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
        borderRadius: 10,
        alignItems: "flex-start",
        flexDirection: 'column',
        backgroundColor: "#313030"
    },
    nextWorkoutRow: {
        height: "100%",
        flexDirection: "row",
    },
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
        fontSize: 10,
        marginBottom: -5,
        color: "#828282",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Roboto-Medium",
    },
    currentWorkout: {
        fontSize: 25,
        color: "#F2F2F2",
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Roboto-Medium"
    }
})

export default NextWorkout;
import React from 'react';
import Muscle from './Muscle';
import { color } from '../config/colors';
import { Animated, StyleSheet } from 'react-native';

const Menu = (props) => {
    const { action, width, pickedMuscle } = props;

    return (
        action === "Muscles" ?
            <Animated.View style={[styles.exerciseMusclePicker, { width: width.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }), }]}>
                <Muscle containerStyle={styles.muscleContainer} muscleName="Chest" _press={() => pickedMuscle("Chest")} />
                <Muscle containerStyle={styles.muscleContainer} muscleName="Shoulders" _press={() => pickedMuscle("Shoulders")} />
                <Muscle containerStyle={styles.muscleContainer} muscleName="Back" _press={() => pickedMuscle("Back")} />
                <Muscle containerStyle={styles.muscleContainer} muscleName="Abs" _press={() => pickedMuscle("Abs")} />
                <Muscle containerStyle={styles.muscleContainer} muscleName="Arms" _press={() => pickedMuscle("Arms")} />
                <Muscle containerStyle={styles.muscleContainer} muscleName="Legs" _press={() => pickedMuscle("Legs")} />
            </Animated.View>
            :
            // TODO: Create action menu
            null
    )
}

const styles = StyleSheet.create({
    exerciseMusclePicker: {
        left: 0,
        zIndex: 2,
        height: "100%",
        borderRadius: 5,
        overflow: "hidden",
        alignSelf: "center",
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: color.TERTIARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    muscleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Menu;
import React from 'react';
import Muscle from './Muscle';
import { color } from '../config/colors';
import { Animated, FlatList, StyleSheet } from 'react-native';

const muscleData = ["Chest", "Shoulders", "Back", "Abs", "Arms", "Legs"];

const Menu = (props) => {
    const { action, width, pickedMuscle } = props;

    return (
        action === "Muscles" ?
            <Animated.View style={[styles.exerciseMusclePicker, { width: width.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }), }]}>
                <FlatList
                    horizontal
                    data={muscleData}
                    scrollEnabled={false}
                    contentContainerStyle={styles.muscleContainer}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    renderItem={({item}) => <Muscle muscleName={item} _press={() => pickedMuscle(item)} />}
                />
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
        justifyContent: "space-evenly"
    }
})

export default Menu;
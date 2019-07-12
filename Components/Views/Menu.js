import React from 'react';
import Muscle from './Muscle';
import { color } from '../config/colors';
import { fontSize } from '../config/fontSize';
import { View, Text, Animated, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const muscleData = ["Chest", "Shoulders", "Back", "Abs", "Arms", "Legs"];

const Menu = (props) => {
    const { action, width, pickedMuscle, actionPress } = props;

    return (
        action === "Muscles" ?
            <Animated.View style={[styles.exerciseMusclePicker, { width: width.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }), }]}>
                <FlatList
                    horizontal
                    data={muscleData}
                    scrollEnabled={false}
                    contentContainerStyle={styles.muscleContainer}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    renderItem={({ item }) => <Muscle muscleName={item} _press={() => pickedMuscle(item)} />}
                />
            </Animated.View>
            :
            <View style={[styles.defMenuContainer, { flex: .4 }]}>
                {/* <Animated.View style={{ flex: width.interpolate({ inputRange: [0, 1], outputRange: [1, .22] }) }}> */}
                    <TouchableOpacity onPress={actionPress} style={{ flex: .22, borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: color.TERTIARY_DARK }}>
                    </TouchableOpacity>
                {/* </Animated.View> */}

                {/* <Animated.View style={{ flex: width.interpolate({ inputRange: [0, 1], outputRange: [0, .22] }) }}> */}
                    <TouchableOpacity style={{ flex: .22, borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: color.TERTIARY_DARK }}>
                    </TouchableOpacity>
                {/* </Animated.View> */}

                {/* <Animated.View style={{ flex: width.interpolate({ inputRange: [0, 1], outputRange: [0, .22] }) }}> */}
                    <TouchableOpacity style={{ flex: .22, borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: color.TERTIARY_DARK }}>
                    </TouchableOpacity>
                {/* </Animated.View> */}

                {/* <Animated.View style={{ flex: width.interpolate({ inputRange: [0, 1], outputRange: [0, .22] }) }}> */}
                    <TouchableOpacity style={{ flex: .22, borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: color.TERTIARY_DARK }}>
                    </TouchableOpacity>
                {/* </Animated.View> */}
            </View>
    )
}

const styles = StyleSheet.create({
    // Start Default Menu
    defMenuContainer: {
        height: 25,
        marginTop: 10,
        borderRadius: 50,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: color.PRIMARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    defMenuRowTwo: {
        height: 25,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    defMenuText: {
        color: color.WHITE
    },
    // End Default Menu

    // Start Muscle Picker
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
    // End Muscle Picker
})

export default Menu;
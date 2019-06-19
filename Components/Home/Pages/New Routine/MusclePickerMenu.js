import React from 'react';
import { color } from '../../../config/colors';
import { Animated, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Icons
import Abs from "../../../../assets/Abs.png";
import Back from '../../../../assets/Back.png';
import Arms from '../../../../assets/Arms.png';
import Legs from '../../../../assets/Legs.png';
import Chest from '../../../../assets/Chest.png';
import Shoulders from '../../../../assets/Shoulders.png';

const MusclePickerMenu = (props) => {
    const { width, pickedMuscle } = props;
    return (
        <Animated.View style={
            [styles.exerciseMusclePicker,
            {
                width: width.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] }),
            }
            ]}>
            <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center", }} onPress={() => pickedMuscle("Chest")}>
                <Image style={{ width: "60%", height: "60%" }} source={Chest} resizeMode="contain"></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center", }} onPress={() => pickedMuscle("Shoulders")}>
                <Image style={{ width: "60%", height: "60%" }} source={Shoulders} resizeMode="contain"></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center", }} onPress={() => pickedMuscle("Back")}>
                <Image style={{ width: "60%", height: "60%" }} source={Back} resizeMode="contain"></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center", }} onPress={() => pickedMuscle("Arms")}>
                <Image style={{ width: "60%", height: "60%" }} source={Arms} resizeMode="contain"></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center", }} onPress={() => pickedMuscle("Abs")}>
                <Image style={{ width: "60%", height: "60%" }} source={Abs} resizeMode="contain"></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center", }} onPress={() => pickedMuscle("Legs")}>
                <Image style={{ width: "60%", height: "40%" }} source={Legs} resizeMode="contain"></Image>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    exerciseMusclePicker: {
        left: 0,
        zIndex: 2,
        height: "100%",
        borderRadius: 5,
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
    }
})

export default MusclePickerMenu;
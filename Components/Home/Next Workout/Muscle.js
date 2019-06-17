import React from 'react';
import { color } from '../../config/colors';
import Abs from '../../../assets/Abs.png';
import Back from '../../../assets/Back.png';
import Arms from '../../../assets/Arms.png';
import Legs from '../../../assets/Legs.png';
import Chest from '../../../assets/Chest.png';
import Shoulders from '../../../assets/Shoulders.png';
import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const Muscle = (props) => {
    const { muscleName } = props;
    let Muscle = "";

    switch (muscleName) {
        case "Abs":
            return (
                <TouchableOpacity style={styles.muscleContainer}>
                    <Image style={{ width: 35, height: 35 }} resizeMode="cover" source={Abs} />
                </TouchableOpacity>
            )
        case "Back":
            return (
                <TouchableOpacity style={styles.muscleContainer}>
                    <Image style={{ width: 35, height: 35 }} resizeMode="cover" source={Back} />
                </TouchableOpacity>
            )
        case "Arms":
            return (
                <TouchableOpacity style={styles.muscleContainer}>
                    <Image style={{ width: 35, height: 28 }} resizeMode="contain" source={Arms} />
                </TouchableOpacity>
            )
        case "Legs":
            return (
                <TouchableOpacity style={styles.muscleContainer}>
                    <Image style={{ width: 20, height: 33 }} resizeMode="cover" source={Legs} />
                </TouchableOpacity>
            )
        case "Chest":
            return (
                <TouchableOpacity style={styles.muscleContainer}>
                    <Image style={{ width: 35, height: 35 }} resizeMode="cover" source={Chest} />
                </TouchableOpacity>
            )
        case "Shoulders":
            return (
                <TouchableOpacity style={styles.muscleContainer}>
                    <Image style={{ width: 35, height: 35 }} resizeMode="cover" source={Shoulders} />
                </TouchableOpacity>
            )
        case "Empty":
            return (
                <View style={{ flex: 1, margin: 2, height: Dimensions.get("screen").width / 5.75 }} />
            )
        case "Last":
            return (
                <TouchableOpacity style={styles.muscleContainer}>
                    <Image source={require("../../../assets/StartEdit.png")} style={{ width: 28, height: 34 }} resizeMode="cover" />
                </TouchableOpacity>
            )
        default:
            return null;
    }

}

const styles = StyleSheet.create({
    muscleContainer: {
        flex: 1,
        margin: 2,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.TERTIARY_DARK,
        height: Dimensions.get("screen").width / 5.75, // approximate a square

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default Muscle;
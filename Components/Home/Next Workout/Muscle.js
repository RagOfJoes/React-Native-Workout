import React from 'react';
import Abs from '../../../assets/Abs.png';
import Back from '../../../assets/Back.png';
import Arms from '../../../assets/Arms.png';
import Legs from '../../../assets/Legs.png';
import Chest from '../../../assets/Chest.png';
import Shoulders from '../../../assets/Shoulders.png';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

const Muscle = (props) => {
    const { muscleName } = props;
    let Muscle = "";

    switch (muscleName) {
        case "Abs":
            Muscle = <Image style={{ width: 35, height: 35 }} resizeMode="cover" source={Abs} />
            break;
        case "Back":
            Muscle = <Image style={{ width: 35, height: 35 }} resizeMode="cover" source={Back} />
            break;
        case "Arms":
            Muscle = <Image style={{ width: 35, height: 28 }} resizeMode="contain" source={Arms} />
            break;
        case "Legs":
            Muscle = <Image style={{ width: 35, height: 35 }} resizeMode="cover" source={Legs} />
            break;
        case "Chest":
            Muscle = <Image style={{ width: 35, height: 35 }} resizeMode="cover" source={Chest} />
            break;
        case "Shoulders":
            Muscle = <Image style={{ width: 35, height: 35 }} resizeMode="cover" source={Shoulders} />
            break;
        default:
            Muscle = null;
            break;
    }

    // TODO: If no muscle was selected then append an error
    return (
        <TouchableOpacity style={styles.muscleContainer}>
            {Muscle}
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    muscleContainer: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4A4A4A"
    }
})

export default Muscle;
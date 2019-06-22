import React from 'react';
import Abs from "../../assets/Abs.png";
import Back from '../../assets/Back.png';
import Arms from '../../assets/Arms.png';
import Legs from '../../assets/Legs.png';
import Chest from '../../assets/Chest.png';
import Shoulders from '../../assets/Shoulders.png';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';

const Muscle = (props) => {
    const { containerStyle, muscleName, _press } = props;

    switch (muscleName) {
        case "Abs":
            return (
                <TouchableOpacity style={containerStyle} onPress={_press}>
                    <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Abs} />
                </TouchableOpacity>
            )
        case "Back":
            return (
                <TouchableOpacity style={containerStyle} onPress={_press}>
                    <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Back} />
                </TouchableOpacity>
            )
        case "Arms":
            return (
                <TouchableOpacity style={containerStyle} onPress={_press}>
                    <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Arms} />
                </TouchableOpacity>
            )
        case "Legs":
            return (
                <TouchableOpacity style={containerStyle} onPress={_press}>
                    <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Legs} />
                </TouchableOpacity>
            )
        case "Chest":
            return (
                <TouchableOpacity style={containerStyle} onPress={_press}>
                    <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Chest} />
                </TouchableOpacity>
            )
        case "Shoulders":
            return (
                <TouchableOpacity style={containerStyle} onPress={_press}>
                    <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Shoulders} />
                </TouchableOpacity>
            )
        case "Empty":
            return (
                <View style={{ flex: 1, margin: 2, height: Dimensions.get("screen").width / 5.75 }} />
            )
        case "Last":
            return (
                <TouchableOpacity style={containerStyle} onPress={_press}>
                    <Image source={require("../../assets/StartEdit.png")} style={{ width: "60%", height: "60%" }} resizeMode="contain" />
                </TouchableOpacity>
            )
        default:
            return null;
    }

}

export default Muscle;
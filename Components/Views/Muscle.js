import React from 'react';
import Abs from "../../assets/Abs.png";
import Back from '../../assets/Back.png';
import Arms from '../../assets/Arms.png';
import Legs from '../../assets/Legs.png';
import Chest from '../../assets/Chest.png';
import Shoulders from '../../assets/Shoulders.png';
import { View, Image, TouchableOpacity } from 'react-native';

class Muscle extends React.Component {
    shouldComponentUpdate(nextProps, nestState) {
        return false;
    }
    render() {
        const { containerStyle, muscleName, _press } = this.props;
        switch (muscleName) {
            case "Abs":
                return (
                    <View style={containerStyle} onPress={_press}>
                        <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Abs} />
                    </View>
                )
            case "Back":
                return (
                    <View style={containerStyle} onPress={_press}>
                        <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Back} />
                    </View>
                )
            case "Arms":
                return (
                    <View style={containerStyle} onPress={_press}>
                        <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Arms} />
                    </View>
                )
            case "Legs":
                return (
                    <View style={containerStyle} onPress={_press}>
                        <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Legs} />
                    </View>
                )
            case "Chest":
                return (
                    <View style={containerStyle} onPress={_press}>
                        <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Chest} />
                    </View>
                )
            case "Shoulders":
                return (
                    <View style={containerStyle} onPress={_press}>
                        <Image style={{ width: "60%", height: "60%" }} resizeMode="contain" source={Shoulders} />
                    </View>
                )
            case "Last":
                return (
                    <TouchableOpacity style={containerStyle} onPress={_press}>
                        <Image source={require("../../assets/StartEdit.png")} style={{ width: "60%", height: "60%" }} resizeMode="contain" />
                    </TouchableOpacity>
                )
            default:
                return null;
        };
    };
};

export default Muscle;
import React from 'react';
import Abs from "../../assets/Abs.png";
import Back from '../../assets/Back.png';
import Arms from '../../assets/Arms.png';
import Legs from '../../assets/Legs.png';
import Chest from '../../assets/Chest.png';
import Shoulders from '../../assets/Shoulders.png';
import { Image, TouchableOpacity } from 'react-native';

class Muscle extends React.PureComponent {
    render() {
        const { containerStyle, muscleName, _press } = this.props;
        switch (muscleName) {
            case "Abs":
                return (
                    <TouchableOpacity style={containerStyle} onPress={_press}>
                        <Image style={{ width: 35, height: 35 }} resizeMode="contain" source={Abs} />
                    </TouchableOpacity>
                )
            case "Back":
                return (
                    <TouchableOpacity style={containerStyle} onPress={_press}>
                        <Image style={{ width: 35, height: 35 }} resizeMode="contain" source={Back} />
                    </TouchableOpacity>
                )
            case "Arms":
                return (
                    <TouchableOpacity style={containerStyle} onPress={_press}>
                        <Image style={{ width: 35, height: 35 }} resizeMode="contain" source={Arms} />
                    </TouchableOpacity>
                )
            case "Legs":
                return (
                    <TouchableOpacity style={containerStyle} onPress={_press}>
                        <Image style={{ width: 35, height: 35 }} resizeMode="contain" source={Legs} />
                    </TouchableOpacity>
                )
            case "Chest":
                return (
                    <TouchableOpacity style={containerStyle} onPress={_press}>
                        <Image style={{ width: 35, height: 35 }} resizeMode="contain" source={Chest} />
                    </TouchableOpacity>
                )
            case "Shoulders":
                return (
                    <TouchableOpacity style={containerStyle} onPress={_press}>
                        <Image style={{ width: 35, height: 35 }} resizeMode="contain" source={Shoulders} />
                    </TouchableOpacity>
                )
            case "None":
                return (
                    <TouchableOpacity style={containerStyle} onPress={_press}></TouchableOpacity>
                );
            default:
                return null;
        };
    };
};

export default Muscle;
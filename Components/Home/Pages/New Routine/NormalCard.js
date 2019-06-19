import React, { Component } from 'react';
import { connect } from 'react-redux';
import { color } from '../../../config/colors';
import MusclePickerMenu from './MusclePickerMenu';
import { fontSize } from '../../../config/fontSize';
import { Image, View, Easing, Animated, TouchableOpacity, Dimensions, TextInput, StyleSheet } from 'react-native';

// Icons
import Abs from "../../../../assets/Abs.png";
import Back from '../../../../assets/Back.png';
import Arms from '../../../../assets/Arms.png';
import Legs from '../../../../assets/Legs.png';
import Chest from '../../../../assets/Chest.png';
import Shoulders from '../../../../assets/Shoulders.png';

class NormalCard extends Component {

    state = {
        pickedMuscle: ""
    }
    musclePicker = new Animated.Value(0);

    _openMusclePickerAnimation = () => {
        Animated.timing(this.musclePicker, {
            toValue: 1,
            duration: 300,
        }).start();
    }

    _closeMusclePickerAnimation = () => {
        Animated.timing(this.musclePicker, {
            toValue: 0,
            duration: 200,
        }).start();
    }

    renderPickedMuscle = () => {
        switch (this.state.pickedMuscle) {
            case "Chest":
                this._closeMusclePickerAnimation();
                return (
                    <Image style={{ width: "60%", height: "60%" }} source={Chest} resizeMode="contain"></Image>
                )
            case "Shoulders":
                this._closeMusclePickerAnimation();
                return (
                    <Image style={{ width: "60%", height: "60%" }} source={Shoulders} resizeMode="contain"></Image>
                )
            case "Back":
                this._closeMusclePickerAnimation();
                return (
                    <Image style={{ width: "60%", height: "60%" }} source={Back} resizeMode="contain"></Image>
                )
            case "Arms":
                this._closeMusclePickerAnimation();
                return (
                    <Image style={{ width: "60%", height: "60%" }} source={Arms} resizeMode="contain"></Image>
                )
            case "Abs":
                this._closeMusclePickerAnimation();
                return (
                    <Image style={{ width: "60%", height: "60%" }} source={Abs} resizeMode="contain"></Image>
                )
            case "Legs":
                this._closeMusclePickerAnimation();
                return (
                    <Image style={{ width: "60%", height: "60%" }} source={Legs} resizeMode="contain"></Image>
                )
            default:
                this._closeMusclePickerAnimation();
                return null;
        }
    }

    render() {
        return (
            <View style={styles.normalCardContainer}>
                <View style={styles.normalCardRowOne}>
                    <View style={styles.normalCardColOne}>
                        <TouchableOpacity style={styles.exerciseMuscleButton} onPress={() => this._openMusclePickerAnimation()}>
                            {this.renderPickedMuscle()}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.normalCardColTwo}>
                        <TextInput style={[fontSize.CARD_CONTENT, styles.exerciseName]} placeholder="Name" placeholderTextColor={color.GREY} maxLength={20} autoCapitalize="words" />
                    </View>
                    <MusclePickerMenu pickedMuscle={(muscle) => this.setState({ pickedMuscle: muscle })} width={this.musclePicker} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    normalCardContainer: {
        flex: 1,
        width: "90%",
        height: "100%",
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 25,
        flexDirection: "column",
        backgroundColor: color.SECONDARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    normalCardRowOne: {
        flex: 1,
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    normalCardColOne: {
        flex: .25,
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    },
    exerciseMuscleButton: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.TERTIARY_DARK,
        height: Dimensions.get("screen").width / 5.75, // approximate a square

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    normalCardColTwo: {
        flex: .75,
        height: "45%",
        alignItems: "center",
        flexDirection: "row",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: color.TERTIARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    exerciseName: {
        width: "100%",
        color: color.WHITE,
        marginHorizontal: 10,
    },
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(NormalCard);
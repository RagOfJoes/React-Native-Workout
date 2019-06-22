import { connect } from 'react-redux';
import React, { Component } from 'react';
import Muscle from '../../../../Views/Muscle';
import { color } from '../../../../config/colors';
import MusclePickerMenu from './MusclePickerMenu';
import { fontSize } from '../../../../config/fontSize';
import { Image, View, Animated, TouchableOpacity, Dimensions, TextInput, StyleSheet } from 'react-native';

class NormalCard extends Component {
    state = { // local state
        pickedMuscle: ""
    }
    musclePicker = new Animated.Value(1);

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

    // Renders user's picked muscle
    renderPickedMuscle = () => {
        if (this.state.pickedMuscle.length > 0) {
            this._closeMusclePickerAnimation();
            return (
                <Muscle muscleName={this.state.pickedMuscle} containerStyle={styles.exerciseMuscleButton} _press={() => this._openMusclePickerAnimation()} />
            );
        };
        return (
            <TouchableOpacity style={styles.exerciseMuscleButton} onPress={() => this._openMusclePickerAnimation()} />
        );
    };

    render() {
        return (
            <View style={styles.normalCardContainer}>
                <View style={styles.normalCardRowOne}>
                    <View style={styles.normalCardColOne}>
                        {
                            this.renderPickedMuscle()
                        }
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
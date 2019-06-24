import { connect } from 'react-redux';
import React, { Component } from 'react';
import Card from '../../../../Views/Card';
import Menu from '../../../../Views/Menu';
import Muscle from '../../../../Views/Muscle';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import { View, Animated, TouchableOpacity, Dimensions, TextInput, StyleSheet } from 'react-native';

class ExerciseCard extends Component {
    state = { // local state
        isOpen: true,
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
            <Card addContStyle={{ paddingVertical: 15, paddingHorizontal: 25 }}>
                <View style={styles.exerciseCardRowOne}>
                    <View style={styles.exerciseCardColOne}>
                        {
                            this.renderPickedMuscle()
                        }
                    </View>
                    <View style={styles.exerciseCardColTwo}>
                        <TextInput style={[fontSize.CARD_CONTENT, styles.exerciseName]} placeholder="Name" placeholderTextColor={color.GREY} maxLength={20} autoCapitalize="words" />
                    </View>
                    <Menu action="Muscles" pickedMuscle={(muscle) => this.setState({ pickedMuscle: muscle })} width={this.musclePicker} />
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    exerciseCardRowOne: {
        flex: 1,
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    exerciseCardColOne: {
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
    exerciseCardColTwo: {
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

export default connect(mapStateToProps)(ExerciseCard);
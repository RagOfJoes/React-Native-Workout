import Card from '../../../../Views/Card';
import Menu from '../../../../Views/Menu';
import React, { Component } from 'react';
import Muscle from '../../../../Views/Muscle';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import { View, Animated, Dimensions, TextInput, StyleSheet } from 'react-native';

class ExerciseCard extends Component {
    state = { // local state
        isOpen: false,
        pickedMuscle: "None"
    }
    actionMenu = new Animated.Value(0);
    musclePicker = new Animated.Value(0);

    _openActionMenuAnimation = () => {
        Animated.timing(this.actionMenu, {
            toValue: 1,
            duration: 80,
        }).start();
    }

    _closeActionMenuAnimation = () => {
        Animated.timing(this.actionMenu, {
            toValue: 0,
            duration: 40
        }).start();
    }

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

    shouldOpenAction = () => {
        if (this.state.isOpen) {
            this._closeActionMenuAnimation();
        } else {
            this._openActionMenuAnimation();
        }
        this.setState({ isOpen: !this.state.isOpen });
    }

    // Renders user's picked muscle
    renderPickedMuscle = () => {
        this._closeMusclePickerAnimation();
    };

    componentDidMount() {
        this.setState({ pickedMuscle: this.props.Muscle })
    };

    shouldComponentUpdate(nextProps, nextState) {
        const nextMuscle = nextState.pickedMuscle;
        if (this.state.pickedMuscle !== nextMuscle) {
            this.renderPickedMuscle();
            return true;
        }

        return false;
    };

    render() {
        const { props } = this;
        const { Exercise } = props;

        return (
            <Card addContStyle={{ marginVertical: 5, paddingVertical: 15, paddingHorizontal: 25, alignSelf: "center" }}>
                <View style={styles.exerciseCardRowOne}>
                    <View style={styles.exerciseCardColOne}>
                        <Muscle muscleName={this.state.pickedMuscle} containerStyle={styles.exerciseMuscleButton} _press={() => this._openMusclePickerAnimation()} />
                    </View>
                    <View style={styles.exerciseCardColTwo}>
                        <TextInput style={[fontSize.CARD_CONTENT, styles.exerciseName]} defaultValue={Exercise} maxLength={20} autoCapitalize="words" />
                    </View>
                    <Menu action="Muscles" pickedMuscle={(muscle) => this.setState({ pickedMuscle: muscle })} width={this.musclePicker} />
                </View>

                <View style={styles.exerciseCardRowTwo}>
                    <Menu actionPress={() => this.shouldOpenAction()} width={this.actionMenu} />
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    // Start Row One
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
    // End Row One

    // Start Row Two
    exerciseCardRowTwo: {
        flex: .4,
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    // End Row Two
})

export default ExerciseCard;
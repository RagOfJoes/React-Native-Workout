import Menu from '../../../../Views/Menu';
import React, { Component } from 'react';
import Muscle from '../../../../Views/Muscle';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import SwipeableCard from '../../../../Views/SwipeableCard';
import { DeleteAction, AddAction } from '../../Routine/SwipeActions/Actions';
import { View, Text, Animated, Dimensions, TextInput, StyleSheet } from 'react-native';

class ExerciseCard extends Component {
    state = { // local state
        isOpen: false,
        pickedMuscle: "None"
    }

    // Animated Values
    actionMenu = new Animated.Value(0);
    musclePicker = new Animated.Value(0);

    // ActionMenu Actions
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
        const { Exercise, isDeletable, delAction, addAction } = props;

        return (
            <SwipeableCard
                leftAction={(progress, dragX) => {
                    return (
                        isDeletable ?
                            <DeleteAction
                                dragX={dragX}
                                progress={progress}
                                _pressDel={delAction}
                            />
                            : <AddAction
                                isLeft
                                dragX={dragX}
                                progress={progress}
                                _pressAdd={addAction}
                            />
                    )
                }
                }
                rightAction={(progress, dragX) =>
                    <AddAction
                        dragX={dragX}
                        progress={progress}
                        _pressAdd={addAction}
                    />
                }
                containerStyle={
                    {
                        borderLeftWidth: 5,
                        borderRightWidth: 5,
                        flexDirection: "column",
                        justifyContent: "center",
                        borderRightColor: color.GREEN,
                        borderLeftColor: isDeletable ? color.RED : color.GREEN
                    }
                }>
                <View style={styles.exerciseCardRowOne}>
                    <View style={styles.exerciseCardColOne}>
                        <Muscle muscleName={this.state.pickedMuscle} containerStyle={styles.exerciseMuscleButton} _press={() => this._openMusclePickerAnimation()} />
                    </View>
                    <View style={styles.exerciseCardColTwo}>
                        <Text style={[styles.exerciseNameTitle, fontSize.CARD_CONTENT]}>NAME</Text>
                        <TextInput style={[fontSize.CARD_CONTENT, styles.exerciseName]} defaultValue={Exercise} maxLength={20} autoCapitalize="words" />
                    </View>
                    <Menu action="Muscles" pickedMuscle={(muscle) => this.setState({ pickedMuscle: muscle })} width={this.musclePicker} />
                </View>
            </SwipeableCard>
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
        height: "100%",
        marginHorizontal: 10,
        flexDirection: "column",
        justifyContent: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    exerciseNameTitle: {
        flex: .2,
        color: color.GREY
    },
    exerciseName: {
        flex: .25,
        color: color.WHITE,
    },
    // End Row One
})

export default ExerciseCard;
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Card from '../../../../Views/Card';
import Muscle from '../../../../Views/Muscle';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View, Text, FlatList, Animated, TouchableOpacity, Dimensions, TextInput, StyleSheet } from 'react-native';

const DeleteAction = ({ progress, dragX }) => {
    const scale = dragX.interpolate({
        inputRange: [0, 60],
        outputRange: [0, 1],
        extrapolate: "clamp"
    });

    const opacity = dragX.interpolate({
        inputRange: [0, 80],
        outputRange: [0, 1]
    })

    return (
        <Animated.View style={[{ opacity: opacity }, styles.deleteWorkoutRow]}>
            <TouchableOpacity style={{ width: "100%", height: "100%", alignContent: "center", justifyContent: "center" }}>
                <Animated.Text style={[fontSize.CARD_TITLE, { color: color.WHITE, textAlign: "center", transform: [{ scale: scale }] }]}>DELETE</Animated.Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const RightAction = ({ progress, dragX }) => {
    const scale = dragX.interpolate({
        inputRange: [-60, 0],
        outputRange: [1, 0],
        extrapolate: "clamp"
    });

    const opacity = dragX.interpolate({
        inputRange: [-60, 0],
        outputRange: [1, 0]
    })

    return (
        <Animated.View style={[{ opacity: opacity }, styles.rightActionsRow]}>
            <TouchableOpacity style={{ flex: 1, height: "100%", justifyContent: "center", backgroundColor: color.HIGHLIGHT }}>
                <Animated.Text style={[fontSize.CARD_TITLE, { color: color.TERTIARY_DARK, textAlign: "center", transform: [{ scale: scale }] }]}>EDIT</Animated.Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, height: "100%", justifyContent: "center", backgroundColor: color.GREEN }}>
                <Animated.Text style={[fontSize.CARD_TITLE, { color: color.TERTIARY_DARK, textAlign: "center", transform: [{ scale: scale }] }]}>ADD</Animated.Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

// Formats data into a grid
const formatData = (data, numColumns) => {
    let numberOfElements = data.length;
    while (numberOfElements != 6) {
        numberOfElements++;
        if (numberOfElements !== 6) {
            data.push({ Type: "Empty" });
        } else {
            data.push({ Type: "Last" });
        }
    }
    return data;
};

// Formats data into a grid
const formatDataTwo = (data, numColumns) => {
    const fullRows = Math.floor(data.length / numColumns);

    let fillInLastRow = data.length - (fullRows * numColumns);
    while (fillInLastRow != numColumns && fillInLastRow !== 0) {
        data.push({ Type: "Empty" });
        fillInLastRow++;
    }
    return data;
}

class WorkoutCard extends Component {
    // Extracts index from data array and uses as key for muscle
    _keyExtractor = (index) => {
        return index
    };

    render() {
        const { exercises, workoutName, isEditing } = this.props;
        return (
            // <Swipeable containerStyle={{ width: "100%", height: "100%", overflow: "visible" }}
            //     renderLeftActions={(progress, dragX) => <DeleteAction progress={progress} dragX={dragX} />}
            //     renderRightActions={(progress, dragX) => <RightAction progress={progress} dragX={dragX} />}
            // >
                <View style={{ flex: 1, marginBottom: 10, overflow: "visible", justifyContent: "center" }}>
                    <View style={[isEditing ? { height: "100%" } : { height: "70%" }, styles.workoutCardContainer]}>
                        <View style={styles.workoutCardBackground}>
                            {/* Start Workout Card */}
                            <View style={styles.workoutCardRow}>
                                {/* Start Workout Title */}
                                <View style={styles.workoutCardTitle}>
                                    {
                                        isEditing ?
                                            <TextInput style={[fontSize.CARD_CONTENT, styles.title]} placeholder="Day" placeholderTextColor={color.GREY} maxLength={9} autoCapitalize="words" />
                                            :
                                            <Text style={[fontSize.CARD_TITLE, styles.title]} numberOfLines={1}>Next Workout</Text>
                                    }
                                    <TextInput style={[fontSize.CARD_CONTENT, styles.workoutName]} placeholder="Name" placeholderTextColor={color.GREY} defaultValue={workoutName} maxLength={20} autoCapitalize="words" />
                                </View>
                                {/* End Workout Title */}

                                {/* Start Muscle Groups */}
                                <FlatList
                                    numColumns="3"
                                    key={workoutName}
                                    style={styles.muscleGroup}
                                    keyExtractor={this._keyExtractor}
                                    data={isEditing ? formatDataTwo(exercises, 3) : formatData(exercises, 3)}
                                    contentContainerStyle={{ justifyContent: "center", alignContent: "center", padding: 10 }}
                                    renderItem={({ item, index }) =>
                                        <Muscle key={index} containerStyle={styles.muscleContainer} muscleName={item.Type} />
                                    }
                                />
                                {/* End Muscle Groups */}
                            </View>
                            {/* End Workout Card */}
                        </View>
                    </View>
                </View>
            // </Swipeable>
        )
    }
}

const styles = StyleSheet.create({
    workoutCardContainer: {
        width: "100%",
        alignItems: "center",
    },
    workoutCardBackground: {
        width: "90%",
        height: "100%",
        borderRadius: 5,
        alignItems: "flex-start",
        flexDirection: 'column',
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
    workoutCardRow: {
        height: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    // Start Title
    workoutCardTitle: {
        flex: .5,
        maxWidth: 115,
        maxHeight: "100%",
        textAlign: "center",
        paddingVertical: 15,
        alignItems: "center",
        borderTopLeftRadius: 5,
        justifyContent: "center",
        borderBottomLeftRadius: 5,
        backgroundColor: color.TERTIARY_DARK,
    },
    title: {
        color: color.GREY,
        textAlign: "center",
        textTransform: "uppercase",
    },
    workoutName: {
        color: color.WHITE,
        textAlign: "center",
        textTransform: "uppercase",
    },
    // End Title

    // Start Muscle Group
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
    },
    muscleGroup: {
        flex: 1,
        width: "100%",
        alignSelf: "center",
    },
    deleteWorkoutRow: {
        width: 80,
        height: "100%",
        justifyContent: "center",
        backgroundColor: color.RED
    },
    rightActionsRow: {
        width: 120,
        height: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
    },
});

export default WorkoutCard;
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Muscle from '../../../../Views/Muscle';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View, Text, FlatList, Animated, TouchableOpacity, Dimensions, TextInput, StyleSheet } from 'react-native';

const templateData = {
    Name: "",
    Exercises: []
}

const DeleteAction = ({ progress, dragX }) => {
    const opacity = dragX.interpolate({
        inputRange: [0, 65],
        outputRange: [0, 1]
    })

    return (
        <Animated.View style={[{ opacity: opacity }, styles.deleteWorkoutRow]}>
            <TouchableOpacity style={{ flex: 1, height: "70%", alignContent: "center", backgroundColor: color.RED, justifyContent: "center" }}>
                {/* <Text style={[fontSize.CARD_CONTENT, { color: color.WHITE, textAlign: "center" }]}>DELETE</Text> */}
                <Text style={{ fontSize: 35, color: color.WHITE, textAlign: "center" }}>ⅹ</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const RightAction = ({ progress, dragX, _pressEdit, _pressAdd }) => {
    const opacity = dragX.interpolate({
        inputRange: [-65, 0],
        outputRange: [1, 0]
    })
    return (
        <Animated.View style={[{ opacity: opacity }, styles.rightActionsRow]}>
            <TouchableOpacity style={{ flex: 1, height: "70%", justifyContent: "center", backgroundColor: color.HIGHLIGHT }}>
                {/* <Text style={[fontSize.CARD_CONTENT, { color: color.GREEN, textAlign: "center" }]}>EDIT</Text> */}
                <Text style={{ fontSize: 35, color: color.GREEN, textAlign: "center" }}>✎</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_pressAdd} style={{ flex: 1, height: "70%", justifyContent: "center", backgroundColor: color.GREEN }}>
                {/* <Text style={[fontSize.CARD_CONTENT, { color: color.HIGHLIGHT, textAlign: "center" }]}>ADD</Text> */}
                <Text style={{ fontSize: 35, color: color.HIGHLIGHT, textAlign: "center" }}>+</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

// Formats data into a grid
const formatData = (data, numColumns) => {
    let numberOfElements = data.length;
    while (numberOfElements < 6) {
        numberOfElements++;
        if (numberOfElements !== 6) {
            data.push({ Type: "Empty" });
        } else {
            data.push({ Type: "Last" });
        }
    }

    if (numberOfElements >= 6) {
        data[5] = { Type: "Last" };

        for (let i = 6; data.length > 6; i++) {
            data.pop();
        }
    }
    return data;
};

// Formats data into a grid when editing
const formatDataTwo = (data, numColumns) => {
    const fullRows = Math.floor(data.length / numColumns);

    let fillInLastRow = data.length - (fullRows * numColumns);
    for (fillInLastRow; fillInLastRow != numColumns && fillInLastRow !== 0; fillInLastRow++) {
        data.push({ Type: "Empty" });
    }
    return data;
}

class WorkoutCard extends Component {
    // Extracts index from data array and uses as key for muscle
    _keyExtractor = (item, index) => {
        return item.Name
    };

    render() {
        const { exercises, workoutName, isEditing, _pressEdit, _pressAdd } = this.props;
        return (
            isEditing ?
                <Swipeable containerStyle={{ flex: 1, marginBottom: 10, overflow: "visible" }}
                    renderLeftActions={(progress, dragX) => <DeleteAction progress={progress} dragX={dragX} />}
                    renderRightActions={(progress, dragX) => <RightAction progress={progress} dragX={dragX} _pressAdd={_pressAdd} />}
                >
                    <CardContent data={this.props} />
                </Swipeable>
                :
                <CardContent data={this.props} />
        )
    }
}

const CardContent = (props) => {
    const { exercises, workoutName, isEditing } = props.data;
    return (
        <View style={[isEditing ? { flex: 1 } : { flex: .7, }, styles.workoutCardContainer]}>
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
                        style={styles.muscleGroup}
                        keyExtractor={(item, index) => item.Name + index}
                        data={isEditing ? formatDataTwo(exercises, 3) : formatData(exercises, 3)}
                        contentContainerStyle={{ justifyContent: "center", alignContent: "center" }}
                        renderItem={({ item, index }) => {
                            return (
                                <Muscle key={index} containerStyle={styles.muscleContainer} muscleName={item.Type} />
                            )
                        }
                        }
                    />
                    {/* End Muscle Groups */}
                </View>
                {/* End Workout Card */}
            </View>
        </View>
    )
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
        alignSelf: "center",
    },
    deleteWorkoutRow: {
        width: 80,
        height: "100%",
        marginRight: "-5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    rightActionsRow: {
        width: 120,
        height: "100%",
        marginLeft: "-5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default WorkoutCard;